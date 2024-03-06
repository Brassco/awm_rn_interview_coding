import {StyleSheet} from "react-native";

//styles
import {Typography, Colors, Spacing} from "../../assets/styles";

const {colors} = Colors;
const {padding} = Spacing;
const {fontSize, letterSpacing, fontWeight, lineHeight, fontFamily} =
	Typography;

export default StyleSheet.create({
	container: {
		width: 155,
		paddingBottom: padding.x10
	},
	imageSection: {
		width: 155,
		height: 207,
		borderRadius: 12,
		overflow: "hidden"
	},
	image: {
		width: 155,
		height: 207
	},
	rateSection: {
		paddingVertical: padding.x4,
		marginTop: 15,
		flexDirection: "row"
	},
	rateText: {
		fontSize: fontSize.x13,
		lineHeight: lineHeight.x18,
		color: colors.black,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.semiBold,
		fontFamily: fontFamily.outfit,
		marginHorizontal: padding.x4
	},
	descriptionSection: {
		paddingVertical: padding.x4
	},
	descriptionText: {
		fontSize: fontSize.x15,
		lineHeight: lineHeight.x20,
		color: colors.black,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.semiBold,
		fontFamily: fontFamily.outfit
	},
	locationSection: {
		paddingVertical: padding.x4,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center"
	},
	locationText: {
		fontSize: fontSize.x13,
		lineHeight: lineHeight.x18,
		color: colors.black,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.medium,
		fontFamily: fontFamily.outfit
	},
	typeSection: {
		marginTop: padding.x8
	},
	typeText: {
		fontSize: fontSize.x13,
		lineHeight: lineHeight.x18,
		color: colors.black,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.regular,
		fontFamily: fontFamily.outfit
	},
	badgeSection: {
		height: 40,
		width: "100%",
		position: "absolute",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: padding.x4
	},
	typeLabel: {
		paddingHorizontal: padding.x12,
		paddingVertical: padding.x2,
		borderRadius: 10,
		backgroundColor: colors.black80,
		justifyContent: "center",
		alignItems: "center"
	},
	labelText: {
		fontSize: fontSize.x12,
		lineHeight: lineHeight.x16,
		color: colors.white,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.medium,
		fontFamily: fontFamily.outfit
	},
	heartIcon: {
		width: 40,
		height: 40
		// backgroundColor: "#155"
	}
});
