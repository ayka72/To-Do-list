const inputBox = document.getElementsByClassName("input-in");
const listContainer = document.getElementsByClassName("list-group");

function addTask(){
    if(inputBox.value === ''){
        alert("Write here something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = ""
}
