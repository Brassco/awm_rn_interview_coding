import React from "react";

//View
import TabComponent from "./TabComponent";

//types
import {TabProps} from "../../typescript/types";

const Tab = ({tabItem, selected, onPress}: TabProps) => {
	return <TabComponent onPress={onPress} selected={selected} tabItem={tabItem} />;
};

export default Tab;
