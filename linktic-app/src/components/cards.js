const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <img src={require(`./images/${product.image}`).default} alt={product.name} />
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          {/* Puedes añadir más detalles aquí si es necesario */}
        </div>
      </div>
    );
  };