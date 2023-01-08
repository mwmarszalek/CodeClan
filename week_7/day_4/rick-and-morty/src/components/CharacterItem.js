import './CharacterItem.css'

const CharacterItem = ({ character }) => {


    return (
        <ul id="char-details-list">
            <li>Name: {character.name} </li>
            <li>Status: {character.status}</li>
            <li> Species: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li id="lol"> Origin: {character.origin.name}</li>
            <img src={character.image} />
        </ul>
    )
}

export default CharacterItem;



