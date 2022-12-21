import ListItem from "./ListItems"

const SongList = ({songs}) => {

    const SongItems = songs.map((song, index) => {
        return <ListItem song={song} key={index} />
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