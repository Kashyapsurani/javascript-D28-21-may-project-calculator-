var button = document.querySelectorAll("button")
var h1 = document.querySelector(".h1")

var str = "";

button.forEach((value) => {
    value.addEventListener("click", () => {

        if (value.innerText == "Clar") {
            str = ""
            h1.innerHTML = 0
        }else if (value.innerText != "=") {
            h1.innerText = str += value.innerText

        }else if (value.innerText == "=") {
            h1.innerText = eval(str);
            str = ""
        }

    })
})
