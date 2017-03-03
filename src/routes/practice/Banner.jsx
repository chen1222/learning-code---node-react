import React from 'react';

export default class Banner extends React.Component {
    render() {
        return (
            <div className="eyecatch">
                <div className="container">
                    <div className="row studies">

                        <div className="col-sm-1 col-xs-3">
                            <div className="study-image">
                            <img src="img/icons/list_white.png"/>
                            <p className="study-image-text">写経学習</p>
                            </div>
                        </div>

                        <div className="col-sm-5 col-xs-9">
                            <div className="study-count">LESSON 01</div>
                            <h1 className="study-title">webページの基礎</h1>
                            <div className="study-description">説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説</div>
                        </div>

                        <div className="col-sm-1 col-sm-offset-4 col-xs-2 col-xs-offset-9 icon-box icon-small">
                            <a href="/lessons">
                            <img className="icon-image" src="img/icons/back_white.png"/>
                            <p className="icon-text white">一覧へ</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}