import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import Slider from './Slider.jsx';

export default class Content extends React.Component {

    static propTypes = {
        slides: PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 slide-area" id="slide-area">
                        <div className="card">
                            <div className="circle-button-left slide-left-circle" >
                                <i className="fa fa-angle-left"></i>
                            </div>
                            <div className="circle-button-left-text slide-left-circle">前のレッスン</div>
                            <div className="circle-button-right slide-right-circle"><i className="fa fa-angle-right"></i></div>
                            <div className="circle-button-right-text slide-right-circle">次のレッスン</div>

                            <Slider slides={this.props.slides} />

                            <div className="slide-bottom">
                                <div className="row">
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-1 col-xs-3"><div className="slide-left" id="slide-left">◀</div></div>
                                    <div className="col-sm-2 col-xs-6">（<span id="slide-current">1</span> / <span id="slide-max">18</span>）</div>
                                    <div className="col-sm-1 col-xs-3 slide-right" id="slide-right">▶</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}