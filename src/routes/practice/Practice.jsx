import React from 'react';

import Banner from './Banner.jsx';
import Content from './Content.jsx';
import HintModal from './HintModal.jsx';
import AnswerModal from './AnswerModal.jsx';

import {practiceModel} from './practice-model.js';

export default class Practice extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <Content practiceModel={practiceModel}/>
                <HintModal />
                <AnswerModal />
            </div>
        );
    }
}