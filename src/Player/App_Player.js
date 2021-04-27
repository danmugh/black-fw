import React, { useState, useRef } from 'react';
import { Row, Col } from 'antd';
import './styles/app_player.css';
import data from './util';

import Song from './Song';
import Player from './Player';
import Library from './Library';

function App_Player() {
    const audioRef = useRef(null);

    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    const [isLibOpen, setIsLibOpen] = useState(false);
    const [isPlaylistRepeat, setIsPlaylistRepeat] = useState(false);
    const [songState, setSongState] = useState({
        currentTime: 0,
        duration: 0,
        seekbarPercentage: 0,
    });
    const [buttonStatus, setButtonStatus] = useState({
        next: true,
        previous: false,
    });

    // helpers
    const handleSongTimer = (event) => {
        const currentTime = event.target.currentTime;
        const duration = event.target.duration;
        const percentage = Math.round((100 * currentTime) / duration);

        setSongState({
            ...songState,
            currentTime: currentTime,
            duration: duration,
            seekbarPercentage: percentage,
        });
    };

    const handleChangeSong = (direction) => {
        let index = songs.findIndex((song) => song.id === currentSong.id);

        switch (direction) {
            case 'next':
                if (isPlaylistRepeat) {
                    if (index === songs.length - 1) {
                        setCurrentSong(songs[0]);
                    } else {
                        setCurrentSong(songs[index + 1]);
                    }
                    setButtonStatus({ next: true, previous: true });
                } else {
                    if (index === songs.length - 1) {
                        setButtonStatus({ next: false, previous: true });
                    } else {
                        setCurrentSong(songs[index + 1]);
                        setButtonStatus({ next: true, previous: true });
                    }
                }
                break;
            case 'previous':
                if (isPlaylistRepeat) {
                    if (index === 0) {
                        setCurrentSong(songs[songs.length - 1]);
                    } else {
                        setCurrentSong(songs[index - 1]);
                    }
                    setButtonStatus({ next: true, previous: true });
                } else {
                    if (index === 0) {
                        setButtonStatus({ next: true, previous: false });
                    } else {
                        setCurrentSong(songs[index - 1]);
                        setButtonStatus({ next: true, previous: true });
                    }
                }
                break;
            default:
                break;
        }
    };

    return (
        // <div className={`App ${isLibOpen ? 'library-active' : ''}`}>
        <div className="App__wrapper" >
            <div className="bandPage__text" >
                <h3>THE BAND</h3>
                <p>Love music!</p>
                <p>We have created a fictional band website. Lorem ipsum...</p>
            </div>

            <div className="band__bigSize" >
                <Row>
                    <Col span={10} className="library__wrapper" >
                        <Library
                            songs={songs}
                            currentSong={currentSong}
                            setCurrentSong={setCurrentSong}
                            setIsPlaying={setIsPlaying}
                            isLibOpen={isLibOpen}
                            setIsLibOpen={setIsLibOpen}
                        />
                    </Col>
                    <Col span={14} className="song__wrapper" >
                        <Song currentSong={currentSong} isPlaying={isPlaying} />
                        <Player
                            audioRef={audioRef}
                            songs={songs}
                            currentSong={currentSong}
                            songState={songState}
                            setSongState={setSongState}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            nextSong={() => handleChangeSong('next')}
                            prevSong={() => handleChangeSong('previous')}
                            buttonStatus={buttonStatus}
                            isPlaylistRepeat={isPlaylistRepeat}
                            setIsPlaylistRepeat={setIsPlaylistRepeat}
                        />
                    </Col>
                </Row>
            </div>

            <div className="small__bigSize" >
                <Library
                    songs={songs}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                    setIsPlaying={setIsPlaying}
                    isLibOpen={isLibOpen}
                    setIsLibOpen={setIsLibOpen}
                />

                <div>
                    <Song currentSong={currentSong} />
                    <Player
                        audioRef={audioRef}
                        songs={songs}
                        currentSong={currentSong}
                        songState={songState}
                        setSongState={setSongState}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        nextSong={() => handleChangeSong('next')}
                        prevSong={() => handleChangeSong('previous')}
                        buttonStatus={buttonStatus}
                        isPlaylistRepeat={isPlaylistRepeat}
                        setIsPlaylistRepeat={setIsPlaylistRepeat}
                    />
                </div>
            </div>



            <audio
                ref={audioRef}
                src={currentSong.audio}
                onTimeUpdate={handleSongTimer}
                onLoadedMetadata={handleSongTimer}
                onEnded={() => handleChangeSong('next')}
            > </audio>
        </div>
    );
}

export default App_Player;