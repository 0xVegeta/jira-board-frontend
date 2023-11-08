import { Roboto_Condensed } from "next/font/google";
import PrimaryButton from "./Button/PrimaryButton";
import SearchBar from "./SearchBar";
import CenterDiv from "./CenterDiv";
const roboCon = Roboto_Condensed({ subsets: ["latin"] });

function Navbar({
	includeLogo = true,
	addProjectPopupOpen = () => null,
	addColumnPopupOpen = () => null,
}) {
	return (
		<div
			className={`flex ${
				includeLogo ? "justify-between" : "justify-end"
			} w-full px-6 py-1 border-b-2 border-gray-100`}
		>
			{includeLogo && (
				<CenterDiv>
					<div
						className={`${roboCon.className} text-4xl tracking-tighter font-extrabold`}
					>
						kanban board.
					</div>
				</CenterDiv>
			)}

			<div className="flex  gap-3 justify-end">
				<div>
					<SearchBar placeholder={"Search Projects..."} />
				</div>
				<CenterDiv>
					<PrimaryButton
						text={includeLogo ? "Add Project" : "Add Column"}
						openPopup={
							includeLogo
								? addProjectPopupOpen
								: addColumnPopupOpen
						}
					/>
				</CenterDiv>
			</div>
		</div>
	);
}
export default Navbar;
