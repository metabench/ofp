// first - wrap a function that creates an observable in mfp.
//  a single function, an observable creator???
//   just with return_type 'observable'

// ofn?
//  probably worth going to fnl to see if there is a newer / better way to define functions that return observables.


// 10/06/2019 - have working implementation, tested on basic case.
//  maybe this module does not need to be that complex. its doing the job so far without all that much code
//  more complexity went within the mfp layer in lang-mini.

// Seems like it will be a platform for vhl.
//  worth writing up soon?

// Treating vhl implementation as larger examples?




// obs_returner???

/*

    could ofp also be used as a standard way to make observables?

    Observable function processing
    Observable functional programming
    Observable functional polymorphism
    Observable function pluralities

    fn(input_obs_or_other, obj_options)
    returns an observable
    that observable has a ._ object (Evented Class)
      for metadata

    // obs.meta(key, value)

// ---- Pluralising Function Processor ----
// ----------------------------------------
// Allows a singular function to multiple times
//  Will allow invarients to be set (such as a DB connection)



// ofp being a pluralising function processor.
//  it returns a function.



*/

// Create an observable function processor from a function to process a single item
// test these more?


// Uses mfp as a platform where necessary.
//  See about widening support from lang grammar?
//  Or have similar / own implementation of grammar here?
//   Or grammar has already been defined through mfp?


const lang = require('lang-mini');
const {get_a_sig, tof, tm, mfp, deep_sig} = lang;
const fnl = require('fnl');
const {prom, obs, obs_prom_arr_item} = fnl;


// Separate from lang.mfp so far. Higher level.



// could make obs easier to use than 'prom'.

// make ofp a really easy way of declaring functions that:

// parameter groups?

// standard ways of giving varient and invarient params.
//  this seems like a very important distinction to make here.


// need rigour and flexibility when defining these invarient types.
//  will get this before so long.
//   should then do more work on function / functionality wrapping.

// Standard Object Templates?
//  Detecting them
//  Detecting them within arrays
//   Detecting them within other things too.



// give invarient types
//  


/*

const eg = () => {
    const eg_params = {
        'invarient': '...',
        'varient': '...'
    }

    const eg2 = {
        invarient_types: '...'
    }
}

*/



// return an observable
// gets defined with a single operation function
// invarient params can be defined.
// varient params can be given as


// not sure about callin with a, sig
//  typescript could have made that obselete now.

// Function running immediate if it's an immediate function on immediately available data
//  That seems like the right way to categorise existing URLs quickly once they are ready


// Combining signature analysis with accepting and returning observable.
//  Takes a single function? Or a few functions for its own hooks?

// Easy facility to wrap a function in an observable where necessary.

// Wrap a single processing function.
// Or split processing functions
//  Ways to return multiple observables.

// Will need to look further into structures of arrays.
//  Maybe do a bit more within vhl?

// receive array, single obj, or obs.
//  apply single function on the item / items / items observed
//  

// Turn a single processing function into an observable multi.
//  Allow multiple params to be accepted.

//  

// Like around the vhl single download function.
//  the fn single itself should maybe return an observable.


// obs-multi function?

// observify-fn


// need a fairly straitforward way to wrap a singular processing async function so that it:
//  returns an observable
//  can take an array (notice array of arrays)
//   nested sigs could help.
//  can take a single obj (specify obj)
//  can take an observable as input




// we give it the fn_single, the single function that applies to a single operation.

//  before running it...
//  we see what params we were given
//  given an observable?
//  given an array?
//  given an array of arrays?
//  given a single object?

// return an observable.
//  which has logging enabled.



// Make this handle both observables as well as dealing with functional polymorphism.

// Some multi-handling functions would (generally) take some params as static / fixed
//  and other params as variable / moving?
//  variable params? range params? multi params?
//  partial multi params?
//  fixed and multi / changing / list / arr / obs params...
//   while a clear way of naming this will help, a clear way of coding it will be even better :)...


