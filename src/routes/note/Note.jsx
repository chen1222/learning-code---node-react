import React from 'react';

import Banner from './Banner.jsx';
import Content from './Content.jsx';

import {codeModel} from './code-model.js';

export default class Note extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <Content codeModel={codeModel}/>
            </div>
        );
    }
}