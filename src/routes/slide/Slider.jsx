import React, {PropTypes} from 'react';
import SlideItem from './SlideItem.jsx';

export default class Slider extends React.Component {

    static propTypes = {
        slides: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const slides = this.props.slides.map(slide => {
            return <SlideItem src={slide.src} key={slide.id}/>;
        })
        return (
            <ul className="slides" id="slides">
                {slides}
            </ul>
        );
    }
}