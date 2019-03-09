import React from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';
import { fetchCat, deleteCat } from './actions/cat'
import { fetchDog, deleteDog } from './actions/dog'

export class Dashboard extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  handleAdoptCat() {
    this.props.dispatch(deleteCat());
  }
  handleAdoptDog() {
    this.props.dispatch(deleteDog());
  }

  render() {
    if (this.props.catToAdopt && this.props.dogToAdopt) {
      return (
        <div>
          <Pet animal={this.props.catToAdopt} onAdoptPet={() => this.handleAdoptCat()} />
          <Pet animal={this.props.dogToAdopt} onAdoptPet={() => this.handleAdoptDog()} />
        </div>
      )
    }
    return (
      <p>loading</p>
    )
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.catReducer.catToAdopt,
  dogToAdopt: state.dogReducer.dogToAdopt
});

export default connect(mapStateToProps)(Dashboard);