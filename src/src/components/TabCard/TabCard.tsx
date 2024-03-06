import React from "react";

//View
import TabCardComponent from "./TabCardComponent";

//types
import {tabCardProps} from "../../typescript/types";

const TabCard = ({item}: tabCardProps) => {
	return <TabCardComponent item={item} />;
};

export default TabCard;