// At an earlier stage in the function, will be great to say which parts are the multi param part?
//  Some params could be necessary and the same such as a connection to a db.
//   Others could encompass a range of operations to apply.


// fn_single is for processing a single item.
//  Need to wrap that.
//  A way of saying that the fn_single has got particular param types?

// Definitely need to know which params are the same, which are the array?
//  Or dynamically solve this somehow?

// Also, internal functions could do their branching, and the observable / other wrappers deal with that OK.

// Need to be clear where we:
//  Provide flexibility
//   accept obs, arr or singular.
//  Provide conformity
//   always return observable
//  Require flexibility
//  Require conformity


// options as well.
//  ofp_opts
//   want it so that we can set it so that some parameters are invarient.
//   say they are invarient by type
//   say they are invarient by position
// 
// this needs to handle multiple function calls.
//  needs to give more flexibility, in a very simple to use way, of saying some parameters are invarients, while others are the variables in an array
//  or observable. or other iterable? async iterable?


// Though this facilitates very high level programming, it's low level in some ways here. May have slightly longer code here for performance reasons.
// Want to test, document and write about this soon.

// named functions could be very useful, especially with observables.
//  can give a function a .name property?
//  a ._.name property?

// declare .name, could be done once and conveniently when returning an observable.
// name(obj, str) names an object
// name(obj) gets the object's name.

// seems like going further into functional programming for compression will work well.
//  should run some benchmarks in various places though.
//  want to save benchmarks based on versions.
//   a benchmark standard speed? have an invarient benchmark for comparison each time?
//    anyway....

// 

// want to declare functions with names through obs.
//  can be done because obs returns the fn.

// types:
//  function that returns an observable
//  function that processes an observable

// function that uses multiple observables?

// now that we use functions to create functions, we can name them with more certainty and conciseness.
//  fnl obs function will have this.

// keeping ofp out of obs, fnl, obext for the moment makes sense.

// want to keep these in separate modules for the moment.
//  can bring them all together under lang-tools.
//   they won't be all that big.
//   they will help to make other code small and standard.

// examples and tests of ofp too.
// maybe this could take plurality info?

// define grammar or vocab on this?
//  not so sure about using mfp for this. maybe when mfp works better.


// make mfp more aware of when it's being used for a singular function.
//  store more function vocab info.




// 07/06/19 - Still need to do plenty more work on mfp.
// ----------------------------------------------------!!!
//  mfp provides the polymorphism for the single object function.
//  should have working examples, even tests, of mfp.
//  standard object templates or similar seems to play an important part. 10/06/2019 - have focused more on 'grammar'.
//  defining typed parameters. part of grammar
//  username(string), password(string), user_info([username, password]); done

// Need very clear and unambiguous definitions.
//  Will keep it all within the local scope to begin with.
// 08/06/2019 - Deep signatures seem like an important way to achieve this.
//  Will help to understand function params. Will help to tell what an array is for.
//   Need to tackle and solve array ambiguities.
//   tf is abbreviated tof - returns abbreviated results. done

// 10/06/2019 - Got a seemingly working but incomplete implementation of mfp.
//  Solifidying testing on it before doing more work on ofp?
//   May need to change it later, but still want to test that it still does what it currently can.
//  More work on the examples processing.
//   Need examples to produce results which get saved to disk.
//    A way of marking them as working / expected?
//    Allow multiple versions' output?
//  Calculate how long it takes to do 1000 operations?
//   Some built in benchmarking would be cool.
//    could make metabench module. website too?


// Ofp is a separate module for the moment.
//  Maybe it should be in lang-mini?
//   lang-mini has just had mfp added.

//  possibly do some more with mfp in a few places, like jsgui3?
//   or do more work on ofp now that we have singular functions with flexible params.
//   then return a function that is flexi single and plur.
//    result_type: 'observable' would be a nice thing for other functions to use as a hint.


// making an example using counter would make sense.






//  ofp pluralises such a function.
//   want advanced function features on functions going into ofp.
//    or at least to support them.


// ofp will allow definition of varient and invarient parameters.



