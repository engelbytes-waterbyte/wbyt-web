import { createClient } from "@supabase/supabase-js";
import { IBlog } from "models";
import { NextPage } from "next";
import getConfig from "next/config";
import router from "next/router";
import { useState } from "react";

function BlogPage({ blog }: { blog: IBlog }) {
    return (
        <div>
            <h1 className="font-bold text-3xl">{blog?.name}</h1>
            <h2 className="text-lg mt-6">{blog?.content}</h2>
        </div>
    );
}

export default BlogPage;

export async function getStaticPaths() {
    //supabase data
    const supabaseUrl = "https://crwskcfvwowttsaqytfn.supabase.co";
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey!);

    const { data, error } = await supabase.from("blogs").select();

    return {
        paths: data?.map((blog) => ({ params: { id: blog.id.toString() } })),
        fallback: true, // can also be true or 'blocking'
    };
}

export async function getStaticProps({ params }: { params: any }) {
    //supabase data
    const supabaseUrl = "https://crwskcfvwowttsaqytfn.supabase.co";
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey!);

    const { data, error } = await supabase
        .from("blogs")
        .select()
        .eq("id", params.id);
    return {
        props: {
            blog: data![0] as IBlog,
        },
    };
}
