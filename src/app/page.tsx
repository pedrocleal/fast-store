"use client";
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import heroImg from '../assets/danielle-cerullo-CQfNt66ttZM-unsplash.jpg'
import { ListProducts } from '@/components/ListProducts'
import { Promo } from '@/components/Promo'
import { Cart } from '@/components/Cart'
import { useCart } from '@/hooks/useCart'

export default function Home() {
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();

  console.log('home render');

  return (
    <main className="flex flex-col items-start font-inter bg-zinc-50 w-full mx-auto">
      <Promo />
      <div className='relative w-full bg-zinc-900 rounded-b-2xl'>
        <Header openCart={() => setIsCartOpen(true)} />
        <Hero />
        <Image src={heroImg} alt='' className="absolute top-0 left-0 object-cover filter opacity-10 h-full w-full bg-blend-darken" />
      </div>
      <ListProducts />
      <Cart
        open={isCartOpen}
        setOpen={setIsCartOpen}
        items={cartItems}
      />
    </main>
  )
}
