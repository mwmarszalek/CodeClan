
const CharacterItem = ({character}) => {
    
    return (
        <div>
        <li>Name: {character.name} Status: {character.status} Species: {character.species} Gender: {character.gender} Origin: {character.origin.name}</li>
        <img src={character.image}/>
        </div>
    )
}

export default CharacterItem;



// <ul>
// {character.episode.map(episode => (
//   <li key={episode}>{episode.slice(-1)}</li>
// ))}
// </ul>