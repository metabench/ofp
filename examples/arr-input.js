
const lang = require('lang-mini');
const {mfp} = lang;
const ofp = require('../ofp');
// example functions in other files?
//  not right now.

const sing_x5 = mfp({'single': true}, 'n', num => num * 5);
    //const sing_x5 = mfp({'single': true}, num => num * 5);
const ofp_x5 = ofp(sing_x5);
const arr_1_to_5 = [1, 2, 3, 4, 5];



const run_array = () => {
    //console.log('');
    //console.log('run_array');
    //console.log('---------');
    

    //console.log('');
    //console.log('arr_input', arr_1_to_5);

    const arr_x5 = ofp_x5(arr_1_to_5);
    // ofp setting up the keys on the function?
    //  standard function key copying?
    //  keeping it all under _ or meta would help.
    //   _ could even be an evented class.

    // not returning an observable could / would be better?
    //  when there is no need for an observable?
    //   could make it an option, try it.

    // intuitive rules for when it returns an observable?
    //  or should use different rules in this case?

    // possibly ofp should only return an observable, and always be used that way.

    console.log('arr_x5', arr_x5);
    /*
    arr_x5.on('next', data => {
        console.log('arr_x5 data', data);
    });

    arr_x5.on('complete', () => {
        console.log('arr_x5 complete');
    });
    */

    console.log('run_array done');
    console.log('Object.keys(ofp_x5)', Object.keys(ofp_x5));
    return arr_x5;
}
run_array();

