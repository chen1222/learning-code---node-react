import React, { PropTypes } from 'react';

import Banner from './Banner.jsx';
import Content from './Content.jsx';
import HelpModal from './HelpModal.jsx';

class Movies extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  
  render() {
    const src="https://www.youtube.com/embed/E48yU9mtUFU";

    return (
      <div>
        <Banner/>
        <Content src={src}/>
        <HelpModal />
      </div>
    );
  }
}

export default Movies;