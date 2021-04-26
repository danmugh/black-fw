import { v4 as uuidv4 } from 'uuid';
import grftl from "../assets/cover__grtfl FW.jpg";
import talk from "../assets/cover__talk.jpg";
import soundfile from "../assets/Fally Ipupa-boule cover by SOUL(ACCAPELA).mp3";


function chillHop() {

    return [
        {
            name: 'GRTFL',
            cover: grftl,
                // 'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
            artist: 'Aso, Middle School, Aviino',
            audio: 'https://5000hits.com/songs/black-fw-talk-t-i-n-d/',

            // audio: 'https://www.youtube.com/watch?v=jY4LwBUVyP4',
            // audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
            color: ['#205950', '#2ab3bf'],
            id: uuidv4(),
            active: true,
        },
        {
            name: 'TALK T.I.N.D',
            cover: talk,
                // 'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
            artist: 'Aiguille',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
            color: ['#EF8EA9', '#ab417f'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Keep Going',
            cover:
                'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
            artist: 'Swørn',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
            color: ['#CD607D', '#c94043'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Nightfall',
            cover:
                'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
            artist: 'Aiguille',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
            color: ['#EF8EA9', '#ab417f'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Reflection',
            cover:
                'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
            artist: 'Swørn',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
            color: ['#CD607D', '#c94043'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Under the City Stars',
            cover:
                'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
            artist: 'Aso, Middle School, Aviino',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
            color: ['#205950', '#2ab3bf'],
            id: uuidv4(),
            active: false,
        },

    ];
}

export default chillHop;