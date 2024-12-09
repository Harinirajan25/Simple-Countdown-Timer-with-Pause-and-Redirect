let start = document.getElementById("b1")
start.addEventListener("click", start1)

let temp = 1;
let res;
let wait = document.createElement("h2")
document.body.append(wait)
let pause = document.createElement("h2")
document.body.append(pause)


function start1() {
    res = setInterval(() => {
        console.log("b")
        let head = document.getElementById("h1");

        let times = wait.textContent = `wait:${temp++}`;
        wait.style.textAlign = "center"


    }, 1000);
    start.removeEventListener("click", start1)
}


let stop1 = document.getElementById("stop")

stop1.addEventListener("click", stop2)

function stop2() {
    clearInterval(res);

    let pause = wait.textContent = `window will be pause:${temp - 1} ⏸️ `;

    // pause.style.textAlign = "center"


    if (temp - 1 === 5) {
        let user = confirm("Click OK to go to the Pixabay website.");
        if (user) {
            window.location = "https://pixabay.com/";
        }

    }



    start.addEventListener("click", start1)


}

