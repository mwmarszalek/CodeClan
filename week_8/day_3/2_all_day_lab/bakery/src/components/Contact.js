import { useState } from "react"

const Contact = props => {

    const [userInput,setUserInput] = useState('')

    const handleTextChange = (evt) => {
        setUserInput(evt.target.value)
    }
    
    const moveDataUp = (evt) => {
        evt.preventDefault()
        
        moveDataUp(userInput)
    }

    return (
        <form>
            <input type="text" onChange={handleTextChange}/>
            <input type="submit" onSubmit={moveDataUp}/>
        </form>
    )
}

export default Contact;