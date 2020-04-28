/*

7. Write a function which combines an array of objects, grouped by a key you provide (this key will
correspond to a key found in the objects. The function will index the new object with the value of
those keys.

*/

const arrangeBy = key => sourceArray => {
    let obj = {};
    sourceArray.forEach(value => {
        if (key in value) { // if the key we are looking for is present in the object
            const currentKey = value[key];
            
            if (!obj.hasOwnProperty(currentKey)) { // if the key does not exist in the resulting object
                    obj[currentKey] = [value]; // create a new key
                return;
            }
            
            obj[currentKey].push(value); // push the current value in the array
        }
    });

    return obj;
};

module.exports = arrangeBy;