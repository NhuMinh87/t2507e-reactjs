export default function CartTotals() {
  return (
    <div className="max-w-md mx-auto text-center bg-[#F8F6F1] rounded-2xl shadow-md p-8">
      <h2 className="text-3xl font-serif text-gray-800 mb-6">Cart Totals</h2>

      <div className="flex justify-between mb-3 text-gray-700 text-lg">
        <span>Subtotal</span>
        <span>$39.00</span>
      </div>
      <div className="flex justify-between mb-8 font-semibold text-gray-800 text-lg">
        <span>Total</span>
        <span>$39.00</span>
      </div>

      <button className="w-full bg-[#4A553A] text-white py-3 rounded-full hover:bg-[#3E472E] transition text-lg">
        Proceed to Checkout
      </button>
    </div>
  );
}
