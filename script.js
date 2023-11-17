//var for the data entered and the list created where data is to be inserted
const inputBox= document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value==='') //if input is empty
       alert("You must write a task!");
    else{
        let li= document.createElement("li"); //create a list item element
        li.innerHTML= inputBox.value; //the inner html of list item is the value entered
        listContainer.appendChild(li); //add the list item element as a child of the list created
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value="";
}
listContainer.addEventListener("click", function(e){
    //if clicked on li element, toggle the collection of class list by applying or deleting checked class on the list item
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //if clicked on cross, delete the the list item whose child the cross is
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
//to save list data locally and update it whenever changes made we call it
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//to show the saved data when site opened
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showData();