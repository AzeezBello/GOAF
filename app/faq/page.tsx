export const metadata = {
  title: "FAQ - GOAF International Company",
  description:
    "Frequently asked questions about our used car import, truck sales, and leasing services in Africa.",
};


const faqs = [
  {
    question: "Do you ship vehicles across Africa?",
    answer: "Yes, we provide reliable delivery services throughout Africa for all vehicles purchased.",
  },
  {
    question: "Can I inspect the vehicle before purchase?",
    answer: "Absolutely. We provide full inspection reports and allow pre-purchase inspection when possible.",
  },
  {
    question: "Do you offer financing or leasing options?",
    answer: "Yes, Goaf International offers leasing options for qualified buyers to make vehicle acquisition easier.",
  },
  {
    question: "Are your vehicles certified?",
    answer: "All vehicles are inspected and certified to ensure quality, performance, and roadworthiness.",
  },
  {
    question: "Do you also sell spare parts?",
    answer: "Yes, we source and supply OEM-grade spare parts for vehicles and trucks.",
  },
];

export default function FAQPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <p className="text-slate-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center gap-4">
        <Link href="/inventory" className="px-6 py-3 rounded-md bg-primary text-white font-medium">Browse Vehicles</Link>
        <Link href="#contact" className="px-6 py-3 rounded-md border border-primary text-primary font-medium">Request a Quote</Link>
      </div>

    </main>
  );
}
