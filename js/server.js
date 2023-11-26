const icon = document.querySelector(".ti-info-circle");
const password = document.querySelector(".password");
const btnLogin = document.querySelector(".btn-log-in");
const btnSave = document.querySelector(".btn-save");
const passBox = document.querySelector(".password-box");
const dot = document.querySelectorAll(".date-section > .dot");

const dotState = JSON.parse(localStorage.getItem("dotState")) || [];

const updateDotState = () => {
    dot.forEach((changeDot, index) => {
        if (dotState[index] === "green") {
            changeDot.classList.add("dot-green");
            changeDot.classList.remove("dot-red");
        } else {
            changeDot.classList.remove("dot-green");
            changeDot.classList.add("dot-red");
        }
    });
};

const changeDot = () => {
    if (password.value === "maciej") {
        btnSave.style.display = "block";
        passBox.style.display = "none";
        icon.style.display = "none";

        dot.forEach((changeDot, index) =>
            changeDot.addEventListener("click", function () {
                changeDot.style.cursor = "pointer";
                if (changeDot.classList.contains("dot-red")) {
                    changeDot.classList.add("dot-green");
                    changeDot.classList.remove("dot-red");
                    dotState[index] = "green";
                } else {
                    changeDot.classList.remove("dot-green");
                    changeDot.classList.add("dot-red");
                    dotState[index] = "red";
                }
                localStorage.setItem("dotState", JSON.stringify(dotState));
            })
        );
    } else {
        console.log("Błąd!!");
    }
};

btnSave.addEventListener("click", () => {
    btnSave.style.display = "none";
    icon.style.display = "block";

});

btnLogin.addEventListener("click", changeDot);
icon.addEventListener("click", function () {
    passBox.style.display = "block";
});

updateDotState();