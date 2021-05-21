function ProductFeed({ products }) {
  return (
    <div>
      <h2>Products here:</h2>
      {console.log({ products })}
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

export default ProductFeed;
