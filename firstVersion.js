// Elements

const elements = {
    input: document.querySelector("#date-input"),
    submit: document.querySelector("#calc-age-btn"),
    yearsElem: document.querySelector("#years"),
    monthsElem: document.querySelector("#months"), 
    daysElem: document.querySelector("#days"), 

}
// Present date

const date = new Date() 
const presentYear = Number(dayjs(date).format('YYYY'));
const presentMonth = Number(dayjs(date).format('MM'));
const presentDay = Number(dayjs(date).format('DD'));

// Event Listeners

elements.submit.addEventListener("click", ()=>{

    let  rawDOB = elements.input.value;

    if(!rawDOB) return ;

    const dobYear = Number(dayjs(rawDOB).format('YYYY'));
    const dobMonth = Number(dayjs(rawDOB).format('MM'));
    const dobDay = Number(dayjs(rawDOB ).format('DD'));

    let years = presentYear - dobYear;
    let months = presentMonth - dobMonth
    let days = presentDay - dobDay

    let daysInMonth = dayjs(`${dobYear}-${dobMonth}`).daysInMonth()
  
    if(isNegative(months)){
        
        months = (((12 - dobMonth)) + presentMonth)
        years--
    }
    if(isNegative(days)){
        
        days = (((daysInMonth - dobDay)) + presentDay)
        months--
    }

    elements.yearsElem.innerHTML = years
    elements.monthsElem.innerHTML = months
    elements.daysElem.innerHTML = days

})

function isNegative(num){
    return num < 0
}


console.log("jio")