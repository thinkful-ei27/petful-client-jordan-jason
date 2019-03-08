import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.catToAdpot = props.catToAdpot;
    this.dogToAdopt = props.dogToAdopt;
  }

  render() {
    return (
      <div className='pet-info' >
        <div className='cat-info'>
          <header>
            <h2>{this.catToAdpot.name}</h2>
            <img src={this.catToAdpot.imageURL} alt={this.catToAdpot.imageDescription} />
          </header>
          <main>
            <dl>
              <dt>Gender</dt>
              <dd>{this.catToAdpot.sex}</dd>
              <dt>Age</dt>
              <dd>{this.catToAdpot.age}</dd>
              <dt>Breed</dt>
              <dd>{this.catToAdpot.breed}</dd>
              <dt>Story</dt>
              <dd>{this.catToAdpot.story}</dd>
            </dl>
            <button>Adopt</button>
          </main>
        </div>
        <div className='dog-info'>
          <header>
            <h2>{this.dogToAdopt.name}</h2>
            <img src={this.dogToAdopt.imageURL} alt={this.dogToAdopt.imageDescription} />
          </header>
          <main>
            <dl>
              <dt>Gender</dt>
              <dd>{this.dogToAdopt.sex}</dd>
              <dt>Age</dt>
              <dd>{this.dogToAdopt.age}</dd>
              <dt>Breed</dt>
              <dd>{this.dogToAdopt.breed}</dd>
              <dt>Story</dt>
              <dd>{this.dogToAdopt.story}</dd>
            </dl>
            <button>Adopt</button>
          </main>
        </div>
      </div>
    )

  }
}