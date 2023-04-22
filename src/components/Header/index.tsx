"use client";

import { useCart } from '@/hooks/useCart';
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

export function Header() {
  const { isCartOpen, onOpenCart } = useCart();

  return (
    <div className="w-full max-w-7xl flex items-center justify-between p-4 mx-auto z-10 relative">
      <strong className='font-medium'>Fast Store 🚀</strong>

      <nav className="flex gap-4 font-semibold p-4 lg:p-2 gap-x-12">
        <a href="#" className="font-medium hover:text-red-400 transition-colors">Home</a>
        <a href="#products" className="font-medium hover:text-red-400 transition-colors">Whey Protein</a>
        <a href="#products" className="font-medium hover:text-red-400 transition-colors">Creatine</a>
      </nav>

      <div className='flex gap-4'>
        <MagnifyingGlassIcon className='h-6 w-6 hover:text-red-400 cursor-pointer' />
        <ShoppingBagIcon className='h-6 w-6 hover:text-red-400 cursor-pointer' />
        <button onClick={onOpenCart}>
          {isCartOpen ? 'Close Cart' : 'Open Cart'}
        </button>
      </div>
    </div >
  )
}