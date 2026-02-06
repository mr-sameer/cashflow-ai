const features = [
  {
    title: "AI Payment Prediction",
    desc: "Know who will pay, when they will pay, and who needs attention.",
  },
  {
    title: "Automated WhatsApp Follow-ups",
    desc: "Polite, timely reminders without awkward calls.",
  },
  {
    title: "Cashflow Forecast",
    desc: "See your next 7–30 days of cash clearly.",
  },
  {
    title: "Actionable Insights",
    desc: "We tell you exactly who to call today.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Built to improve cashflow, not bookkeeping
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-xl shadow-sm border"
            >
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}