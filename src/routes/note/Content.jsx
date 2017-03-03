import React, { PropTypes } from 'react';

import Control from './Control.jsx';
import Label from './Label.jsx';
import LeftNote from './LeftNote.jsx';
import RightNote from './RightNote.jsx';
import CompleteButton from './CompleteButton.jsx';
import SuccessModal from './SuccessModal.jsx';
import ErrorModal from './ErrorModal.jsx';

import * as jsDiff from './diff/lib';

export default class Content extends React.Component {

    static propTypes = {
        codeModel: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.rightNoteChange = this.rightNoteChange.bind(this);
        this.runTest = this.runTest.bind(this);
        this.openSuccessModal = this.openSuccessModal.bind(this);
        this.closeSuccessModal = this.closeSuccessModal.bind(this);
        this.openErrorModal = this.openErrorModal.bind(this);
        this.closeErrorModal = this.closeErrorModal.bind(this);

        this.state = {
            leftNote: this.props.codeModel,
            rightNote: '',
            openSuccessModal: false,
            openErrorModal: false,
            errorMessage: ''
        }
    }

    rightNoteChange(newNote) {
        this.setState({
            rightNote: newNote
        });
    }

    openSuccessModal() {
        this.setState({
            openSuccessModal: true
        });
    }

    closeSuccessModal() {
        this.setState({
            openSuccessModal: false
        });
    }

    openErrorModal() {
        this.setState({
            openErrorModal: true
        });
    }

    closeErrorModal() {
        this.setState({
            openErrorModal: false
        });
    }

    render() {
        const { codeModel } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1 note-area">
                        <div className="card">
                            <Control />
                            <Label />

                            <div className="note-content">
                                <LeftNote codeModel={codeModel} />
                                <RightNote
                                    onChange={this.rightNoteChange}
                                />
                            </div>

                            <CompleteButton
                                runTest={this.runTest}
                            />
                        </div>
                    </div>
                </div>
                <SuccessModal
                    close={this.closeSuccessModal}
                    open={this.state.openSuccessModal}
                    successMessage={"Success"}
                />
                <ErrorModal
                    close={this.closeErrorModal}
                    open={this.state.openErrorModal}
                    errorMessage={this.state.errorMessage}
                />
            </div>
        );
    }


    runTest() {
        const orig = this.state.leftNote;
        const practiceCode = this.state.rightNote;

        var diffOpt = {
            ignoreWhitespace: true
        };

        var diff = jsDiff.diffLines(orig, practiceCode, diffOpt);

        var missing = [];
        var added = [];

        var countDiff = 0;
        var addedCount = 0;
        

        diff.forEach(x => {
            if (x.added) {
                if (x.value == '\n')
                    ;
                else {
                    added.push(<span style={{ color: 'red' }}>{x.value}<br/></span>);
                    countDiff++;
                }
                console.log(x.value, 'added', 'diff');
            } else if (x.removed) {
                if (x.value == '\n')
                    ;
                else {
                    missing.push(<span style={{ color: 'red' }}>{x.value}</span>);
                    countDiff++;
                }
                console.log(x.value, 'removed');
            }
        });
        console.log(countDiff);
        if (countDiff === 0) {
            this.setState({
                openSuccessModal: true,
            });
        } else {
            var preStyle = {
                'text-align': 'left',
                'padding': '10px 30px',
                'background': 'white'
            }
            var addedStyle = {
                'border-left': 'solid 1px #ccc',
                'height': '100%'
            }
            var missingStyle = {
                'border-right': 'solid 1px #ccc',
                'height': '100%'
            }
            this.setState({
                openErrorModal: true,
                errorMessage: (
                    <div>
                        <div className="col-sm-12 col-md-6" style={missingStyle}>
                            <h1>Missing</h1>
                            <pre style={preStyle}><code code="html" >{missing}</code></pre>
                        </div>
                        <div className="col-sm-12 col-md-6" style={addedStyle}>
                            <h1>Added</h1>
                            <pre style={preStyle}><code code="html">{added}</code></pre>
                        </div>
                        <div style={{'clear': 'both'}}></div>
                    </div>
                )
            });
        }
    }
}