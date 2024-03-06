import React from "react";
import {View, Text} from "react-native";

//types
import {DescriptionPointProps} from "../../typescript/types";

//styles
import styles from "./styles";

const DescriptionPointComponent = ({
	description,
	icon,
	customStyles
}: DescriptionPointProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>{icon}</View>
			<View style={styles.descriptionContainer}>
				<Text style={[styles.descriptionText, customStyles]}>
					{description}
				</Text>
			</View>
		</View>
	);
};

export default DescriptionPointComponent;
