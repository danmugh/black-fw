import React from 'react';
import "./styles/library.css";
import Slide from "react-reveal/Slide";


const LibrarySong = ({ song, currentSong, setCurrentSong }) => {
    // handlers
    const handleSelectSong = () => {
        setCurrentSong(song);
    };

    return (
        <Slide left cascade>
        <div
            className={`library-song ${song.id === currentSong.id ? 'activE' : ''}`}
            onClick={handleSelectSong}
        >
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
        </Slide>
    );
};

export default LibrarySong;