let InputBox = document.getElementById("input-box");
let Listcontainer = document.getElementById("list-container");

function Addtask() {
    if (InputBox.value === '') {
        alert('You must write something');
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        Listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    InputBox.value = "";
    saveData();
}

// Listcontainer.addEventListener( "Click", function (e) {
//     if (e.target.tagName === "li") {
//         e.target.classList.toggle("checked");

//     }   

//     else if (e.target.tagName === "span") {
//         e.target.parentElement.remove();
//     }
// }, false);


Listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", Listcontainer.innerHTML)
}

function showTask() {
    Listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();