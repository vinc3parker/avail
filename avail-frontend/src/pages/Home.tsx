import React from 'react';
import Section from '../components/Section';

const Home: React.FC = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      {/* Hero Section */}
      <Section>
        <h1>Leftover Stock, Same Mission.</h1>
        <p>
          Welcome to Avail Gym Wear. While the company has ended, our commitment to sustainability lives on.
          Shop high-quality gym wear made from eco-friendly bamboo blends—available only while stock lasts.
        </p>
        <a href="/shop" style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 'bold', color: '#f39c12' }}>
          Shop Now →
        </a>
      </Section>

      {/* Mission Section */}
      <Section>
        <h2>Why Bamboo?</h2>
        <p>
          Every garment is designed to reduce landfill waste and microplastic pollution. By using bamboo blends,
          Avail Gym Wear helps fight the massive impact of synthetic fabrics on our oceans and ecosystems.
        </p>
      </Section>

      {/* Product Preview Section */}
      <Section>
        <h2>Popular Products</h2>
        <p>Check out a few of our remaining items before they’re gone for good.</p>
        {/* Product cards will be added here later */}
      </Section>
    </div>
  );
};

export default Home;
