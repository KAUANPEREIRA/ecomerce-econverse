// import Swiper core and required modules

// Import Swiper styles

import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ProductsVitrineType } from "@/app/utils/type";
import { useState } from "react";
import {
  ButtonPurchase,
  Card,
  CardDescription,
  Price,
  PriceInstallments,
  PriceTraced,
} from "../ProductsVitrine/style";
import { CardMobile, VitrineProductsContainerMobile } from "./style";

SwiperCore.use([]);

// Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type Props = {
  vitrine: ProductsVitrineType[];
};

export const ProductsVitrineMobile = async ({ vitrine }: Props) => {
  const [dataProducts, setDataProducts] = useState<Props[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Props | any>(null);
  function OpenModal(product: Props) {
    setModalIsOpen(true);
    setSelectedProduct(product);
  }

  function CloseModal() {
    setModalIsOpen(false);
  }

  const swiperParams = {
    slidesPerView: 4,
    navigation: true,
  };

  console.log({ vitrine });

  return (
    <>
      <VitrineProductsContainerMobile>
        <CardMobile {...swiperParams}>
          {vitrine &&
            vitrine.map((data, index) => {
              return (
                <div key={index}>
                  <Card>
                    <img src={data?.photo} />
                    <CardDescription>{data?.descriptionShort}</CardDescription>
                    <PriceTraced>R$ 30,90</PriceTraced>
                    <Price>R${data.price},00</Price>
                    <PriceInstallments>
                      ou 2x de R$ 49,95 sem juros
                    </PriceInstallments>
                    <ButtonPurchase>Comprar</ButtonPurchase>
                  </Card>
                </div>
              );
            })}
        </CardMobile>{" "}
        {/* <Modal
          isOpen={modalIsOpen}
          onRequestClose={CloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={CloseModal}>X</button>

          {selectedProduct && (
            <ModalContainer selectedProduct={selectedProduct} />
          )}
        </Modal> */}
      </VitrineProductsContainerMobile>
    </>
  );
};
