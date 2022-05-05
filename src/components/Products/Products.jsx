import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./style";
import data from "../../data";

const Products = ({ onAdd }) => {
  const classes = useStyles();
  const { products } = data;
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAdd={onAdd} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
