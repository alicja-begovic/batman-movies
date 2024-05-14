import React, { useRef } from 'react';

function AddMovie(props) {
  const titleRef = useRef('');
  const descriptionRef = useRef('');
  const releaseDateRef = useRef('');
  const countryRef = useRef('');
  const universeRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      releaseDate: releaseDateRef.current.value,
      country: countryRef.current.value,
      universe: universeRef.current.value,  
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div >
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={descriptionRef}></textarea>
      </div>
      <div >
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <div >
        <label htmlFor='date'>Country</label>
        <input type='text' id='year' ref={countryRef} />
      </div>
      <div >
        <label htmlFor='date'>Universe</label>
        <input type='text' id='universe' ref={universeRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;


/*

title={movie.title}
releaseDate={movie.releaseDate}
description={movie.description}
country={movie.country}
universum={movie.universum}


*/