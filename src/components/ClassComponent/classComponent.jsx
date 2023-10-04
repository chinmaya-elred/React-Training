import React, { Component } from 'react';

class ToggleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      searchTerm: '',
    };
  }

  toggleList = () => {
    this.setState(prevState => ({
      showList: !prevState.showList,
    }));
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const { showList, searchTerm } = this.state;

    let filteredList = ['React', 'Javascript', 'HTML', 'CSS'];

    if (searchTerm) {
      filteredList = filteredList.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // const testError = someUndefinedVariable.property;

    return (
      <div>
        <button onClick={this.toggleList}>
          Toggle List
        </button>

        <input
          type="text"
          placeholder="Search items"
          value={searchTerm}
          onChange={this.handleSearch}
        />

        {showList && (
          <ul>
            {filteredList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ToggleList;
