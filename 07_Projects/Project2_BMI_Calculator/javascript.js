const form = document.querySelector('form')
// this use case will give you empty value as we are first assigning the value and then the user is inputting the data.
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)   
    const weight = parseInt(document.querySelector('#weight').value)
    
    const results = document.querySelector('#results')

    if (height === ' ' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } 
    else if (weight === ' ' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if (bmi < 18.6) {
            results.innerHTML = `<span>Your BMI ${bmi} is underweight</span>`
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `<span>Your BMI ${bmi} is in Normal Range</span>`
        }
        else {
            results.innerHTML = `<span>Your BMI ${bmi} is overweight</span>`
        }
    }

    
});
