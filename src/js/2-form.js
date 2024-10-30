let formData = { email: "", message: "" }
const LOCAL_KEY = "feedback-form-state"
const form = document.querySelector(".feedback-form")
form.addEventListener("input", onSaveData)
form.addEventListener("submit", sendData)
function onSaveData(event) {
    formData.email = event.currentTarget.elements.email.value.trim()
    formData.message = event.currentTarget.elements.message.value.trim()
    localStorage.setItem (LOCAL_KEY, JSON.stringify(formData))
}
const savedData = localStorage.getItem(LOCAL_KEY)
if (savedData) {
    formData = JSON.parse(savedData)
    form.elements.email.value = formData.email
    form.elements.message.value = formData.message
}
function sendData(event) {
    event.preventDefault()
    if (formData.email === "" || formData.message === "")
        return alert("Fill please all fields")
    console.log(formData)
    localStorage.removeItem(LOCAL_KEY)
    form.reset()
    formData = { email: "", message: "" }
}
