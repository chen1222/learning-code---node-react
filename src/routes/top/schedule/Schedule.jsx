import React, { Component, PropTypes } from 'react';

import CardLabel from '../CardLabel.jsx';
import BoxNav from './BoxNav.jsx';
import PlanBoxes from './PlanBoxes.jsx';

class Schedule extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="card card-separated">
                    <CardLabel
                        title="今日の学習予定内容"
                        pic="img/icons/cal_white.png"
                    />
                    <div className="plan-area">
                        <div className="row">
                            <BoxNav/>
                            <PlanBoxes/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;