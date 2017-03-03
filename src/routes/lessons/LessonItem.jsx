import React, {PropTypes} from 'react';

import Label from './Label.jsx';
import CheckBox from './CheckBox.jsx';

export default class LessonsList extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-8 col-sm-offset-2 top-20">
                <div className="card">
                    <Label label={this.props.label}/>
                    
                    <div className="row in-card">
                        <div className="col-sm-7">
                            <h2 className="lesson-card-title">{this.props.title}</h2>
                            <div className="lesson-card-description">{this.props.desc}</div>
                        </div>

                        <div className="col-sm-1 col-xs-2 col-sm-offset-0 col-xs-offset-1 icon-box">
                            <a href="/slide">
                            <img src="img/icons/presen_green.png" className="icon-image"/>
                            <p className="icon-text">スライド</p>
                            </a>
                        </div>
                        <div className="col-sm-1 col-xs-2 icon-box">
                            <a href="/movies">
                            <img src="img/icons/movie_green.png" className="icon-image"/>
                            <p className="icon-text">動画学習</p>
                            </a>
                        </div>
                        <div className="col-sm-1 col-xs-2 icon-box">
                            <a href="/note">
                            <img src="img/icons/note_green.png" className="icon-image"/>
                            <p className="icon-text">写経学習</p>
                            </a>
                        </div>
                        <div className="col-sm-1 col-xs-2 icon-box">
                            <a href="/practice">
                            <img src="img/icons/list_green.png" className="icon-image"/>
                            <p className="icon-text">練習問題</p>
                            </a>
                        </div>
                        <CheckBox flag="no"/>
                    </div>
                </div>
            </div>
        );
    }
}