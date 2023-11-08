import { PencilIcon, XCircleIcon } from "@heroicons/react/24/outline";
import CenterDiv from "../CenterDiv";

function ProjectCard({ board }) {
	return (
		<div className="rounded-md shadow-md border border-gray-300 w-full p-4 flex flex-col  bg-white">
			<div className="flex justify-between pb-3">
				<div className="text-xl font-bold text-gray-800 max-w-md overflow-hidden ">
					{board.name}
				</div>
				<CenterDiv>
					<div className="flex gap-1">
						<div className="flex flex-col  justify-center p-1.5 rounded-full hover:bg-blue-50 hover:text-blue-800 h-fit cursor-pointer transition-all duration-300 ease-in-out">
							<PencilIcon className="w-3.5 h-3.5" />
						</div>
						<div className="flex flex-col justify-center p-1.5 rounded-full hover:bg-red-50 hover:text-red-800 h-fit cursor-pointer transition-all duration-300 ease-in-out">
							<XCircleIcon className="w-3.5 h-3.5" />
						</div>
					</div>
				</CenterDiv>
			</div>
			<div className="text-sm text-gray-500">
				Number of Columns: <span className="font-semibold">3</span>
			</div>
			<div className="text-sm text-gray-500">
				Number of Tasks: <span className="font-semibold">12</span>
			</div>
			<div className="text-sm text-gray-600 pt-1.5">
				{board.description}
			</div>
		</div>
	);
}
export default ProjectCard;
