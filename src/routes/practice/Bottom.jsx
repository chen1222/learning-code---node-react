import React, { PropTypes } from 'react';

export default class Bottom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="note-bottom">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card-button fleft" data-toggle="modal" data-target="#hintoModal">
                            <img src="img/icons/light_white.png" className="button-icon" />
                            ヒント
                        </div>
                        <div className="card-button fleft" data-toggle="modal" data-target="#answerModal">
                            <img src="img/icons/eye_white.png" className="button-icon" />
                            答え
                        </div>
                    </div>

                    <div className="col-sm-2 col-sm-offset-6">
                        <div className="card-button">完了</div>
                    </div>
                </div>
            </div>
        );
    }
}