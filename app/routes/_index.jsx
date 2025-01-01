import { json } from "@remix-run/node"
import SearchInput from "../components/SearchInput";
import SlideImage from "../components/SlideImage";
import { getUsers } from "../utils/connectdb";
import { useLoaderData } from "@remix-run/react";
import Product from "../components/Product";
import Loading from "../components/Loading"
import { useEffect, useState } from "react"
import{ randomBytes } from "crypto"

export const meta = () => {
  return [
    { title: "chicken : home" },
  ];
};

export const loader = async () => {
  const product = await getUsers();
  return json({ product });
};

export default function Index() {

  const { product } = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product) {
      setLoading(false);
    }

    if(!sessionStorage.getItem("session_user_id")){
      const userId = randomBytes(16).toString('hex'); // สร้าง session id
      sessionStorage.setItem("session_user_id", userId);
    }

  }, [product]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="select-none" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SearchInput />
      <SlideImage />
      <Product data={product} />
    </div>
  );
}
