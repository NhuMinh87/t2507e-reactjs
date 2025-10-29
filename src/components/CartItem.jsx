export default function CartItem({ item }) {
  return (
    <tr className="border-b hover:bg-[#F9F8F6] transition">
      <td className="p-4 flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-28 object-cover rounded-md shadow-sm"
        />
        <span className="font-medium text-gray-800">{item.name}</span>
      </td>
      <td className="p-4 text-gray-700">${item.price.toFixed(2)}</td>
      <td className="p-4">
        <input
          type="number"
          defaultValue={item.qty}
          min="1"
          className="border w-16 text-center rounded-md py-1 border-gray-300 focus:ring-1 focus:ring-[#A3AE91]"
        />
      </td>
      <td className="p-4 text-gray-700">
        ${(item.price * item.qty).toFixed(2)}
      </td>
      <td className="p-4 text-center">
        <button className="text-red-500 hover:text-red-700 text-lg font-bold">
          ×
        </button>
      </td>
    </tr>
  );
}

