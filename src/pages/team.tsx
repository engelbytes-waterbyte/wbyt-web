import { NextPage } from "next";
import Image from "next/legacy/image";

import { BrandGit, BrandGithub, BrandInstagram } from "tabler-icons-react";

const Team: NextPage = () => {
  return (
    <div className="flex flex-col items-center md:flex-wrap md:flex-row md:items-start">
      <TeamItem
        name="Michael"
        cose="MIKSEL"
        description="Initiator, Verantwortlicher und für das Frontend zuständig."
        instagram="https://www.instagram.com/ungrmichael"
        github="https://github.com/ungarmichael"
        imageUrl="https://i.imgur.com/T5b3iCg.jpg"
        role="Projektleitung, Member"
      />
      <TeamItem
        name="Tobias"
        cose="TOPS"
        role="Projektmitarbeiter, Member"
        description="Initiator und in der Forschung tätig."
        instagram="https://www.instagram.com/tobe.w69"
        github="https://github.com/Tobi696"
        imageUrl="https://i.imgur.com/OPuTpYi.jpg"
      />
      <TeamItem
        name="Sandro"
        cose="GROANS"
        description="Initiator und Dokumentierer."
        instagram="https://www.instagram.com/sandro_grein"
        github="https://github.com/SandroGreinecker"
        imageUrl="https://i.imgur.com/KdgFyTn.jpg"
        role="Projektmitarbeiter, Member"
      />
       <TeamItem
                name="Janik"
                cose="NOAßL"
                role="Nachwuchskodierer, Member"
                imageUrl="https://avatars.githubusercontent.com/u/46902503?v=4"
                description="Gelehrter und fleißiger Open-Source-Contributor"
                github="https://github.com/littlegamer757"
                instagram="https://www.instagram.com/janikn.15/"
            />
            <TeamItem
                name="Andreas"
                cose="OAGNA"
                role="Peoplewarebeauftragter, Member"
                description="Peopleware, Schriftführer und Entwickler."
                imageUrl="https://i.imgur.com/QIuBtfG.jpg"
                github="https://github.com/SchneckchenAndy"
                instagram="https://www.instagram.com/andreas.aig/"
            />
            <TeamItem
                name="Alexander"
                              cose="SHXL"
                role="Leasingmitarbeiter, Member"
                description="Arbeitet an externen Projekten."
                imageUrl="https://i.imgur.com/ZvRF8pI.jpg"
            />
            <TeamItem
                name="Florian"
                                            cose="NODLA"
                role="Leasingmitarbeiter, Member"
                description="Programmierer und orchestriert die Teams."
                imageUrl="https://i.imgur.com/eCOT1uz.jpg"
            />
            <TeamItem
                name="Fabian"
                cose="FISCHA"
                role="Leasingmitarbeiter, Member"
                description="Programmierer und für Peopleware verantwortlich"
                imageUrl="https://i.imgur.com/W2EIScD.jpg"
            /> 
            <TeamItem
              name="Simon"
              cose="SIEMENS"
              role="Stakeholder, Infrastruktur"
              description="Ist an dem Erfolg des Vereins interessiert und stellt uns Hardware zur Verfügung"
              imageUrl="https://i.imgur.com/nqNPmat.jpg"
              />
        
    </div>
  );
};

interface TeamItemProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  cose?: string;
  github?: string;
  instagram?: string;
}

const TeamItem = ({
  name,
  role,
  cose,
  imageUrl,
  description,
  github,
  instagram,
}: TeamItemProps) => {
  return (
    <div className="w-80 m-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div
        className=" w-full h-80 relative rounded-t-md overflow-hidden"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <Image
          src={imageUrl}
          alt="büd"
          className=""
          layout="fixed"
          height={100}
          width={100}
        /> */}
      </div>

      <div className="p-5">
        <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name} {cose && <span> @{cose}</span>}
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
