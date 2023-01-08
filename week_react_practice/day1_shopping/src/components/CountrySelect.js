import ListItem from "./ListItem"

const CountrySelect = ({countries, onCountrySelected}) => {

    const countryItems = countries.map((country, index) => {
        // return <ListItem country={country} key={index} onCountrySelected={onCountrySelected} />})
        return country})

    

    

    return (
        <div>
            <label>Choose a country</label>
            <select name={countries}></select>
            <option value={countries.c}
        </div>
    )
}

export default CountrySelect;