import React, {PropTypes} from 'react';

import CourseProgress from './CourseProgress.jsx';
import CourseLogo from './CourseLogo.jsx';
import AttendButton from './AttendButton.jsx';

export default class CoursePreview extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        progress: PropTypes.number.isRequired
    }

    render() {
        return (
            <div className="col-sm-4">
                <div className="card card-separated topline center">
                    <h3 className="card-title">{this.props.title}</h3>
                    <hr className="card-line" />
                    <div className="card-sub-title">{this.props.subtitle}</div>
                    <CourseLogo src="img/logo-php.png"/>
                    <div className="card-description">{this.props.desc}</div>
                    <CourseProgress progress={this.props.progress}/>
                    <AttendButton/>
                    <br/>
                </div>
            </div>
        );
    }
}