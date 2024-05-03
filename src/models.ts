export interface IProject {
	id: number;
	name: string;
	description: string;
	heading: string;
	categories: string[];
	year: string;
}

export interface IBlog {
	id: number;
	name: string;
	content: string;
	imageurl: string;
}
