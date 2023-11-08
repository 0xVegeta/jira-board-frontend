import { PlusIcon } from "@heroicons/react/24/outline";
import CenterDiv from "../CenterDiv";

function SecondaryButton({ text }) {
	return (
		<div className="px-4 py-1.5 border border-dashed text-gray-700 rounded-md  text-center text-sm uppercase font-medium  border-gray-700 hover:bg-green-50  hover:text-green-500 w-full cursor-pointer transition-all duration-200 ease-in-out flex gap-1 justify-center hover:border-green-500 ">
			<CenterDiv>
				<PlusIcon className="w-4 h-4 font-medium stroke-2 " />
			</CenterDiv>
			{text}
		</div>
	);
}
export default SecondaryButton;
