import React from 'react';

export default class Label extends React.Component {
    render() {
        return (
            <div className="card-top mb-no-display">
                <span className="card-label">
                    <img className="card-label-icon" src="img/icons/note_white.png"/> 
                    左のテキスト内のコードを右のEditorに記入していきましょう。
                </span>
            </div>
        );
    }
}