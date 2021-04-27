import React from 'react';
import "./styles/library.css";


import LibrarySong from './LibrarySong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Library = ({
                     songs,
                     currentSong,
                     setCurrentSong,
                     setIsPlaying,
                 }) => {
    const renderSongItems = () => {
        return songs.map((song) => (
            <LibrarySong
                key={song.id}
                song={song}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                setIsPlaying={setIsPlaying}
            />
        ));
    };

    return (
        <div className="active-library" >
            {/*<div className="heading-container">*/}
            {/*    */}
            {/*</div>*/}
            <br />

            <div className="library-songs">{renderSongItems()}</div>

        </div>

    );
};

export default Library;