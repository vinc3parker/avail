import React from 'react';
import ItemCard from '../components/ItemCard';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Bamboo Tee",
    price: 5,
    image: "/images/t-shirt/T-Shirt Front Model.jpg",
    color: "#000080",
  },
  {
    id: 2,
    name: "Eco Hoodie",
    price: 10,
    image: "/images/hoodie/Hoodie Front Both.jpg",
    color: "#800020",
  },
  {
    id: 3,
    name: "Sustainable Sports Bra",
    price: 5,
    image: "/images/sports-bra/Sports-Bra Front Model.jpg",
    color: "#808000",
  },
];

const Shop: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Shop Products</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        {mockProducts.map((product) => (
          <ItemCard key={product.id} name={product.name} price={product.price} image={product.image} color={product.color} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
