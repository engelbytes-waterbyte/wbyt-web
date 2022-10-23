import { NextPage } from "next";
import Image from "next/image";

import { BrandGit, BrandGithub, BrandInstagram } from "tabler-icons-react";

const Team: NextPage = () => {
    return (
        <div className="flex flex-col items-center md:flex-wrap md:flex-row md:items-start">
            <TeamItem
                name="Michael"
                description="Initiator, Verantwortlicher und für das Frontend zuständig."
                instagram="https://www.instagram.com/ungrmichael"
                github="https://github.com/ungarmichael"
                imageUrl="https://imgur.com/jbMWLyV.png"
                role="Projektleitung, Member"
            />
            <TeamItem
                name="Tobias"
                role="Projektmitarbeiter, Member"
                description="Initiator und in der Forschung tätig."
                instagram="https://www.instagram.com/tobe.w69"
                github="https://github.com/Tobi696"
                imageUrl="https://ca.slack-edge.com/T03241P5GDD-U032LV559B6-db6553df4187-512"
            />
            <TeamItem
                name="Sandro"
                description="Initiator und Dokumentierer."
                instagram="https://www.instagram.com/sandro_grein"
                github="https://github.com/SandroGreinecker"
                imageUrl="https://i.imgur.com/rz8wqy7.jpg"
                role="Projektmitarbeiter, Member"
            />
            <TeamItem
                name="Janik"
                role="Nachwuchskodierer, Member"
                imageUrl="https://avatars.githubusercontent.com/u/46902503?v=4"
                description="Gelehrter und fleißiger Open-Source-Contributor"
                github="https://github.com/littlegamer757"
                instagram="https://www.instagram.com/janikn.15/"
            />
            <TeamItem
                name="Andreas"
                role="Peoplewarebeauftragter, Member"
                description="Peopleware, Schriftführer und Entwickler."
                imageUrl="https://i.imgur.com/6GnrBGl.jpg"
                github="https://github.com/SchneckchenAndy"
                instagram="https://www.instagram.com/andreas.aig/"
            />
            <TeamItem
                name="Alexander"
                role="Leasingmitarbeiter, Member"
                description="Arbeitet an externen Projekten."
                imageUrl="https://i.imgur.com/IwqcytS.png"
            />
            <TeamItem
                name="Florian"
                role="Leasingmitarbeiter, Member"
                description="Programmierer, Schwingungspraktiker und Konzentrationshomöopathe."
                imageUrl="https://imgur.com/bCi8s3q.png"
            />
            <TeamItem
                name="Fabian"
                role="Leasingmitarbeiter, Member"
                description="-"
                imageUrl="https://i.imgur.com/RrEM5X0.jpg"
            />
        </div>
    );
};

interface TeamItemProps {
    name: string;
    role: string;
    imageUrl: string;
    description: string;
    github?: string;
    instagram?: string;
}

const TeamItem = ({
    name,
    role,
    imageUrl,
    description,
    github,
    instagram,
}: TeamItemProps) => {
    return (
        <div className="w-80 m-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className=" w-full h-80 relative">
                <Image
                    src={imageUrl}
                    alt="büd"
                    className="rounded-t-md"
                    layout="fill"
                />
            </div>

            <div className="p-5">
                <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    @{name}
                </h5>
                <h6 className="mb-2 text-sm font-bold tracking-tight text-gray-500 dark:text-white">
                    {role}
                </h6>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <div className="flex">
                    {github && (
                        <a href={github}>
                            <BrandGithub className="mr-2" />
                        </a>
                    )}
                    {instagram && (
                        <a href={instagram}>
                            <BrandInstagram className="mr-2" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Team;
