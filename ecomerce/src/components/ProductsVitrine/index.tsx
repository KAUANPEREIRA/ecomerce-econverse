import { ProductsVitrineType } from "@/app/utils/type";
import { useState } from "react";
import Modal from "react-modal";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { ModalContainer } from "./ModalContainer";
import {
  ButtonPurchase,
  Card,
  CardDescription,
  Price,
  PriceInstallments,
  PriceTraced,
  VitrineProductsContainer,
} from "./style";

SwiperCore.use([]);
Modal.setAppElement("#root");

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

export const ProductsVitrine = ({ vitrine }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductsVitrineType | null>(null);

  const openModal = (product: ProductsVitrineType) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const swiperParams = {
    slidesPerView: 4,
    navigation: true,
  };

  return (
    <>
      <VitrineProductsContainer>
        <Swiper {...swiperParams}>
          {vitrine.map((data, index) => (
            <SwiperSlide key={index}>
              <Card>
                <img src={data.photo} />
                <CardDescription>{data.descriptionShort}</CardDescription>
                <PriceTraced>R$ 30,90</PriceTraced>
                <Price>R${data.price},00</Price>
                <PriceInstallments>
                  ou 2x de R$ 49,95 sem juros
                </PriceInstallments>
                <ButtonPurchase onClick={() => openModal(data)}>
                  Comprar
                </ButtonPurchase>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>X</button>
          {selectedProduct && (
            <ModalContainer selectedProduct={selectedProduct} />
          )}
        </Modal>
      </VitrineProductsContainer>
    </>
  );
};
