import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export default function Home() {
	const [Category, setCategory] = useState([]);
	const [Product, setProduct] = useState([]);



	useEffect(() => {
		console.log(Product)
		axios({
			url: 'http://localhost:3002/api/product/',
			method: "get",
			headers: {
				"Content-type": "application/json"
			}
		}).then((res) => setProduct(res.data))
			.catch((err) => console.error(err))
	}, [])

	useEffect(() => {
		Product.map((x) => {
			if (x.category.cate_name.includes(Category))
				setCategory(Category => [...Category, x.category.cate_name])
		})
		console.log(Category)
	}, [Product])

	return (
		<>
			<div>
				<div class="flex  ">
					<div class=" ml-3 ">
						<div class="static ">
							<div class="absolute bottom-20 left-10 ">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
								</svg>
							</div>
							<div>
							<img src={"pic_banner.jpg"}></img>
							</div>
							<div class="absolute bottom-20 left-10 ">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="w-full text-center">
						<p className="my-2 text-2xl uppercase font-bold">Category</p>
						<hr className="mb-3"></hr>
					</div>
					<div class="flex flex-row flex-block mb-3 gap-2">

						<div class="w-1/8">
							{
								Product.map((x) => {
									return (
										<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-wrap space-x-4">
											<div className="flex flex-col item-center">
												<img class="h-13 w-13" src={"./product/1.jpg "} alt="Product images" />
												<h2 class="text-2xl uppercase">
													{x.cate_name}</h2>
											</div>
										</div>
									)
								})}
						</div>

						<div class="w-1/8">
							<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex  space-x-4">
								<div className="flex flex-col item-center">
									<img class="h-13 w-13" src="/product/1.jpg" alt="Product images" />

									<div class="text-xl font-medium text-center my-2 text-black">Name Category</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div>
					<div className="w-full">
						<p className="my-2 text-2xl uppercase font-bold">All Product</p>
						<hr className="mb-3"></hr>
					</div>
					<div class="flex flex-row flex-block mb-3 gap-2">
						<div class=" bg-gray-100 flex justify-center">
							{
								Product.map((x) => {
									return (
										<div class="bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 hover:mt-2 duration-300 ease-in-out">
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
												<h2 class="text-2xl uppercase">
													{x.prod_name}</h2>
												<p class="font-light text-gray-500 text-lg my-2"><span>Rp.</span>{x.prod_price}</p>
												{/* <a href="#" class="block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out">Add to cart</a> */}
											</div>
										</div>
									)
								})}
						</div>



					</div>
					<div class="flex flex-row flex-block mb-3 gap-2">



					</div>
				</div>
			</div>

		</>



	)
}
