const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Change display type from none to flex to show results
    results.style.display = 'flex';


    // Checks
    if (height === '' || isNaN(height) || height <= 0) {
        results.innerHTML = 'Please provide a valid height';
        return;
    } else if (weight === '' || isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please provide a valid weight';
        return;
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Display Results along with category
        if (bmi < 18.5) {
            results.innerHTML = `<span>${bmi} - Underweight</span>`;
        } else if (bmi > 18.5 && bmi < 24.9) {
            results.innerHTML = `<span>${bmi} - Normal</span>`;
        } else if (bmi > 25 && bmi < 29.9) {
            results.innerHTML = `<span>${bmi} - Overweight</span>`;
        }
        else {
            results.innerHTML = `<span>${bmi} - Obese</span>`;
        }
    }

});