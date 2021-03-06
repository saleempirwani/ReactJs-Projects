import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product";
import products from "../../products";

import useStyle from "./style";

const Products = () => {
  const classes = useStyle();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
