const OptionItem = ({index, character}) => {
    return <option value={index}>{character.name}</option>
}

export default OptionItem;