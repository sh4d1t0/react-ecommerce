import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { fetchProducts } from '../../../store/actions/productActions'
import { Button } from '../../atoms/Button'

export const ProductCard = () => {
  const [product_id, setProduct_id] = useState(1)
  const dispatch = useAppDispatch()
  const allProducts = useAppSelector(state => state.product.all_products)
  useEffect(() => {
    dispatch(fetchProducts())
  })

  return (
    <>
      {allProducts.map(product => (
        <div key={product.id}>
          <div className="py-6">
            <div className="flex max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
              <div
                className="w-1/3 bg-cover"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>
              <div className="w-2/3 p-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {product.title}
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>
                <div className="item-center mt-2 flex">
                  <svg
                    className="h-5 w-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <div className="item-center mt-3 flex justify-between">
                  <h1 className="text-xl font-bold text-gray-700">
                    ${product.price}
                  </h1>
                  <div className="px-3 py-2">
                    <Button variant="contained">Agregar al carrito</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
