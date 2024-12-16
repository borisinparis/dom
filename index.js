// DOM Methods
// getElementById("id")
// getElementsByTagName("name")
// getElementsByClassName("className")
// setAttribute(attribute , value) change attribute
// createElement(element) create aa HTML element
// removeChild(element) Remove an
// appendChild(element) add
// replaceChild(new, old) replace
// write(text)
// document.getElementById(id).onclick = function(){code}   add event handlers
// querySelectorAll("
// ")

// DOM Property
// innerHTML  change or get content
// attribute  change or get attribute
// style.property change or get style
// onclick=script

// DOM Navigate
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

// Examples

// document.getElementById("p2").style.color = "blue";
// document.getElementById("myBtn").onclick = displayDate;
// document.getElementById("myBtn").addEventListener("click", displayDate);
// element.addEventListener("click", function(){ alert("Hello World!"); });
// element.removeEventListener("mousemove", myFunction);
// Most browsers return a NodeList object for the method querySelectorAll().

// DOM
// Document

// Exercise
// 1. Create folder DOM_lesson
// 2. index.html , index.js
// 3. index.html  1 shirheg div, script tag-tai
// 4. create new P tag and give innerHTML context and append parent DIV with it.
// 5. Use replace it with div tag




// DOM simple exercise
// Exercise
// 1. Create folder DOM_lesson
// 2. index.html , index.js
// 3. index.html  1 shirheg div, script tag-tai
// 4. create new P tag and give innerHTML context and append parent DIV with it.
// 5. Use replace it with div tag
// 6. Create button using p tag and append parent
// 7. Add style attribute in button element button
// 8. Show alert when button clicked by using event listener
// 9. Create p tag that contains "Hello wolrd title" and change the color when element mouseover
// 10. Add class name using classList
// let tombody = document.getElementsByTagName("body")
// tombody.style.display="flex"

let emailHadgalah = ""

let contains = document.getElementById("game-contianer")
contains.style.display = "flex"
// contains.style.justifyContent="center"
contains.style.flexDirection = "column"
contains.style.alignItems = "center"
contains.style.width = "500px"
contains.style.border = "1px solid black"
contains.style.height = "500px"
contains.style.boxShadow = "1px 2px 3px black"
contains.style.margin = "auto"
let para = document.createElement("h1")
para.style.color = "black"
para.innerHTML = "LOGIN";
para.style.fontSize = "60px"
// para.style.display="flex"
// para.style.alignItems="center"
// head1.style.color = "black"
// head.innerHTML = "username"
document.getElementById("game-contianer").appendChild(para);
let head2 = document.createElement("h2")
// head1.style.color = "black"
// head1.innerHTML = "username"
document.getElementById("game-contianer").appendChild(head2)
const input = document.createElement("input")
head2.style.color = "black"
head2.innerHTML = "email"
document.getElementById("game-contianer").appendChild(input)
let head1 = document.createElement("h2")
head1.style.color = "black"
head1.innerHTML = "password"
// button1.addEventListener ("click" ,myfunction) 
// function myfunction () {
//     console.log(input.value);
//     if(input.value.includes("@")){
//         input = true
//     }
//     else {
//         alert("wrong password");
        
//     }
// }


document.getElementById("game-contianer").appendChild(head1)
const input1 = document.createElement("input")
document.getElementById("game-contianer").appendChild(input1)
const button1 = document.createElement("button")
input1.setAttribute("type","password")
document.getElementById("game-contianer").appendChild(button1)

button1.addEventListener ("click" ,myfunction) 
function myfunction () {
    console.log(input.value);
    if(input.value.includes("@")){
        console.log(emailHadgalah);
        if(input1.value.length>=8) {
            alert("amjilltai")
            
        }
        
    }
    else {
        alert("wrong password");
        
    }
}

button1.innerHTML="submit"
button1.style.borderRadius="20px"
button1.style.width="70%"
button1.style.marginTop="20px"
button1.style.height="50px"
// input.addEventListener("mouseenter" , () => {
//     input.style.color= " blue"
// });
// input.addEventListener("mouseleave" , () => {
//     input.style.color= "black"
// });
button1.addEventListener("mouseenter" , () => {
    button1.style.color="green"
}
);
button1.addEventListener("mouseout" , () => {
    button1.style.color= "black"
});





// let new_element = document.createElement("div");
// new_element.innerHTML = "replace element";
// document.getElementById("game-contianer").replaceChild(new_element, para);
// new_element.style.color= "blue"



// const button = document.createElement("input")
// document.getElementById("game-contianer").appendChild(button);

// new_element.addEventListener("mouseenter" , () => {
//     new_element.style.color = "red"
// });
// new_element.addEventListener("mouseleave" , () => {
//     new_element.style.color ="blue"
// });







