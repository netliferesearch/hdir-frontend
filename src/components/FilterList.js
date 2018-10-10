import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const selectedColor = color =>
  classNames({
    'b-content-filter__selected': true,
    'b-content-filter__selected--blue': color === 'blue',
    'b-content-filter__selected--green': color === 'green',
    'b-content-filter__selected--orange': color === 'orange',
    'b-content-filter__selected--yellow': color === 'yellow'
  });

const listItemColor = color =>
  classNames({
    'b-content-filter__list-item': true,
    'b-content-filter__list-item--blue': color === 'blue',
    'b-content-filter__list-item--green': color === 'green',
    'b-content-filter__list-item--orange': color === 'orange',
    'b-content-filter__list-item--yellow': color === 'yellow'
  });

class FilterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGroup: null
    };

    this.selectGroup = this.selectGroup.bind(this);
    this.removeGroup = this.removeGroup.bind(this);
  }

  selectGroup(event, group) {
    event.preventDefault();
    this.setState({ selectedGroup: group });
  }

  removeGroup() {
    this.setState({ selectedGroup: null });
  }

  render() {
    return (
      <div className="b-content-filter">
        {this.props.bombasticSelect &&
          this.state.selectedGroup && (
            <div className={selectedColor(this.state.selectedGroup.color)}>
              <button
                className="b-content-filter__unselect-button"
                onClick={this.removeGroup}
              >
                Nullstill
              </button>
              {this.state.selectedGroup.name}
            </div>
          )}
        {!this.state.selectedGroup && (
          <ul className="b-content-filter__list">
            {this.props.list.map(item => (
              <li className={listItemColor(item.color)}>
                <a
                  href="#"
                  onClick={e => {
                    this.selectGroup(e, item);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

FilterList.propTypes = {
  bombasticSelect: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FilterList;
