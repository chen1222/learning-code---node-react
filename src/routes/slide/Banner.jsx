import React, {Component, PropTypes} from 'react';

class Banner extends Component {
    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     label: PropTypes.number.isRequired,
    //     desc: PropTypes.string.isRequired
    // }

    render() {
        return (
            <div className="eyecatch">
                <div className="container">
                    <div className="row studies">

                        <div className="col-sm-1 col-xs-3">
                            <div className="study-image">
                            <img src="img/icons/presen_white.png"/>
                            <p className="study-image-text">スライド学習</p>
                            </div>
                        </div>

                        <div className="col-sm-5 col-xs-9">
                            <div className="study-count">LESSON 01</div>
                            <h1 className="study-title">webページの基礎</h1>
                            <div className="study-description">説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説</div>
                        </div>

                        <div className="col-sm-1 col-xs-2 col-xs-offset-1 icon-box icon-small">
                            <a href="/movies">
                            <img className="icon-image" src="img/icons/movie_white.png"/>
                            <p className="icon-text white">動画学習へ</p>
                            </a>
                        </div>
                        <div className="col-sm-1 col-xs-2 icon-box icon-small"  data-toggle="modal" data-target="#faqModal" id="">
                            <a>
                            <img className="icon-image" src="img/icons/question_white.png"/>
                            <p className="icon-text white">よくある質問</p>
                            </a>
                        </div>
                        <div className="col-sm-1 col-xs-2 icon-box icon-small">
                            <a href="">
                            <img className="icon-image" src="img/icons/like_white.png"/>
                            <p className="icon-text white">わかりやすい</p>
                            </a>
                        </div>
                        <div className="col-sm-1 col-xs-2 icon-box icon-small">
                            <a href="">
                            <img className="icon-image" src="img/icons/unlike_white.png"/>
                            <p className="icon-text white">わかりにくい</p>
                            </a>
                        </div>
                        <div className="col-sm-1 col-xs-2 icon-box icon-small">
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

export default Banner;