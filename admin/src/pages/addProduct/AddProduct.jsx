import "./addProduct.css"
import { useState } from "react";

const AddProduct = () => {
	const [movie, setMovie] = useState(null);
	const [img, setImg] = useState(null);
	const [imgTitle, setImgTitle] = useState(null);
	const [imgSm, setImgSm] = useState(null);
	const [trailer, setTrailer] = useState(null);
	const [video, setVideo] = useState(null);

	const handleChange = (e) => {
		const value = e.target.value;

		setMovie({...movie, [e.target.name]: value});
	}
	
	console.log(img, imgTitle, imgSm, trailer, video)

	return (
		<div className="add-product">
			<h1 className="add-product-title">New Movie</h1>
			<form className="add-product-form">
				<div className="add-product-item">
					<label>Image</label>
					<input type="file" id="img" name="img" onChange={(e) => setImg(e.target.files[0])}/>
				</div>
				<div className="add-product-item">
					<label>Title Image</label>
					<input type="file" id="img-title" name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])}/>
				</div>
				<div className="add-product-item">
					<label>Thumbnail Image</label>
					<input type="file" id="img-Sm" name="imgSm" onChange={(e) => setImgSm(e.target.files[0])}/>
				</div>
				<div className="add-product-item">
					<label>Title</label>
					<input type="text" placeholder="Enter movie title..." name="title" onChange={handleChange} />
				</div>
				<div className="add-product-item">
					<label>Description</label>
					<input type="text" placeholder="Movie description" name="desc" onChange={handleChange} />
				</div>
				<div className="add-product-item">
					<label>Year</label>
					<input type="text" placeholder="Year of manufacture" name="year" onChange={handleChange} />
				</div>
				<div className="add-product-item">
					<label>Genre</label>
					<input type="text" placeholder="Movie genre" name="genre" onChange={handleChange} />
				</div>
				<div className="add-product-item">
					<label>Is series?</label>
					<select name="isSeries" id="isSeries" onChange={handleChange} >
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>
				</div>
				<div className="add-product-item">
					<label>Limit</label>
					<input type="text" placeholder="Age limit" name="limit" onChange={handleChange} />
				</div>
				<div className="add-product-item">
					<label>Trailer</label>
					<input type="file" name="trailer" onChange={(e) => setTrailer(e.target.files[0])}/>
				</div>
				<div className="add-product-item">
					<label>Video</label>
					<input type="file" name="video" onChange={(e) => setVideo(e.target.files[0])}/>
				</div>
				<button className="add-product-button">Create</button>
			</form>
		</div>
	)
}

export default AddProduct
