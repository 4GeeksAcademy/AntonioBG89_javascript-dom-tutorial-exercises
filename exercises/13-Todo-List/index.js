// Your code here
let addTask = function() {
    let selPadreAdd = document.querySelector("ul");
    let createHtmlElement = document.createElement("li");
    let selInput = document.getElementById("addToDo").value;
    createHtmlElement.innerHTML = `<span><i class="fa fa-trash"></i></span> ${selInput}`;
    selPadreAdd.appendChild(createHtmlElement);
    document.getElementById("addToDo").value = "";
}

document.getElementById("addToDo").addEventListener('keypress', function(event){
    if (event.key === 'Enter'){addTask();}
});

document.querySelector("ul").addEventListener('click', function(event){
    if (event.target.classList.contains('fa-trash')){
        event.target.parentElement.parentElement.remove();
    }
});
