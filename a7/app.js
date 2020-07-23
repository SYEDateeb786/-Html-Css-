// saa 
var list = document.getElementById("list");

function addtodo() {
    // add texton p 
    var todoitem = document.getElementById("todo-item");
    var p = document.createElement("p");
    var ptext = document.createTextNode(todoitem.value);
    p.appendChild(ptext);
    list.appendChild(p)
    p.setAttribute("class", "p1")
        // saa 
    todoitem.value = ""


    // edit
    var edita = document.createElement("button")
    edita.setAttribute("class", "btn btn-dark btn-circle btn-circle-sm m-1")
    p.appendChild(edita)
        // edit button image ad
    var editaimg = document.createElement("img")
    editaimg.setAttribute("src", "btn.png")
    editaimg.setAttribute("class", "imga")
        // onclick
    edita.setAttribute("onclick", "editbtn(this)")
        // end
        // saa 
    edita.appendChild(editaimg)
        // delete 
    var dlt = document.createElement("button")
    dlt.setAttribute("class", "btn btn-secondary btn-circle btn-circle-sm m-1")
    p.appendChild(dlt)
        // dlt button image ad
    var dltimg = document.createElement("img")
        // saa 
    dltimg.setAttribute("src", "btn2.png")
    dltimg.setAttribute("class", "imga")

    dlt.appendChild(dltimg)
        // onclick
    dlt.setAttribute("onclick", "dltbtn(this)")
        // end

    console.log(p)

}
// dlt button
// saa 

function dltbtn(e) {
    e.parentNode.remove()


}

// dlt all
function dltall(params) {
    list.innerHTML = ""

}
// saa 
// editbtn
function editbtn(f) {
    var val = prompt("Enter update value", f.parentNode.firstChild.nodeValue)
    f.parentNode.firstChild.nodeValue = val;

    // saa 
}

// ENTERINPUT 
// Get the input field
var input = document.getElementById("todo-item");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("BUTTONENTER").click();
    }
});