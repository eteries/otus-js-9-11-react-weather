import React, {Component} from 'react';
import './FavBtn.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

export default class FavBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: props.isFavorite
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isFavorite !== prevState.isFavorite) {
      return ({
        isFavorite : nextProps.isFavorite
      });
    }
    return prevState;

  }

  handleClick = () => {
    if (this.props.cb) {
      this.props.cb(this.props.cityId, this.props.city);
    }
  };

  render() {
    return (
      <button className={this.state.isFavorite ? 'Button Button--icon-black' : 'Button'}
              onClick={this.handleClick}>
        <span className="Button__icon"><FontAwesomeIcon icon={faHeart} /></span>
        { !this.state.isFavorite && <span>Add to favorites</span> }
        { this.state.isFavorite && <span>Remove from favorites</span> }
      </button>
      )
  }
}
