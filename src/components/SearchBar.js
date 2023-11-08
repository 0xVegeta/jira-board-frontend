import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar({ placeholder }) {
	const [inputText, setInputText] = useState("");
	return (
		<div className="px-2 py-2 text-sm h-fit">
			<div className="relative">
				<input
					type="text"
					placeholder={placeholder}
					value={inputText}
					className="py-1.5 pl-10 pr-3 border-2 rounded-md w-[500px] outline-none focus:border-2 focus:border-gray-400 caret-green-400 text-gray-600 font-thin "
					onChange={(e) => setInputText(e.target.value)}
				/>
				<MagnifyingGlassIcon className="w-6 h-6 absolute top-1/2 left-4 transform -translate-y-1/2 border-box text-gray-400 pr-2" />
			</div>
		</div>
	);
}
export default SearchBar;
