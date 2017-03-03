import React, { PropTypes } from 'react';

export default class LeftNote extends React.Component {

    static propTypes = {
        codeModel: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {codeModel} = this.props;
        return (
            <div className="col-sm-6 left-note">
                <div className="code">
                    <div className="code-title">テキスト</div>
                    <pre><code code="html">
                        {codeModel}
                    </code></pre>
                </div>
            </div>
        );
    }
}