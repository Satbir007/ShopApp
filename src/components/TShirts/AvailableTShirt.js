import { useEffect, useState, useContext } from "react";
import Pagination from "../Layout/Pagination";
import Card from "../UI/Card";
import TShirtItem from "./TShirtItem/TShirtItem";
import FilterContext from "../../store/filter-context";

function AvailableTShirt() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [val, setVal] = useContext(FilterContext);
 
  // Fetch all Products 
  const fetchProducts = async () => {
    const res = await fetch(
      "https://react-shopping-cart-67954.firebaseio.com/products.json"
    );
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  //console.log(products);
  // Filtered Product list
  const [pList, setPList] = useState([]);

  // All Product List 
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  
  // Storing all products 
  useEffect(() => {
    setAllItems([]);
    products.map((prod) =>
      setAllItems((allItems) => {
        return [
          {
            id: prod.id,
            title: prod.title,
            currencyFormat: prod.currencyFormat,
            price: prod.price.toFixed(2)
          },
          ...allItems,
        ];
      })
    );
  }, [products]);

  //console.log("AllValueList is:", allItems);
  
  // Storing filtered items
  useEffect(() => {
    setPList([]);
    products
      .filter((products) => products.availableSizes.includes(val))
      .map((prod) =>
        setPList((pList) => {
          return [
            {
              id: prod.id,
              title: prod.title,
              currencyFormat: prod.currencyFormat,
              price: prod.price.toFixed(2)
            },
            ...pList,
          ];
        })
      );
  }, [val, products]);

  //console.log(" Filtered List is:", pList);

  const [productList, setProductList] = useState(allItems);
  
  useEffect(() => {
    val === ""? setProductList(allItems) : setProductList(pList)
  },[val, allItems, pList])
  

  return (
    <div>
      <Card>
        {products.length > 0 && <TShirtItem products={productList} page={page} />}
      </Card>

      {products.length > 0 && (
        <Pagination page={page} products={productList} setPage={setPage} />
      )}
    </div>
  );
}

export default AvailableTShirt;
