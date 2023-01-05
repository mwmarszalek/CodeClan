import React, { useState,useEffect } from 'react'
import CharactersList from '../components/CharactersList';
import AddCharacterForm from '../components/AddCharacterForm';


const MainContainer = () => {
    const [characters,setCharacters] = useState([]);
    const [selectedCharacter,setSelectedCharacter] = useState(null);

    const [filteredSpecies,setFilteredSpecies] = useState('')

  
    useEffect(() => {
        getCharacters();    
    },[])

    const saveSpeciesDataHandler = (enteredSpeciesData) => {
        setFilteredSpecies(enteredSpeciesData)
    }

    const getCharacters = function() {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(characters => setCharacters(characters.results));
    }
    

    const AddCharacter = (submittedCharacter) => {
        const updatedCharacters = [...characters,submittedCharacter];
        setCharacters(updatedCharacters)
    }



    return(
        <div>
            <CharactersList characters={characters} />
            <AddCharacterForm onCharacterCubmit={(character) => AddCharacter(character)}/>
        </div>
    )
};

export default MainContainer;



