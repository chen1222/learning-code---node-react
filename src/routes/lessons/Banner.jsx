import React, {Component, PropTypes} from 'react';

class Banner extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        desc: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="eyecatch">
                <div className="container">
                    <div className="row lessons">

                        <div className="col-sm-2">
                            <div className="lesson-image">
                                <img src="img/logo-php.png"/>
                            </div>
                        </div>

                        <div className="col-sm-8">
                            <div className="lesson-count">
                                全{this.props.count}レッスン
                            </div>
                            <h1 className="lesson-title">{this.props.title}</h1>
                            <div className="lesson-description">
                                {this.props.desc}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;