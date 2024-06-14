import React from "react";

export default function ConceptOfPromise() {

  // defination of promises : use to perdome async-task it is contaner of future values, when line execute it is "panding state " after some time it "fullfil state"
    function callapi() {
        let url = "https://jsonplaceholder.typicode.com/todos/1";
        const getPro = fetch(url); // fetch will assine "primise" in getPro whihc is 1) [[PromiseState]]:"panding" [[PromiseResult]]:"undefined"  // but after some millisecond it get data and show bottem response
        console.log(getPro);  // [[Prototype]]:Promise  [[PromiseState]]:"fulfilled" [[PromiseResult]]:Response
        console.log("mathod executed");
        getPro.then((data)=>{console.log(data);})
    }

    return (
        <div><h2>Promises</h2>
            <button title="hello" style={{ width: '20%', height: "100px" }} onClick={callapi}>Click Me </button>
        </div>
    )
}

