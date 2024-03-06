import React from "react";
import {View} from "react-native";

//Styles
import styles from "./styles";

//types
import {ButtonProps} from "./Button";

const ButtonComponent = ({children, customStyles}: ButtonProps) => {
	return (
		<View style={customStyles ? customStyles : styles.container}>
			{children}
		</View>
	);
};

export default ButtonComponent;
