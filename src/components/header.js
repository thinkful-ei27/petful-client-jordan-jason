import React from 'react';
import { toggleInfo } from '../actions/cat'
import { connect } from 'react-redux';

export class Header extends React.Component {
  // handleClick() {
  //   toggleInfo();
  // }

  render() {
    return (
      <div className="header">
        <h1>J&J's Pet Emporium</h1>
        {/*<button
           type='button'
           className='toggle-info'
           onClick={this.handleClick}>How It Works</button>*/}
        <p>We operate a first in first out policy at J&J's!
        So you get whichever cuddly buddy has been in here the longest.
        Click Adopt to take home your new feline or canine best friend and
           move the next animal up to the front of the line!</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showInfo: state.catReducer.showInfo
});

export default connect(mapStateToProps)(Header);