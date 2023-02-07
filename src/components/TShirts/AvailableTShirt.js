import { useEffect, useState } from "react";
import Pagination from "../Layout/Pagination";
import Card from "../UI/Card";
import TShirtItem from "./TShirtItem/TShirtItem";

function AvailableTShirt() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  

  const fetchProducts = async () => {
    const res = await fetch(
      "https://react-shopping-cart-67954.firebaseio.com/products.json"
    );
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  

  return (
    <div>
      <Card>
        {products.length > 0 && (
          <TShirtItem products={products} page={page}  />
        )}
      </Card>

      {products.length > 0 && (
        <Pagination page={page} products={products} setPage = {setPage}/>
      )}
    </div>
  );
}

export default AvailableTShirt;
