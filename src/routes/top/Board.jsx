import React, {Component, PropTypes} from 'react';

import Achivement from './achievement/Achievement.jsx';
import Schedule from './schedule/Schedule.jsx';
import Courses from './courses/Courses.jsx';

class Board extends Component {
    render() {
        return (
            <div className="container">
                <div className="row board-area">
                    <Achivement/>
                    <Schedule/>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-area">
                        学習可能なコース
                    </div>
                </div>
                <div className="row board-area">
                    <Courses/>
                </div>
            </div>
        );
    }
}

export default Board;