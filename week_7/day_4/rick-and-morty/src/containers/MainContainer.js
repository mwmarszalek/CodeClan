import React, { useState,useEffect } from 'react'
import CharactersList from '../components/CharactersList';
import SpeciesSelector from '../components/SpeciesSelector';


const MainContainer = () => {
    const [characters,setCharacters] = useState([]);
    const [species,setSpecies] = useState([]);
    const [selectedCharacter,setSelectedCharacter] = useState(null);
    const [selectedSpecies,setSelectedSpecies] = useState(null);

    useEffect(() => {
        getCharacters();
        // getSpecies();
    
    },[])

    const getCharacters = function() {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(characters => setCharacters(characters.results));
    }

    const getSpecies = function() {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(characters=> setSpecies(characters.species));
    }
    const onSpeciesSelected = function(species) {
        setSelectedSpecies(species);
    }


    return(
        <div>
            <CharactersList characters={characters} />
            <SpeciesSelector onSpeciesSelected={onSpeciesSelected} characters={characters}/>
            
        </div>
    )
};

export default MainContainer;