// This may also make use of grammar features.
//  May need to move some functionality out of mfp if this needs to use it too.


// Make mfp about wrapping a function in an observable

// Could automatically invoke mfp?

// Want this usefully integrated with mfp.
//  Could even define this with mfp?
//   or could that slow it down?
//  Would be useful to do speed testing before changing to mfp version.

// Work on functional code objectives for this soon.

// make a hex counting observable
//  then make an ofp that wraps toUpperCase.

// observable logging the timing of the 'next' event?
//  or ofp doing that?

// should be cautious now about adding much more functionality at base levels.
//  need to code this so that extra functionality starts at higher levels, can move downward if deemed important.

// also work on vhl functions.
// upgraded eos-live and fnlfs. fnlfs could become obsfs???


// could use mfp for added flexibility.
//  but dont add mfp usage for the sake of it.


// full usage of mfp here would at least make sense here.


// Quite simple so far :)
//  surprisingly little code needed here.
//  hopefully it can stay that way
//   or become more useful still.

//  may be worth keeping this simple,
//   and expanding to other modules.


// simultaneous limit
//  may need that for a downloader and other async functions.


// an obs arrayify.
//  will use it for some functions, like dl, so it can
//   download array of URLs
//   respond to an obs that provides the URLs and download them once they are available.


// remaking the dl function with ofp and stages makes a lot of sense.

//  there may be three levels of observables / event processors?
//   more?

//  need to be thorough with testing
//   integration of examples with jest testing.
//    work on saving to disk with obs etc first?








