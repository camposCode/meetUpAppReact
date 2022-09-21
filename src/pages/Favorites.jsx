import React from 'react'
import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetUpList';
import FavoritesContext from '../store/favorites-context';

const Favorites = () => {

    const favoritesCtx = useContext(FavoritesContext); 

    return <section>
        <h1>My Favorites</h1>
        <MeetupList meetups = { favoritesCtx.favorites }/>
    </section>
}

export default Favorites;