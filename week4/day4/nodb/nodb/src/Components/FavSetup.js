import React from 'react';
import Favorites from './Favorites';
import { parentPort } from 'worker_threads';

const FavoriteSetup = props => {
    const mappedPhoto = props.favorites.map(
        (photo, i) => (
            <Favorites
                key ={i}
                photo = {photo}
                titleFn = {props.titleFn}
                deleteFn = {props.deleteFn}/>
        )
    )
    
    return(
        <favoritesection>
            <title>Favorites</title>
            <div className ='photos'>
                {mappedPhoto}
            </div>
            
        </favoritesection>
    )
}
export default FavoriteSetup;