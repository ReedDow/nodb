import React from 'react';
import Favorites from './Favorites';

const FavoriteSetup = props => {
    const originalPhoto = props.favorites.map(
        (photo, i) => (
            <Favorites
                key ={i}
                photo = {photo}
                titleFn = {props.titleFn}
                deleteFn = {props.deleteFn}/>
        )
    )

    
    return(
        <div>
            <title className = 'favTitle'>Favorites</title>
            <div className ='photos'>
                {originalPhoto}
            </div>
            
        </div>
    )
}
export default FavoriteSetup;