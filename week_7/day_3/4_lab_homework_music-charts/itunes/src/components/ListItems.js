import ReactAudioPlayer from 'react-audio-player'


const ListItem = ({song,index}) => {

    return (
        <div id="charts-wrapper">
            <li><div><div id="number">{index+1}.</div> {song['im:artist'].label} - {song['im:name'].label}</div>
                <a href={song.id.label}><img src={song['im:image'][1].label} alt="album cover" id="cover"></img></a>
                <ReactAudioPlayer
                src={song.link[1].attributes.href}
                controls
                />
            </li>
            <hr></hr>
            
        </div>
    )
}

export default ListItem;