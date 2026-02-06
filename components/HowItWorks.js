export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">How it works</h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {[
            "Create invoice & send via WhatsApp",
            "AI tracks behavior & sends reminders",
            "Get paid faster with clarity",
          ].map((step, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <div className="text-blue-600 font-bold text-xl mb-2">
                0{i + 1}
              </div>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}