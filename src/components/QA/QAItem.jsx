import React, {PropTypes} from 'react';

export default class QAItem extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
    }

    render() {
        return (
              <div className="help-box col-sm-10 col-sm-offset-1">
                <div className="help-title" id="help-title">{this.props.title}</div>
                <div className="help-answer" id="help-answer">{this.props.answer}</div>
              </div>
        );
    }
}