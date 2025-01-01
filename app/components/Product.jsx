/* eslint-disable react/prop-types */

import { useTheme } from "../contexts/ThemeContext";

export default function Product({ data }) {
const { updateHeader, setUpdateHeader } = useTheme();
     // ฟังก์ชันเพื่อเพิ่มสินค้าใน sessionStorage
  const addToCart = (product) => {
    // อ่านข้อมูลที่เก็บใน sessionStorage
    const cart = JSON.parse(sessionStorage.getItem("session_cart")) || [];
    
    // ค้นหาสินค้าที่มี Product_ID เดียวกัน
    const existingProductIndex = cart.findIndex(item => item.Product_ID === product.Product_ID);

    if (existingProductIndex !== -1) {
      // ถ้ามีสินค้าตัวนี้แล้ว, เพิ่มจำนวน
      cart[existingProductIndex].quantity += 1;
      // คำนวณราคาทั้งหมดตามจำนวนใหม่
      cart[existingProductIndex].totalPrice = cart[existingProductIndex].Product_Price * cart[existingProductIndex].quantity;
    } else {

      cart.push({ 
        Product_ID: product.Product_ID,
        Product_Price: product.Product_Price,
        quantity: 1,
        totalPrice: product.Product_Price
      });
    }

    // บันทึกข้อมูลใน sessionStorage
    sessionStorage.setItem("session_cart", JSON.stringify(cart));
    alert("สินค้าถูกเพิ่มในตะกร้า!");

    const totalCartPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);
    sessionStorage.setItem("totalCart", totalCartPrice);
    setUpdateHeader(!updateHeader);
  };

    const productsByType = data.reduce((acc, el) => {
      acc[el.Product_type] = acc[el.Product_type] || [];
      acc[el.Product_type].push(el);
      return acc;
    }, {});
  
    return (
      <div className="max-w-[80rem] mx-auto my-4 font-noto-thai">
        {Object.keys(productsByType).map(type => (
          <div key={type}>
            <h2 className="font-bold text-xl my-4 px-2">{type} <sup className=" opacity-50">({productsByType[type].length})</sup></h2>
            <div className="grid grid-cols-2 px-4 sm:px-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {productsByType[type].map((el, index) => (
                <div
                  className="flex flex-col items-center border pb-2 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 group rounded-lg"
                  key={el.Product_ID + index}
                >
                  <div className="w-full max-h-[150px] overflow-hidden object-cover object-center rounded-t-md">
                    <img
                      className="object-cover object-center w-full h-full transition-all duration-300 group-hover:scale-110 pointer-events-none"
                      src={`data:image/jpeg;base64,${el.Product_img}`}
                      alt={el.Product_Name}
                    />
                  </div>
                  <p className="mt-2 font-semibold line-clamp-1">{el.Product_Name}</p>
                  <div className="w-full px-3">
                    <p className="text-sm text-gray-500 line-clamp-1">{el.Product_Price} บาท</p>
                    <p className="text-xs text-gray-400 line-clamp-2">{el.Product_Detail}</p>
                  </div>
                  <button className="border border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-2 py-1.5 w-[90%] rounded-md mt-6 " onClick={ () => addToCart(el)}>สั่งซื้อ</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
