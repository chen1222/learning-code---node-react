import React from 'react';

import { courses } from './courses-data.js';
import CoursePreview from './CoursePreview.jsx';

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.courses = courses.map(course => {
            return <CoursePreview
                title={course.title}
                subtitle={course.subtitle}
                desc={course.desc}
                progress={course.progress}
                key={course.id} />
        })
    }

    render() {
        return (
            <div>
                {this.courses}
            </div>
        );
    }
}