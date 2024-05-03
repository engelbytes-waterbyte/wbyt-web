import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import styles from "@styles/Home.module.css";
import Footer from "@components/footer/Footer";
import AboutItemLayout from "@components/layout/AboutItemLayout";
import HomeLayout from "@components/layout/BaseLayout";
import ScrollSuggestor from "@components/ScrollSuggestor";
import { createClient } from "@supabase/supabase-js";
import { IProject } from "models";
import { useRouter } from "next/router";

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
	const router = useRouter();
	return (
		<div className="flex flex-col items-center md:flex-wrap md:flex-row ">
			<Project
				project={{
					id: 1,
					name: "charge",
					categories: ["vue.js", "golang", "sora"],
					heading: "Charge - SYP Projekt an der HTL Grieskirchen",
					description: "lkajsdf",
					year: "2021",
				}}
			/>
			<Project
				project={{
					id: 1,
					name: "heed",
					categories: ["vue.js", "golang", "sora"],
					heading: "Charge - SYP Projekt an der HTL Grieskirchen",
					description: "lkajsdf",
					year: "2021",
				}}
			/>
			<Project
				project={{
					id: 1,
					name: "filli",
					categories: ["vue.js", "golang", "sora"],
					heading: "Charge - SYP Projekt an der HTL Grieskirchen",
					description: "lkajsdf",
					year: "2021",
				}}
			/>
			<Project
				project={{
					id: 1,
					name: "wbyt",
					categories: ["vue.js", "golang", "sora"],
					heading: "Charge - SYP Projekt an der HTL Grieskirchen",
					description: "lkajsdf",
					year: "2021",
				}}
			/>
			<div
				className=" w-full h-fit-content p-4 box-border sm:max-w-none "
				onClick={(e) => {
					e.preventDefault();
					router.push("/projects/deets");
				}}
			>
				<div className="relative w-full h-[400px] rounded-xl overflow-hidden">
					<Image
						alt="bert"
						className="relative left-0 object-cover object-left"
						src="/deets.png"
						fill
					/>
				</div>
				<h1 className="font-bold text-xl mt-6">Deets - Diplomarbeit</h1>
				<h2 className="font-bold mb-6 text-lg text-gray-700">
					Produktterminal zur einfachen Digitalisierung des physischen
					Verkäufers
				</h2>
				<div className="flex gap-2 items-center flex-wrap">
					<p className="font-bold">2021 - 2023 </p>
					<p className="font-bold">·</p>

					<p className="bg-blue-400/40 rounded-full border-2 border-blue-400/90 px-4 text-blue-400 font-bold">
						react.js
					</p>
					<p className="bg-blue-400/40 rounded-full border-2 border-blue-400/90 px-4 text-blue-400 font-bold">
						grapes.js
					</p>
					<p className="bg-blue-400/40 rounded-full border-2 border-blue-400/90 px-4 text-blue-400 font-bold">
						next.js
					</p>
					<p className="bg-blue-400/40 rounded-full border-2 border-blue-400/90 px-4 text-blue-400 font-bold">
						flutter
					</p>
					<p className="bg-blue-400/40 rounded-full border-2 border-blue-400/90 px-4 text-blue-400 font-bold">
						golang
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
	const router = useRouter();
	return (
		<div
			className=" w-full h-fit-content p-4 box-border"
			onClick={(e) => {
				e.preventDefault();
				router.push("/projects/charge");
			}}
		>
			<div className=" relative w-full h-[400px] overflow-hidden rounded-t-xl rounded-l-xl">
				<Image
					alt="bert"
					className="relative left-0 object-cover object-left"
					src={`/${project.name}.png`}
					fill
				/>
			</div>
			<h1 className="font-bold text-xl mt-6">{project.heading}</h1>
			<h2 className="font-bold mb-6 text-lg text-gray-700">
				{project.description}
			</h2>
			<div className="flex gap-2 items-center mb-10">
				<p className="font-bold"> 2021 </p>
				<p className="font-bold">·</p>
				<p className="bg-blue-400/40 rounded-full border-2 border-blue-400/90 px-4 text-blue-400 font-bold">
					vue.js
				</p>
				<p className="bg-blue-400/40 rounded-full border-2 border-blue-400/90 px-4 text-blue-400 font-bold">
					golang
				</p>
				<p className="bg-blue-400/40 rounded-full border-2 border-blue-400/90 px-4 text-blue-400 font-bold">
					sora
				</p>
			</div>
		</div>
	);
};

export default ProjectsPage;
