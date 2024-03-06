import {StyleSheet} from "react-native";

//styles
import {Typography, Colors} from "../../assets/styles";

const {lineHeight, fontSize, fontWeight, letterSpacing, fontFamily} =
	Typography;
const {colors} = Colors;

export default StyleSheet.create({
	container: {
		height: 54,
		flex: 1,
		// justifyContent: "center",
		alignItems: "flex-start"
	},
	listedTab: {
		justifyContent: "flex-start"
	},
	bookedTab: {},
	wishedTab: {},
	tabWrapper: {
		height: 54
	},
	tabTextWrapper: {
		flex: 1,
		justifyContent: "center"
	},
	tabText: {
		fontSize: fontSize.x17,
		lineHeight: lineHeight.x22,
		color: colors.grey,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.medium,
		fontFamily: fontFamily.outfit
	},
	activeTab: {
		color: colors.black
	},
	activeTabBorder: {
		height: 4,
		backgroundColor: colors.black,
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4
	},
	unactiveTabBorder: {
		backgroundColor: colors.white
	}
});
