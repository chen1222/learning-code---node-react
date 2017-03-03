import React, {PropTypes} from 'react';

export default class RightNote extends React.Component {

    static propTypes = {
        onChange: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const note = ace.edit("editor").getValue();
        this.props.onChange(note);
    }

    render() {
        const style = {
            left: '2px'
        }
        return (
            <div className="col-sm-6 right-note">
                <div className="code black">
                    <div className="code-title" style={style}>Editor</div>
                    <div id="editor" className="editor" onKeyUp={this.onChange}>
                    </div>
                </div>
            </div>
        );
    }
}