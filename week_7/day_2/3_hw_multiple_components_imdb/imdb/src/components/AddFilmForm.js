import React, {useState} from "react";

const AddFilmForm = ({onFilmSubmit}) => {

    const [title,setTitle] = useState("");
    const [url,setURL] = useState("");


    const handleTitleChange = (evt) => {
        setTitle(evt.target.value);
    }

    const handleURLChange = (evt) => {
        setURL(evt.target.value);
    }


    const handleFilmSubmit = (evt) => {
        evt.preventDefault();
        const titleToSubmit = title.trim();
        const urlToSubmit = url.trim();
        if (!titleToSubmit || !urlToSubmit) {
            return
        }

        onFilmSubmit({
            title: titleToSubmit,
            url: urlToSubmit
        });

        setTitle("");
        setURL("");
    }

    return (
        <form onSubmit={handleFilmSubmit}>
            <input
                type="text"
                placeholder="Film title"
                value={title}
                onChange={handleTitleChange}
            />
            <input
                type="text"
                placeholder="IMDB URL"
                value={url}
                onChange={handleURLChange}
            />
            <input 
                type="submit"
                value="Submit"
            />
            
        </form>
    )

}

export default AddFilmForm;