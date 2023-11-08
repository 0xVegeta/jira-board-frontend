import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import CardGrid from "@/components/CardGrid";
import { useState } from "react";
import ProjectPopup from "@/components/Popup/ProjectPopup";

export async function getStaticProps() {
	const res = await fetch("http://localhost:5000/api/boards/");
	const data = await res.json();
	return { props: { data } };
}

const syne = Syne({ subsets: ["latin"] });

export default function Home({ data }) {
	const [isPopupOpen, setPopupOpen] = useState(false);
	console.log(data);
	return (
		<main
			className={`flex h-screen flex-col items-center justify-star  ${syne.className}`}
		>
			<Navbar addProjectPopupOpen={setPopupOpen} />
			<div className="grow w-full h-full overflow-auto ">
				<CardGrid allBoards={data.allBoards} />
			</div>

			<ProjectPopup isOpen={isPopupOpen} setPopupOpen={setPopupOpen} />

			{/* <Popup isOpen={isPopupOpen} onClose={closePopup}>
				<button onClick={closePopup}>Close</button>
			</Popup> */}
		</main>
	);
}
