import React from "react";

export default function AsyncAwait() {

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value p1 5000")
    },5000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value p2 10000")
    },10000)
})


async function handleclick()
{
        console.log("handleclick start");

        const val = await p1;
        console.log(" p1 executed ");
        console.log(val);

        const val2 = await p2;
        console.log(" p2 executed ");
        console.log(val2 );

        

       

        console.log("handleclick end");

}


function afterHandleclick()
{
    console.log("hello1");
}
// first callstack is empty
// as soo as handleclick() callstack see that there is two proimse whihc is need to be resolved and this promises taking there own time and resolution
// so handleclick() will come inside callstack it start executing line by line becouse js is (syncronus single threaded language)
// first it execute 20 print to console 
// then line 22 it see see "await p1" and it suspand (handleclick() at line 22) hear and pass it to (web-API) to execute promise and clear main threat 
// now callstack emply and wating for any other exent like clicking {Click Me afiter} so it will execute {afterHandleclick} function (if we click) it print "hello1"
// then after 5000 ms (handleclick()come into callstack with  p1 promise resolved then callstack execut and then from {line 23} execute stap by stap 
// again if fount  const val2 = await p2; at suspand (handleclick() at line 26) hear and pass it to (web-API) to execute promise and clear main threat 
// now callstack emply and wating for any other exent 
//after 10000 ms  (handleclick()come into callstack with p2 promise resolved then callstack execut it 

//*** hear handleclick() is not waiting in callstack it will suspand and pass to web-api for promise resolve and callstack is empty becouse {time tied in js wait for non}  */

// if reverse promises like  p2 10000 then p1 5000 will there 
// first callstack suspand at p2 becouse there is one more promise p1 both will go into web-api and execute 
// so after 10000 when again handleclick() come into callstack it resolve p2 but it see p1 already resolved 
// so p2 and p1 both print at same time after 10000 ms


// fatch is given by browser not by js
// async function getdata(){
// const data =  await fetch(url);
// const jsonValue = await data.json();
// console.log("jsonValue");
//}
// How this fatch works ?
// first  getdata() come for execution in callstack start executing code line by line 
// but when callstack see "let data =  await fetch(url);"  callstack see "await fatch()"
// fatch return response-object{prototype:prmise,promisestatus:painding,promiseresult:undefine} which is assine into "data" and getdata() susspanded hear and send "fatch" to "web-api" for resolving 
// and empty the callstack & wainting for other function
// when after 5000 ms fatch resolved and updata priview response-objectb into {prototype:prmise,promisestatus:fullfil,promiseresult:respone} 
// now we convert response-object into json by writing "data.json()" but we use "await" before it becouse  "data.json()" will again return promise-object which is async task 
// so again callstack send it to "web-api" to make resolve the promise and it come back give "jsonValue "







    return (
        <div><h2>Promises</h2>
            <button title="hello" style={{ width: '20%', height: "100px" }} onClick={handleclick} >Click Me </button>
            
            <button title="hello" style={{ width: '20%', height: "100px" }} onClick={afterHandleclick} >Click Me afiter </button>
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

