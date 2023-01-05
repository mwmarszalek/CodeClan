import React,{useState} from 'react';


const AddCharacterForm = ({onCharacterSubmit}) => {

    const [name,setName] = useState('');
    const [species,setSpecies] = useState('');


    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleSpeciesChange = (event) => {
        setSpecies(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const nameToSubmit = name.trim();
        const speciesToSubmit = species.trim();
        if (!nameToSubmit || !speciesToSubmit) {
            return
        }
        onCharacterSubmit({
            name: nameToSubmit,
            species: speciesToSubmit
        });

        setName('');
        setSpecies('');
    }


    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={handleNameChange}
            />
            <input
                type='text'
                placeholder='Species'
                value={species}
                onChange={handleSpeciesChange}
            />
            <input
                type='submit'
                value='post'
            />
        </form>
    )
}

export default AddCharacterForm;