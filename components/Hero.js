export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Get Paid Faster. <br />
          <span className="text-blue-600">
            Predict Cashflow with AI.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          CashflowAI helps small businesses predict payments, automate follow-ups,
          and remove the stress of chasing money.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
            Start Free
          </button>
          <button className="border px-6 py-3 rounded-md text-sm">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
}