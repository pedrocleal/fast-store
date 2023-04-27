import { useCart } from '@/hooks/useCart';
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';

export function Header({ openCart }: {
  openCart: () => void,
}) {
  const { itemsPrice } = useCart();


  const [totalCartPrice, setTotalCartPrice] = useState('');

  useEffect(() => {
    setTotalCartPrice(itemsPrice);
  }, [itemsPrice])

  return (
    <div className="w-full max-w-7xl flex items-center justify-between p-4 mx-auto z-10 relative">
      <strong className='font-medium'>Fast Store 🚀</strong>

      <nav className="flex gap-4 font-semibold p-4 lg:p-2 gap-x-12">
        <a href="#" className="font-medium hover:text-cyan-400 transition-colors">Home</a>
        <a href="#products" className="font-medium hover:text-cyan-400 transition-colors">Whey Protein</a>
        <a href="#products" className="font-medium hover:text-cyan-400 transition-colors">Creatine</a>
      </nav>

      <div className='flex gap-4'>
        <strong>{totalCartPrice}</strong>
        <ShoppingBagIcon className='h-6 w-6 hover:text-cyan-400 cursor-pointer' onClick={() => openCart()} />
      </div>
    </div >
  )
}