import React from 'react'
import './Slider.css'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Slider = () => {
    return (
        <div className='slider'>
            <span className='slider__title'>What's Popular</span>
            <span className='slider__container'>
                <ToggleButtonGroup
                    color="primary"
                    exclusive
                    className='toggleButton'
                >
                    <ToggleButton>Streaming</ToggleButton>
                    <ToggleButton>On TV</ToggleButton>
                </ToggleButtonGroup>
            </span>
        </div>
    )
}

export default Slider