import React from 'react';

import classes from './Movie.module.css';

export default function Movie(props) {
 return (
    <li className={classes.movie}>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.description}</p>
        <p>{props.country}</p>
        <p>{props.universe}</p>
    </li>
 )
}