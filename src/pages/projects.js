import ColumnCard from "@/components/Card/ColumnCard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import initialData from "@/initialData";
import { Syne } from "next/font/google";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const syne = Syne({ subsets: ["latin"] });

function projects() {
	const [stores, setStores] = useState(initialData);

	const handleDragAndDrop = (results) => {
		const { source, destination, type } = results;
		console.log(source, destination);
		const taskSourceIndex = source.index;
		const taskDestinationIndex = destination.index;

		const storeSourceIndex = stores.findIndex(
			(store) => store.id === source.droppableId
		);
		const storeDestinationIndex = stores.findIndex(
			(store) => store.id === destination.droppableId
		);

		const removedTask = stores[storeSourceIndex].tasks.splice(
			taskSourceIndex,
			1
		);
		stores[storeDestinationIndex].tasks.splice(
			taskDestinationIndex,
			0,
			removedTask[0]
		);

		setStores([...stores]);

		// console.warn(results);
		// const { source, destination, type } = results;

		// if (!destination) return;

		// if (
		// 	source.droppableId === destination.droppableId &&
		// 	source.index === destination.index
		// )
		// 	return;

		// if (type === "group") {
		// 	const reorderedStores = [...stores];

		// 	const storeSourceIndex = source.index;
		// 	const storeDestinationIndex = destination.index;

		// 	console.warn(storeDestinationIndex, storeSourceIndex);

		// 	const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
		// 	reorderedStores.splice(storeDestinationIndex, 0, removedStore);

		// 	return setStores(reorderedStores);
		// }
		// const itemSourceIndex = source.index;
		// const itemDestinationIndex = destination.index;

		// const storeSourceIndex = stores.findIndex(
		// 	(store) => store.id === source.droppableId
		// );
		// const storeDestinationIndex = stores.findIndex(
		// 	(store) => store.id === destination.droppableId
		// );

		// const newSourceItems = [...stores[storeSourceIndex].tasks];
		// const newDestinationItems =
		// 	source.droppableId !== destination.droppableId
		// 		? [...stores[storeDestinationIndex].tasks]
		// 		: newSourceItems;

		// const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
		// newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

		// const newStores = [...stores];

		// newStores[storeSourceIndex] = {
		// 	...stores[storeSourceIndex],
		// 	items: newSourceItems,
		// };
		// newStores[storeDestinationIndex] = {
		// 	...stores[storeDestinationIndex],
		// 	items: newDestinationItems,
		// };

		// setStores(newStores);
	};

	return (
		<div
			className={`${syne.className} flex h-screen w-screen justify-start`}
		>
			<Sidebar />
			<DragDropContext onDragEnd={handleDragAndDrop}>
				<div className=" flex flex-col justify-start w-4/5">
					<Navbar includeLogo={false} />
					<div className="grow h-full w-full flex-no-wrap flex justify-start  gap-4 overflow-auto p-4">
						{/* {initialData.columnOrder.map((columnId) => {
							const column = initialData.columns[columnId];
							return (
								<ColumnCard
									columnData={column}
									key={column.id}
								/>
							);
						})} */}

						{stores.map((store, index) => (
							<Droppable droppableId={store.id}>
								{(provided) => (
									<div
										{...provided.droppableProps}
										ref={provided.innerRef}
										className="grow h-full w-full flex-no-wrap flex justify-start  gap-4 overflow-auto p-4"
									>
										<ColumnCard
											columnData={store}
											key={store.id}
											index={index}
										/>
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						))}
					</div>
				</div>
			</DragDropContext>
		</div>
	);
}
export default projects;
