import React, {Component, PropTypes} from 'react';


class Chart extends Component {
    constructor(props) {
        super(props);

        this.dataset_g = "5,10,15,20,25,30,35,40,45,50";
        this.dataset_a = "3,7,16,19,21,24,25,0,0,0";
        this.data_labels="1/1,2/1,3/1,4/1,5/1,6/1,7/1,8/1,9/1,10/1";
    }
    render() {
        return (
            <div className="chart-area" id="chart-area">
                <canvas id="line" height="280" width="400" 
                    data-dataset_g={this.dataset_g} 
                    data-dataset_a={this.dataset_a}
                    data-data_labels={this.data_labels} >
                </canvas>
            </div>
        );
    }
}

export default Chart;