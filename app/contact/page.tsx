import Link from "next/link";

export const metadata = {
  title: "Contact GOAF International Company",
  description:
    "Get in touch with GOAF International Company — premium trucks, cars, and logistics solutions across West Africa.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-primary">Contact Us</h1>
      <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">
        Have a question, inquiry, or need assistance with vehicle sourcing? Reach out to us — we’ll respond within one business day.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-primary">Address</h3>
            <p className="text-slate-700 mt-1">Mahoniestraat 86, 1339EX, Almere Holland</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary">Phone</h3>
            <p className="text-slate-700 mt-1">
              <a href="tel:+31643451612" className="hover:underline">+31 6 43451612</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary">Email</h3>
            <p className="text-slate-700 mt-1">
              <a href="mailto:femijeje01@yahoo.com" className="hover:underline">femijeje01@yahoo.com</a>
            </p>
          </div>

          <div className="mt-6">
            <Link
              href="/inventory"
              className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium hover:opacity-90"
            >
              View Inventory
            </Link>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="GOAF Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2416.740819563386!2d5.231106076331105!3d52.35295877978099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c61104e1f69f2b%3A0x94a36c0a7c0dc39f!2sMahoniestraat%2086%2C%201339EX%20Almere%2C%20Netherlands!5e0!3m2!1sen!2sng!4v1701492000000!5m2!1sen!2sng"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-slate-300 rounded-md px-4 py-2 focus:border-primary focus:ring focus:ring-primary/20 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-slate-300 rounded-md px-4 py-2 focus:border-primary focus:ring focus:ring-primary/20 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-slate-300 rounded-md px-4 py-2 focus:border-primary focus:ring focus:ring-primary/20 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
