const body = document.querySelector("body"),
      hourHand = document.querySelector(".hour"),
      minuteHand = document.querySelector(".minute"), 
      secondHand = document.querySelector(".second"),
      modeSwitch = document.querySelector(".mode-switch");

if (localStorage.getItem("mode") === "dark") { // Modifiquei "Dark Mode" para "dark"
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
    
}

modeSwitch.addEventListener("click", () => {    
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "dark" : "light"); // Modifiquei "Dark Mode" para "dark"
    if (isDarkMode) {
        modeSwitch.style.color = "#000"; // Cor preta para o texto "Light Mode"
    } else {
        modeSwitch.style.color = "#fff"; // Cor branca para o texto "Dark Mode"
    }

    
});

const updateTime = () => {
    let date = new Date(),
        seconds = date.getSeconds(),
        minutes = date.getMinutes(),
        hours = date.getHours(),
        secToDeg = (seconds / 60) * 360,
        minToDeg = ((minutes + seconds / 60) / 60) * 360,
        hrToDeg = ((hours + minutes / 60) / 12) * 360;

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);

updateTime();
