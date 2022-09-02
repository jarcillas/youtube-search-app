import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  };

  onInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>
              <h4>Search YouTube</h4>
            </label>
            <input
              type="text"
              placeholder="Enter a search term..."
              onChange={this.onInputChange}
              value={this.state.searchTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
