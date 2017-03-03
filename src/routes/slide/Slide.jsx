import React, { PropTypes } from 'react';

import Banner from './Banner.jsx';
import Content from './Content.jsx';
import HelpModal from './HelpModal.jsx';
import {slides} from './slide-data.js';

class Slide extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  
  render() {
    return (
      <div>
        <Banner/>
        <Content slides={slides}/>
        <HelpModal />
      </div>
    );
  }
}

export default Slide;
