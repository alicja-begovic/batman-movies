import React from 'react';

export default function Movie(props) {
 return (
    <li>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.description}</p>
        <p>{props.country}</p>
        <p>{props.universe}</p>
    </li>
 )
}