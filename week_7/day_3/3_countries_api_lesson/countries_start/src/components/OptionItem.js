const OptionItem = ({country,index}) => {
    return <option value={index}>{country.name.common}</option>
}

export default OptionItem;