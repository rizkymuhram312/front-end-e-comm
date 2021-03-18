import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { apiProductTransaction } from "../../config/apiUrl";
// Swiper
import Swiper from 'react-id-swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import './HeroSlider.css';
// img
import image1 from '../../components/img/carousel/sepatu1.jpg'
import image2 from '../../components/img/carousel/camera.jpg'
import image3 from '../../components/img/carousel/bag.jpg'




export default function Navbar({ fixed }) {


	const [isLogin, setisLogin] = useState(false)
	const [navbarOpen, setNavbarOpen] = React.useState(false);

	const [loading, setLoading] = useState(false);
	const [Category, setCategory] = useState([]);
	const [Product, setProduct] = useState([]);
	let history = useHistory();

	const [value, setValue] = useState();
	const refresh = () => {
		// re-renders the component
		setValue({});
	}

	// token untuk mengambil data login
	useEffect(() => {
		// console.log(isLogin)
		if (localStorage.token == null || localStorage.token == undefined) {
			setisLogin(false);
			setValue({});
		}
		else {
			setisLogin(true);
			setValue({});
		}
		setValue({});
	}, [localStorage.token])




	// database product
	useEffect(() => {
		console.log(Product)
		setLoading(true);
		axios({
			url: `${apiProductTransaction}/product/`,
			method: "get",
			headers: {
				"Content-type": "application/json"
			}
		}).then((res) => setProduct(res.data))
			.catch((err) => console.error(err))
	}, [])
	

	useEffect(() => {
		console.log(Category)
		setLoading(true);
		axios({
			url: `${apiProductTransaction}/category/`,
			method: "get",
			headers: {
				"Content-type": "application/json"
			}
		}).then((res) => setCategory(res.data))
			.catch((err) => console.error(err))
	}, [])

	// slider config options
	const HeroSliderConfigs = {
		constainerClass: 'swiper-container hero-slider',
		parallax: true,
		conteredSlides: true,
		speed: 500,
		spaceBetween: 0,
		effect: 'slide'
	}
	// slider component
	const [parallaxSwiper, setParrallaxSwiper] = useState(null);
	const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
	const parallaxOpacity = 0.5;

	return (


		<div>

			{isLogin ? (

				<>
					<div className="capitalize text-center text-3xl font-bold mb-3">
						selamat datang {localStorage.getItem('dataUserName')}
					</div>
				</>

			) : (
				<div className="capitalize text-center text-3xl font-bold mb-3">
					anda belum login
				</div>
			)}

			{/* start carousel */}
			<Swiper {...HeroSliderConfigs} getSwiper={setParrallaxSwiper}>
				{/* 01 */}
				<div className="hero-slide">
					<div
						className="slide-image"
						data-swiper-parallax={parallaxAmount}
						data-swiper-parallax-opacity={parallaxOpacity}
					>
						<img src={image1} alt="image1" />
					</div>
					<div className="col-md-6 offset-md-3 my-auto text-center text-white content">
						<h1 className="text-uppercase mb-2 font-weight-bold">slide 1</h1>
						<p className="mb-5 small">
							lorem ipsum lorem dolor sit scontr
						</p>
					</div>


				</div>
				{/* 02 */}
				<div className="hero-slide">
					<div className="slide-image"
						data-swiper-parallax={parallaxAmount}
						data-swiper-parallax-opacity={parallaxOpacity}
					>
						<img src={image2} />
					</div>
					<div className="col-md-6 offset-md-3 my-auto text-center text-white content">
						<h1 className="text-uppercase mb-2 font-weight-bold">slide 1</h1>
						<p className="mb-5 small">
							lorem ipsum lorem dolor sit scontr
						</p>
					</div>


				</div>


			</Swiper>
			{/* end carousel */}


			<div>
				<div className="w-full text-center mt-2">
					<p className="my-2 text-2xl uppercase font-bold">Category</p>
					<hr className="mb-3"></hr>
				</div>
				<div class="flex flex-block mb-3 gap-2">
					<div class="bg-gray-100 flex justify-center">
						{
							Category.map((cate) => {
								return (
									// <Link to={`/product/{cate.cate_id}`}>
									<div class="bg-white w-48 shadow-lg cursor-pointer rounded transform hover:scale-105 hover:mt-2 duration-300 ease-in-out m-2">
										{/* icon seller  */}

										<div class="">
											<img src="https://picsum.photos/400/300" alt="" class="rounded-t" />
										</div>

										<div class="p-4">
											<h2 class="text-md uppercase">
												{cate.cate_name}</h2>

										</div>
									</div>
									//  </Link>
								)
							})}
					</div>
				</div>

			</div>
			<div>
				<div className="w-full">
					<p className="my-2 text-2xl uppercase font-bold">All Product</p>
					<hr className="mb-3"></hr>
				</div>
				<div class="flex flex-row flex-block mb-3 gap-2">
					<div class=" bg-gray-100 flex  flex-wrap ">
						{
							Product.map((x) => {
								return (
									<div key={x.prod_id} class="bg-white w-48 shadow-lg cursor-pointer rounded transform hover:scale-105 hover:mt-2 duration-300 ease-in-out m-2"

									// onClick={() => DetailProduct(x.prod_id)} 
									>
										<Link to={`/product/${x.prod_id} `}>
											{/* icon seller  */}
											<div class="static">
												<div class="absolute top-0 left-0 mt-2 bg-gray-100 px-2">
													<p>Seller</p>
												</div>
											</div>
											<div class="">
												<img src="https://picsum.photos/400/300" alt="" class="rounded-t" />
											</div>

											<div class="p-4">
												<h2 class="text-md font-bold uppercase">
													{x.prod_name}</h2>
												<p class="font-light text-gray-500 text-md font-bold "><span>Rp.</span>{x.prod_price}</p>
												<p class="font-light text-gray-500 text-md font-bold ">{x.city}</p>

												<a href="#" class="block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out">Add to cart</a>
											</div>
										</Link>
									</div>
								)
							})}
					</div>



				</div>
				<div class="flex flex-row flex-block mb-3 gap-2">



				</div>
			</div>
		</div>


	);
}
