import React from 'react'
import { SliderBox } from "react-native-image-slider-box"

const Carousel = ({ images, paginationBoxStyle, dotStyle, imageComponentStyle }) => {
    return (
        <SliderBox
            images={images}
            sliderBoxHeight={200}
            dotColor="#232f3e"
            inactiveDotColor="#90A4AE"
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            imageLoadingColor="#2196F3"
            paginationBoxStyle={paginationBoxStyle}
            dotStyle={dotStyle}
            ImageComponentStyle={imageComponentStyle}
        />
    )
}

export default Carousel
