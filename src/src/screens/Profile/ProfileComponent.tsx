import React, {useState} from "react";
import {View, Text, ScrollView, Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

//components
import Button from "../../components/Button/Button";
import DescriptionPoint from "../../components/DescriptionPoint/DescriptionPoint";
import avatarImg from "../../assets/avatar.png";
import Tab from "../../components/Tab/Tab";
import TabCard from "../../components/TabCard/TabCard";

//styles
import styles from "./styles";
import {Colors} from "../../assets/styles";

//type
import {TabType, tabItem} from "../../typescript/types";

const tabs: TabType[] = [
	{
		id: 1,
		title: "Listed",
		isActive: true
	},
	{
		id: 2,
		title: "Booked",
		isActive: false
	},
	{
		id: 3,
		title: "Wished",
		isActive: false
	}
];

const tabItems: tabItem[] = [
	{
		id: 1,
		imageUrl: require("../../assets/tabImage2.png"),
		rate: 3.8,
		reviewCount: 17,
		duration: "3 days",
		description: "Alla scoperta dei produttori di vino altoatesini in ebike",
		location: "Utrecht",
		type: "bussines",
		isActive: false,
		price: "FREE"
	},
	{
		id: 2,
		imageUrl: require("../../assets/tabImage.png"),
		rate: null,
		reviewCount: 0,
		duration: "5 hours",
		description: "Weekend ride",
		location: "Utrecht",
		type: null,
		isActive: true,
		price: "From CHF75/person"
	}
];

const socialMedias = ["Instagram", "Linkedin", "visitphuket.com"];
const langs = ["Speaks English", "German", "French"];

const ProfileComponent = () => {
	const [selectedTab, setSelectedTab] = useState<number>(tabs[0].id);

	const handlePressTab = (id: number) => {
		setSelectedTab(id);
	};

	return (
		<ScrollView contentContainerStyle={styles.contentContainerStyle}>
			<LinearGradient
				colors={[Colors.colors.linearGreen, Colors.colors.linearWhite]}
				style={styles.linearGradient}
			>
				<View style={styles.headerSection}>
					<View>
						<Button>
							<Material name="chevron-left" size={32} />
						</Button>
					</View>
					<View style={styles.avatarSection}>
						<View style={styles.avatarWrapper}>
							<Image
								resizeMode={"contain"}
								style={styles.avatar}
								source={avatarImg}
							/>
						</View>
						<View style={styles.avatarCheckIcon}>
							<Image
								resizeMode={"contain"}
								style={styles.checkIcon}
								source={require("../../assets/avatarCheck.png")}
							/>
						</View>
					</View>
					<View>
						<Button>
							<Material name="dots-horizontal" size={24} />
						</Button>
					</View>
				</View>
				<View style={styles.textSection}>
					<View style={styles.nameSection}>
						<Text style={styles.nameText}>Kate Jamezi-Liamson</Text>
					</View>
					<View style={styles.rateSection}>
						<Material name="star" size={20} />
						<Text style={[styles.rateText, styles.textUnderline]}>4.98</Text>
						<Text style={[styles.reviewsText, styles.textUnderline]}>
							(402 reviews)
						</Text>
					</View>
					<View style={styles.followSection}>
						<View style={styles.followers}>
							<Text style={styles.rateText}>555</Text>
							<Text>follovers</Text>
						</View>
						<View style={styles.followers}>
							<Text style={styles.rateText}>113</Text>
							<Text>folloving</Text>
						</View>
					</View>
				</View>
			</LinearGradient>

			<View style={styles.buttonsSection}>
				<Button customStyles={[styles.actionButton, styles.followButton]}>
					<Text style={styles.buttonText}>Following</Text>
				</Button>
				<Button customStyles={[styles.actionButton, styles.messageButton]}>
					<Text style={styles.buttonText}>Message</Text>
				</Button>
			</View>
			<View style={styles.descriptionSection}>
				<View style={styles.descriptionWrapper}>
					<Text style={styles.descriptionText}>
						I am an Experience Designer with a deep passion for travel around
						the world, cars, trains, snowboarding and luxury yachts
					</Text>
				</View>
			</View>
			<View style={styles.descriptionPointsSection}>
				<DescriptionPoint
					icon={<Material name={"clock-time-four"} size={20} />}
					description={"AWM host since 2023"}
				/>
				<DescriptionPoint
					icon={
						<Image
							resizeMode={"contain"}
							style={styles.icon}
							source={require("../../assets/langIcon.png")}
						/>
					}
					description={langs}
				/>
				<DescriptionPoint
					icon={<Material name={"cellphone-check"} size={20} />}
					description={"Phone number verified"}
				/>
				<DescriptionPoint
					icon={<Material name={"email-check-outline"} size={20} />}
					description={"Email verified"}
				/>
				<DescriptionPoint
					icon={<AntDesign name={"link"} size={20} />}
					customStyles={styles.socialLinksText}
					description={socialMedias}
				/>
			</View>
			<View style={styles.adventureSection}>
				<View style={styles.adventureHeader}>
					<Text style={styles.adventureHeaderText}>Kate’s Adventures</Text>
				</View>
				<View style={styles.tabsSection}>
					{tabs.map(tabItem => {
						return (
							<Tab
								key={tabItem.id}
								tabItem={tabItem}
								selected={tabItem.id === selectedTab}
								onPress={() => handlePressTab(tabItem.id)}
							/>
						);
					})}
				</View>
			</View>
			<View style={styles.tabContentSection}>
				<View style={styles.monthSection}>
					<Text style={styles.monthText}>December</Text>
				</View>
				<View style={styles.tabCardsContainer}>
					{tabItems.map(item => {
						return <TabCard key={item.id} item={item} />;
					})}
				</View>
			</View>
		</ScrollView>
	);
};

export default ProfileComponent;
