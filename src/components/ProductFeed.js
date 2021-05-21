import Product from "../components/Product";

function ProductFeed({ products }) {
  return (
    <div>
      <h2>Products here:</h2>
      {products.map(({ id, title, price, description, category, image }) => (
        <Product key={id} title={title} />
      ))}
    </div>
  );
}

export default ProductFeed;
