console.log("AJAX");

let a = document.getElementById("fetchbtn");
a.addEventListener('click', buttonclickhandler)

function buttonclickhandler() {
    console.log("You have Clicked the fetchbtn.");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", false);



    xhr.onload = function() {

        if (this.status == 200) {
            console.log(this.responseText);
        } else {
            console.log("some error occured");
        }
    }
    xhr.send();
    console.log("We are done fetching");
}