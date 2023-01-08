//HERE RENDER RESULT OF DROPDOWN SELECTION

const CharacterDetail = ({character}) => {

    return (
      <div className="character-detail">
        <ul>
        <li>Name: {character.name} </li>
        <li>Status: {character.status}</li>
        <li> Species: {character.species}</li>
        <li>Gender: {character.gender}</li>
        <li> Origin: {character.origin.name}</li>
        <img src={character.image}/>
        </ul>
      </div>
    )
}
  
  export default CharacterDetail;