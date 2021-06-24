import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import classes from "./CardComponent.module.css";

const CardComponent = (props) => {
  return (
    <Grid container spacing={3}>

    {props.articles.map((article) => (
    <Grid key= {article.id} item xs={12} sm={6} md={4}>
  <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             {article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {article.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {article.date}
              </Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon />
          </Box>
        </CardActions>
      </Card>
      
      </Grid>
      ))}
    </Grid>
  );
};

export default CardComponent;
