import React from 'react';
import Pet from './components/Pet';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  catToAdopt: props.catToAdopt,
    dogToAdopt: props.dogToAdopt
  }
  }

  render() {
    return (
      <div>
      <Pet animal={this.state.catToAdopt} onAdoptPet={console.log('onAdopt ran')} />
      <Pet animal={this.state.dogToAdopt} onAdoptPet={console.log('onAdopt ran')} />
      </div>
    )

  }
}