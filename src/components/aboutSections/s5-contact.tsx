import AboutItemLayout from "@components/layout/AboutItemLayout";
import RefArr5 from "@assets/abstracts/refarr5.svg";
import styled from "styled-components";
import Button1 from "@components/buttons/button1";
import { Mail } from "tabler-icons-react";

const S5Contact = () => {
	return (
		<AboutItemLayout
			vertical="Wie kann ich beitreten?"
			largeText="Werde ein Teil von Waterbyte"
			content="Eine Coding Community ist nichts ohne seine Mitglieder und aus diesem Grund freuen wir uns über jedes neue Mitglied."
		>
			<div className="flex flex-col relative justify-center items-center mt-20 mb-40">
				<h3 className="mb-4 font-bold">contact@waterbyte.club</h3>
				<RefArr5 />
				<a href="mailto:michael.ungar03+wbyt@gmail.com">
					<button
						type="button"
						className="flex text-white items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4"
					>
						<Mail className="mr-2" />
						Schreibe uns eine Nachricht
					</button>
				</a>
			</div>
		</AboutItemLayout>
	);
};

export default S5Contact;
