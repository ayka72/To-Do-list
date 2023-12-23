const inputBox = document.getElementById("input_box");
const listContainer = document.getElementsByClassName("list-group");

function addTask(){
    if(inputBox.value === ''){
        alert("Write here something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appengChild(li);
    }
}
