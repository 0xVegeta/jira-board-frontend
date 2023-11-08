import { PlusIcon } from "@heroicons/react/24/outline";
import CenterDiv from "../CenterDiv";

function PrimaryButton({ text, openPopup,  }) {
	return (
		<div
			className="px-4 py-1.5 bg-black text-white rounded-md min-w-[96px] text-center text-sm uppercase font-medium border-2 border-black hover:bg-zinc-800  hover:text-white hover:border-zinc-800 cursor-pointer transition-all duration-200 ease-in-out flex gap-1 justify-center "
			onClick={() => openPopup(true)}
		>
			<CenterDiv>
				<PlusIcon className="w-4 h-4 font-medium stroke-2 " />
			</CenterDiv>
			{text}
		</div>
	);
}
export default PrimaryButton;
