import React, {PropTypes} from 'react';

export default class Video extends React.Component {
    static propTypes = {
        src: PropTypes.string.isRequired
    }

    render() {
        return (
            <iframe width="100%" height="400" src={this.props.src} frameBorder="0" allowFullScreen></iframe>
        );
    }
}