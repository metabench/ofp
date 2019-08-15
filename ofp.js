// 06/07/2019 - Will delete loads of comments, blank space.
//  Have got various other parts working nicely, this will require just a bit more work, some clarification will help too.
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

Automatic pluralisation
Detection: when called, find any args that correspond to the singular version.

// And be able to call it with any of the params made as plural.
// Detect which the pluralised argument is.
*/

// 06/09/2019
//  Will improve this for function calls with different pluralised parameters.

// Pluralising getting a bit more complicated and flexible.
// Handling multiple args.
// Making use of grammar (to have access to both single and plural type formats)

// arr_indexes_of_args_given_as_plural_but_inner_only_accepts_single
//  ok for a local variable name! will minify.

// be able to handle polymorphism on the inner function too.

// use the grammar to find the single forms.
//  then match the sig against the single form (to find it)
//  then call the single version with the pluralisation provided by the input to the function call.
//   seems like a somewhat signigicant further programming step...?
//    want the required functionality (most of the code) within grammar, so flexible and on a lower level, usable for other functions and mechanisms.

// grammar.single_forms_sig(item);
//  Yes, the signature of single forms definitely makes sense in terms of an interpretation stage.

//  look for the single forms sig when calling the pluralised function.
// grammar.single_forms_sig
const lang = require('lang-mini');
const {get_a_sig, tof, tm, mfp, deep_sig, each, tf} = lang;
const fnl = require('fnl');
const {prom, obs, obs_prom_arr_item} = fnl;

// Always return an observable with this?
//  Makes sense, and if we want different functionality we could use a different function.

// This sets up a singular to plural function call system.
//  As flexibly as reasonably possible.

// 11/07/2019 - ofp has got somewhat larger and more complex to intelligently handle the possibilities.
//  not actually all that big.
//  likely to encapsulate / abstract some of the functionality / requirements here.

// a function transformer function.
//  maybe some kind of system to declare them?

