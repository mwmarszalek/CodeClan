import CharacterItem from "./CharacterItem"


const CharactersList = (props) => {

    const characterItems = props.characters.map((character,index) => {
        return <ul key={index}><CharacterItem character={character} key={index}/></ul>
    })

   

    return (
        <div>
            <ul>
                {characterItems}
            </ul>
        </div>
    )
}

export default CharactersList;


