import OptionItem from "./OptionItem";
import './CharacterSelector.css'

const CharacterSelector = ({characters, onCharacterSelected}) => {

    const handleChange = function(event) {
        const chosenCharacter = characters[event.target.value];
        onCharacterSelected(chosenCharacter);
    }
    
    const characterOptions = characters.map((character, index) => {
      return <OptionItem key={index} character={character} index={index}/>
    })

    return (
        <select defaultValue="" onChange={handleChange} id="dropdown-menu">
            <option value="">Choose Character</option>
            {characterOptions}
        </select>
    )
}

export default CharacterSelector;