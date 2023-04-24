import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CartItem } from './components/CartItem';
import { IProductProps } from '@/types/product';

export function Cart({ open, items, setOpen, clearCart }: {
  open: boolean,
  setOpen: (open: boolean) => void
  items: IProductProps[]
  clearCart: () => void
}) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Cart
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-4 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <small className='text-zinc-700'>Products on your cart:</small>

                      {/* List products */}
                      <div className='mt-2 flex flex-col gap-4'>
                        {items?.length > 0 && (
                          <>
                            {items.map((item) => (
                              <CartItem
                                key={item.id}
                                id={String(item.id)}
                                name={item.title}
                                price={item.price}
                                image={item.image}
                                quantity={item.quantity}
                              />
                            ))}

                            <div className='flex flex-col mt-12'>
                              <strong className='text-zinc-700 w-full text-right text-2xl'>Total: {'120,00'}</strong>
                              <div className='flex flex-col gap-2 mt-4'>
                                <button className='rounded border w-full p-1 text-zinc-50 bg-cyan-400'>Keep buying</button>
                                <button className='rounded border w-full p-1 text-cyan-400 bg-zinc-50'>Go to checkout</button>
                                <button className='rounded border w-full p-1 text-cyan-400 bg-zinc-50' onClick={clearCart}>Limpar carrinho</button>
                              </div>
                            </div>
                          </>
                        )}

                        {items?.length === 0 && (
                          <div className='flex flex-col items-start justify-center'>
                            <p className='text-zinc-400 font-semibold'>No products on your cart</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}