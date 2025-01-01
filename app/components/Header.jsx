/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faBars, faShoppingCart, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const navigate = useNavigate();
  const [hamberger, setHamberger] = useState(false)
  const [totalCartPrice, setTotalCartPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const { updateHeader } = useTheme();

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem("session_cart")) || [];
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalCartPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);
    
    setTotalQuantity(totalQuantity >= 99 ? "+99" : totalQuantity); // เปลี่ยนเป็น "+99" ถ้าจำนวนมากกว่า 99
    setTotalCartPrice(totalCartPrice); // เก็บราคาใหม่
}, [updateHeader])


  return (
    <div className="bg-[#FDC23D] shadow-lg border-none mb-2 font-noto-thai sticky top-0 z-10">
        <div className="md:max-w-[80rem] mx-auto">
            {/* full screen */}
            <div className="hidden md:flex justify-between items-center py-1">
                <div className="flex items-center gap-4 font-semibold">
                    <img className="max-w-12 mr-1" src="./chicken-logo-center.png" alt="logo" />
                    <p className="text-lg">AFK Chicken</p>
                    <a href="/">หน้าหลัก</a>
                    <select className="bg-transparent px-2 py-2 rounded-md" name="option" id="option">
                        <option value="" hidden>เมนู</option>
                        <optgroup label="เลือกเมนู">
                            <option value="">เมนูไก่ย่าง</option>
                            <option value="">เมนูน้ำ</option>
                            <option value="">เมนูเพิ่มเติม</option>
                        </optgroup>
                    </select>
                </div>
                <div className="flex gap-2 items-center text-lg text-white font-semibold">
                    <div className="relative" tabIndex={0} role="button" onClick={ () => navigate(`/cart?sessionId=${sessionStorage.getItem("session_user_id")}`)}>
                        {totalQuantity !== 0 && <p className=" absolute -top-2 scale-[0.80] left-[0.35rem] text-sm bg-red-600 px-2 py-0.5 rounded-full">{totalQuantity}</p>}
                        <FontAwesomeIcon className="text-lg" icon={faShoppingCart} />
                    </div>
                    <p>Total : {totalCartPrice} ฿</p>
                </div>
            </div>

            {/* responsive nav */}
            <div className="flex justify-between items-center md:hidden py-1 px-2">
                <img className="max-w-12 mr-1" src="./chicken-logo-center.png" alt="logo" />
                <p className="text-lg font-bold dark:text-white">AFK Chicken</p>
                <FontAwesomeIcon className="text-xl mr-2 w-[20px]" onClick={ () => setHamberger(!hamberger)} icon={hamberger ? faX  : faBars } />
            </div>
            {hamberger && (
                <div className="flex flex-col gap-4 my-2 px-2 py-4 md:hidden">
                    <hr />
                    <a href="/">หน้าหลัก</a>
                    <select className="bg-transparent px-2 py-2 rounded-md" name="option" id="option">
                        <option value="" hidden>เมนู</option>
                        <optgroup label="เลือกเมนู">
                            <option value="">เมนูไก่ย่าง</option>
                            <option value="">เมนูน้ำ</option>
                            <option value="">เมนูเพิ่มเติม</option>
                        </optgroup>
                    </select>
                </div>
            )}
        </div>
    </div>
  );
}
