import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock = 0, onAdd }) => {
  //Estado para manejar el contador
  const [count, setCount] = useState(1);
  const handleSum = () => {
    setCount(Math.min(stock, count + 1));
  };

  const handleSub = () => {
    setCount(Math.max(1, count - 1));
  };

  return (
    <div className="item-count">
      {stock ? (
          <>
          <div className="item-count__buttons">
            <button className="btn_min" onClick={() => handleSub()}>-</button>
            <span>{count}</span>
            <button className="btn_min" onClick={() => handleSum()}>+</button>
          </div>
          <button
            className="item_count_btn"
            disabled={!stock}
            onClick={() => {
              onAdd(count);
              setCount(1);
            }}
          >
            Agregar a carrito
          </button>
          </>
      ) : (
        <h5>Tienes todo el stock disponible</h5>
      )}
    </div>
  );
};
