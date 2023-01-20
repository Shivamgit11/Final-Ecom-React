import React, { useContext, useEffect } from "react";
import Product from "./Product";
import CartContext from "../../store/cart-context";
import axios from "axios";
const AvailableProducts = () => {
  const cartCtx = useContext(CartContext);
  const productsArr = [
    {
      id: "1",

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "2",

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "3",

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "4",

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      id: "5",

      title: "Laptop",

      price: 10000,

      imageUrl:
        "https://th.bing.com/th/id/OIP.Zlt_Mqu2JEn8itPCLMtWegHaGS?w=230&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7g",
    },
    {
      id: "6",

      title: "SmartPhone",

      price: 10000,

      imageUrl:
        "https://th.bing.com/th/id/OIP.2sHAXJI6nHCWMZ909u9v8gHaEK?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7g",
    },
  ];
  
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/60dd19a7917443068230445a9fcc8153/cart${email}`
      ).then((res) => {
          cartCtx.initilizeCart(res.data);
          
      })
      
        
  },[]);

  return (
    <section>
      <ul>
        {productsArr.map((prod) => {
          return (
            <Product
              
              key={Math.random()}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              image={prod.imageUrl}
              quantity= {1}
              _id= {prod._id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableProducts;
