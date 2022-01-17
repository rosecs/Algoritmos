/*
Create a function that compares the 3 arrays and finds any common elements. Print out the common elements.
*/

var values1= ['Apple', 1, true];
var values2 = ['Fries', 2 ,true];
var values3 = ['Mars', 9, 'Apple'];

for (const valuesI of values1) {
    for (const valuesJ of values2) {
        for (const valuesK of values3) {
            if (valuesI === valuesJ ||  valuesI === valuesK || valuesJ === valuesK) {
                console.log(valuesI);
            }
        }
    }
};
