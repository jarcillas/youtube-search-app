import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoList: [] };
  }

  onFormSubmit = async (term) => {
    const videos = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    console.log(videos.data.items);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
