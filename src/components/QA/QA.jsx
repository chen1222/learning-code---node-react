import React, {PropTypes} from 'react';

import QAItem from './QAItem.jsx';

export default class QA extends React.Component {
    static propTypes = {
        QAs: PropTypes.array.isRequired
    }

    render() {
        const QAs = this.props.QAs.map(QA => {
            return <QAItem title={QA.title} answer={QA.answer} key={QA.id}/>
        })
        return (
            <div className="help-area col-sm-12" id="help-area">
                {QAs}
            </div>
        );
    }
}