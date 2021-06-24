import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import CardComponent from "./CardComponent";
import classes from "./BlogMain.module.css";

function BlogMain(props) {
    console.log(props.articles)
  return (
    <div className="App">
      <Box className={classes.hero}>
        <Box>Teamdowhile Blogs</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Featured
        </Typography>
        <Grid container spacing={3}>
          <CardComponent articles = {props.articles} />
         
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default BlogMain;
