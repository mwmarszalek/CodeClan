import React, { useState,useEffect } from 'react'
import CharactersList from '../components/CharactersList';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';
import './MainContainer.css'



const MainContainer = () => {
    const [characters,setCharacters] = useState([]);
    const [selectedCharacter,setSelectedCharacter] = useState(null);


  
    useEffect(() => {
        getCharacters();    
    },[])



    const getCharacters = function() {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(characters => setCharacters(characters.results));
        
    }
    
    const onCharacterSelected = (character) => {
        setSelectedCharacter(character)
    }



    return(
        <div>
            <h1 id="title">Rick and Morty Characters</h1>
            <div id='character-selector'><CharacterSelector characters={characters} onCharacterSelected={onCharacterSelected}/></div>
            <div id='character-details-main'>{selectedCharacter ? <CharacterDetail character={selectedCharacter} /> :null }</div>
            {/* <CharactersList characters={characters} /> */}
        </div>
    )
};

export default MainContainer;



