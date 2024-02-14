import React from "react";

export default function ImageCard({ image }) {
	return (
		<div className="max-w-sm w-full mx-auto rounded overflow-hidden shadow-lg">
			<div className="relative w-full h-56 overflow-hidden">
				<img
					src={image.largeImageURL}
					alt=""
					className="absolute inset-0 w-full h-full object-cover"
				/>
			</div>
			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 text-xl mb-2">
					Photo by {image.user}
				</div>
				<ul>
					<li>
						<strong>Views : </strong>
						<span>{image.views}</span>
					</li>
					<li>
						<strong>Downloads : </strong>
						<span>{image.downloads}</span>
					</li>
					<li>
						<strong>Likes : </strong>
						<span>{image.likes}</span>
					</li>
				</ul>
			</div>
			<div className="flex items-center flex-wrap gap-2 px-6 py-4">
				{image.tags.split(",").map((tag, index) => (
					<span
						key={index}
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
}
