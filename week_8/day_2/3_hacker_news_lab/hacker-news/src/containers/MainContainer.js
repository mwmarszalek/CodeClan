import React, { useState , useEffect } from 'react'
import Filter from '../components/Filter';

const MainContainer = () => {

    const [articleIDs,setArticleIDs] = useState([])
    const [articleTitles,setArticleTitles] = useState([])
    const [allTitles,setAllTitles] = useState([])
    


    useEffect( () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json ')
        .then ( results => results.json() )
        .then( data => setArticleIDs(data))
        
    }, [] )

    

    useEffect( () => {

        const articleIdPromises = articleIDs.slice(0,21).map((articleID,index) => {
            return fetch('https://hacker-news.firebaseio.com/v0/item/'+ articleID +'.json')
            .then(res => res.json())
        })


        Promise.all(articleIdPromises)
            .then((data) => {
                setArticleTitles(data)
                setAllTitles(data)
            })

            
    }, [articleIDs] ) 

    const listTitles = articleTitles.map((article,index) => {
        return <li key={index}>
            <h3>{article.title}</h3>
            <p>Posted by {article.by}</p>
            </li>
    })

    const handleFilterInput = (input) => {
        console.log(input);
        const filteredList = allTitles.filter(article => {
           return  article.title.includes(input)            
        })
        setArticleTitles(filteredList)
    }

    return (
        <>
            <Filter handleFilterInput={handleFilterInput} />
           <ul>{listTitles}</ul>
        </>
    )
};

export default MainContainer