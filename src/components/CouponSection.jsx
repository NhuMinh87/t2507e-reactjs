export default function CouponSection() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-200">
      <div className="flex gap-3 w-full sm:w-auto">
        <input
          type="text"
          placeholder="Coupon Code"
          className="border border-gray-300 rounded-full px-5 py-2 w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-[#A3AE91]"
        />
        <button className="bg-[#A3AE91] text-white px-6 py-2 rounded-full hover:bg-[#8D977D] transition">
          Apply Coupon
        </button>
      </div>

      <div className="flex gap-4">
        <button className="border border-[#A3AE91] text-[#4A553A] px-6 py-2 rounded-full hover:bg-[#F5F4F0] transition">
          Continue Shopping
        </button>
        <button className="bg-[#A3AE91] text-white px-6 py-2 rounded-full hover:bg-[#8D977D] transition">
          Update Cart
        </button>
      </div>
    </div>
  );
}


