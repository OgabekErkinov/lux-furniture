import { useSelector } from "react-redux";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const FavouritesPage = () => {
    const favourites = useSelector((state) => state.favourites.items);

    return (
        <Box p={3}>
            <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
                Favourites
            </Typography>

            {favourites.length === 0 ? (
                <Typography variant="h6" color="gray" textAlign="center">
                    No favourites yet 😔
                </Typography>
            ) : (
                <Grid container spacing={3} justifyContent="center">
                    {favourites.map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ borderRadius: 2, boxShadow: 2, height: "100%" }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt={item.name}
                                    sx={{ objectFit: "cover" }}
                                />
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body1" color="green">
                                        ${item.price}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Type: {item.type}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default FavouritesPage;
