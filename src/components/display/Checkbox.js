
import React from 'react';
import '../styles/checkbox.css';

export default class Checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    this.setState(({ isChecked }) => (
      { isChecked: !isChecked, }
    ));
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox" onClick={this.toggleCheckboxChange}>
        <label onClick={this.toggleCheckboxChange}>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onClick={this.toggleCheckboxChange}           
          />
          {label}
        </label>
      </div>
    );
  };
};
