import React, {PropTypes} from 'react';

export default class CompleteButton extends React.Component {

    static propTypes = {
        runTest: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.runTest = this.runTest.bind(this);
    }

    runTest() {
        this.props.runTest();
    }

    render() {
        return (
            <div className="note-bottom">
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-10">
                        <div className="card-button"
                            onClick={this.runTest}
                        >
                            完了
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}