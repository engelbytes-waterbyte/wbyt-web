import { sendContactForm } from "lib/api";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { CircleCheck, CircleX, Hourglass } from "tabler-icons-react";

interface formValues {
	first_name: string;
	last_name: string;
	company: string;
	website: string;
	email: string;
	discord: string;
	text_skills: string;
	text_preferences: string;
	text_motivation: string;
}

const OnBoarding: NextPage = () => {
	const [processingState, setProcessingState] = useState({
		loading: false,
		success: false,
		error: false,
	});

	const onSubmit = async (e: any) => {
		setProcessingState({ loading: true, success: false, error: false });
		try {
			e.preventDefault();
			const tels = e.target.elements;
			const formValues: formValues = {
				first_name: tels.first_name.value,
				last_name: tels.last_name.value,
				company: tels.company.value,
				website: tels.website.value,
				email: tels.email.value,
				discord: tels.discord.value,
				text_skills: tels.text_skills.value,
				text_preferences: tels.text_preferences.value,
				text_motivation: tels.text_motivation.value,
			};
			const resi = await sendContactForm(formValues);
		} catch (error) {
			console.log(error);
			setProcessingState({ loading: false, success: false, error: true });
		}
		setProcessingState({ loading: false, success: true, error: false });
		e.target.reset();
	};
	const [state, setState] = useState({});
	// const { values } = state;

	return (
		<div className="mx-6 md:mr-28">
			<form onSubmit={onSubmit}>
				<div className="grid gap-6 mb-6 md:grid-cols-2">
					<div>
						<label
							htmlFor="first_name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Firstname
						</label>
						<input
							type="text"
							id="first_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Manuel"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="last_name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Lastname
						</label>
						<input
							type="text"
							id="last_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Bickstefano"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="company"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Organisation(optional)
						</label>
						<input
							type="text"
							id="company"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Are you already part of an organisation?"
						/>
					</div>

					<div>
						<label
							htmlFor="website"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Portfolio - URL
						</label>
						<input
							type="url"
							id="website"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Show us your work!"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Email-Adresse
						</label>
						<input
							type="email"
							id="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="How can we reach you?"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="discord"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Discord User Tag
						</label>
						<input
							type="text"
							id="discord"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="YourName#9999"
						/>
					</div>
				</div>

				<div className="mb-6">
					<label
						htmlFor="text_skills"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
					>
						Skills & Experience
					</label>
					<textarea
						id="text_skills"
						rows={4}
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Tell us about your skills and experience."
					></textarea>
				</div>
				<div className="mb-6">
					<label
						htmlFor="text_preferences"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
					>
						Preferences
					</label>
					<textarea
						id="text_preferences"
						rows={4}
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="What would you like to do at Waterbyte?"
						required
					></textarea>
				</div>
				<div className="mb-6">
					<label
						htmlFor="text_motivation"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
					>
						Reason
					</label>
					<textarea
						id="text_motivation"
						rows={4}
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Why do you want to join Waterbyte?"
						required
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
						<Link href="/terms" passHref legacyBehavior>
							<span className="text-blue-600 hover:underline dark:text-blue-500">
								terms and conditions
							</span>
						</Link>
						.
					</label>
				</div>
				<div className="mb-32 flex items-center	">
					{processingState.loading ? (
						<button
							disabled
							type="button"
							className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
						>
							<svg
								role="status"
								className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="#1C64F2"
								/>
							</svg>
							Loading...
						</button>
					) : (
						<button
							type="submit"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Submit
						</button>
					)}
					{processingState.loading && (
						<div className="mx-3 flex animate-pulse text-gray-400">
							<Hourglass className="mr-2" /> Obacht, please wait.
						</div>
					)}
					{processingState.error && (
						<div className="mx-3 flex animate-pulse text-red-400">
							<CircleX className="mr-2" /> Error occured, please try again.
						</div>
					)}
					{processingState.success && (
						<div className="mx-3 flex animate-pulse text-green-400">
							<CircleCheck className="mr-2" /> Successfully registered, we will
							respond to you as soon as possible.
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default OnBoarding;
