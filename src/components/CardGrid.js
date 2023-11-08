import ProjectCard from "./Card/ProjectCard";

function CardGrid({ allBoards }) {
	return (
		<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-8 bg-white rounded-lg  mx-auto w-full px-6  ">
			{allBoards.map((board) => (
				<ProjectCard key={board._id} board={board} />
			))}
		</div>
	);
}
export default CardGrid;
