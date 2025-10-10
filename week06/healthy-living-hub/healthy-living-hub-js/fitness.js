document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generate-workout");
    const resultDiv = document.getElementById("workout-result");

    if (generateBtn && resultDiv) {
        const workouts = [
            {
                name: "Full Body Blast",
                exercises: ["Jumping Jacks", "Push-ups", "Squats", "Plank (1 min)", "Burpees"],
                duration: "20 minutes"
            },
            {
                name: "Core Crusher",
                exercises: ["Crunches", "Leg Raises", "Russian Twists", "Mountain Climbers", "Plank (2 min)"],
                duration: "15 minutes"
            },
            {
                name: "Cardio Burn",
                exercises: ["High Knees", "Butt Kicks", "Skaters", "Jump Rope", "Sprints"],
                duration: "25 minutes"
            },
            {
                name: "Lower Body Strength",
                exercises: ["Lunges", "Wall Sit", "Calf Raises", "Glute Bridges", "Step-ups"],
                duration: "20 minutes"
            }
        ];

        generateBtn.addEventListener("click", () => {
            const workout = workouts[Math.floor(Math.random() * workouts.length)];
            resultDiv.innerHTML = `
        <h4>${workout.name}</h4>
        <ul>${workout.exercises.map(ex => `<li>${ex}</li>`).join("")}</ul>
        <p><strong>Duration:</strong> ${workout.duration}</p>
      `;
        });
    }
});
