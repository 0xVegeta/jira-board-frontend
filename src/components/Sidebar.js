import { Roboto_Condensed } from "next/font/google";
import CenterDiv from "./CenterDiv";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const roboCon = Roboto_Condensed({ subsets: ["latin"] });
function Sidebar() {
	return (
		<div className="px-6 border-2 border-gray-100  py-4 w-1/5 flex flex-col justify-start gap-4 h-full">
			<CenterDiv>
				<Link
					href="/"
					className={`${roboCon.className} text-4xl tracking-tighter text-center font-extrabold`}
				>
					kanban board.
				</Link>
			</CenterDiv>
			<div className="border flex flex-col py-2 border-gray-100  h-full rounded-md overflow-auto">
				<div className="py-2 px-4  my-0.5 bg-gray-200 mx-2 rounded-md text-sm text-gray-900 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
				<div className="py-2 px-4 hover:bg-gray-100 my-0.5 mx-2 rounded-md text-sm text-gray-600 font-medium flex justify-start gap-1.5 cursor-pointer duration-200 transition-all ease-in">
					<CenterDiv>
						<RectangleStackIcon className="w-3.5 h-3.5" />
					</CenterDiv>
					<div>Project Management</div>
				</div>
			</div>
		</div>
	);
}
export default Sidebar;
