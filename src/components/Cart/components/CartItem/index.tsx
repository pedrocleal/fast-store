import { useCart } from "@/hooks/useCart";
import { formatCurrency } from "@/utils/formatCurrency";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
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

  const { onIncreaseItem, onDecreaseItem } = useCart();

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
        <p className="text-cyan-400 font-bold text-2xl">{quantity && formatCurrency(price * quantity)}</p>

        <div className="flex gap-2">
          <button className="text-zinc-800" onClick={() => onDecreaseItem(Number(id))}>
            <MinusSmallIcon className="text-zinc-800 h-5" />
          </button>
          <strong className="text-zinc-800">
            {quantity}
          </strong>
          <button className="text-zinc-800" onClick={() => onIncreaseItem(Number(id))}>
            <PlusSmallIcon className="text-zinc-800 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}