import React from "react";

export default function ImageSearch({ searchText }) {
	const [text, setText] = React.useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		searchText(text);
	};

	return (
		<div className="max-w-sm mx-auto rounded-none overflow-hidden my-10">
			<form
				onSubmit={onSubmit}
				className="w-full max-w-sm">
				<div className="flex items-center py-2 border-b-2 border-teal-500">
					<input
						onChange={(e) => setText(e.target.value)}
						type="text"
						placeholder="Search Image Term..."
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 pr-2 leading-tight focus:outline-none rounded-none"
					/>
					<button
						type="submit"
						className="shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
