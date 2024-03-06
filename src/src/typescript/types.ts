import {ReactElement} from "react";

export type tabItem = {
    id: number,
    imageUrl: string,
    rate: null | number,
    reviewCount: number,
    duration: string,
    description: string,
    location: string,
    type: null | string,
    isActive: boolean,
    price: string
}

export type TabType = {
	id: number;
	title: string;
	isActive: boolean;
};

export type TabProps = {
    tabItem: TabType,
    selected: boolean,
    onPress: () => void
}

export type tabCardProps = {
    item: tabItem
}

export type DescriptionPointProps = {
	description: string | string[];
	icon: ReactElement,
    customStyles?: unknown
};