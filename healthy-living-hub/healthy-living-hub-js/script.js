document.addEventListener("DOMContentLoaded", () => {
    const tips = [
        "Drink plenty of water 💧",
        "Stretch for 10 minutes each morning 🧘",
        "Eat more greens 🥦",
        "Take a walk during breaks 🚶",
        "Get 7–8 hours of sleep 😴",
        "Practice deep breathing to reduce stress 🌬️",
        "Limit processed foods and sugar 🍭"
    ];

    const tipElement = document.getElementById("daily-tip");
    if (tipElement) {
        const tip = tips[Math.floor(Math.random() * tips.length)];
        tipElement.textContent = tip;
        tipElement.style.opacity = 0;
        setTimeout(() => {
            tipElement.style.transition = "opacity 1s ease-in";
            tipElement.style.opacity = 1;
        }, 100);
    }
});
