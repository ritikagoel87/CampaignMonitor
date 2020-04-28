/*

8. Link Checker
You have a large bunch of HTML. Inside that HTML are p tags, li tags, table tags, really any and all
kinds of HTML tags. Most importantly there are anchor/link tags.
Write a program to find all of the URLs to which those link tags link and verify that the URLs return a
200 response. In a given chunk of this HTML, we could have anywhere from 0 to 100+ links, so your
solution should handle the case where there are plenty of links.

*/

const fetch = require('node-fetch');
const rp = require('request-promise');
const $ = require('cheerio');

// Checking if the link contains an absolute URL
const _isUrlAbsolute = (currentURL) => (currentURL.indexOf('://') > 0 || currentURL.indexOf('//') === 0);

// Formatting the relative link to obtain an absolute URL
/**
 * Assuming there is no underlying re-directing
 */
const _formattedURL = ( currentURL, pageURL) => {
  if (currentURL === '#') { // if the link is #, it redirects the current page itself
    return pageURL;
  } else if(currentURL.startsWith('../')) { // if the link starts with ../, it looks for the file one folder up the current folder
    pageURL = pageURL.split("/").pop().join("/"); // removing the last folder name from the current url
    currentURL = currentURL.split("/");
    currentURL.shift(); // removing the double dots (..) from the link
    currentURL = currentURL.join("/");
  } else if(currentURL.startsWith('./')) { // if the link starts with ./, it looks for the file in the current folder
    currentURL = currentURL.split("/");
    currentURL.shift(); // removing the single dot (.) from the link
    currentURL = currentURL.join("/");
  }
  return pageURL + currentURL;
};

async function getWorkingURLs(pageURL) {
  const responseHtml = await rp(pageURL).catch(function(err) { // capturing the HTML from the given page link
          //handle error
          console.log("Error parsing URL provided: " + err);
          return [];
  });

  let workingURLs = [];

  const anchorTags = $('a', responseHtml); // extracting all the anchor tags from the retrieved HTML

  for (let i = 0; i < anchorTags.length; i++) {
    let currentURL = anchorTags[i].attribs.href; // accessing the href of the anchor tag
    if(currentURL) {
      if(!_isUrlAbsolute(currentURL)) {
        currentURL = _formattedURL(currentURL, pageURL); // formatting the URL to get an absolute URL
      }
      const currentResponse = await fetch(currentURL, { mode: 'cors' }); // fetching response from the link URL
      workingURLs.push(currentResponse);
    }
  }

  await Promise.all(workingURLs); // ensuring all the Promises are fulfilled

  // Filtering out the responses having status 200 and capturing the corresponding URL
  return workingURLs.filter(response => response.status === 200).map( response => response.url);
}

/**
 * Exmaples showing the working of the above
*/ 

getWorkingURLs('https://www.google.com')
.then( urls => console.log({urls, count: urls.length}) );
// Returns 30 working links

getWorkingURLs('https://ritikagoel87.github.io/ritika-goel/')
.then( urls => console.log({urls, count: urls.length}) );
// Returns 5 working links
