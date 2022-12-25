import SpeciesItem from "./SpeciesItem";

const SpeciesSelector = ({species, onSpeciesSelected, characters}) => {

    const handleChange = function(event) {
        const chosenSpecies = species[event.target.value];
        onSpeciesSelected(chosenSpecies);
    }

    //unique modes of transport
    const speciesOptions = characters.map((character,index) => {
        return <SpeciesItem key={index} species={character.species} index={index} characters={characters}/>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value={species} selected>Filter By Species:</option>
            {speciesOptions}
        </select>
    )





}



export default SpeciesSelector;