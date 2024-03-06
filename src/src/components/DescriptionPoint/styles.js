import {StyleSheet} from "react-native";

//styles
import {Typography, Colors, Spacing} from "../../assets/styles";

const {fontSize, lineHeight, letterSpacing, fontWeight, fontFamily} =
	Typography;
const {colors} = Colors;
const {padding} = Spacing;

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingVertical: padding.x10
	},
	iconContainer: {
		width: 20,
		height: 20,
		marginRight: 10
	},
	descriptionContainer: {
		flexDirection: "row"
	},
	descriptionText: {
		fontSize: fontSize.x15,
		lineHeight: lineHeight.x20,
		color: colors.black,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.regular,
		fontFamily: fontFamily.outfit,
		marginRight: 2
	}
});
