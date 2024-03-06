import React from "react";

//template
import DescriptionPointComponent from "./DescriptionPointComponent";

//types
import {DescriptionPointProps} from "../../typescript/types";

const DescriptionPoint = ({
	description,
	icon,
	customStyles
}: DescriptionPointProps) => {
	const getDescriptionString = () => {
		let newDescription = description;
		if (typeof description !== "string") {
			newDescription = description.map(item => item).join(", ");
		}
		return newDescription;
	};

	return (
		<DescriptionPointComponent
			customStyles={customStyles}
			icon={icon}
			description={getDescriptionString()}
		/>
	);
};

export default DescriptionPoint;
