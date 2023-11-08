import { PencilIcon, XCircleIcon } from "@heroicons/react/24/outline";
import CenterDiv from "../CenterDiv";
import { Draggable } from "react-beautiful-dnd";

function TaskCard({ task, index }) {
	return (
		<div className=" p-2.5 text-sm border border-gray-200 w-full flex flex-col  rounded-md">
			<div className=" flex justify-between">
				<div className="font-semibold">{task.title}</div>
				<CenterDiv>
					<div className="flex ">
						<div className="flex flex-col  justify-center p-1.5 rounded-full hover:bg-blue-50 hover:text-blue-800 h-fit cursor-pointer transition-all duration-300 ease-in-out">
							<PencilIcon className="w-3 h-3" />
						</div>
						<div className="flex flex-col justify-center p-1.5 rounded-full hover:bg-red-50 hover:text-red-800 h-fit cursor-pointer transition-all duration-300 ease-in-out">
							<XCircleIcon className="w-3 h-3" />
						</div>
					</div>
				</CenterDiv>
			</div>
			<div className="leading-4 text-xs mt-2 text-gray-500 ">
				{task.description}
			</div>
		</div>
	);
}
export default TaskCard;
