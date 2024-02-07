import { HomeComponents } from "@/components/HomeComponents";
import axios from "axios";

export default async function Home() {
  const getProducts = async () => {
    const { data } = await axios.get(
      `https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`
    );
    return data?.products;
  };

  const products = await getProducts();

  return (
    <>
      <HomeComponents vitrine={products} />
    </>
  );
}
