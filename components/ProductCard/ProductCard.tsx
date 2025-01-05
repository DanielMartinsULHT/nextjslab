/* /components/ProductCard/ProductCard.tsx*/

import { Product } from '@/models/interface';
import React from 'react';

export default function ProductCard({ title, price, description, category, image, rating }: Product) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '10px', 
      textAlign: 'center' 
    }}>
      <h3>{title}</h3>
      <img 
        src={image} 
        alt={title} 
        style={{ 
          width: '150px', 
          height: '150px', 
          objectFit: 'cover', 
          borderRadius: '4px' 
        }} 
      />
      <p>Price: ${price}</p>
      <p>{category}</p>
      <p>{description}</p>
      <p>Rating: {rating?.rate} ({rating?.count} reviews)</p>
    </div>
  );
}
