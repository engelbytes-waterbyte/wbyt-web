import Emoji from "@components/utils/Emoji";
import { NextPage } from "next";
import Link from "next/link";

const BlogPage: NextPage = () => {
    return (
        <div className="flex flex-col items-center md:flex-wrap md:flex-row md:items-start">
            asdjlfk
        </div>
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

const BlogItem = () => {
    return (
        <div>
            <div className="p-6 m-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

///export section 📦
export default BlogPage;
// export async function getStaticProps() {
//     const { data: projects, error } = await supabase.from("projects").select();
//     return {
//         props: {
//             projects,
//         },
//     };
// }
