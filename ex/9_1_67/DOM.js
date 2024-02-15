let P_tag = document.getElementsByTagName("p")
console.log(P_tag)

console.log(P_tag[0].innerText)
console.log(P_tag[1].innerText)
console.log(P_tag[2].innerText)

let test_id = document.getElementById("test")
console.log(test_id)

let C_name = document.getElementsByClassName("class_test")
console.log(C_name)

let q_id = document.querySelector("#q_ID")
console.log("q_id")

let q_Class = document.querySelector(".q_class")
console.log("q_class")

let q_tag = document.querySelectorAll("p")
console.log("q_tag")

let body_change = document.getElementsByTagName("body")
console.log(body_change)

function DisplayText(){
    test_id.innerHTML = "Hello"
    test_id.style.color = "Blue"
    test_id.style.backgroundColor = "yellow"

    q_Class.setAttribute("class","colorchange")
    console.log(q_Class)

    body_change.setAttribute("class","body")
}