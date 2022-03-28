let loadCountrys = () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayCountries(data))
}

let displayCountries = countries => {
    console.log(countries);
    let allCountrysHtml = countries.map(country=> getHtml(country))
    console.log(allCountrysHtml);

}

let getHtml = (country) => {
    return `
        <div>
            <h2>${country.name.common}</h2>
        </div>
    `
}

loadCountrys()