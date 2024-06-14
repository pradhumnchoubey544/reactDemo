import React from "react";

export default function ConceptOfPromiseAPI() {


    return (
        <div><h2>Promises</h2>
            <button title="hello" style={{ width: '20%', height: "100px" }} >Click Me </button>
        </div>
    )
}

// Q what is iterable in js ? 

// Promise.all()  :- fail-fast
//  Promise.allSettel()  :- fail-late

// #### Promise API ##### 
// Promise.all()  :- you have 10 ID you want perallel API call to get all there userData hear Promise.all() to handle multiple api call
// How ? it take array of promises as input ,now you pass three promises for three api call [p1,p2,p3]
// peomise.all([p1,p2,p3])    // hear p1 take (3second ,p2 take 1second ,p3 take 2second) to get response from server

// case-1 (all the api call success no body failed) 
// result of all api call is array [value_p1,vlaue_p2,value_p3] it will wait for all to get response hanse totel time take to get this array is (3 second)

// case-2 (all the api call p1 & p3 success but p2 is rezected) 
// after 
// result of all api call is array [value_p1,vlaue_p2,value_p3] it will wait for all to get response hanse totel time take to get this array is (3 second)
// as soon as any primise is rezected  like hear p2 the (promise.all) immeditly throw an error 
// So output will be error it is same error retrun by (p2 promise) after (2 second)

// case-2 (api call p1  success but p2 &  p3 is rezected) 
// so soon as any of the array promse rezecter full promise.all is rezected and output will be error of first promise rezected

// ## if we execute promise it will not canceled in any way ,it will definetly get response


//-----------------------------------------------------------------------

// Promise.allSetteled() :-  in this peomise.allSetteled([p1,p2,p3])  does-not mettter how many api fail like in this case if two (p2,p3) got fail 
// Promise.allSetteled() will not rezected instead of this it wait to all promsie to get_back there respone whether it is (response or error) 
// it will assine respone in array for each like [value_p1 ,error,error] and return as OP of Promise.allSetteled().

//-----------------------------------------------------------------------

// Promise.race() :-   peomise.race([p1,p2,p3]) it will return OP as first minimum time taken promise_resolved  wether it is (success or error) 



//-----------------------------------------------------------------------

// Promise.any() :-   peomise.any([p1,p2,p3]) it will return OP as first promise_resolved but it should be success only
// what if all give (error) it will return [error,error,error] array.

