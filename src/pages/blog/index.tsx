import Emoji from "@components/utils/Emoji";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import e from "express";
import { IBlog } from "models";
import { NextPage } from "next";
import getConfig from "next/config";
import Link from "next/link";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import Image from "next/legacy/image";

interface BlogPageProps {
	blogs: IBlog[];
	supabase: SupabaseClient;
}

const BlogPage: NextPage<BlogPageProps> = ({ blogs }: BlogPageProps) => {
	return (
		<section>
			<div className="flex flex-col items-center md:items-start py-8 pr-8">
				{/* {blogs.map((blog) => (
					<BlogItem
						key={blog.id}
						id={blog.id}
						name={blog.name}
						content={blog.content}
						imageurl={blog.imageurl}
					/>
				))} */}
			</div>
		</section>
	);
};

export default BlogPage;

const BlogNotFound: NextPage = () => {
	return (
		<section className="bg-white dark:bg-gray-900 flex items-center justify-center ">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
						404er
					</h1>
					<p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
						Blog not found
					</p>
					<p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
						Dieser Blog Artikel wurde nicht gefunden{" "}
						<Emoji label="eigschissn" symbol="🧐"></Emoji>.
					</p>
					<Link href="/" passHref legacyBehavior>
						<p className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
							Back to Homepage
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
};

const BlogItem = ({
	id,
	name,
	content,
	imageurl,
}: {
	id: number;
	name: string;
	content: string;
	imageurl?: string;
}) => {
	return (
		<div className="p-6 mb-6  bg-white w-full rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex relative">
			<div className="h-40 w-40 bg-white mr-8 relative rounded-lg overflow-hidden">
				{imageurl !== undefined ? (
					<Image alt="blog_image" src={imageurl} layout="fill" />
				) : (
					<Image
						alt="blog_image"
						src="/images/EngelbyteAmCoden.png"
						layout="fill"
						className="rounded-xl"
					/>
				)}
			</div>
			<div className="flex-1 relative">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{name}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{content.substring(0, 500)} ...
				</p>
				{content.length > 500 && (
					<div className="bg-gradient-to-t from-white  h-[30%] absolute bottom-3 w-full"></div>
				)}
			</div>
			<Link
				href={`/blog/${id}`}
				className="absolute text-blue-500 bottom-7 right-7 hover:underline font-bold"
			>
				Mehr Erfahren &gt;&gt;
			</Link>
		</div>
	);
};

// ///export section 📦
// export default BlogPage;
// export async function getStaticProps() {
// 	///supabase data
// 	const supabaseUrl = "https://crwskcfvwowttsaqytfn.supabase.co";
// 	const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
// 	const supabase = createClient(supabaseUrl, supabaseKey!);

// 	const { data: blogs, error } = await supabase.from("blogs").select();
// 	return {
// 		props: {
// 			blogs,
// 		},
// 	};
// }
