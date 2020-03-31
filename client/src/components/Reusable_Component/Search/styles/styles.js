import { Platform, Dimensions } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

const { height } = Dimensions.get('window')

export const centerSubtitleStyle = item => ({
  fontSize: 12,
  marginLeft: 8,
  textAlign: "center",
  color: item.strokeColor
});

export default {
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "#21283d"
  },
  flatListStyle: {
    position: 'absolute',
    backgroundColor: "#C8C8C8",
    height: height,
    marginTop: 55,
    zIndex: 10
  },
  cardShadowStyle: {
    ...Platform.select({
      ios: {
        shadowRadius: 3,
        shadowOpacity: 0.4,
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 3
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  cardStyle: {
    marginTop: 2,
    width: ScreenWidth,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    ...Platform.select({
      android: {
        top: 0
      }
    }),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232f3e"
  },
  welcome: {
    margin: 10,
    fontSize: 20,
    textAlign: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  chartStyle: {
    height: 100,
    width: 100
  },
  chartContentInset: {
    top: 30,
    bottom: 30
  }
};
