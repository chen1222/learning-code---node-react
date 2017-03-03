import React, { Component, PropTypes } from 'react';

import ChartCanvas from './ChartCanvas.jsx';
import CardLabel from '../CardLabel.jsx';
import CardArchieve from './CardArchieve.jsx';


class Achievement extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="card card-separated">
                    <CardArchieve remaining={5} percent={80}/>
                    <CardLabel title="目標の達成度" pic="img/icons/goal_white.png" />
                    <ChartCanvas/>
                </div>
            </div>
        );
    }
}

export default Achievement;