import { use, useEffect, useState } from "react";
import "./App.css";
import Category from "./Category";
import axios from "axios";

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalProduct, setFinalProduct] = useState([]);
  let [categoryName, setCategoryName] = useState("");

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => res.data)
      .then((finalRes) => {
        //console.log(finalRes);
        setFinalCategory(finalRes);
      });
  };

  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalRes) => {
        //console.log(finalRes);
        setFinalProduct(finalRes.products);
      });
  };

  // when call it, just refresh one time & get data and second time no refresh it
  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (categoryName !== "") {
      //console.log("hello");
      //console.log(categoryName);
      axios
        .get(`https://dummyjson.com/products/category/${categoryName}`)
        .then((proRes) => proRes.data)
        .then((finalRes) => {
          setFinalProduct(finalRes.products);
        });
    }
  }, [categoryName]);

  let productItems = finalProduct.map((products, index) => {
    return <ProductItems key={index} pData={products} />;
  });

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1>
          <div className="grid sm:grid-cols-[30%_auto] grid-cols-1 gap-[20px]">
            <div>
              <Category
                finalCategory={finalCategory}
                setCategoryName={setCategoryName}
              />
            </div>

            <div>
              <div className="grid grid-cols-3 gap-5">
                {finalProduct.length >= 1 ? productItems : "No Product Found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItems({ pData }) {
  //console.log(pData);
  return (
    <div className="shadow-lg text-center pb-4">
      <img
        src={pData.thumbnail}
        alt="Product Img"
        className="w-[100%] h-[220px] "
      />

      <h4 className="font-mono">{pData.title}</h4>

      <b>BDT {pData.price}</b>
    </div>
  );
}
