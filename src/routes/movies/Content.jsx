import React, {PropTypes} from 'react';

import Video from './Video.jsx';

export default class Content extends React.Component {

    static propTypes = {
        src: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 study-area">
                        <div className="card">
                            <a href=""><div className="circle-button-left"><i className="fa fa-angle-left"></i></div></a>
                            <div className="circle-button-left-text">前のレッスン</div>

                            <Video src={this.props.src}/>

                            <a href=""><div className="circle-button-right"><i className="fa fa-angle-right"></i></div></a>
                            <div className="circle-button-right-text">次のレッスン</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}