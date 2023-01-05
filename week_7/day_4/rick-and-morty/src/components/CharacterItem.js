
const CharacterItem = ({character}) => {
    
    return (
        <div>
        <li>Name: {character.name} </li>
        <li>Status: {character.status}</li>
        <li> Species: {character.species}</li>
        <li>Gender: {character.gender}</li>
        <li> Origin: {character.origin.name}</li>
        <img src={character.image}/>
        </div>
    )
}

export default CharacterItem;



