import { useState, useEffect } from "react"

const Filter = ({handleFilterInput}) => {

    const [userInput,setUserInput] = useState('')

    useEffect(() => {
        handleFilterInput(userInput)
    },[userInput])

    

    const handleUserInput = (event) => {
        setUserInput(event.target.value)
    }

    return (
        <input placeholder='Enter text to filter by'value={userInput} type='text' onChange={handleUserInput}/>
    )
}


export default Filter;


