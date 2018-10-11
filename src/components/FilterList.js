import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class FilterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    };

    this.select = this.select.bind(this);
  }

  select(event, group) {
    event.preventDefault();
    this.setState({ selected: group });
  }

  componentDidMount() {
    this.setState({
      selected: this.props.list.length && this.props.list[0]
    });
  }

  render() {
    return (
      <div className="b-content-filter">
        <ul className="b-content-filter__list">
          {this.props.list.map(item => (
            <li className="b-content-filter__list-item">
              <a
                href="#"
                className={classNames({
                  'b-content-filter__list-item-link': true,
                  'b-content-filter__list-item-link--active':
                    item === this.state.selected
                })}
                onClick={e => {
                  this.select(e, item);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

FilterList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FilterList;
