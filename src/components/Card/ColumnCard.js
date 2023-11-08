import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import SecondaryButton from "../Button/SecondaryButton";
import CenterDiv from "../CenterDiv";
import TaskCard from "./TaskCard";
import { Draggable } from "react-beautiful-dnd";

function ColumnCard({ columnData }) {
	return (
		<div className="flex-shrink-0 px-3 py-4 flex flex-col gap-3 justify-between w-[300px] border shadow-md  border-gray-300 rounded-md">
			<div className="flex flex-col gap-1 overflow-auto ">
				<div className="flex justify-between mb-2">
					<div className="px-4  rounded-lg py-1 font-semibold  bg-gray-200 w-fit">
						{columnData.title}
					</div>
					<CenterDiv>
						<div className="h-fit flex flex-col justify-center cursor-pointer">
							<EllipsisVerticalIcon className="w-5 h-5" />
						</div>
					</CenterDiv>
				</div>

				{columnData.tasks.map((task, index) => (
					<Draggable
						draggableId={task.id}
						index={index}
						key={task.id}
					>
						{(provided) => (
							<div
								className="item-container"
								{...provided.dragHandleProps}
								{...provided.draggableProps}
								ref={provided.innerRef}
							>
								<TaskCard task={task} key={task.id} />
							</div>
						)}
					</Draggable>
				))}
			</div>
			<div>
				<SecondaryButton text={"Add"} />
			</div>
		</div>
	);
}
export default ColumnCard;
