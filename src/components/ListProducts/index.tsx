"use client"

import { XCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image"
import { useState } from "react";

interface ProducstProps {
  id: number;
  title: string;
  price: string;
  image: string;
}

import { mockProducts } from "../../mock/products"

export function ListProducts() {
  const [products, setProducts] = useState<ProducstProps[] | any>(mockProducts)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter((product: any) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto my-8 items-start justify-center p-4" id="products">
      <div className="flex items-center justify-between w-full mb-12">
        <strong className="text-2xl text-zinc-800">Availabe products</strong>
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          className="text-zinc-900 p-2 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          placeholder="Search items"
        />
      </div>

      {filteredProducts.length > 0 && (
        <div className="flex itesm-center justify-center flex-wrap gap-4 w-full md:justify-start">
          {filteredProducts?.map((product: any) => {
            return (
              <div key={product.id} className="p-4 border-zinc-200 rounded flex flex-col justify-between border max-w-[300px] w-full">
                <Image src={product.image} alt={product.title} className="shadow rounded max-w-full object-contain p-4 h-60 align-middle border-none" />
                <strong className="text-zinc-900 w-full mt-8">{product.title}</strong>
                <span className="text-zinc-600 text-2xl">{product.price}</span>

                <div className="flex flex-col w-full mt-4 gap-2">
                  <button className="bg-gradient-to-r from-sky-500 to-indigo-500 p-1 rounded border text-md hover:bg-cyan-600 transition-colors">Buy now!</button>
                  <button className="bg-cyan-50 p-1 rounded text-cyan-500 border text-md hover:bg-cyan-100 transition-colors">Add to cart</button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full h-40">
          <XCircleIcon className="text-zinc-900" />
          <strong className="text-zinc-800 text-2xl mt-4">{`No products "${searchTerm}" found`}</strong>
        </div>
      )}
    </div>
  )
}