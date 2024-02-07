import { useState } from "react";
import { ModalContainerData } from "./style";

type PropsModal = {
  selectedProduct: any;
};

export const ModalContainer = ({ selectedProduct }: PropsModal) => {
  const [count, setCount] = useState(1);
  return (
    <ModalContainerData>
      <div style={{ display: "flex" }}>
        <img src={selectedProduct.photo} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "Poppins",
              color: " rgba(4, 30, 80, 1)",
            }}
          >
            {selectedProduct.productName}
          </span>
          <span
            style={{
              fontWeight: "900",
              fontSize: "20px",
              fontFamily: "Poppins",
              color: " rgba(4, 30, 80, 1)",
            }}
          >
            R${selectedProduct.price},00
          </span>
          <p
            style={{
              width: "290px",
              fontSize: "10px",
              fontFamily: "Poppins",
              color: " rgba(4, 30, 80, 1)",
            }}
          >
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <span
            style={{
              width: "290px",
              fontSize: "10px",
              fontFamily: "Poppins",
              color: " rgba(4, 30, 80, 1)",
            }}
          >
            Veja mais detalhes do produto{" "}
          </span>
          <div
            style={{
              border: "1px solid rgba(4, 30, 80, 1)",
              color: "rgba(4, 30, 80, 1)",
              width: "110px",
              height: "36px",
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "10px",
            }}
          >
            <span
              style={{ cursor: "pointer", fontSize: "25px" }}
              onClick={() => setCount(count - 1)}
            >
              -
            </span>
            <span>{count <= 0 ? 1 : count}</span>
            <span
              style={{ cursor: "pointer", fontSize: "25px" }}
              onClick={() => setCount(count + 1)}
            >
              +
            </span>
          </div>
          <button
            style={{
              width: "245px",
              height: "44px",
              background: "rgba(247, 25, 99, 1)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Comprar
          </button>
        </div>
      </div>
    </ModalContainerData>
  );
};
