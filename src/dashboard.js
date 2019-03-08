import React from 'react';
import Pet from './components/Pet';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catToAdopt: props.catToAdopt,
      dogToAdopt: props.dogToAdopt
    }
  }

  onAdoptPet() {
    console.log('Adopt was clicked')
  }

  render() {
    return (
      <div>
        <Pet animal={this.state.catToAdopt} onAdoptPet={this.onAdoptPet} />
        <Pet animal={this.state.dogToAdopt} onAdoptPet={this.onAdoptPet} />
      </div>
    )

  }
}