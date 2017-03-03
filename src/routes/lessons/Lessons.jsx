import React from 'react';

import Banner from './Banner.jsx';
import {lessons} from './lessons-data.js';
import LessonsList from './LessonsList.jsx';

export default class Lessons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = "HTML&CSS",
            count = 20,
            desc = "説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明";
            
        return (
            <div>
                <Banner title={title} count={count} desc={desc}/>
                <LessonsList lessons={lessons}/>
            </div>
        );
    }
}