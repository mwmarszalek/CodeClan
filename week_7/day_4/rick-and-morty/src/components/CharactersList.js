import CharacterItem from "./CharacterItem"


const CharactersList = ({characters,locations,episodes}) => {

    const characterItems = characters.map((character,index) => {
        return <CharacterItem character={character} key={index}/>
    })

    const filteredHuman = characters.filter((character) => {
        return character.species === 'Human'
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


//create a dropdown list and have each (value) from dropdown (human alien unknonwn) to be passed in into filter function