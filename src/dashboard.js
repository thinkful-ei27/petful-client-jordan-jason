import React from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';
import { fetchCat } from './actions/cat'
import { fetchDog } from './actions/dog'

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptPet() {
    console.log('Adopt was clicked')
  }

  render() {
    console.log(this.props.catToAdopt)
    return (
      <div>
        <Pet animal={this.props.catToAdopt} onAdoptPet={this.onAdoptPet} />
        <Pet animal={this.props.dogToAdopt} onAdoptPet={this.onAdoptPet} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.catReducer.catToAdopt,
  dogToAdopt: state.dogReducer.dogToAdopt
});

export default connect(mapStateToProps)(Dashboard);