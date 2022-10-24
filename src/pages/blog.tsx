import Emoji from "@components/utils/Emoji";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import e from "express";
import { IBlog } from "models";
import { NextPage } from "next";
import getConfig from "next/config";
import Link from "next/link";
import { FormEvent, FormEventHandler, useState } from "react";

interface BlogPageProps {
    blogs: IBlog[];
    supabase: SupabaseClient;
}

const BlogPage: NextPage<BlogPageProps> = ({ blogs }: BlogPageProps) => {
    // const [blogs, setBlogs] = useState<IBlog[]>(blogs);
    const { serverRuntimeConfig } = getConfig();
    const [text, setText] = useState<string>("");
    const supabaseUrl = "https://crwskcfvwowttsaqytfn.supabase.co";
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey!);

    const blogsubmit = (event: FormEvent): void => {
        event.preventDefault();

        supabase
            .from("blogs")
            .insert([{ name: "a blog", content: text }])
            .then((res) => {
                console.log(res);
            });
    };

    return (
        <section>
            <form onSubmit={blogsubmit}>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        onChange={(e) => setText(e.target.value)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your message..."
                    ></textarea>
                </div>

                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required
                        />
                    </div>
                    <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                        I agree with the{" "}
                        <Link href="/terms" passHref>
                            <span className="text-blue-600 hover:underline dark:text-blue-500">
                                terms and conditions
                            </span>
                        </Link>
                        .
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
            <div className="flex flex-col items-center md:flex-wrap md:flex-row md:items-start">
                {blogs.map((blog) => (
                    <BlogItem
                        key={blog.id}
                        name={blog.name}
                        content={blog.content}
                    />
                ))}
            </div>
        </section>
    );
};

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
                    <Link href="/" passHref>
                        <p className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                            Back to Homepage
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const BlogItem = ({ name, content }: { name: string; content: string }) => {
    return (
        <div>
            <div className="p-6 m-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {content}
                </p>
            </div>
        </div>
    );
};

///export section 📦
export default BlogPage;
export async function getStaticProps() {
    ///supabase data
    const supabaseUrl = "https://crwskcfvwowttsaqytfn.supabase.co";
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey!);

    const { data: blogs, error } = await supabase.from("blogs").select();
    return {
        props: {
            blogs,
        },
    };
}
