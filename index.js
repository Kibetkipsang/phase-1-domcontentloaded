// document.addEventListener("DOMContentLoaded", () => {console.log("The Dom has loaded")});
// console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered")
  

document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.getElementById("text");
    paragraph.textContent = ('This is really cool!')   
  })