import React from "react";
import "./App.css";


function Cards(props){
    return (
        <div>
            {props.loading && <p>Caricamento...</p>}
            {props.error && <p>{props.error}</p>}
            {props.userData &&
            <div className='card'>
            <img className='card-img-top' src={props.userData.avatar_url}></img>
            <div className='card-body'>
                <h2 className='card-title'>{props.userData.name}</h2>
                <p className='card-text'>{props.userData.bio}</p>
                <ul className='list-group list-group-flush'>
                <p className='list-group-item'>Numero di repository pubblici: {props.userData.public_repos}</p>
                <p className='list-group-item'>Numero di seguaci: {props.userData.followers}</p>
                </ul>
            </div>
            </div>}
        </div>
    )
}

export default Cards;
