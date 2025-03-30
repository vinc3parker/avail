import React, { useState } from "react";
import "./ItemCard.css";

type ItemCardProps = {
  name: string;
  price: number;
  image: string;
  color: string;
};

const ItemCard: React.FC<ItemCardProps> = ({ name, price, image }) => {
  const [showModal, setShowModal] = useState(false);

  const descriptionMap: Record<string, string> = {
    "Bamboo Tee":
      "Lightweight, breathable, and soft on skin. Perfect for everyday workouts.",
    "Eco Hoodie": "Warm, comfortable, and made from sustainable bamboo blends.",
    "Sustainable Sports Bra":
      "Supoprting, moisture-wicking sports bra designed for movement and durability.",
  };

  return (
    <>
      <div className="item-card" onClick={() => setShowModal(true)}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{descriptionMap[name]}</p>
      </div>

      {showModal && (
        <div className="item-modal" onClick={() => setShowModal(false)}>
          <div
            className="item-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={() => setShowModal(false)}>×</button>
            <div className="modal-body">
              <div className="modal-image-column">
                <img className="modal-image" src={image} alt={name} />
              </div>
              <div className="modal-info-column">
                <h2>{name}</h2>
                <p className="slogan">{descriptionMap[name]}</p>
                <p className="description">
                  This eco-friendly product is made from sustainable bamboo fabrics.
                </p>
                <p className="color"><strong>Color:</strong>
                  <span className="color-swatch"></span> Natural Bamboo Grey
                </p>

                <label>
                  <strong>Size:</strong>
                  <select>
                    <option value="2XS">2XS</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="2XL">2XL</option>
                  </select>
                </label>

                <label>
                  <strong>Quantity:</strong>
                  <input type="number" min="1" defaultValue="1" />
                </label>

                <p><strong>Price:</strong> £{price.toFixed(2)}</p>

                <div className="modal-actions">
                  <button className="buy-button">Add to Basket</button>
                  <button className="details-button">Find Out More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCard;
