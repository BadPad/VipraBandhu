import { Dimensions, Platform } from "react-native";
import { App_Color } from "../../ConstantValues";

const { width } = Dimensions.get("window");
const deviceWidth = width;

export const _gradientColors = [
  "rgba(255,255,255,1)",
  "rgba(255,255,255,1)",
  "rgba(255,255,255,1)"
];

export function _shadowStyle(shadowColor) {
  return {
    ...Platform.select({
      ios: {
        shadowColor: shadowColor || "#595959",
        shadowOffset: {
          width: 1,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.5
      },
      android: {
        elevation: 3
      }
    })
  };
}

export function _outerContainer(height, width, borderRadius) {
  return {
    height: height || 40,
    borderRadius: borderRadius || 0,
    width: width || deviceWidth * 0.95,
    borderBottomColor: App_Color,
    borderBottomWidth: 0.8,
  };
}

export function _imageStyle(imageWidth, imageHeight, imageBorderRadius) {
  return {
    width: imageWidth || 35,
    height: imageHeight || 35,
    borderRadius: imageBorderRadius || 10
  };
}

export default {
  innerContainer: {
    flex: 1,
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "flex-start",
    justifyContent: "center"
  },
  row: { flexDirection: "row" },
  titleStyle: {
    width: 200,
    fontSize: 14,
    color: "black",
    marginLeft: 8,
    textAlign: "left",
    fontWeight: "bold"
  },
  subtitleStyle: {
    width: 85,
    fontSize: 13,
    marginLeft: 8,
    color: "#E2E2E2",
    textAlign: "left"
  },
  centerTextContainer: {
    marginLeft: width * 0.01
  },
  centerTitleStyle: {
    marginLeft: 8,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  centerSubtitleStyle: {
    fontSize: 12,
    marginLeft: 8,
    textAlign: "center",
    color: "rgba(163, 224, 97, 1.0)"
  },
  rightContainer: { left: 40 }
};
