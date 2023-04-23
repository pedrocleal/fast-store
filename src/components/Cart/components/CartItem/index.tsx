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
  return (
    <div className="shadow rounded p-2 flex items-center justify-between">
      <Image
        src={image}
        alt=''
        width={100}
        height={100}
        className="rounded max-w-full object-contain p-4 align-middle border-none"
      />
      <div className="flex flex-col items-end">
        <h3 className="text-zinc-900 font-semibold text-sm">{name}</h3>
        <p className="text-cyan-400 font-bold text-2xl">{price}</p>
      </div>
    </div>
  )
}