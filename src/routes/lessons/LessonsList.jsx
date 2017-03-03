import React, {PropTypes} from 'react';

import LessonItem from './LessonItem.jsx';

export default class LessonsList extends React.Component {

    static propTypes = {
        lessons: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const lessons = this.props.lessons.map(lesson => {
            return <LessonItem title={lesson.title} desc={lesson.desc} label={`Lesson ${lesson.id}`} key={lesson.id} />
        });
        
        return (
            <div className="container">
                <div className="row board-area">
                    {lessons}
                </div>
            </div>
        );
    }
}