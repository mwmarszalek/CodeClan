import ListItem from "./ListItems"

const SongList = ({songs,index}) => {

    const SongItems = songs.map((song, index) => {
        return <ListItem song={song} key={index} index={index}/>
        
    })

    return (
        <div>
            <ul>
                {SongItems} 
            </ul>
        </div>
    )
}

export default SongList;