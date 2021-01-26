import React from 'react';
import './Cards.css';

interface SwipeCardState {
    originalHeight: number | null,
    originalY: number | null,
    originalMouseY: number
}

export interface SwipeCardProps {
    children?: any;
}

const MIN_SIZE = 50;
const MAX_SIZE = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

class SwipeCard extends React.Component<SwipeCardProps, SwipeCardState> {
    constructor(props: SwipeCardProps) {
        super(props);

        this.state = {
            originalHeight: 0,
            originalY: 0,
            originalMouseY: 0
        };
    }

    mousedown(event: any) {
        const element = document.querySelector('.resizable'),
            mobileTouch = event.changedTouches;

        this.setState({
            originalHeight: element && parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', '')),
            originalY: element && element.getBoundingClientRect().top,
            originalMouseY: !!mobileTouch && mobileTouch[0].pageY || event.pageY
        })
    }

    start(event: any) {
        
        const originalHeight = this.state.originalHeight;
        const originalY = this.state.originalY;
        const element = document.querySelector('.resizable'),
            mobileTouch = event.changedTouches,
            pageY = !!mobileTouch && mobileTouch[0].pageY || event.pageY,
            pageYScroll = (pageY - this.state.originalMouseY),
            height = originalHeight && (originalHeight - pageYScroll),
            isHeighInRange = height && (height > MIN_SIZE && height < MAX_SIZE),
            styles = `height: ${height}px; top: ${originalY && (originalY + pageYScroll)}px;`;

        isHeighInRange && element && (element.setAttribute('style', styles));
    }

    render() {
        return (
            <div id="SwipeCard" className='resizable'>
                <div className='resizers'
                >
                    {this.props.children}
                </div >
            </div >
        );
    }
}

export default SwipeCard;
