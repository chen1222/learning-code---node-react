import React from 'react';

export default class Control extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="circle-button-left"><i className="fa fa-angle-left"></i></div>
                <div className="circle-button-left-text">前のレッスン</div>
                <div className="circle-button-right"><i className="fa fa-angle-right"></i></div>
                <div className="circle-button-right-text">次のレッスン</div>
            </div>
        );                     
    }
}