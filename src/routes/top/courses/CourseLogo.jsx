import React, {PropTypes} from 'react';

export default class CousreLogo extends React.Component {

    static propTypes = {
        src: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="card-image">
                <img src={this.props.src}/>
            </div>
        );
    }
}