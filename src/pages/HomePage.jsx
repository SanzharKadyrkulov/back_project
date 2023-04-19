import React, { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import { BASE_URL } from "../utils/consts";

function HomePage() {
	const { products, getProducts, deleteProduct } = useProductContext();

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Container>
			<Grid container spacing={2}>
				{products.map((item) => {
					return (
						<Grid key={item.slug} item xs={12} sm={6} md={4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="300"
									image={`${BASE_URL}${item.main_image}`}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{item.title}
									</Typography>
									<Typography variant="h6" color="text">
										${item.price}
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										onClick={() => deleteProduct(item.slug)}
										color="error"
										size="small"
									>
										Delete
									</Button>
									<Button size="small">Edit</Button>
								</CardActions>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}

export default HomePage;
