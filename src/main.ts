import { isEmailValid } from "./utils";

const emailInput = document.getElementById("email-input") as HTMLInputElement;
const errorMsg = document.getElementById("error-msg") as HTMLSpanElement;
const submitEmailBtn = document.getElementById(
    "submit-email"
) as HTMLButtonElement;

emailInput.addEventListener("input", (event) => {
    const { value: email } = event.target as HTMLInputElement;
    console.log(email);
    if (email === "" || !email) return closeEmailErrorMsg();
    const { success } = isEmailValid(email);
    if (!success) {
        showEmailErrorMsg();
    } else {
        closeEmailErrorMsg();
    }
});

submitEmailBtn.addEventListener("click", () => {
    const email = emailInput.value;
    if (email === "" || !email) return;
    const { success } = isEmailValid(email);
    if (!success) return;
    alert("submit successfully");
    emailInput.value = "";
});

function showEmailErrorMsg() {
    errorMsg.style.display = "block";
}
function closeEmailErrorMsg() {
    errorMsg.style.display = "none";
}
