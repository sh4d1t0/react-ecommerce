import * as React from 'react'
import { ProductCard } from '../../molecules/ProductCard'

export const ProductsList = () => {
  return (
    <>
      <div className="flex min-h-full flex-wrap justify-center px-4">
        <div className="grid grid-cols-3 gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  )
}