const ofp = (fn_single, opts) => {
    // This gets applied to a function.
    let _fn_single;
    let _opts;
    const t0 = tof(fn_single);
    const t1 = tof(opts);
    let grammar;
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
    // wasn't grammar in the opts?
    //console.log('Object.keys(_opts)', Object.keys(_opts));
    //console.log('Object.keys(_fn_single)', Object.keys(_fn_single));
    // interesting things are now within fn._ object.
    //console.log('fn_single', _fn_single);
    // Will it always have ._ object?
    //  Not always.

    if (_opts.grammar) {
        grammar = _opts.grammar
    } else {
        if (_fn_single._ && _fn_single._.grammar) {
            grammar = _fn_single._.grammar;
        }
    }
    //grammar = _opts.grammar || _fn_single._.grammar;
    //console.trace();
    const {invarient_types, name} = _opts;
    const map_invarient_types = tm(invarient_types);
    // will always have _ object?
    let map_sigs;
    if (_fn_single._) {
        map_sigs = _fn_single._.map_sigs;
    }

    //const map_sigs = _fn_single._.map_sigs;
    //console.log('_fn_single', _fn_single);
    //console.log('map_sigs', map_sigs);
    //console.trace();
    //throw 'stop';
    // so if the function has been identified as 'single'?

    let get_sig, get_single_forms_sig;
    if (grammar) {
        get_sig = item => grammar.sig(item);
        get_single_forms_sig = item => grammar.single_forms_sig(item);
    } else {
        get_sig = deep_sig;
        // a single forms sig function that is not within the grammar.
    }
    //console.log('*** !!grammar', !!grammar);
    let fn_res = function() {
        const a = arguments;
        const sig_d0 = get_sig(a, 0);
        const sig_d1 = get_sig(a, 1);

        // Will want to call the specific function specified in the signature map of functions.
        //  ??? _fn_single
        //   rather than just _fn_single?
        // use _fn_single for the moment.
        //  will use mfp or whatever polymorphism exists there.

        // Not so sure its best to get a deeper signature now.

        console.log('');
        console.log('calling ofp function');
        console.log('--------------------');
        console.log('ofp fn call sig_d0', sig_d0);
        // not so sure we always need sig d1.
        console.log('ofp fn call sig_d1', sig_d1);
        //console.log('!!grammar', !!grammar);

        console.log('Object.keys(_fn_single)', Object.keys(_fn_single));
        console.log('Object.keys(_fn_single._)', Object.keys(_fn_single._));
        let mode_async = false;



        // could be always true if we have an async_single_fn

        // need to set it to async mode on the proper occasion(s).




        let mode_plural = false;
        let num_args_to_pluralise = 0;
        let idxs_to_pluralise = [];
        //  could have own incrementor system here, like combo.
        let ds_new_args;

        let map_idxs_to_pluralise;

        // Not so sure this one gets used.
        //let arr_idxs_of_arr_args = [];

        // the indexes of all arguments that are arrays.
        //  may be useful. not so sure though.



        let multiple_single_call_args_from_plural;

        //let fn_to_call; // Set the function that will be called once we have recognised it.
        //   recognise it during the sense_model_plan stage.
        const _ = _fn_single._ || {};

        if (_.async === true) mode_async = true;

        //console.log('mode_async', mode_async);





        const sense_model_plan = () => {
            // find arguments to pluralise
            console.log('');
            console.log('ofp call sense_model_plan');
            console.log('-------------------------');
            console.log('map_sigs', map_sigs);
            //console.trace();
            console.log('');


            // Acting in the same way whether it's running as sync or async?
            //  Seems so for the moment :)

            if (map_sigs) {
                //console.log('_fn_single.map_sigs', _fn_single.map_sigs);
                // get the single version of the function call sig...?
                //console.log('!!_.grammar', !!_.grammar);
                //  this is the preparation stage.
                // could create the sigs with the pluralised functions?
                // Internal function may have .async true
                // not sure why async property isnt showing up...
                //console.log('_.async', _.async);
                //console.log('_fn_single', _fn_single);
                //console.log('!!grammar', !!grammar);



                if (grammar) {
                    // Check for standard arg match first...?
                    // Only do this if we don't have an arg match already?
                    // Single forms sigs may be improved with generic array types and their sigs.
                    sf_sig = get_single_forms_sig(a);
                    // Will change following code so that it doesn't enque.
                    //  This stage is about deciding how to act, setting what will happen next.
                    //  Will be able to look at variables in between stages, and see what's going to happen from that.
                    //console.log('');
                    // Check for a standard match first.
                    //  That would make it go in simple sync mode (I presume).
                    //console.log('sf_sig', sf_sig);
                    //console.log('');
                    // detect any sig matches...
                    //  only if the sig is usable is it worth doing the customised pluralised function call.
                    //   so identify if there is a singularised match.
                    const has_singularised_match = !!map_sigs[sf_sig];
                    //console.log('has_singularised_match', has_singularised_match);

                    if (has_singularised_match) {
                        // see which of the params need to be singularised / pluralised
                        const arr_params_given_as_plural_required_as_single = (new Array(a.length));
                        // the two split sigs
                        let s_sf_sig = sf_sig.split(',');
                        let s_sig = sig_d0.split(',');
                        // the level 0 sig?
                        //  level 1 sig?
                        //console.log('s_sf_sig', s_sf_sig);
                        //console.log('s_sig', s_sig);
                        //num_args_to_pluralise = 0;
                        //let idxs_to_pluralise = [];
                        each(s_sf_sig, (singularised_sig_item, c) => {
                            arr_params_given_as_plural_required_as_single[c] = s_sf_sig[c] !== s_sig[c]
                            if (s_sf_sig[c] !== s_sig[c]) {
                                num_args_to_pluralise++;
                                idxs_to_pluralise.push(c);
                            }
                        });
                        //console.log('arr_params_given_as_plural_required_as_single', arr_params_given_as_plural_required_as_single);
                        //console.log('num_args_to_pluralise', num_args_to_pluralise);
                        //console.log('idxs_to_pluralise', idxs_to_pluralise);
                        // and the number of the params that need to be pluralised.
                        //  only handle one of them for the moment.
                        //  otherwise it would make for multiple combinations, more complex.
                        if (num_args_to_pluralise === 1) {
                            // can produce the variety of new arguments.
                            // go through the list of possible arguments in plural.
                            //  so far not reading the plural values out of an observable.
                            const plural_arg = a[idxs_to_pluralise];
                            multiple_single_call_args_from_plural = [];
                            mode_plural = true;
                            each(plural_arg, (plural_arg_item, c) => {
                                //console.log('');
                                //console.log('processing plural_arg_item', plural_arg_item);
                                //console.trace();
                                //console.log();
                                const singularised_args_arr = [];
                                each(a, (arg, c2) => {
                                    c2 = parseInt(c2, 10);
                                    if (c2 === idxs_to_pluralise[0]) {
                                        //console.log('plural_arg_item', plural_arg_item);
                                        //console.log('**** pre push singularised_args_arr', singularised_args_arr);
                                        singularised_args_arr.push(plural_arg_item);
                                        //console.log('**** post push singularised_args_arr', singularised_args_arr);
                                    } else {
                                        singularised_args_arr.push(arg);
                                    }
                                    //console.log('singularised_args_arr.length', singularised_args_arr.length);
                                });
                                //console.log('singularised_args_arr.length', singularised_args_arr.length);
                                //console.log('singularised_args_arr', singularised_args_arr);
                                ds_new_args = get_sig(singularised_args_arr);
                                multiple_single_call_args_from_plural.push(singularised_args_arr);
                                // set it to plural mode too
                                //  new args sig.
                                //   can recognise plural forms of named types with their plural name.
                                //ds_new_args = deep_sig(singularised_args_arr);
                                //console.log('ds_new_args', ds_new_args);
                                // an array of the new args???
                                // nice!!!
                                // no enqueuing here.
                                //enqueue.apply(null, singularised_args_arr);
                                // queue completing too quickly?
                                //  need further delay for more itemed to be enqueued?
                                //   could be that if nothing gets queued for a second...
                                //    for 100ms?
                                //console.log('singularised_args_arr not (yet) enqueued - need to set the right variable(s) so the act() stage does its job properly.');
                                //  This is still within the setup stage.
                                //   Still, we will have better info on which args we can use here.
                                // Probably only a small error.
                                //  Need to fix the arguments and calling system.
                            });
                            // do a multi function call...
                            //  using an array
                            //  will return an observable.
                            // loop through the possible values....
                            // Worth using a generalised / otherwise encapsulated version of enqueue.
                            // Could create the call params as an array.
                            //  however, want ofp to be able to deal with more than 1 param properly.
                            // invarient params...
                            //  varient params...
                        } else {
                            console.trace();
                            throw 'Pluralisation of more than 1 args not supported (yet).';
                        }
                    }
                } else {
                    // Single form signatures may be possible if it looks into what arrays contain.
                    //  Grammar likely makes matching better.


                    //  Signatures that indicate arrays of type eg a<n> would be very helpful.
                    //   Not sure it's needed right now to get this to work...


                    // plurals_as_single_sig?
                    //  so it looks into the arrays' internal types/

                    // sig_with_arrays_matching_internal_types_as_singular
                    //  so will detect the inner types of the array
                    //  create a singular form signature.
                    //   think we have the map object already though....
                    //    not quite, but can build it up in the code above.

                    //  and only when the arrays share an internal type.


                    // Not got a grammar, but do pluralisation anyway, or try it.
                    //  need to look into the types within arrays in the signature.
                    //   use them to detect if its an array of the right arg types.

                    // go through the arguments where we have been given an array.
                    //  see if we identify all the items in the array are the same type.

                    // Checking against multiple sigs allowed...
                    //  Best to check against the map.

                    // Maybe will be more limited when it doesn't have the grammar.
                    //  Seems worth limiting it to arrayifying one arg only?

                    // Could be worth trying more with different examples.

                    const map_arg_idxs_arr_with_same_internal_types = {};
                    // map_pluralised_sigs
                    //const map_available_sigs_to_array_plural_sigs // ???

                    // no it turns single items into an array?

                    //  Really want to use singularised sigs.
                    //  map of singularised sigs to the plural sigs
                    //   and vice versa

                    // can't do this get single forms sig based on the grammar.
                    // need to go through the available sigs and see where we have an array instead of a singular item.

                    // See if we can change one of the single items, in any of the sigs to the array.

                    // go through each of the sigs.
                    //  come up with versions where any single one of them changes to an array.

                    // worth seeing how many arrays we have been given in the args.
                    //  then see if changing any of the required params to an array would then correspond with the sig we now have.
                    //console.log('not using a grammar, have a map_sig.');
                    //console.log('Object.keys(map_sigs)', Object.keys(map_sigs));
                    //console.log('ofp fn call sig_d0', sig_d0);
                    // not so sure we always need sig d1.
                    //console.log('ofp fn call sig_d1', sig_d1);
                    const arr_provided_arr_args_idxs = [];
                    //  also find positions where changing it to the plural form will mean it can run as plural.
                    // or go through the l0 sig
                    let s_sig_d0 = sig_d0.split(',');
                    //console.log('s_sig_d0', s_sig_d0);
                    const map_arr_privided_idxs = {};
                    // Looping through the parameters we have been given.
                    let arr_st_sig = [];
                    // and work out which indexes get pluralised...
                    //  

                    // Completely singularising the sig may not be what's required.
                    //  What about when some args are accepted / required as arrays anyway?
                    //   For each accepted signature, can have a list of the indexes that already expect an array.

                    const arr_idxs_to_singularise_for_singularised_sig_idxs = [];
                    // but singularise all such arrays???
                    //  seems worth trying.
                    //   not sure its always the best test.

                    each(s_sig_d0, (abbr, c) => {

                        // create a map of pluralised sigs too.
                        //  some / much of this will / should be done in the function call setup.

                        if (abbr === 'a') {
                            arr_provided_arr_args_idxs.push(c);
                            map_arr_privided_idxs[c] = true;
                            // See if all of the internal items are of the same type / sig
                            //  and if so, keep track of what they are.
                            const provided_arg = a[c];
                            // and this will be an array.
                            //  go through it to get the type if they are all the same
                            let same_arg_inner_sig = false;
                            each(provided_arg, (arg_inner_item, c, stop) => {
                                const arg_inner_sig_d0 = get_sig(arg_inner_item, 0);

                                if (same_arg_inner_sig) {
                                    if (same_arg_inner_sig !== arg_inner_sig_d0) {
                                        same_arg_inner_sig = false;
                                        stop;
                                    }
                                } else {
                                    same_arg_inner_sig = arg_inner_sig_d0;
                                }
                            });

                            //console.log('same_arg_inner_sig', same_arg_inner_sig);

                            if (same_arg_inner_sig) {
                                map_arg_idxs_arr_with_same_internal_types[c] = same_arg_inner_sig;
                                arr_st_sig.push(same_arg_inner_sig);
                                arr_idxs_to_singularise_for_singularised_sig_idxs.push(c);
                            } else {
                                arr_st_sig.push('a');
                            }
                        } else {
                            arr_st_sig.push(abbr);
                        }
                    });

                    //console.log('arr_st_sig', arr_st_sig);
                    const st_sig = arr_st_sig.join(',');
                    //console.log('st_sig', st_sig);

                    // singularly typed sigs.
                    // Can check the st_sig against the available sigs.

                    //  Could be as simple as that.
                    //   Well, at least preparing the function call.

                    //   Then would need to do actual pluralisation.
                    //    Working out how to do the pluralisation is the most important thing here.

                    //  Working out which args to pluralise.
                    //   Likely that the next parts wont be so necessary.
                    //    The singular forms are possible by checking internal array type.

                    if (map_sigs[st_sig]) {

                        //console.log('have found a sig match for the singularised signature:', st_sig);
                        //console.log('called with sig:', sig_d0);
                        //console.log('arr_idxs_to_singularise_for_singularised_sig_idxs', arr_idxs_to_singularise_for_singularised_sig_idxs);

                        if (arr_idxs_to_singularise_for_singularised_sig_idxs.length === 1) {
                            idxs_to_pluralise = arr_idxs_to_singularise_for_singularised_sig_idxs;
                            mode_plural = true;

                            // don't just want true in the map...
                            //  use the internal sig to fn map.

                            //fn_to_call = map_sigs[st_sig];

                            // can come up with the pluralised version of the function call.
                            //  does seem worth checking how to pluralise / arrayify more than one arg at once.

                            // possibly, likely with the combo function.
                            //   ignoring other fields in the combo function...
                            
                            // worth creating the various args to call with here.

                        } else {

                            console.log('arr_idxs_to_singularise_for_singularised_sig_idxs', arr_idxs_to_singularise_for_singularised_sig_idxs);

                            console.trace();
                            throw 'NYI';

                        }


                        // so we can prepare the function call, with multiple parameters, by making a combo array with all those indexes???

                        //  gets a bit complex with arrayifying lots of params.

                        //  go through each of the arrayified params...?
                        //   use the combo function to get the params unarrayified?
                        //    and have combo ignore some of the arrays, the params that are requested as arrays...?
                        // this part will really be about preparing the part that does the calling.

                        // prepare the array of args?
                        //  so for all of the args that have been pluralised in that call...

                        // the combo function seems like it will do the job....
                        //  specify expections, it args that are expected as arrays?

                        // which of the args here have changed...

                        // Could be enough preparation processing right now.
                        //throw 'stop';

                        // Need improved detection of async inner function.

                    } 

                    // else error?

                    const old_attempt = () => {



                        // Want to come up with the signatures of pluralised function calls.
                        //  Likely that this could be set up previously.

                        // Signatures that include generic types eg a<n> would help greatly for this.
                        //  It would be another level (of complexity), below ofp.

                        // Generic signatures would appear in lang-mini.

                        // For the moment, we probably don't need generic signatures.
                        //  Using them though, would provide clearer and cleaner logic here.

                        // Want to come up with arrayified signatures...
                        //  Signatures with generic types would allow this with precision.

                        // Worth figuring out how to call the function now.
                        //  More encapsulation of this stuff would likely help.
                        // But for the moment - get it working!!!.
                        //  indexes_for_sig_to_process_as_arr could be enough.

                        console.log('arr_provided_arr_args_idxs', arr_provided_arr_args_idxs);

                        // then go through signatures in the map.
                        //  turning these available signatures into those that accept arrays.
                        //   this could have been done a bit earlier.

                        // unlike with specific plurals in a grammar, any singular object could be turned into an array.
                        //  need grammars for more specific array recognition.

                        // all arguments in each of the available sigs...

                        // changing any / all of them to plural, if given an array.

                        // for each of the available sigs...
                        //  come up with sigs that turn any single items into plural.

                        // or go through the sig keys?

                        const map_single_abbreviations = {
                            o: true,
                            n: true,
                            s: true,
                            b: true,
                            f: true,
                            B: true // buffer
                        }

                        let c = 0;

                        const map_sigs_to_arrayified_arg_idxs = {};
                        // no, the arg indexes which would be arrayified.
                        const map_arrayified_sigs_arrayified_arg_idxs = {};

                        each(map_sigs, (istrue, sig) => {
                            console.log('sig', sig);
                            // see if any of the items in the array can be pluralised?

                            const s_sig = sig.split(',');
                            console.log('s_sig', s_sig);
                            // see which of them can be pluralised, and match position
                            // 
                            //  Single items in the available signature can be pluralised to arrays
                            //   (or observables?)

                            //  Come up with the pluralised arrangements for all of the map sigs
                            //  With every possibly param being plural?

                            //  Lets try just having one plural param possible.
                            //   or two?
                            //  Can get one or more combinations.

                            //  Not so sure about going for many different possible ways to pluralise the function call.
                            //  If there is just one arg, it's simple case.
                            // Find the number of args, given as plural, that do not correspond to an item given as singular.

                            // compare ssig item with the item in the sig we have
                            //  sig d0 called with

                            // see how many array args we have been given in place of a non-array arg.
                            //  there will be a maximum of how many we can turn into an array

                            // want to find the lowest number of args for any map sig that would need to be processed as an array.
                            // provided array, but dont have an array

                            const indexes_for_sig_to_process_as_arr = [];
                            console.log('map_arr_privided_idxs', map_arr_privided_idxs);
                            let arrayified_sig = '';
                            each(s_sig, (item, c) => {
                                if (c > 0) {
                                    arrayified_sig = arrayified_sig + ',';
                                }
                                // But specifically test it's an array of numbers?
                                //  That really does make the most sense.
                                //   Detecting plural types for arrays.
                                // Would be the most automatic and most intelligent.
                                //  Further on getting the type of an Object?
                                //  a<n> for example?

                                // Does get more complex...
                                //  Do want to test that the array contains all items of the correct type, since we have been given a type.
                                // Possibly further convenitions on reading / detecting an array's item's type (when all the same type) would help a lot.

                                // An array with an applied constraint?
                                //  Provides further food for though about this kind of arg arrayification.

                                // Detecting the types inside an array (and saying they are one type) does seem important.
                                //  Not currently implemented that well / directly.
                                //  We have Typed Arrays already.
                                //   These being POJO typed arrays?
                                //   Use array constraints?
                                //   Typed POJO Arrays.
                                //   ty_arr..

                                //  Typed POJO arrays does make the most sense.
                                //   They could likely do with thier abstractions, detection systems, and use in signatures.

                                // Not sure about breaking backwards compatibility?
                                //  As in changing the signatures provided by existing functions.

                                // Advanced sig?
                                //  Detailed Sig?

                                // Going into the details of the specified type of a POJO array would be very useful.

                                // Advanced sig makes the most sense.
                                //  Then likely to switch over to it for many things.
                                //   Would mean plural types dont need to be given a name
                                //   Eg named a<username>

                                // That type of definition both for specifying and recognising will be veey useful.
                                //  a<n>
                                //  a<n5>?
                                //  a<5n>?
                                //   Better or matching when we have an arrayified parameter.

                                // detailed_sig?
                                // advanced_sig?

                                // A whole bunch more possibilities for getting signatures?
                                //  Possibly deep_sig could handle this by having in-between

                                // ie 1.5 means it looks into types within arrays.

                                // Checking for the types within arrays, and recognising them, is definitely a good way to get the right function calls.
                                //  array all matching types property...?

                                // if it's a single item, we can make a version with it pluralised.

                                //  however, not so sure about such combinations.
                                console.log('c', c);
                                if (map_arr_privided_idxs[c]) {
                                    arrayified_sig = arrayified_sig + 'a';
                                    console.log('s_sig_d0[c]', s_sig_d0[c]);
                                    // look at the required / available sig
                                    if (s_sig[c] === 'a') {
                                        // have an array in the same places in both the provided and required sigs.
                                    } else {
                                        // This arg is one that could be processed as an array.
                                        // check its the right type....
                                        console.log('');
                                        console.log('map_arg_idxs_arr_with_same_internal_types[c]', map_arg_idxs_arr_with_same_internal_types[c]);
                                        // and check if that's the same type as what's required here....
                                        console.log('s_sig[c]', s_sig[c]);
                                        console.log('');

                                        if (map_arg_idxs_arr_with_same_internal_types[c] === s_sig[c]) {
                                            indexes_for_sig_to_process_as_arr.push(c);
                                        }
                                    }
                                } else {
                                    arrayified_sig = arrayified_sig + item;
                                }
                            });
                            console.log('indexes_for_sig_to_process_as_arr', indexes_for_sig_to_process_as_arr);
                            console.log('arrayified_sig', arrayified_sig);
                            // want to get the whole arrayified sig.
                            //  seems best to build it back up

                            //map_arrayified_sigs_arrayified_arg_idxs[]
                            // 
                            //  applying within one of the provided sigs.
                            

                            // Based on this very function call I think.
                            map_sigs_to_arrayified_arg_idxs[sig] = indexes_for_sig_to_process_as_arr;






                            // But only check if it matches the array internal type?

                            // likely could precalculate this / these :)

                            // then if there is just one of them...
                            //  worth making a map of which items in the sig would need to be turned into an array.
                            c++;
                        }); // <-- Going through each of the map_sig items.

                        console.log('map_sigs_to_arrayified_arg_idxs', map_sigs_to_arrayified_arg_idxs);
                        // and the arrayified sigs to the arrayification indexes
                        // then check to see if the sig provided is available here
                        console.log('sig_d0', sig_d0);
                        // but look inside this to see its item type?

                        //  make a single form signature by using the knowledge of what's inside any array.
                        //   but know that its a transformed single form signature, useful for comparison and this part.

                        //if (map_sigs_to_arrayified_arg_idxs[sig_d0]) {
                        //    console.log('ofp prep stage - we have a match to enable arrayifying the function call');

                        //}

                        console.log('map_arg_idxs_arr_with_same_internal_types', map_arg_idxs_arr_with_same_internal_types);

                        // then if the same internal type of an arg matches the required param, we can pluralise on that field.
                        // list of indexes to pluralise on....

                        // having the same internal types is a big plus.
                        //  go through that, seeing if the internal types match with the / a required type.
                        //   This needs to support multiple callable fn sigs.

                        // see which of the supported functions would be supported if any of their args were replaced with a plural version, as known to be supported by the definiton.

                        // create a map of pluralisable args?
                        // we want to know / have map of:

                        //  sigs as plural, with matching inner types to whats been given, with single items replaced with array in the same places where an array has been given with that matching type.


                        // go through each of the sigs it accepts...???
                        //  go through the sig of args used
                        //   see if any of the arrays there correspond to single types...

                        // params given as single types.
                        //  singularised arrays (all of them?) when an accepted sig has a single type.


                        // This is made somewhat more complicated because of multiple possible accepted sigs.
                        //  Better to pre-process them as well...
                        //   And specific type arrays (good name for them?) would have their own signature such as a<n> which can be recognised.


                        // for the moment, go through the provided sig.
                        //  turn the arrays there into their single type if they have one.











                        // is map_sigs_to_arrayified_arg_idxs enough now?

















                        throw 'stop';




                    }


                }
            } else {

                // What case is this?
                //  Simplest case?
                
            }


            // Can only do this on the function call, I think.
            //  its based on the provided args and sig.


            map_idxs_to_pluralise = {};

            each(idxs_to_pluralise, idx => {
                map_idxs_to_pluralise[idx] = true;
            });
            //console.log('map_idxs_to_pluralise', map_idxs_to_pluralise);


        }
        // That bit is just for processing wildcards so far?
        //  Need to intgrate it back into simpler function execution with pluralisation.
        const act = () => {
            // and will act in different ways according to what's been sensed * modelled.
            // Hopefully we have got the nessary info to make the function call(s)



            // iterate args function here would help.


            // iterate_singularised_args...
            //  and that can be used by both sync and async mode.

            // Could get back to testing the sync mode x5 example for this.

            //  iteration....







            const iterate_singularised_args = (cb_args) => {

                if (idxs_to_pluralise.length === 1) {
                    // easy enough to prepare the different arg versions
                    // and will come up with a new arg set each time.
                    // go through the normal args?
                    const arr_arg = a[idxs_to_pluralise[0]];
                    each(arr_arg, (arr_arg_item, i_arr_arg) => {

                        //console.log('arr_arg_item', arr_arg_item);
                        //console.log('i_arr_arg', i_arr_arg);

                        // come up with new arg set. as in a single function call.
                        const single_call_arr_args = [];
                        //console.log('i_arr_arg', i_arr_arg);
                        // go through the normal args....
                        // 

                        each(a, (given_arg, i_given_arg) => {
                            i_given_arg = parseInt(i_given_arg, 10);
                            //console.log('i_given_arg', i_given_arg);
                            //console.log('idxs_to_pluralise[0]', idxs_to_pluralise[0]);

                            if (idxs_to_pluralise[0] === i_given_arg) {
                                single_call_arr_args.push(arr_arg_item);
                            } else {
                                single_call_arr_args.push(given_arg);
                            }
                            // And may as well do the function call here, rather than building up the whole collection of all args used, just use these args no.
                            // use _fn_single
                            //console.log('fn_to_call', fn_to_call);

                            //console.log('single_call_arr_args', single_call_arr_args);
                            //console.log('single_call_arr_args.length', single_call_arr_args.length);
                            //console.trace();

                            //throw 'stop';
                            // ok... seems like its working now :)
                        });

                        //console.log('single_call_arr_args', single_call_arr_args);
                        //console.log('single_call_arr_args.length', single_call_arr_args.length);

                        cb_args(single_call_arr_args);
                        
                        // go through the args given...
                        //   ???
                        //  and if it's the arr_arg we use the one from here...
                        //  so that way it substitues.
                        // go through the normal args here....
                    });

                } else {
                    console.log('unsupported idxs_to_pluralise.length', idxs_to_pluralise.length);

                }
            }


            const do_async = () => {
                //console.log('ofp call do_async');

                //console.log('idxs_to_pluralise', idxs_to_pluralise);

                // seems like we can / should ignore / not use these for the moment.
                //console.log('arr_idxs_of_arr_args', arr_idxs_of_arr_args);
                // should have been set?

                //console.trace();
                //console.log('ofp call act async pre create obs res.');


                // Iterate through the singularised / produced args.

                //  Then enqueue each of those function calls.


                // Will of course return an observable as the result.




                // Will / should have the same internal loop as the array system when all of the pluralising args are array and none are observable.

                //  Should be easy enough arg iteration with new arg creation...
                ///  Maybe use some code from the combos function, or use it / use a version with a combo callback.

                // iterate_args...?

                // iterate_singularised_args...
                //  or it could be an observable itself???

                // basically really need to get this done OK, and soon.

                //  will do the same param getting as with async (for the moment)
                //   will of course need to handle observable args at some point (soon).


                //throw 'stop';


                let o_res = obs((next, complete, error) => {

                    let input_complete = false;
                    const input_queue = [];
                    // and work with arrays of items?
                    const max_simultaneous = 1; // just for testing.
                    let num_executing = 0;


                    const process_queue = () => {
                        if (num_executing < max_simultaneous) {
                            // execute it immediately.
                            //console.log('pre shift input_queue.length', input_queue.length);
                            const item = input_queue.shift();
                            //console.log('post shift input_queue.length', input_queue.length);
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
                    let is_complete = false;

                    const execute = item => {
                        //console.log('');
                        //console.log('queue execute');
                        //console.log('num_executing', num_executing);
                        //console.log('max_simultaneous', max_simultaneous);
                        //console.trace();
                        num_executing++;
                        // And the item could be an arguments object.
                        //  So that way, we can manage calling with multiple arguments.
                        // May change to only queueing arguments object.
                        //const res_exec = _fn_single(item);
                        //console.log('execute call');
                        //console.log('pre apply fn');

                        //console.log('pre apply item', item);
                        //console.trace();

                        // Maybe it's been getting the sigs wrong??? not sure how.

                        //console.log('');
                        //console.log('pre _fn_single.apply');
                        const res_exec = _fn_single.apply(null, item);
                        //console.log('post _fn_single.apply');
                        //console.log('');

                        // then after the exec...


                        // will it return an observable?
                        //  not so sure about that.
                        //  the single version won't necessarily return an observable???
                        //console.log('pre raise next');
                        // passing an observable through not working... need to fix that in Evented_Class.
                        next(res_exec);
                        //console.log('res_exec.io', res_exec.io);
                        //console.log('res_exec', res_exec);
                        // only if we get an observable back....
                        const tres_exec = tf(res_exec);
                        //console.log('tres_exec', tres_exec);
        
                        if (tres_exec === 'O') {
                            // not the io complete?
                            //  will it always raise the io complete event?
        
                            //console.log('!!res_exec.io', !!res_exec.io);
                            // a specific waiting property if the io is still waiting?
                            // anything about recognising ongoing io?
        
                            // io.complete?
                            // io.waiting.
        
                            // Observables need a bit more clarity on their completion status.
                            //  Some maybe won't be about io.
        
                            // observable status?
                            //  separate from 'complete', we may want to know when its completely complete
                            //  in other situations its not an issue.
        
                            // raise io complete when the observable is complete if there is not ongoing io in what it's returning.
                            //  another little feature in observable.
        
                            res_exec.io.on('complete', () => {
                                console.log('res_exec.io complete');
                                // really complete?
                                //  wouldn't it still be downloading?
                                //console.log('ofp queue item io complete');
                                //console.trace();
                                
                                num_executing--;
                                process_queue();
                                if (num_executing === 0 && input_queue.length === 0) {
                                    complete();
                                }
                            })
                        } else {
                            // no need to wait, it's complete immediately.
                            num_executing--;
                            process_queue();
                            // only say its complete once....
                            setTimeout(() => {
                                if (num_executing === 0 && input_queue.length === 0) {
                                    // probably not yet.
                                    //  may still have items to enqueue.
                                    //  a way of saying that the enqueuing is done?
        
                                    if (!is_complete) {
                                        complete();
                                    }
                                    is_complete = true;
                                }
                            }, 0);
                        }
                        // raise an event saying that execution result is here.
                        // and the single function can / should return an observable.
                    }
        
                    // could use function() and arguments?
                    // could enqueue the whole arguments object.
                    //  then use apply?
                    //  or would the ...args array work OK?
                    //   and know we have always enqueued the array of arguments.
                    //    so will need to do function apply unless other trickery?
                    // will enqueue the args!
                    // probably dont use the queue system when we produce the result syncronously.
                    // async: true option meaning it always returns the async result.
                    //  or have it defined in the function definition.
                    //  support more info on the function call in mfp (&grammar)?

                    // Enqueing an array?
                    //  Maybe need better processing of all params within an array?

                    // Or enqueue the arguments object, not an array?
                    //  Or better to apply enqueue with said array?

        
                    const enqueue = function(item) {
                        const a = arguments;
                        //console.log('enqueue');
                        //console.log('item to enque', item);

                        // enqueue the arguments rather than the item?
                        //  maybe this is where some probs are coming from?
                        
                        //console.trace();
                        //console.log('num_executing', num_executing);
                        //console.log('max_simultaneous', max_simultaneous);
                        // maybe dont want simultaneous exec with args given as an array?
                        //  maybe it will help.
                        if (num_executing < max_simultaneous) {
                            // execute it immediately.
                            //console.log('executing immediately');
                            //console.trace();
                            execute(a);
                            //console.log('post exec from enqueue');
                            // and has execution finished?
                        } else {
                            //console.log('putting in queue');
                            input_queue.push(a);
                            //console.log('input_queue.length', input_queue.length);
                        }
                    }

                    // Let's iterate through the singularised args to use....
                    //  and enqueue the function calls.

                    iterate_singularised_args(arr_args => {
                        //console.log('arr_args', arr_args);

                        // and will enqueue each of them.
                        //  applying enqueue could be better???
                        //   soving a bug right now.
                        //   need better processing of an array as a single param as if it's the fn args.
                        //    maybe only if it finds the right sig / grammar matches?
                        //enqueue(arr_args);

                        // OK, this makes it work :)

                        enqueue.apply(null, arr_args);
                    });





                    // Will need to deal with different types of pluralised args in async mode.
                    //  May need to take observables as well as arrays and handle them differently.

                    // For the moment, possibly only make it pluralise one parameter....?
                    //  This part definitely needs to be more advanced now.


                    // Look for array params
                    // Look for obs params.

                    // Possibly this obs fn call system needs a fairly substantial upgrade.
                    //  Identifying the array params too could maybe be improved / upgraded.
                    //   Some lower level code below it could work pretty well.


                    // As things stand, the args are going to get enqueued when they are available.

                    // May be worth looking in the sync processing part to be what can be abstracted out of there.







                    /*

                    if (sig === '[O]') {
                        o_input.on('next', data => {
                            // need to run the _fn_single on the data
                            //console.log('_fn_single', _fn_single);
                            //const processed = _fn_single(data);
                            //console.log('processed', processed);
                            //next(processed);
                            // enqueue multiple params at once...
                            //  enqueuing an arguments object should work.
                            enqueue(data);
                        });
                        o_input.on('complete', () => {
                            //complete();
                            // when the queue processing is finished....
                            input_complete = true;
                            // if there are no items in the queue, then we are really complete.
                            if (input_queue.length === 0) {
                                complete();
                            }
                        });
                        o_input.on('error', err => {
                            //error(err);
                        });
                    } else {
                        throw 'NYI';
                    }
                    */






                    // Now returning an array result when the function operates in sync mode.
                    /*
                    const old = () => {
                        if (sig === '[O]' || sig === '[a]') {
                            if (sig === '[a]') {
                                // Possibly don't return an observable in this case?
                                // Would make a lot of sense because its not making the result more complex unnecessarily.
                                //  Extra complexity comes from ofp functions sometimes not returning an observable.
                                // If the function executes syncronously then it can all be produced at once.
                                const oarr = a[0];
                                const l = oarr.length;
                                //const arr_res = new Array(l);
                                for (let c = 0; c < l; c++) {
                                    //arr_res[c] = _fn_single(oarr[c]);
                                    enqueue(oarr[c]);
                                }
                                input_complete = true;
                            }
                        } else {
                            //console.log('sig is not an observable or array, so will run as single.'); // ?????????
                            //  now doing more intelligent param pluralisation system.....
                            
                            // still has transformation according to grammar?
                            //  may be best to have that handled elsewhere, with ofp not doing much here.
                            
                            // May need to pluralise???
                            console.log('!!_fn_single', !!_fn_single);
                            //console.log('tf(fn_single)', tf(fn_single));
                            //console.log('fn_single', !!fn_single);#
                            // Now at this point try some more complex arguments reprocessing
                            //  Want to see what the inner function accepts...
                            console.log('Object.keys(_fn_single)', Object.keys(_fn_single));
                            // look at the grammar.
                            //  see if we can get a single form signature from the grammar.
                            if (_fn_single.map_sigs) {
                                console.log('_fn_single.map_sigs', _fn_single.map_sigs);
                                // get the single version of the function call sig...?
                                console.log('!!_fn_single.grammar', !!_fn_single.grammar);
                                if (_fn_single.grammar) {
                                    console.log('pre _fn_single.grammar.single_forms_sig(a)');
                                    let sf_sig = _fn_single.grammar.single_forms_sig(a);
                                    // and the non single forms sig.
                                    let sig = _fn_single.grammar.sig(a);
                                    console.log('');
                                    console.log('sf_sig', sf_sig);
                                    console.log('');
                                    // detect any sig matches...
                                    //  only if the sig is usable is it worth doing the customised pluralised function call.
                                    //   so identify if there is a singularised match.
            
                                    const has_singularised_match = !!_fn_single.map_sigs[sf_sig];
                                    console.log('has_singularised_match', has_singularised_match);
                                    if (has_singularised_match) {
                                        // see which of the params need to be singularised / pluralised
                                        const arr_params_given_as_plural_required_as_single = (new Array(a.length));
                                        // the two split sigs
                                        let s_sf_sig = sf_sig.split(',');
                                        let s_sig = sig.split(',');
                                        console.log('s_sf_sig', s_sf_sig);
                                        console.log('s_sig', s_sig);
                                        let num_args_to_pluralise = 0;
                                        let idxs_to_pluralise = [];
            
                                        each(s_sf_sig, (singularised_sig_item, c) => {
                                            arr_params_given_as_plural_required_as_single[c] = s_sf_sig[c] !== s_sig[c]
                                            if (s_sf_sig[c] !== s_sig[c]) {
                                                num_args_to_pluralise++;
                                                idxs_to_pluralise.push(c);
                                            }
                                        });

                                        console.log('arr_params_given_as_plural_required_as_single', arr_params_given_as_plural_required_as_single);
                                        console.log('num_args_to_pluralise', num_args_to_pluralise);
                                        console.log('idxs_to_pluralise', idxs_to_pluralise);
                                        // and the number of the params that need to be pluralised.
                                        //  only handle one of them for the moment.
                                        //  otherwise it would make for multiple combinations, more complex.
            
                                        if (num_args_to_pluralise === 1) {
                                            // can produce the variety of new arguments.
            
                                            // go through the list of possible arguments in plural.
                                            //  so far not reading the plural values out of an observable.
            
                                            const plural_arg = a[idxs_to_pluralise[0]];
            
                                            // then create the arg versions....
                                            // array of them? 
                                            //  lets enqueue them immediately.
                                            // need to do this differently.
                                            //  different structure.
                                            // for each plural arg...
                                            //  each item
                                            // put together an array of the params that will be used.
                                            //  will do individual function calls on these.
            
                                            each(plural_arg, (plural_arg_item, c) => {
                                                console.log('');
                                                console.log('processing plural_arg_item', plural_arg_item);
                                                console.trace();
                                                console.log();
                                                // create the new arg array...?
                                                //  put it in an array? get the arguments object?
                                                // putting in an array definitely seems best - easiest here at least.
                                                //console.log('plural_arg_item', plural_arg_item);
                                                // arr_idxs_of_arr_args

                                                const singularised_args_arr = [];
                                                // then go through each of the args we have
            
                                                // Change each so that with an arguments object it iterates them better / properly
                                                //  Returning numeric key, not string key.
            
                                                each(a, (arg, c2) => {
                                                    c2 = parseInt(c2, 10);
                                                    //console.log('')
                                                    // have an argument the fn was called with.
                                                    //console.log('c2', c2);
                                                    //console.log('idxs_to_pluralise[0]', idxs_to_pluralise[0]);
                                                    if (c2 === idxs_to_pluralise[0]) {
                                                        //console.log('plural_arg_item', plural_arg_item);
                                                        //console.log('**** pre push singularised_args_arr', singularised_args_arr);
                                                        singularised_args_arr.push(plural_arg_item);
                                                        //console.log('**** post push singularised_args_arr', singularised_args_arr);


            
                                                    } else {
                                                        singularised_args_arr.push(arg);
                                                    }
                                                    //console.log('singularised_args_arr.length', singularised_args_arr.length);
                                                });
                                                console.log('singularised_args_arr.length', singularised_args_arr.length);
                                                // Not splitting up the plural properly!!!

                                                // the localised depp sig?
                                                //  not so sure about that.
                                                //  may be better to use local deep sig

                                                //let ds_new_args = deep_sig(singularised_args_arr);
                                                //console.log('using deep_sig - look into using grammar.sig through local sig');

                                                //console.log('ds_new_args', ds_new_args);
                                                // nice!!!
                                                enqueue.apply(null, singularised_args_arr);
                                                // queue completing too quickly?
                                                //  need further delay for more itemed to be enqueued?
                                                //   could be that if nothing gets queued for a second...
                                                //    for 100ms?
                                                console.log('singularised_args_arr enqueued');
                                                // Probably only a small error.
                                                //  Need to fix the arguments and calling system.
                                            });
            
                                            // do a multi function call...
                                            //  using an array
                                            //  will return an observable.
            
                                            // loop through the possible values....
                                            // Worth using a generalised / otherwise encapsulated version of enqueue.
            
                                            // Could create the call params as an array.
                                            //  however, want ofp to be able to deal with more than 1 param properly.
                                            //  
                                            
                                            // invarient params...
                                            //  varient params...
                                        } else {
                                            console.trace();
                                            throw 'NYI';
                                        }
                                    }
                                    // find which of the sig items need pluralisation.
                                    // an array that says which of the params need to get pluralised.
                                    // and look for the single forms...
                                    // which params are accepted as single but given as plural.
                                    //
                                }
                            } else {
                                console.log('the single function has no .map_sigs');
                                console.trace();
                                // enqueue it if it's just single function call?
                                // Or just run the single function?
            
                                //  ofp not doing much here?
                                //   or do what else?
                                //return _fn_single.apply(null, a);
                                const call_res = _fn_single.apply(null, a);
                                // the type of the call_res...
                                //  may need to wait for an observable to complete?
                                //  for its io to complete?
            
                                const tcr = tf(call_res);
                                console.log('tcr', tcr);
                                if (tcr === 'O') {

                                    console.trace();
                                    throw 'NYI';

                                    // best to return the obs as the res???
                                    // passing everything through?
            
                                    //  that way a .io .info or .meta or ._ would help to transfer the reference to all of this metadata.
                                    // .meta does make sense.
                                    //  branding-wise too.
                                    // *
                                    //call_res.on((evt_name, evt) => {
                                    //    //console.log('');
                                    //    //console.log('evt_name', evt_name);
                                    //    //console.log('evt', evt);
                                    //    o_res.raise(evt_name, evt);
                                    //})
                                    //* /
                                    //return call_res;
                                    //o_res = call_res;
                                } else {
                                    // when the result object is an observable...?
                                    //  wait for io complete?
            
                                    // get its result and provide that as the result?
            
                                    console.log('');
                                    console.log('pre raise ofp complete');
                                    complete(call_res);
                                }
                                // Not sure about this...
                                //  Should probably pass on all events from the observable as this ofp's result?
                                // Want ofp to be transparent (where suitable) when it's not required to do much.
                                // if it's an observable or evented class, pass all results through?
                                // or be able to return this very observable?
                            }
            
                            console.trace();
                            //throw 'NYI';
                        }
                    }

                    */
                })
                return o_res;
            }
    
            const do_simple = () => {
                //console.log('ofp call do_simple');
                //
                // ok, this works nicely enough now.
                // simple function call path too.
                return _fn_single.apply(null, a);
            }
            // and only pluralise when the inner function is not expecting an array?
            // Not so convinced about sync results in some cases, such as when dealing with async inner function.
            //  Worth detecting if the inner function is async.
            //  

            // but it is likely to need to do async operations.
            //  the observable object should indicate that.

            // Won't do this when the single inner function is async.


            //  Will use same iteration system / loop for both sync and async pluralisation.
            //   Would need to watch out for obs input of course...
            //    Handling them both together...?




            const do_sync_single_arr_plural = () => {
                //console.log('ofp call do_sync_single_arr_plural');



                // much like an arrayified call.
                //  just one array given as the params.
                //  more complex sync arrayified?
                //   may be necessary.
                // more complex arg passing
                // then pluralise (with combos) every one of the plural params
                //  (but only support 1 for the moment).
                // returns an array of the results.
                //  an array alongside the params given?
                //   not so sure its needed but it could be an option.
                // which params have been pluralised?
                //  get the new version of all the params?
                //console.log('idxs_to_pluralise', idxs_to_pluralise);

                //console.log('arr_idxs_of_arr_args', arr_idxs_of_arr_args);

                // the indexes as observable args will help in async mode.


                //console.log('multiple_single_call_args_from_plural', multiple_single_call_args_from_plural);
                //throw 'stop';
                // May need to be async anyway?
                //  Not sure....
                // If any return a promise, can wait...
                //  And have a maximum number of them going at once.

                // May be nice to do the pluralisation iteration here?
                //  Could iterate from different side as well.
                //   May be better / more intuitive.
                //   Could be small sum to do in the middle.
                // Getting this able to handle multiple arg pluralisation would work quite nicely.
                //  Also alongside observable arguments too?

                // Seems like it could be a fair bit more work to fully flesh this out.

                // Pre-prepared signatures for when arrays are supplied?

                //  Function to go through array / list / args
                //   substitution for arrays or observables in places?

                // OK, a fairly short and simple function right now.


                // iterate through args, with callback.
                //  through modified to array args, with callback.

                // Maybe chill for an hour and get back to it...

                //  See about moving more to the prep/smp stage where it's usable here and in async mode.

                const res = [];
                // go through each of the pluralised args...?
                // Doing it with multiple different args to pluralise...?
                //console.log('idxs_to_pluralise', idxs_to_pluralise);
                // a map of idxs to pluralise...

                // do this on prep?

                // fn prep
                // call prep

                //  should already have the function to call.

                // Some kind of stack and iteration method.
                //  Like in combo
                //  Could use a combo with callback function for this.
                //   For the moment, doing it with a single pluralised arg will be good enough.



                
                // Encapulating this args pluralisation as its own fn would help here.


                

                iterate_singularised_args(arr_args => {
                    // then do the fn call here immediately.
                    //console.log('arr_args', arr_args);

                    // apply with those args....

                    res.push(_fn_single.apply(null, arr_args));

                });

                //throw 'stop';


                






                /*
                each(multiple_single_call_args_from_plural, arr_args => {
                    res.push(_fn_single.apply(null, arr_args));
                });
                */



                return res;




                /*
                const plural_arg = a[arr_idxs_of_arr_args[0]];
                console.log('plural_arg', plural_arg);

                //const res = [];

                each(plural_arg, (plural_arg_item, c) => {
                    // construct the new different singule form arguments
                    // copy the normal args...?
                    const singularised_args_arr = [];
                    // then go through each of the args we have

                    // Change each so that with an arguments object it iterates them better / properly
                    //  Returning numeric key, not string key.

                    each(a, (arg, c2) => {
                        c2 = parseInt(c2, 10);
                        console.log('c2', c2);
                        //console.log('')
                        // have an argument the fn was called with.
                        //console.log('c2', c2);
                        //console.log('idxs_to_pluralise[0]', idxs_to_pluralise[0]);
                        if (c2 === arr_idxs_of_arr_args[0]) {
                            //console.log('plural_arg_item', plural_arg_item);
                            //console.log('**** pre push singularised_args_arr', singularised_args_arr);
                            singularised_args_arr.push(plural_arg_item);
                            //console.log('**** post push singularised_args_arr', singularised_args_arr);

                        } else {
                            singularised_args_arr.push(arg);
                        }
                        //console.log('singularised_args_arr.length', singularised_args_arr.length);
                    });
                    console.log('singularised_args_arr', singularised_args_arr);
                    res.push(_fn_single.apply(null, singularised_args_arr));

                    // then call it with this singularised_args_arr
                    //  apply it!

                    console.log('singularised_args_arr.length', singularised_args_arr.length);
                    // call with those arguments.
                });
                */

                return res;
                //throw 'NYI';
            }
            //console.log('mode_plural', mode_plural);
            //console.log('mode_async', mode_async);


            if (!mode_plural && !mode_async) {
                // simple mode. single call.
                //console.log('pre do_simple');
                return do_simple();
            } else if (mode_plural && !mode_async) {
                // sync plural mode

                

                console.log('pre do_sync_single_arr_plural');
                return do_sync_single_arr_plural();
            } else if (mode_async) {
                // assuming plural too for the moment.
                //console.log('pre do_async');
                //  async plural.

                return do_async();
            }
        }

        sense_model_plan();
        //console.log('post sense_model_plan');
        //throw 'stop';

        // Definitely getting closer to working now.
        //  Get the plural mode calling with a single arrayified param working....

        // Could be another 1hr of coding...?
        //  Worth having an index of all args given which have an
        //   observable
        //   array

        // Would be a useful part of prep.




        //console.log('ofp fn call post mp');
        //console.log('num_args_to_pluralise', num_args_to_pluralise);
        //console.log('ds_new_args', ds_new_args);
        //console.log('arr_idxs_of_arr_args', arr_idxs_of_arr_args);
        //console.log('idxs_to_pluralise', idxs_to_pluralise);
        //console.log('arr_idxs_of_arr_args', arr_idxs_of_arr_args);
        //console.log('multiple_single_call_args_from_plural', multiple_single_call_args_from_plural);
        // maybe best not to get all the args right now?

        //console.trace();
        //throw 'stop';

        //console.log('ofp call pre act');
        return act();

        /*
        if (sig === '[O]') {
            mode_async = true;
            mode_plural = true;
        } else if (sig === '[a]') {
            mode_plural = true;
        }
        */

        // Want this to handle some more complex arrayification and intelligent multi function calls...
        //  likely to require more code written / customised for the do_sync_plural


        const fn_old = () => {
            console.trace();
            throw 'stop';


            
            // construct observable outside of having checked the function sig?

            // worth creating the observable res here?

            // need to improve the queue and execute with multiple parameters at once.

            // Simplest call type it seems.
            //  Probably best to keep these cases but also make some more complex and dynamic function calling system(s).
            // signature with only one single argument.


            // Returning the observable result does make a problem for when it's just a single function call.

            //  Not always creating and returning an observable would definitely be best.
            //  Especially if we want to also support simpler non-async objects, and act like the arrayify function.



            // writing more formally about immediate mode
            // async mode

            // being able to choose either?
            //  async mode being useful for not blocking cpu and ui?

            // intelligence in automatically choosing async mode or not, depending on the input type(s).
            // if it listens to observables for the input, then it needs to operate in async mode.

            //  aync option - default is 'auto'
            //   then can be true or false.

            //  even using observable input in non-async mode?
            //   could raise an error if it's not possible.
            //    but then again, would mean passing through the observables to the inner functions.













            
            if (sig === '[O]' || sig === '[a]') {
                console.log('using ofp result observable');
                // for consistency, possibly will always return an observable.
                //  this is ofp after all. observable functional polymorphism/programming.

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

                        // And the item could be an arguments object.
                        //  So that way, we can manage calling with multiple arguments.

                        const res_exec = _fn_single(item);
                        console.log('pre raise next');
                        // passing an observable through not working... need to fix that in Evented_Class.
                        next(res_exec);
                        res_exec.io.on('complete', () => {
                            // really complete?
                            //  wouldn't it still be downloading?
                            console.log('ofp queue item io complete');
                            console.trace();
                            
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

                            // enqueue multiple params at once...
                            //  enqueuing an arguments object should work.
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
                });
                console.log('ofp function wrapper returning an obs');
                return o_res;
                /*
                console.trace();
                throw 'stop';
                */
            } else {
                // just call the inner function with the given params. apply?
                // looks OK so far

                // What is the internal function...?
                //  Are there multiple?
                //  How can that work?

                console.log('!!_fn_single', !!_fn_single);
                //console.log('tf(fn_single)', tf(fn_single));
                //console.log('fn_single', !!fn_single);#

                // Now at this point try some more complex arguments reprocessing
                //  Want to see what the inner function accepts...

                console.log('Object.keys(_fn_single)', Object.keys(_fn_single));
                // look at the grammar.
                //  see if we can get a single form signature from the grammar.

                if (_fn_single.map_sigs) {
                    console.log('_fn_single.map_sigs', _fn_single.map_sigs);
                    // get the single version of the function call sig...?
                    console.log('!!_fn_single.grammar', !!_fn_single.grammar);
                    if (_fn_single.grammar) {
                        console.log('pre _fn_single.grammar.single_forms_sig(a)');
                        let sf_sig = _fn_single.grammar.single_forms_sig(a);
                        // and the non single forms sig.
                        let sig = _fn_single.grammar.sig(a);

                        console.log('');
                        console.log('sf_sig', sf_sig);
                        console.log('');

                        // detect any sig matches...
                        //  only if the sig is usable is it worth doing the customised pluralised function call.
                        //   so identify if there is a singularised match.

                        const has_singularised_match = !!_fn_single.map_sigs[sf_sig];
                        console.log('has_singularised_match', has_singularised_match);

                        if (has_singularised_match) {
                            // see which of the params need to be singularised / pluralised
                            const arr_params_given_as_plural_required_as_single = (new Array(a.length));
                            // the two split sigs
                            let s_sf_sig = sf_sig.split(',');
                            let s_sig = sig.split(',');

                            console.log('s_sf_sig', s_sf_sig);
                            console.log('s_sig', s_sig);

                            let num_args_to_pluralise = 0;
                            let idxs_to_pluralise = [];

                            each(s_sf_sig, (singularised_sig_item, c) => {
                                arr_params_given_as_plural_required_as_single[c] = s_sf_sig[c] !== s_sig[c]
                                if (s_sf_sig[c] !== s_sig[c]) {
                                    num_args_to_pluralise++;
                                    idxs_to_pluralise.push(c);
                                }
                            });

                            console.log('arr_params_given_as_plural_required_as_single', arr_params_given_as_plural_required_as_single);
                            console.log('num_args_to_pluralise', num_args_to_pluralise);
                            console.log('idxs_to_pluralise', idxs_to_pluralise);

                            // and the number of the params that need to be pluralised.
                            //  only handle one of them for the moment.
                            //  otherwise it would make for multiple combinations, more complex.

                            if (num_args_to_pluralise === 1) {
                                // do a multi function call...
                                //  using an array
                                //  will return an observable.

                                // loop through the possible values....

                                // Worth using a generalised / otherwise encapsulated version of enqueue.

                                // Could create the call params as an array.
                                //  however, want ofp to be able to deal with more than 1 param properly.
                                //  
                                
                                // invarient params...
                                //  varient params...





                            } else {
                                console.trace();
                                throw 'NYI';
                            }
                        }

                        // find which of the sig items need pluralisation.
                        // an array that says which of the params need to get pluralised.
                        // and look for the single forms...
                        // which params are accepted as single but given as plural.
                        //

                    }
                }
                console.trace();
                throw 'NYI';

                //return fn_single.apply(this, a);
            }

        }







        
    }
    // need to get these and set these on the ._ object.
    // build up new _ object

    const _ = {};

    if (name) _.name = name;
    _.plural = true;
    // and say it can handle single function calls too?
    //  makes sense because its flexible now.

    // don't copy over its map of sigs?
    //  would be worth adding to that map of sigs, providing out own.
    //   working out in advance what arrayified sigs it can handle would be great.
    //   would be best when type specific arrays have been implemented (categorising arrays according to their shared internal types)

    // being able to work out the return type will be very useful.
    //  when we use an obs function declaration can do this.

    // Still quite a bit more work to get this working properly....
    //  Need to get the return type and see if it is async.

    // Recognising async return types will enable ofp to execute correctly, itself returning an obs.
    //  Can see if there is a return type shared by all of the inner fns.
    //   within mfp.

    const map_keys_not_to_copy = {
        name: true
        // probably best not to copy over map_sigs.
    }

    if (_fn_single._) {
        each(_fn_single._, (value, key) => {
            if (!map_keys_not_to_copy[key]) {
                _[key] = value;
            }
        })
    }

    if (Object.keys(_).length > 0) {
        fn_res._ = _;
    }

    //if (name) fn_res.name = name;
    //if (grammar) fn_res.grammar = grammar;

    return fn_res;
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

    // interesting...
    //  having problems making this right now...?



    // Would be worth doing this one too.
    //  Detecting hex strings is going to be useful as well.


    /*
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
    */

    // then make an observable processor for the counter.
    // to hex...
    // yourNumber.toString(16);
    // multiply by 5 function
    // easier to test to start with

    // defining a function with indication that it always runs in single mode.
    //  meaning giving it an array pluralises its call?
    //   need to define its input type?
    //    probably so if itself accepts an array.

    // Saying its single, but does that mean it doesn't take an array?
    //  Include a single function sig here?
    //  

    // including a string param in there somewhere
    //  will give the sig for when there is just one function declared.
    //  this will help to determine whether to pluralise a function call using ofp.
    const sing_x5 = mfp({'single': true}, 'n', num => num * 5);
    //const sing_x5 = mfp({'single': true}, num => num * 5);
    const ofp_x5 = ofp(sing_x5);

    // x factor function?
    //  would take multiple 'n' params.
    
    // would be interesting to execute as single, using multiple array params.
    //  Then the option to return the input params would also be useful in some cases.
    //   Not all...



    // and ofp will always detect arrays given and treat them as plural?
    //  makes sense in some cases.
    //  however, giving it a signature that says it takes a number makes most sense.
    //   not so sure about automatic pluralisation when we don't know what type it's expecting.
    //   can't tell that it's not expecting an array anyway. for that reason, use of the grammar will help.



    // and x5 hex...
    //  want an ofp hex
    // then try doing x5 to the counter.


    // using an observable as input to ofp.



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



    // Making this always return an observable would make sense.
    //  Maybe not...?

    // some kind of flexi_res system?
    //  not being surprised about a function returning a result POJO or observable.
    //  worth incorporating this more into the function system.
    //   More flexible result production could be useful.
    // Intelligent style of result production would be best by default.
    //  and can work to make that happen.

    

    // Multiple different examples could be very useful, and the'd be used for tests as well.



    
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