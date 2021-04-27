import { v4 as uuidv4 } from 'uuid';
import grftl from "../assets/cover__grtfl FW.jpg";
import talk from "../assets/talk.png";
import mama_africa from "../assets/mama_africa.jpeg";
import money_mulla from "../assets/money_mulla.png";
import notAvailable from "../assets/notAvailable.jpeg";

import Talk from "../assets/Talk.mp3";
import Grtfl from "../assets/Grtfl.m4a";
import Best_Boy from "../assets/Best_Boy.m4a";
import Money_Mulla from "../assets/Money_mulla.m4a";
import Black_Mamba from "../assets/Black_Mamba.m4a";
import Mama_Africa from "../assets/Mama_Africa.mp3"

function chillHop() {

    return [
        {
            name: 'GRTFL',
            cover: grftl,
                // 'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
            artist: 'Black Fw',
            audio: Grtfl,

            // audio: 'https://soundcloud.com/user-894812315/mama-africa-prod-by-skar',
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
            artist: 'Black Fw',
            audio: Talk,

            // audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
            color: ['#EF8EA9', '#ab417f'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Black Mamba',
            cover: notAvailable,
            artist: 'Black Fw',
            audio: Black_Mamba,
            color: ['#CD607D', '#c94043'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Mama Africa',
            cover: mama_africa,
                // 'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
            artist: 'Black Fw X Del Claude X Fresh MC',
            audio: Mama_Africa,
            color: ['#EF8EA9', '#ab417f'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Best boy',
            cover: notAvailable,
            artist: 'Chelmi B X Black Fw',
            audio: Best_Boy,
            color: ['#CD607D', '#c94043'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Money Moulla',
            cover: money_mulla,
            artist: 'Black FW X Chelmi B X Sarkodie',
            audio: Money_Mulla,
            color: ['#205950', '#2ab3bf'],
            id: uuidv4(),
            active: false,
        },

    ];
}

export default chillHop;