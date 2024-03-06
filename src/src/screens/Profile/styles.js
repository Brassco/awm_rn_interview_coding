import {StyleSheet} from "react-native";

//global styles
import {Typography, Colors, Spacing} from "../../assets/styles";

const {fontSize, fontWeight, lineHeight, letterSpacing, fontFamily} =
	Typography;
const {colors} = Colors;
const {padding, paddingHorizontal} = Spacing;

export default StyleSheet.create({
	contentContainerStyle: {
		// height: "100%",
		backgroundColor: colors.background
	},
	linearGradient: {},
	headerSection: {
		...paddingHorizontal,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		paddingTop: 15
	},
	avatarSection: {
		marginBottom: 15
	},
	avatarWrapper: {
		width: 120,
		height: 120,
		borderRadius: 60,
		backgroundColor: "#133",
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center"
	},
	avatar: {
		width: 120,
		height: 120
	},
	avatarCheckIcon: {
		width: 32,
		height: 32,
		position: "absolute",
		bottom: 0,
		right: 0
	},
	textSection: {
		justifyContent: "center",
		alignItems: "center"
	},
	nameSection: {
		paddingVertical: 10
	},
	rateSection: {
		paddingVertical: 10,
		flexDirection: "row"
	},
	followSection: {
		paddingVertical: 10,
		flexDirection: "row"
	},
	followers: {
		flexDirection: "row",
		alignItems: "flex-end",
		marginHorizontal: 5
	},
	nameText: {
		fontSize: fontSize.x20,
		fontWeight: fontWeight.semiBold,
		lineHeight: lineHeight.x25,
		color: colors.black,
		letterSpacing: letterSpacing.x1,
		fontFamily: fontFamily.outfit
	},
	textUnderline: {textDecorationLine: "underline"},
	rateText: {
		fontSize: fontSize.x17,
		fontWeight: fontWeight.semiBold,
		lineHeight: lineHeight.x22,
		color: colors.black,
		letterSpacing: letterSpacing.x0,
		fontFamily: fontFamily.outfit,
		marginHorizontal: padding.x4
	},
	reviewsText: {
		fontSize: fontSize.x17,
		lineHeight: lineHeight.x22,
		color: colors.black,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.medium,
		fontFamily: fontFamily.outfit
	},
	folowersText: {
		fontSize: fontSize.x17,
		lineHeight: lineHeight.x22,
		color: colors.black,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.regular,
		fontFamily: fontFamily.outfit
	},
	buttonsSection: {
		...paddingHorizontal,
		marginTop: padding.x20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	actionButton: {
		borderWidth: 1,
		borderColor: colors.border,
		borderRadius: 50,
		height: 48,
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	followButton: {
		marginRight: padding.x10
	},
	messageButton: {
		marginLeft: padding.x10
	},
	buttonText: {
		fontSize: fontSize.x17,
		lineHeight: lineHeight.x22,
		color: colors.black,
		letterSpacing: letterSpacing.x1,
		fontWeight: fontWeight.medium,
		fontFamily: fontFamily.outfit
	},
	descriptionSection: {
		...paddingHorizontal
	},
	descriptionWrapper: {
		paddingVertical: padding.x24,
		borderBottomWidth: 1,
		borderBottomColor: colors.border
	},
	descriptionText: {
		fontSize: fontSize.x15,
		lineHeight: lineHeight.x20,
		color: colors.black,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.regular,
		fontFamily: fontFamily.outfit
	},
	descriptionPointsSection: {
		...paddingHorizontal,
		paddingVertical: padding.x24
	},
	adventureSection: {
		borderBottomWidth: 1,
		borderBottomColor: colors.grey
	},
	adventureHeader: {
		...paddingHorizontal,
		height: 36
	},
	adventureHeaderText: {
		fontSize: fontSize.x20,
		lineHeight: lineHeight.x25,
		color: colors.black,
		letterSpacing: letterSpacing.x1,
		fontWeight: fontWeight.semiBold,
		fontFamily: fontFamily.outfit
	},
	tabsSection: {
		...paddingHorizontal,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	tabContentSection: {},
	monthSection: {
		...paddingHorizontal,
		height: 54,
		justifyContent: "flex-end"
	},
	monthText: {
		fontSize: fontSize.x22,
		lineHeight: lineHeight.x28,
		color: colors.black,
		letterSpacing: letterSpacing.x0,
		fontWeight: fontWeight.medium,
		fontFamily: fontFamily.outfit
	},
	tabCardsContainer: {
		...paddingHorizontal,
		marginTop: padding.x20,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	icon: {
		width: 15,
		height: 18
	},
	socialLinksText: {
		textDecorationLine: "underline",
		fontWeight: fontWeight.medium,
	}
});
