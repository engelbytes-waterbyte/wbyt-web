import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import { useState } from "react";
import styled from "styled-components";
import styles from "@styles/Home.module.css";
import Footer from "@components/footer/Footer";
import AboutItemLayout from "@components/layout/AboutItemLayout";
import HomeLayout from "@components/layout/BaseLayout";
import ScrollSuggestor from "@components/ScrollSuggestor";
import { createClient } from "@supabase/supabase-js";
import { IProject } from "models";

// export async function getStaticProps() {
// const supabaseAdmin = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ADMIN_KEY!
// );
///supabase data
// const supabaseUrl = "https://crwskcfvwowttsaqytfn.supabase.co";
// const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey!);
// const { data: projects, error } = await supabase.from("projects").select();
// return {
//     props: {
//         projects,
//     },
// };

/// types for the project widgets
interface ProjectsPageProps {
	projects: IProject[];
}

interface ProjectPageProps {
	projects: IProject[];
}

/// Projects page containing all projects 🧠
/// data is being passed in from the getStaticProps function
const ProjectsPage: NextPage<ProjectsPageProps> = ({
	projects,
}: ProjectsPageProps) => {
	return (
		<div className="flex flex-col items-center md:flex-wrap md:flex-row ">
			<div className=" w-full h-fit-content p-4 box-border">
				<div className="bg-red-400 w-full h-[400px]"></div>
				<h1 className="font-bold text-xl mt-6">Choage - SYP Projekt</h1>
				<h2 className="font-bold mb-6 text-lg text-gray-700">
					Choage ist ein fettes Projekt
				</h2>
				<div className="flex gap-2">
					<p className="font-bold">2020 </p>
					<p className="font-bold">·</p>
					<p className="bg-blue-400/40 rounded-full border-2 border-blue-400/90 px-4 text-blue-400 font-bold">
						jova-tech
					</p>
					<p className="bg-blue-400/40 rounded-full border-2 border-blue-400/90 px-4 text-blue-400 font-bold">
						tech
					</p>
				</div>
			</div>

			{/* {projects.map((project) => (
				<Project key={project.id} project={project} />
			))} */}
		</div>
	);
};

const Project = ({ project }: { project: IProject }): JSX.Element => {
	return (
		<div className="m-8 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{project.name}
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{project.description}
			</p>
		</div>
	);
};

///export section 📦
export default ProjectsPage;
