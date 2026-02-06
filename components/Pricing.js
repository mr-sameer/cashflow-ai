export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Simple pricing</h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { name: "Free", price: "₹0" },
            { name: "Starter", price: "₹249/mo" },
            { name: "Growth", price: "₹799/mo" },
          ].map((p, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-xl border shadow-sm"
            >
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-3xl font-bold mt-4">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}