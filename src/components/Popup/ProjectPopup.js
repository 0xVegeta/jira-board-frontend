import { PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "../Button/PrimaryButton";
import Popup from "./Popup";
import CenterDiv from "../CenterDiv";
import { useState } from "react";

function ProjectPopup({ isOpen, setPopupOpen }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);
	const submitHandler = async () => {
		setLoading(true);
		if (!title || !description) {
			toast.warn("Please Fill all the fields");
			setLoading(false);
			return;
		}

		try {
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			console.log(import.meta.env.BASE_URL);
			const { data } = await axios.post(
				`${import.meta.env.VITE_URL}/api/v1/org/login`,
				{ email, password },
				config
			);

			toast.success("Login Successful");
			localStorage.setItem("orgInfo", JSON.stringify(data));
			setLoading(false);
			navigate("/");
		} catch (error) {
			toast.error("Error Occured!");
			setLoading(false);
		}
	};
	return (
		<Popup isOpen={isOpen}>
			<div className="flex flex-col justify-between gap-1.5">
				<div className="flex justify-between">
					<div className="text-xl font-bold">Add a Project</div>
					<button
						onClick={() => setPopupOpen(false)}
						className="flex flex-col justify-center "
					>
						<div className="flex flex-col justify-center h-fit p-2 hover:bg-gray-100 rounded-full">
							<XCircleIcon className="w-5 h-5 " />
						</div>
					</button>
				</div>
				<div className="flex flex-col justify-start gap-0.5">
					<div>
						<label
							htmlFor="title"
							className="text-gray-700 text-sm leading-3"
						>
							Title
						</label>
						<input
							type="text"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Enter the project's title"
							className="border-2 border-gray-200 p-2 outline-none focus:outline-none focus:border-gray-400 rounded-md w-full "
						/>
					</div>
					<div>
						<label
							htmlFor="description"
							className="text-gray-700 text-sm leading-3"
						>
							Description
						</label>
						<textarea
							type="text"
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Describe Your project"
							rows={3}
							className="border-2 border-gray-200 p-2 outline-none focus:outline-none focus:border-gray-400 rounded-md w-full "
						/>
					</div>
				</div>
				<div>
					<button
						className="px-4 py-1.5 bg-black text-white rounded-md min-w-[96px] text-center text-sm uppercase font-medium border-2 border-black hover:bg-zinc-800  hover:text-white hover:border-zinc-800 cursor-pointer transition-all duration-200 ease-in-out flex gap-1 justify-center "
						onClick={submitHandler}
						
					>
						<CenterDiv>
							<PlusIcon className="w-4 h-4 font-medium stroke-2 " />
						</CenterDiv>
						Add
					</button>
				</div>
			</div>
		</Popup>
	);
}
export default ProjectPopup;
