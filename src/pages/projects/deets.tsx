import Image from "next/image";
import useDownloader from "react-use-downloader";
import { File } from "tabler-icons-react";
const Deets = () => {
	const { size, elapsed, percentage, download, cancel, error, isInProgress } =
		useDownloader();

	const fileUrl = "/Deets-DT-Projektbericht.pdf";
	const filename = "Deets-DT-Projektbericht.pdf";

	return (
		<div className="mx-6 md:mr-6 mb-20">
			<h1 className="text-2xl font-bold mb-2">Das Problem & die Lösung</h1>
			<p className="mb-4">
				Oft wünscht man sich in einem Geschäft vor Ort mehr Informationen über
				die ausgestellten Waren und wenn kein Verkaufspersonal zur Verfügung
				steht, bleibt einem oft nur eine Google Suchanfrage über das Handy
				übrig. Diese ist jedoch zeitintensiv, umständlich und zudem ungenau, da
				sie nur begrenzt die zur Verfügung stehenden Informationen über ein
				Produkt abbilden kann. Auch die Verpackung kann aufgrund des
				eingeschränkten Platzangebotes nur limitiert als Informationsquelle
				genutzt werden. In gewissen Fällen wird sie auch ganz ausgelassen, wie
				es zum Beispiel bei kleinen Lebensmittelhandlungen (Hofboxen) der Fall
				ist, da keine finanziellen Mittel für Etiketten vorhanden sind. Um diese
				Probleme zu lösen, ermöglicht es Deets mit der interaktiven Digital
				Signage Technologie offline, einfach und zeiteffizient jegliche Inhalte
				dem User zur Verfügung zu stellen. Die sogenannten Deets-Terminals,
				welche dafür verantwortlich sind, können in mehrfacher Ausführung
				aufgestellt und mit einem Admin-Panel orchestriert und überwacht werden.
				Diese bestehen aus einer kleinen Box welche den Raspberry Pi, sowie den
				NFC bzw. Barcode-Reader verbaut haben. Das Produkt muss also nur noch
				vor das Terminal gehalten werden, worauf dann die zugehörigen Daten über
				die Produkt-ID identifiziert werden. Anschließend werden diese in
				sogenannte Templates eingespeist und in der grafischen
				Benutzeroberfläche angezeigt. Da diese Templates frei erstellt,
				angepasst und gemanagt werden können, bietet dieses System für die
				Produzenten eine komplett neue Dimension des Marketings. Aufgrund der
				Touch-Eingabemöglichkeit des Bildschirms kann der Nutzer auch mit den
				Daten interagieren. Man erhält dadurch die Möglichkeit, nicht vor Ort
				verfügbare Waren einzusehen und diese auch nach Bedarf anzufordern.
				Darüber hinaus werden über ein künstliches neuronales Netzwerk
				Interessen der Benutzer analysiert und somit werden weitere relevante
				Produkte direkt am Terminal vorgeschlagen. Mit Deets wird
				zusammengefasst also ein abstrakteres Warenmanagement System in die
				Verkaufsflächen von Klein-, Mittel- sowie Großgeschäfte gebracht,
				wodurch der Benutzer einen detaillierten Einblick in das Sortiment und
				darüber hinaus erhält.
			</p>
			<div className="flex">
				<div>
					<h1 className="text-2xl font-bold mb-2">Grobe Topologie</h1>
					<p className="mb-4">
						In der folgenden Abbildung ist zu sehen wie das ganze System grob
						aufgebaut ist:
					</p>
				</div>

				<figure className="relative w-full h-fit rounded-xl -mt-10">
					<Image
						alt="bert"
						className="relative left-0 object-cover object-left "
						src="/deets-topo.svg"
						width={700}
						height={700}
					/>
				</figure>
			</div>
			<h1 className="text-2xl font-bold mb-2">Weitere Inhalte</h1>
			<p className="mb-4"></p>
			<div
				className="w-fit h-fit px-6 py-4 bg-gray-500/20  border-blue-300 gap-2 cursor-pointer rounded-xl flex"
				onClick={() => download(fileUrl, filename)}
			>
				<File />
				<p className="font-bold">Deets-DT-Projektbericht.pdf</p>
			</div>
		</div>
	);
};

export default Deets;
