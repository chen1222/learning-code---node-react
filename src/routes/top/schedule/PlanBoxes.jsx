import React from 'react';

import PlanBox from './PlanBox.jsx';
import {plans} from './plan-data.js';

export default class PlanBoxes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: 2
        }
        this.planboxes = plans.map(plan => {
            let isToday = (this.state.today == plan.id);
            return <PlanBox title={plan.title} content={plan.content} key={plan.id} isToday={isToday}/>
        })
    }
    render() {
        return (
            <div className="col-sm-9 col-xs-10 plan-boxes" id="plan-boxes">
                {this.planboxes}
            </div>
        );
    }
}