const ofp = (fn_single, opts) => {
    // This gets applied to a function.
    let _fn_single;
    let _opts;
    // tof that goes straight to abbreviations?

    // tf will give single character types in the future.
    //  tm for type mapping?
    //  tp for type polymorphism?
    //   maybe just call an internal polymorphic function.

    // get this code working so that higher level code works well.
    //  get the params definition from the fn_single?

    // could check the fn sig.
    //  not integrating mfp here makes sense though.

    const t0 = tof(fn_single);
    const t1 = tof(opts);
    // object and function?
    // function and object?
    // function?
    //console.log('ofp arg types [t0, t1]', [t0, t1]);
    //console.trace();
    if (t1 === 'undefined') {
        // no options...?
        _opts = {};
        // only if it's a function?
        if (t0 === 'function') {
            _fn_single = fn_single;
        } else {
            console.trace();
            throw 'NYI';
        }
    } else {
        if (t0 === 'function' && t1 === 'object') {
            _fn_single = fn_single;
            _opts = opts;
        } else if (t1 === 'function' && t0 === 'object') {
            _fn_single = opts;
            _opts = fn_single;
        } else {
            console.trace();
            throw 'NYI';
        }
    }

    //
    // a map of invarient types?

    // tell it how to call the function?
    //  what params to give it?
    //  do want to set up some named functions too.

    // mfp could help with named functions too.
    //  mfp also holds the param types.

    // omfp eventually?
    //  do want a very powerful function wrapper.
    //  a much more modern fp.

    const {invarient_types, name} = _opts;

    //console.log('_fn_single', _fn_single);
    //console.log('_opts', _opts);
    
    //console.log('invarient_types', invarient_types);

    const map_invarient_types = tm(invarient_types);
    //console.log('map_invarient_types', map_invarient_types);

    // need the map of invarient types.
    //  tm function makes sense.
    //  its used a lot, lets give it a shorter name.

    // invarient data types.
    //  ???

    // two sets of parameters...?

    // more tests on lang.mfp first?
    //  I think it's fixed now but more tests would definitely be appropriate.

    // invarient types.
    //  knowing what params the fn takes.

    // need to finish this off so that the ofp, mfp etc functions are working together.
    //console.log('name', name);

    // will assign the function name at some point.
    // no need to stop here?

    // the fn_single may have a name... use that?
    //  use the same params as the fn_single?

    // all params used?
    // variety of function sigs?

    // will need to make reference to that.
    //  

    //console.trace();
    //throw 'stop';

    // return an observable

    // no, it returns a function.
    // that function returns an observable.

    // still need to deal with invarients.
    //  one of the various ways to cut down on code needed to express some things.

    // function and array
    // automatically an mfp function here?

    let fn_res = function() {
        const a = arguments;
        const sig = get_a_sig(a);


        // make this always return an obs for the moment.


        // shallow sig?
        //  just checking for observable, array, or anything else.



        const dsig = deep_sig(a);


        // deep sig instead?

        


        // 

        // need to fix getting abbreviations from types.
        //  upgrade get_a_sig it seems.
        //   if using custom types.
        //    not sure they get loaded properly all the time though through dependencies.

        // checks the type in the params...
        //  but that inner function could take some params.
        //   specify taken params...
        //    and mfp will set that up.
        //     string of params of single function call.
        //      object could be very useful for multiple params
        //       very useful for a fn call, we know it's not an array.

        //console.log('a', a);
        //console.log('ofp fn call sig', sig);

        // 

        //console.log('dsig', dsig);

        // splitting of both the static / fixed / invarient params
        // invarient and varient params.
        //  

        // the function itself will have varient and invarient params.
        //  function to define a function with its params?

        // need to have this in the multi specifying part.
        //  which bits are varient, which are invarient.
        //  mfp is in lang-mini (now).

        // separate out any invarient types.
        //  plural name aliasing?
        //  verb-object function names?
        //   where the system maps the grammar / meaning of the function names?

        // [f,o]

        // more info on the types and plurals will help it do the process.

        // is there one observable param?
        // is there one array param?

        // will need to do various things with declaring invarients too.
        // like currying.

        // this could look into the expected grammar of the function below it?
        
        // for the moment, just operate differently with observables and arrays
        //  simple detection of either.

        // other single item of signature?

        // always trace before stop?

        // Want this to be fairly simple in terms of the observable and the array.

        if (sig === '[O]' || sig === '[a]') {

            console.log('using ofp result observable');

            //if (dsig === 'O') {

            // Observable processing :)

            // create a new observable
            //const o_input = a[0];
            const o_res = obs((next, complete, error) => {
                let input_complete = false;
                const input_queue = [];
                // and work with arrays of items?
                const max_simultaneous = 1; // just for testing.
                let num_executing = 0;

                const process_queue = () => {

                    if (num_executing < max_simultaneous) {
                        // execute it immediately.

                        console.log('pre shift input_queue.length', input_queue.length);

                        const item = input_queue.shift();
                        console.log('post shift input_queue.length', input_queue.length);

                        if (item) {
                            execute(item);
                        } else {
                            // we are complete now. ???
                            //  or work that out elsewhere?

                            // I think it will be complete after an inner complete event.

                            // done?
                            //throw 'NYI';
                        }
                    }


                }
                const execute = item => {
                    console.log('');
                    console.log('queue execute');
                    console.log('num_executing', num_executing);
                    console.log('max_simultaneous', max_simultaneous);
                    console.trace();

                    num_executing++;
                    const res_exec = _fn_single(item);


                    // check that we have an observable from that single function.
                    //  handle other outputs?
                    console.log('pre raise next');
                    // passing an observable through not working... need to fix that in Evented_Class.
                    next(res_exec);
                    // then when it's complete...

                    // The io complete...
                    //  May be a different kettle of fish.

                    //  Maybe do more to detect an observable completing (in the right way).
                    //   Though the stages could complete execution, do wait to wait for the io to be complete.

                    //   Back to single dl test.



                    res_exec.io.on('complete', () => {

                        // really complete?
                        //  wouldn't it still be downloading?

                        console.log('ofp queue item io complete');
                        console.trace();


                        // When it's fully complete?
                        //  Need some kind of fully complete event.
                        //  io-complete?
                        //  fully-complete?
                        // fully complete does make a lot of sense.
                        //  wait until all the output has been produced.

                        // Should not finish executing until its totally complete.
                        //  Get back into event monitoring and distinction for the single dl process.


                        num_executing--;
                        process_queue();
                        if (num_executing === 0 && input_queue.length === 0) {
                            complete();
                        }
                    })
                    // raise an event saying that execution result is here.
                    // and the single function can / should return an observable.
                }

                const enqueue = item => {

                    console.log('item to enque', item);
                    console.trace();

                    if (num_executing < max_simultaneous) {
                        // execute it immediately.
                        execute(item);
                    } else {
                        input_queue.push(item);
                    }
                }
                if (sig === '[O]') {
                    o_input.on('next', data => {
                        // need to run the _fn_single on the data
                        //console.log('_fn_single', _fn_single);
                        //const processed = _fn_single(data);
                        //console.log('processed', processed);
                        //next(processed);
                        enqueue(data);
                    });
    
                    o_input.on('complete', () => {
                        //complete();
                        // when the queue processing is finished....
                        //  
                        input_complete = true;
                        // if there are no items in the queue, then we are really complete.
                        if (input_queue.length === 0) {
                            complete();
                        }
                    });
                    o_input.on('error', err => {
                        //error(err);
                    });
                }
                if (sig === '[a]') {
                    const oarr = a[0];
                    const l = oarr.length;
                    //const arr_res = new Array(l);
                    for (let c = 0; c < l; c++) {
                        //arr_res[c] = _fn_single(oarr[c]);
                        enqueue(oarr[c]);
                    }
                    input_complete = true;
                }




                // if it's an array, enque them all.


                // listen for the param functions...

                // enqueue the data...?
                //  enqueue makes sense when there is a max_simultaneous.


                
            });

            console.log('ofp function wrapper returning an obs');
            return o_res;


            /*
            console.trace();
            throw 'stop';
            */


        } /* else if (sig === '[a]') {





            // return the results as an array
            // don't make it into an observable unnecessarily
            //  ?????

            // we may have a maximum number that can be started simultaneously.
            //  we may want the max simultaneous in the other obs way of doing things.

            // enqueue all of them.




            const oarr = a[0];
            const l = oarr.length;


            //const arr_res = new Array(l);

            for (let c = 0; c < l; c++) {
                //arr_res[c] = _fn_single(oarr[c]);
                enqueue(oarr[c]);
            }

            // 


            return arr_res;
            
            //console.trace();
            //throw 'stop';
        } */ else {
            // just call the inner function with the given params. apply?
            // looks OK so far
            return fn_single.apply(this, a);
        }

        /*
        console.trace();
        throw 'stop';
        */
        // should spot knex, if lang is set up to do so.

        // 'knex, users'?
        // 


        /*
        console.log('typeof fn_single', typeof fn_single);

        // want to be able to spot types that have been loaded into the app.
        console.log('fn_single', fn_single);
        console.log('fn_single', fn_single + '');

        const sig2 = get_a_sig(a[1]);

        console.log('a[0]', a[0]);
        // this is knex.

        console.log('ofp fn call sig2', sig2);
        console.log('a[1]', a[1]);

        // array of arrays.
        //  be able to check for them.
        //  a[a] in sig?
        //   use deeper sigs?

        // that single function itself could be an mfp function (produced by mfp).

        // function and an array...
        //  function to call and an array of params?

        console.trace();
        */
    }

    if (name) fn_res.name = name;

    return fn_res;

    // need to process the input
    //  promise
    //   wait
    //  observable
    //   observe and process the units
    //  array
    //   process the units
    //  js obj / string
    //   process unit

    // Returns an object which can then be passed to compatible functions
    // TypeScript could prove useful for checking function compatibilty.

    // return a new function that executes an observable and returns an observable

    // would be a single observable processor

    // observables could also contain the name of their calling function.
    //  what parameters they were called with
    //  error and benchmarking info

    // future functions will need to tell the type of observables
    //  what type of data do these observables return?
    //   even if the data is within an observable, it would have a type associated with it.

    /*
    return (input, opts) => {
        // check the type of the input

        // we can run the function immediately if it's not an observable

        // could return immediate data too

        // the key is being able to handle data in a function parameter arriving in an observable

        // parameter analysis could be useful here too.

    }
    */
}


