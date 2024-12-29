/* /components/ProductCard/ProductCard.tsx*/

import { Product } from '@/models/interface'
import React from 'react'
export default function ProductCard
({id, title, price, description, category, image, rating}: Product) {
   return <div> {id} - {title} ({price}) 
   </div>
}
