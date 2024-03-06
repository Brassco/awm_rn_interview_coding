import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

//styles
import styles from "./styles";

//types
import {TabProps} from "../../typescript/types";

const TabComponent = ({tabItem, selected, onPress}: TabProps) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.tabWrapper} onPress={onPress}>
				<View style={styles.tabTextWrapper}>
					<Text style={[styles.tabText, selected && styles.activeTab]}>
						{tabItem.title}
					</Text>
				</View>
				<View
					style={[
						styles.activeTabBorder,
						!selected && styles.unactiveTabBorder
					]}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default TabComponent;
