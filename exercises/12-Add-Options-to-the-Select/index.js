let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let newOptions = document.querySelector("#mySelect");

let putOptions = function(){
    for (let i = 0; i < countries.length; i++){
        let newOption = document.createElement("option");
        newOption.innerHTML = countries[i];
        newOption.value = countries[i];
        newOptions.appendChild(newOption);
    }
}

newOptions.addEventListener('change', function(event){
    alert(event.target.value);
});

putOptions();