module.exports = ofp;

// simple example to start with here.

//  hex counter and to upper case example.
//   may inspire further shorthand for defining the api / grammar.





/*

const dl = ofp(fn_single_download)
*/ 


if (require.main === module) {

    // and type checking / specification?

    // not necessary for the fn to work in many cases, could be best practise.
    //  param_type: 'n'
    //  param_sig?
    //   sig?


    // type conversion function.
    //  possibly make that into a category.

    // could make it ofp too...
    //  should be simple to set up.

    const decimalToHexString = ofp(mfp({
        name: 'decimalToHexString',
        pure: true,
        single: true,
        // sig: 'n', // not implemented sig checking yet or specification like this.
        // may be easier to do this than to specify a grammar with a named parameter that is a number.
        return_type: 'string'
        // say its a hex string? that represents a number?
    }, (number) => {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }
        return number.toString(16).toUpperCase();
    }));

    // then make an observable processor for the counter.

    // to hex...

    // yourNumber.toString(16);

    // multiply by 5 function
    // easier to test to start with


    const sing_x5 = mfp({'single': true}, num => num * 5);
    const ofp_x5 = ofp(sing_x5);


    
    // and x5 hex...
    //  want an ofp hex



    // then try doing x5 to the counter.

    const run_counter = () => {
        let counter = mfp({
            name: 'counter',
            pure: true,
            return_type: 'observable',
            return_subtype: 'number'
        }, () => obs((next, complete, error) => {
            let c = 0;
            const max = 10;
            const delay = 1000;
            const tick = () => {
                if (c < max) {
                    setTimeout(() => {
                        c++;
                        next(c);
                        //next({});
                        tick();
                    }, delay);
                } else {
                    console.log('should raise complete');
                    complete();
                }
            }
            tick();
        }));
    
        const o_counter = counter();
        console.log('!!o_counter', !!o_counter);

            // applying these to a function?
        //  need to work on the calling syntax.
        //  

        // Able to use an observable as its data source.
        let counter_x5 = decimalToHexString(ofp_x5(o_counter));


        // what about applying to the functions?
        //  or not needed / not fitting with the initial idea and spec, don't rush to implement it.



        // and it works!

        // observable processors implemented, at least on a basic level.

        // could get on with the vhl download function.
        //  or apply these in a few other places.


        console.log('counter_x5', counter_x5);

        counter_x5.on('next', data => {
            console.log('counter_x5 data', data);
        });

        //let counter_x5 = ofp_x5(counter); // doesnt work 10/06/2019
        console.log('counter_x5', counter_x5);


        // then use ofp for it.
        //  will know what to do if it gets an array or an observable as the param.
        //  with an array it should act like arrayify.
        //  with an observable it should process that and return its results through an observable

        // the return from ofp would not (always) be wrapped in an observable.
        //  that could become optional.
        console.log('sing_x5(8)', sing_x5(8));
        console.log('ofp_x5(8)', ofp_x5(8));

        console.log('');
    }
    //run_counter();

    // ofp etc will be useful for downloading a variety of urls at once. a few other things.


    const run_array = () => {
        const arr_input = [1, 2, 3, 4, 5];

        console.log('');
        console.log('arr_input', arr_input);
        const arr_x5 = ofp_x5(arr_input);
        console.log('arr_x5', arr_x5);
    }
    run_array();
    
    // works on arrays too now.
    //  could do some work on vhl with these tools?



    // still needs work in reading / processing arrays,

    /*

    const res_x5hex = decimalToHexString(ofp_x5());
    console.log('res_x5hex', res_x5hex);

    */

    // soon this can go into some applications / modules that do some useful things themselves.
    //  while this is useful, its a platform which improves other functionality.





    



    /*

    const single_to_hex = mfp(num => num.toString(16));

    console.log('single_to_hex(4)', single_to_hex(4));

    console.log('5.toString(15)' + (5).toString(16));

    console.log('decimalToHexString(3)', decimalToHexString(3))

    */





}