import React from "react";

export default function ConceptOfPromiseAPI() {


    return (
        <div><h2>Promises</h2>
            <button title="hello" style={{ width: '20%', height: "100px" }} >Click Me </button>
        </div>
    )
}



// why us async
// async is keyword which is used befor a function to create async function this async function always return promise 
// either you return (promise from this  asyc function) so it will return promise becouse (by-defalut it will return promise)
// Or you (return anythis string ,number) in this case it will automaticaly rape this return value in promise and return becouse (by-defalut it will return promise)


// async and await combo will hendle promises
//how do we hande promise before in old time 
//Ex:-      let promsie = fatch("url");
//          Promise.then(()=>{}) .then(()=>{}) .then(()=>{}) .then(()=>{}) 
// in this way before old time  we handel promise


// await can only be used inside asynce function and you write await before promise and await resolve this promise

