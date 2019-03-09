import React from 'react';

export default function Pet(props) {
  return (
    <div className='pet-block' >
      <div className='pet-info'>
        <header>
          <h2>{props.animal.name}</h2>
          <img src={props.animal.imageURL} alt={props.animal.imageDescription} />
        </header>
        <main>
          <dl>
            <dt>Gender</dt>
            <dd>{props.animal.sex}</dd>
            <dt>Age</dt>
            <dd>{props.animal.age}</dd>
            <dt>Breed</dt>
            <dd>{props.animal.breed}</dd>
            <dt>Story</dt>
            <dd>{props.animal.story}</dd>
          </dl>
          <button
            className="adopt-button"
            type="submit"
            onClick={() => props.onAdoptPet()}>Adopt</button>
        </main>
      </div>
    </div>
  )
}
