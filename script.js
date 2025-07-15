// script.js (for trivia.html later)
function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");

    if (height > 0 && weight > 0) {
        const bmi = weight / ((height / 100) ** 2);
        let category = "";
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 24.9) category = "Normal";
        else if (bmi < 29.9) category = "Overweight";
        else category = "Obese";
        result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    } else {
        result.textContent = "Please enter valid height and weight.";
    }
}

