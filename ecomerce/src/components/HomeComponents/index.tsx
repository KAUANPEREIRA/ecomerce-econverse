"use client";
import { Banner } from "@/components/Banner";
import { Cards } from "@/components/Cards";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { Navbar } from "@/components/NavBar";
import { BrowseByTag } from "../BrowseByTag";
import { Footer } from "../Footer";
import { Partners } from "../Partners";
import { ProductionsRelations } from "../ProductionsRelations";
import { Products } from "../Products";
import { ProductsVitrine } from "../ProductsVitrine";
import { ProductsVitrineMobile } from "../ProductsVitrineMobile";

type Props = {
  vitrine: any[];
};

export function HomeComponents({ vitrine }: Props) {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Cards />
      <Menu />
      <ProductsVitrine vitrine={vitrine} />
      <ProductsVitrineMobile vitrine={vitrine} />
      <Partners />
      <ProductionsRelations />
      <Products />
      <ProductsVitrine vitrine={vitrine} />
      <BrowseByTag />
      <Footer />
    </>
  );
}
