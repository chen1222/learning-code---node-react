import React, {PropTypes} from 'react'

export default class SlideItem extends React.Component {

    static propTypes = {
        src: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="slide" id="slide"><img src={this.props.src}/></li>
        );
    }
}