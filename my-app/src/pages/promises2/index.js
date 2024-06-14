

// import React from "react";

// export default function CreatePromises() {
// const cart = ["shoes","pants","kurta"];

//     createOrder(cart)
//         .then(function (orderId) {
//             console.log(orderId);
//             return orderId;
//         })
//         .then(function (orderId) {
//             return proceedtoPayment(orderId);
//         })
//         .then(function (paymentInfo) {
//             console.log(paymentInfo);
//         })
//         .catch(function (err) {
//             console.log(err.message);
//         })



//     function createOrder(cart) {
//         const pr = new Promise(function (resolve, reject) {

//             if (!validateCart(cart)) {
//                 const err = new Error("Cart is not valid")
//                 reject(err);
//             }
//         })
//         const orderId = "12345";
//         if (orderId) {
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000)
//         }
//         return new Promise(function (resolve, reject) {
//             resolve("payment successfull");
//         })
//     }


//     function proceedtoPayment() {
//         return new Promise(function (resolve, reject) {
//             resolve("payment successfull");
//         })
//     }


//     function validateCart() {
//         return false;
//     }



//     return (
//         <div><h2>Promises</h2>
//             <button title="hello" style={{ width: '20%', height: "100px" }} onClick={callapi}>Click Me </button>
//         </div>
//     )
// }


import React from "react";

export default function CreatePromises() {
    const cart = ["shoes", "pants", "kurta"];

    const handleButtonClick = () => {
        createOrder(cart)
            .then((orderId) => {
                console.log(orderId);
                return proceedToPayment(orderId); // Chain to payment if successful
            })
            .then((paymentInfo) => {
                console.log(paymentInfo);
            })
            .catch((error) => {
                console.error(error.message); // Handle errors centrally
            });
    };

    function createOrder(cart) {
        return new Promise((resolve, reject) => {
            if (!validateCart(cart)) {
                reject(new Error("Cart is not valid")); // Reject promise on error
            }

            setTimeout(() => {
                resolve("12345"); // Resolve promise with orderId after delay
            }, 5000);
        });
    }

    function proceedToPayment(orderId) {
        return new Promise((resolve, reject) => {
            resolve("payment successful"); // Resolve promise with payment info
        });
    }

    function validateCart(cart) {
        // Implement cart validation logic here
        // Currently returns false for demonstration
        return false;
    }

    return (
        <div>
            <h2>Promises</h2>
            <button title="hello" style={{ width: "20%", height: "100px" }} onClick={handleButtonClick}>
                Click Me
            </button>
        </div>
    );
}





// Case 2
// we know all this promise cheaing is inter-depandent on each other but in this case 
// if over (1 then) fail over (2 catch) block will work bur alos after that (3 then,4 then) will not affacted by (1 then) becouse in between (2 catch) blaock handel that errow and no inpact on down-words cheaning 
// so (catch 2) will conser to handel  all error occure by top of its (then- black)
// const handleButtonClick = () => {
//     createOrder(cart)
//         .then((orderId) => {
//             console.log(orderId);
//             return proceedToPayment(orderId); // Chain to payment if successful
//         })
//         .catch((error) => {
//             console.error(error.message); // Handle errors centrally
//         });
//         .then((paymentInfo) => {
//             console.log(paymentInfo);
//         })
//            .then((paymentInfo) => {
//             console.log(paymentInfo);
//         })
//         .catch((error) => {
//             console.error(error.message); // Handle errors centrally
//         });
// };




// Case 3
// hear all (3,4 then-block) which is after (catch-black) will execute definetly in every condition
// but there shoud be jeneric catch at the last of promise chaning (good  practise).

// const handleButtonClick = () => {
//     createOrder(cart)
//         .then((orderId) => {
//             console.log(orderId);
//             return proceedToPayment(orderId); // Chain to payment if successful
//         })
//         .catch((error) => {
//             console.error(error.message); // Handle errors centrally
//         });
//         .then((paymentInfo) => {
//             console.log(paymentInfo);
//         })
//            .then((paymentInfo) => {
//             console.log(paymentInfo);
//         })
//        
// };

