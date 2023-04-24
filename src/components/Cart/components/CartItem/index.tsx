import { MinusCircleIcon, MinusIcon, MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  image: string;
  onRemove?: (id: string) => void;
}

export function CartItem({
  id,
  name,
  price,
  quantity,
  image,
}: CartItemProps) {

  // format price to BRL
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <div className="shadow rounded p-2 flex items-center justify-between">
      <Image
        src={image}
        alt=''
        width={50}
        height={50}
        className="rounded max-w-full object-contain align-middle border-none"
      />
      <div className="flex flex-col items-end">
        <h3 className="text-zinc-900 font-semibold text-sm">{name}</h3>
        <p className="text-cyan-400 font-bold text-2xl">{formattedPrice.format(price)}</p>

        <div className="flex gap-2">
          <button className="text-zinc-800">
            <MinusSmallIcon className="text-zinc-800 h-5" />
          </button>
          <strong className="text-zinc-800">
            {quantity}
          </strong>
          <button className="text-zinc-800">
            <PlusSmallIcon className="text-zinc-800 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}