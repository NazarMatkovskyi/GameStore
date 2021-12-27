import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Racing', 'Simulator', 'Open World'],
        price: 2343,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "An endless kaleidoscope of Horizon adventures awaits! Drive the greatest cars in history through the incredibly beautiful and distinctive world of Mexico. Start your Horizon adventure today by adding the game to your wishlist!",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Action', 'Shooter', 'War'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2433,
        id: 2,
        description: 'Battlefield ™ 2042 is a first-person shooter that returns the series to legendary epic action.In a chaotic future, adapt and thrive on ever-changing battlegrounds with your squad and arsenal of the latest technology.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Deep story', 'Protagonist'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 3021,
        id: 3,
        description: 'Alex Chen hides from everyone his "curse" - the supernatural ability to read the strong emotions of others and influence them.But when her brother dies - ostensibly in an accident - Alex uses her to find out the truth.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres:['Open World', 'Action'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 789,
        id: 4,
        description: "Grand Theft Auto V for PC allows gamers to explore the famous world of Los Santos and Blaine County in up to 4k and 60fps."
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres:['Tactics', 'Shooter'],
        price: 982,
        id: 5,
        description: 'Tom Clancy Rainbow Six Siege is the sequel to the acclaimed first-person shooter developed by Ubisoft Montreal. '
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Parkour', 'RPG', 'Open World'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2863,
        id: 6,
        description:  'Assassins Creed Valhalla is a multi-platform action  RPG computer game developed by Ubisoft Montreal and published by Ubisoft.It is the twelfth title in the Assassins Creed series. '
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}