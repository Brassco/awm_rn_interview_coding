import React from "react";
import {View, Text, Image} from "react-native";
import Material from "react-native-vector-icons/MaterialCommunityIcons";

//styles
import styles from "./styles";

//types
import {tabCardProps} from "../../typescript/types";

const TabCardComponent = ({item}: tabCardProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageSection}>
				<Image
					resizeMode={"contain"}
					style={styles.image}
					source={item.imageUrl}
				/>
				<View style={styles.badgeSection}>
					<View>
						{item.type && (
							<View style={styles.typeLabel}>
								<Text style={styles.labelText}>{item.type.toUpperCase()}</Text>
							</View>
						)}
					</View>

					<View style={styles.heartIcon}>
						<Image
							resizeMode={"contain"}
							style={styles.heartIcon}
							source={
								item.isActive
									? require("../../assets/heartActive.png")
									: require("../../assets/heartDisabled.png")
							}
						/>
					</View>
				</View>
			</View>
			<View style={styles.rateSection}>
				<Material name="star" size={16} />
				<Text style={styles.rateText}>{item.rate ? item.rate : "NEW"}</Text>
				<Text style={styles.typeText}>
					{item.rate && `(${item.reviewCount})`} {item.duration}
				</Text>
			</View>
			<View style={styles.descriptionSection}>
				<Text style={styles.descriptionText}>{item.description}</Text>
			</View>
			<View style={styles.locationSection}>
				<Text style={styles.locationText}>{item.location}</Text>
				<Material name="chevron-right" size={16} />
				<Text style={styles.locationText}>Keukenhof</Text>
			</View>
			<View style={styles.typeSection}>
				<Text style={styles.typeText}>{item.price}</Text>
			</View>
		</View>
	);
};

export default TabCardComponent;
