export default function CartTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 bg-[#F8F6F1] text-gray-700">
            <th className="py-4 font-semibold">Product</th>
            <th className="py-4 font-semibold">Price</th>
            <th className="py-4 font-semibold">Quantity</th>
            <th className="py-4 font-semibold">Subtotal</th>
            <th className="py-4 font-semibold">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="py-5 flex items-center gap-4">
              <img
                src="/images/clap-when-you-land.jpg"
                alt="Clap When You Land"
                className="w-20 h-28 object-cover rounded-xl shadow-sm"
              />
              <span className="font-medium text-gray-800">
                Clap When You Land
              </span>
            </td>
            <td className="text-gray-600">$39.00</td>
            <td>
              <input
                type="number"
                value="1"
                readOnly
                className="w-16 border border-gray-300 rounded-lg text-center py-1.5"
              />
            </td>
            <td className="text-gray-600">$39.00</td>
            <td>
              <button className="bg-[#A3AE91] text-white px-4 py-1.5 rounded-lg hover:bg-[#8D977D] transition">
                ×
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
