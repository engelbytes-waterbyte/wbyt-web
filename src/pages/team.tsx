import { NextPage } from "next";
import Image from "next/image";

import { BrandGit, BrandGithub, BrandInstagram } from "tabler-icons-react";

const Team: NextPage = () => {
  return (
    <div className="flex flex-col items-center md:flex-wrap md:flex-row">
      <TeamItem
        name="ungarmichael"
        description="Hi, I'm Michael. I'm a developer and I love to build things."
        instagram="https://www.instagram.com/ungrmichael"
        github="https://github.com/ungarmichael"
        imageUrl="https://images.obi.at/product/DE/1500x1500/218183_1.jpg"
        role="Leiter"
      />
    </div>
  );
};

interface TeamItemProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  github: string;
  instagram: string;
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
    <div className="max-w-sm m-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-md" src={imageUrl} alt="büd" />
      </a>
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
          <a href={github}>
            <BrandGithub className="mr-2" />
          </a>
          <a href={instagram}>
            <BrandInstagram className="mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
