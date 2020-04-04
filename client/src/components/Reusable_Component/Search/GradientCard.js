import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles, {
  _shadowStyle,
  _imageStyle,
  _gradientColors,
  _outerContainer
} from "./styles/GradientCard.style";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "react-native-fast-image";

//const defaultImageSource = require("../../../assets/Bitcoin.png");

const GradientCard = props => {
  const {
    id,
    onSelectService,
    end,
    start,
    title,
    width,
    style,
    height,
    subtitle,
    imageWidth,
    imageHeight,
    shadowColor,
    titleStyle,
    imageStyle,
    centerTitle,
    shadowStyle,
    imageSource,
    borderRadius,
    subtitleStyle,
    centerSubtitle,
    outerContainer,
    innerContainer,
    gradientColors,
    imageComponent,
    rightComponent,
    imageResizeMode,
    centerTitleStyle,
    imageBorderRadius,
    centerSubtitleStyle
  } = props;

  return (
    <TouchableOpacity style={[style, shadowStyle || _shadowStyle(shadowColor)]} onPress={() => onSelectService(id)}>
      <LinearGradient
        start={start || { x: 0, y: 0 }}
        end={end || { x: 1, y: 0 }}
        colors={gradientColors || _gradientColors}
        style={outerContainer || _outerContainer(height, width, borderRadius)}
      >
        <View style={innerContainer || styles.innerContainer}>
          
          <View style={styles.row}>
          <Icon name="ios-arrow-dropright-circle" size={20} 
              backgroundColor="transparent" color="#D63031" 
              >
              </Icon >
            <Text style={titleStyle || styles.titleStyle}>
              {title || "BCT"}
            </Text>
          </View>

        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientCard;
