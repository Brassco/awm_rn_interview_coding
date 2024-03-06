import React from "react";

//Template
import ButtonComponent from "./ButtonComponent";

//Types
export type ButtonProps = {
	children: unknown;
	customStyles?: unknown;
};
const Button = ({children, customStyles}: ButtonProps) => {
	return (
		<ButtonComponent customStyles={customStyles}>{children}</ButtonComponent>
	);
};

export default Button;
