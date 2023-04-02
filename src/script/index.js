import { getCountries } from "./api.js";

const countries = await getCountries();
const dataCountries = countries.response;
const selectCountries = document.getElementById('countries');
const country = document.getElementById('country')

dataCountries.forEach(element => {
    selectCountries.innerHTML += `
        <option value="${element}">${element}</option>
    `
});

selectCountries.addEventListener('change', async function(e){
    e.preventDefault()
    const countryselect = selectCountries.value
    country.innerHTML = countryselect    
})
