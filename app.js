// Elements - using more descriptive variable names
const elements = {
    input: document.querySelector("#date-input"),
    submit: document.querySelector("#calc-age-btn"),
    yearsElem: document.querySelector("#years"),
    monthsElem: document.querySelector("#months"), 
    daysElem: document.querySelector("#days"),
}

// Event Listeners
elements.submit.addEventListener("click", calculateAge)

/*
  Main function to calculate age
*/

function calculateAge(){
    // Get input date
    let rawDOB = elements.input.value;
    
    // Validate input
    if(!rawDOB){
        showError("Please enter your date of birth")
        return 
    }

     // Convert to dayjs objects for easier manipulation
     const today = dayjs();
     const birthDate = dayjs(rawDOB);

    // Validate future dates
    if(birthDate.isAfter(today)){
        showError("Birth date cannot be in future")
        return
    }
    const presentYear = today.year()
    const presentMonth = today.month()
    const presentDay = today.date()


    const dobYear = birthDate.year()
    const dobMonth = birthDate.month()
    const dobDay = birthDate.date()


    // Calculate age
    let years = presentYear - dobYear;
    let months = presentMonth - dobMonth;
    let days = presentDay - dobDay;
    
    
    // Adjust months when negative
    if(months < 0){
        months = 12 + months;
        years--
    }

    // Adjust days when negative
    if (days < 0){
        // Get the correct previous month for calculating days
        const prevMonth = dayjs(today).subtract(1, 'month')
        const daysInPrevMonth = prevMonth.daysInMonth()

        days = daysInPrevMonth + days

        // If we already adjusted the months, we need to handle edge case

        if(months === 0){
            months = 11;
            years--
        } else {
            months--
        }
    }

    // Display results
    updateDisplay(years, months, days)
}



/*
    Update the display with calculated age
*/

function updateDisplay(years, months, days){
    elements.yearsElem.textContent = years;
    elements.monthsElem.textContent = months;
    elements.daysElem.textContent = days;
}

/*
    Show error message to the user
*/

function showError(message){
    alert(message)

    // Clear previous results
    updateDisplay("--", "--", "--")
}