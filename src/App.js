import { useEffect, useState } from "react";
import TShirt from './img/tshirt.png';
import "./App.css";
import "./css/main.css";

function App() {

  const [products, setProducts] = useState([]);
  const [page, setPage]=useState(1);
  const pageIndex = Math.ceil(products.length/5);
  console.log(pageIndex);

  const fetchProducts = async () => {
    const res = await fetch(
      "https://react-shopping-cart-67954.firebaseio.com/products.json"
    );
    const data = await res.json();
    if(data && data.products){
      setProducts(data.products);
    }

    ;
  };

  console.log(products);

  useEffect(() => {
   fetchProducts()
  }, []);

 const selectPagehandler =(selectedPage)=> {
 if(selectedPage>=1 && selectedPage<= pageIndex && selectedPage!==page)
  setPage(selectedPage)
  
};

  return <div >
   {products.length>0 && (
   <div className="products">
    {products.slice(page*5 - 5, page*5).map((prod)=>{
      return (
      <span className="products__single" key={prod.id}>
        <img src={TShirt} alt="tshirt" />
        <span>{prod.title}</span>
        </span>
        )})}


   </div>)}

   {
     products.length>0 && (
      <div className="pagination">
        <span 
        className={page>1 ? "": "pagination__disable"}
        onClick ={() => selectPagehandler(page-1)}>Prev</span>
        { 
          
          [...Array(pageIndex)].map((_, i) => {
           return <span className = {page === i+1 ? "pagination__selected": ""}onClick ={() => selectPagehandler(i+1)} key ={i}> {i+1}</span>
          })
        }
        <span
        className={page<pageIndex ? "": "pagination__disable"}
        onClick ={() => selectPagehandler(page+1)}
        >Next</span>

      </div>
      )
   }

  </div>;
}

export default App;
