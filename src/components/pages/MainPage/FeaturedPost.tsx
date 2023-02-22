import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={post.image}
            alt={post.imageLabel}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ height: 100 }}
            >
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description.slice(0, 100) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Читати повністтю...
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
