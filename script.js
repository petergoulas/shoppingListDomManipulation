let num1 = 0;
let str1 = "button";

console.log("hello_p\n");
console.log("lets see if we can do this\n")



// let input1 = document.getElementById("number1");
// let input2 = document.getElementById("number2");

// const para = document.querySelector('p');
// para.innerText += "\nResult is: \n";
// para.innerText += var1;

// console.log(input1,input2);

// function number1_input() {
//     var input1 = document.getElementById("number1").value;
//     console.log(input1);
// }

// function number2_input() {
//     var input2 = document.getElementById("number2").value;
//     console.log(input2);
// }

function number_input() {
    let number1 = document.getElementById("number1").value;
    let result = document.getElementById("placeholder1");
    console.log(number1);
    // console.log(typeof(number1));

    // let result2 = 0;

    // result2 = parseInt(number1) + parseInt(number2);
    // console.log(result2);

    // result2 = '' + result2;
    // // textContent wont work here
    // result.textContent += `<li> ${number1} </li>`;
    // result.innerHTML += `<li> ${number1} </li>`;
    result.innerHTML += `<li id="item${num1}"> ${number1} <button id="button${num1}"> Delete </button> </li>`;
    str1 += num1.toString();
    console.log(str1);
    // `"button${num1}"`

    // let sbutton1 = document.getElementById(str1);
    // let sbutton1 = document.getElementById(`button${num1}`);
    // let sbutton2 = sbutton1;
    // sbutton1.addEventListener("click", () => {
    //     alert(sbutton1.id);
    //     console.log("YAY");
    // });
    
    // Add event listeners to all buttons
    for (let i = 0; i <= num1; i++) {
        let sbutton1 = document.getElementById(`button${i}`);
        sbutton1.addEventListener("click", () => {
            let child1 = "item";
            // alert(sbutton1);
            // alert(sbutton1.id);
            // alert(typeof(sbutton1.id));
            let extractedNumber = parseInt((sbutton1.id).match(/\d+/)[0]);
            // alert(extractedNumber);
            // alert(typeof(extractedNumber));
            console.log(extractedNumber);
            child1 += (extractedNumber.toString());
            console.log(child1);
            console.log(typeof(child1));
            let listItem = document.getElementById(`item${extractedNumber}`);
            let ok1 = placeholder1.removeChild(listItem);
            // let listItem = document.getElementById(`item${extractedNumber}`);
            // listItem.parentNode.removeChild(listItem);
            alert("Attention: Node Removed");
            // let temp1 = parseINT(sbutton.id);
            // let temp1 = (sbutton.id).match(/\d+/g);
            // let temp2 = parseInt("10");
            // let temp1 = parseINT(sbutton.id);

            // let temp2 = sbutton.id;
            // console.log(temp2);
            // console.log(typeof(temp2));
            // let temp1 =  parseInt(temp2);
            // console.log(temp1);
            // console.log(typeof(temp1));
            // console.log("after this: ");
            // console.log(sbutton1);
            // // alert(temp1);
            // // const throwawayNode = itemid.removeChild(sbutton1.id);
            // console.log(temp1);
            // console.log("YAY");
        });
    }


    // (document.getElementById(str1)).addEventListener("click", () => {
    //     // alert((document.getElementById(str1)).id);
    //     console.log("YAY");
    // });
    num1++;
    // num1=0;
    str1 ="button";

    // create delete button and add element
    // const deleteButton = document.createElement('button');
    // deleteButton.classList.add("button1");
    // deleteButton.textContent += "Delete";
    // result.appendChild(deleteButton);
}

let sbutton = document.getElementById("sbutton");
sbutton.addEventListener("click", number_input, false); 

// get element placeholder1
const placeholder1 = document.getElementById("placeholder1");
