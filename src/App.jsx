import React from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

export default function App() {
	const [images, setImages] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [term, setTerm] = React.useState("");

	React.useEffect(() => {
		fetch(
			`https://pixabay.com/api/?key=42370780-1331df2c896ca572c2e0c5d36&q=${term}&image_type=photo&pretty=true`
		)
			.then((res) => res.json())
			.then((data) => {
				setImages(data.hits);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [term]);

	console.log(images);

	return (
		<div className="container mx-auto p-6">
			<ImageSearch searchText={(text) => setTerm(text)} />
			{!isLoading && images.length === 0 && (
				<h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
			)}
			<div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
				<>
					{isLoading ? (
						<h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
					) : (
						images.map((image, index) => (
							<ImageCard
								key={index}
								image={image}
							/>
						))
					)}
				</>
			</div>
		</div>
	);
}
