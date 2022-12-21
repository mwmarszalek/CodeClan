import ListItem from "./ListItems"

const SongList = ({songs,index}) => {

    const SongItems = songs.map((song, index) => {
        return <ListItem song={song} key={index} index={index}/>
        // <li>{index+1} {song.title.label}</li>
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