import { notFound } from "next/navigation";
import Image from "next/image";

export const metadata = {
  title: "GOAF International Company — Vehicle Details",
  description:
    "Explore detailed specifications, photos, and pricing for premium vehicles available for export from Holland to Africa.",
};

const cars = [
  {
    id: 1,
    name: "DAF Truck 2015",
    price: "€12,500",
    images: [
      "/assets/inventory/Goaf-Daf-truck.jpg",
    ],
    description:
      "A durable and dependable DAF truck perfect for long-distance haulage. Engine in excellent condition, clean chassis, no mechanical faults. Ideal for logistics companies needing reliable performance.",
    specs: {
      Year: "2015",
      Mileage: "—",
      Engine: "6-Cylinder Turbo Diesel",
      Transmission: "Manual",
      Condition: "Used (Export Ready)",
      Location: "Almere, Holland",
    },
  },
  {
    id: 2,
    name: "Ford truck 2020",
    price: "€18,200",
    images: [
      "/assets/inventory/Goaf-Daf-truck1.jpeg",
    ],
    description:
      "Modern Ford truck with advanced safety features and fuel-efficient engine. Well-maintained with full service history. Suitable for both urban deliveries and long-haul transport.",
    specs: {
      Year: "2020",
      Mileage: "50,000 km",
      Engine: "4-Cylinder EcoBoost",
      Transmission: "Automatic",
      Condition: "Used (Export Ready)",
      Location: "Almere, Holland",
    },
  },
  {
    id: 3,
    name: "Ford F-150 2019",
    price: "€45,000",
    images: [
      "/assets/inventory/Goaf-Daf-truck2.jpeg",
    ],
    description:
      "Powerful Ford F-150 with robust towing capacity and off-road capabilities. Equipped with the latest technology for comfort and convenience. Perfect for both work and leisure.",
    specs: {
      Year: "2019",
      Mileage: "30,000 km",
      Engine: "5.0L V8",
      Transmission: "Automatic",
      Condition: "Used (Export Ready)",
      Location: "Almere, Holland",
    },
  },
  {
    id: 4,
    name: "Chevrolet Silverado 1500 2016",
    price: "€30,000",
    images: [
      "/assets/inventory/Goaf-Daf-truck3.jpeg",
    ],
    description:
      "Reliable Chevrolet Silverado with spacious interior and advanced towing features. Well-suited for both commercial and personal use. Maintained to high standards for export.",
    specs: {
      Year: "2016",
      Mileage: "70,000 km",
      Engine: "5.3L V8",
      Transmission: "Automatic",
      Condition: "Used (Export Ready)",
      Location: "Almere, Holland",
    },
  },
  {
    id: 5,
    name: "Scania R-Series Truck 2018",
    price: "€15,500",
    images: [
      "/assets/inventory/Goaf-Daf-truck4.jpeg",
    ],
    description:
      "High-performance Scania R-Series truck designed for efficiency and comfort. Features a powerful engine and ergonomic cabin. Ideal for long-haul transport across various terrains.",
    specs: {
      Year: "2018",
      Mileage: "120,000 km",
      Engine: "13-Liter Inline-6 Turbo Diesel",
      Transmission: "Manual",
      Condition: "Used (Export Ready)",
      Location: "Almere, Holland",
    },
  },
  {
    id: 6,
    name: "Sinotruk HOWO 6x4 dump truck 2018",
    price: "€15,500",
    images: [
      "/assets/inventory/Goaf-Daf-truck6.jpeg",
      "/assets/inventory/Goaf-Daf-truck9.jpeg",
    ],
    description:
      "Built for heavy-duty construction and mining tasks. Features a robust chassis and high-capacity dump bed. Reliable performance in tough working conditions.",
    specs: {
      Year: "2018",
      Mileage: "120,000 km",
      Engine: "13-Liter Inline-6 Turbo Diesel",
      Transmission: "Manual",
      Condition: "Used (Export Ready)",
      Location: "Almere, Holland",
    },
  },
  {    id: 7,
    name: "freightliner Truck 2019",
    price: "€15,500",
    images: [
      "/assets/inventory/Goaf-Daf-truck7.jpeg",
    ],
    description:
      "Truck with advanced features and a comfortable interior.",
    specs: {
      Year: "2019",
      Mileage: "110,000 km",
      Engine: "12.8L Inline-6 Turbo Diesel",
      Transmission: "Automatic",
      Condition: "Used (Export Ready)",
      Location: "Almere, Holland",
    },
  },
  {
    id: 8,
    name: "Isuzu NPR Truck 2017",
    price: "€15,500",
    images: [
      "/assets/inventory/Goaf-Daf-truck8.jpeg",
    ],
    description:
      "Truck with advanced features and a comfortable interior.",
    specs: {
      Year: "2017",
      Mileage: "95,000 km",
      Engine: "5.2L Inline-4 Turbo Diesel",
      Transmission: "Manual",
      Condition: "Used (Export Ready)",
      Location: "Almere, Holland",
    },
  },
  {
    id: 9,
    name: "Honda Accord 2019",
    price: "€15,500",
    images: [
      "/assets/inventory/Goaf-Daf-truck10.jpeg",
    ],
    description:
      "Sporty sedan with advanced features and a comfortable interior.",
    specs: {
      Year: "2019",
      Mileage: "40,000 km",
      Engine: "1.5L Turbocharged Inline-4",
      Transmission: "CVT",
      Condition: "Used (Export Ready)",
      Location: "Almere, Holland",
    },
  },
  // … more cars
];

interface Params {
  id: string;
}

export default function CarDetailPage({ params }: { params: Params }) {
  const car = cars.find((c) => c.id === parseInt(params.id));
  if (!car) return notFound();

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">

        {/* LEFT: IMAGE GALLERY */}
        <div className="lg:w-1/2">
          {/* Main Image */}
          <div className="overflow-hidden rounded-xl shadow-lg mb-4">
            <Image
              src={car.images[0]}
              alt={car.name}
              width={900}
              height={600}
              className="w-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {car.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${car.name} thumbnail ${i + 1}`}
                width={300}
                height={200}
                className="rounded-lg border border-slate-300 cursor-pointer hover:opacity-80 transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-slate-900">{car.name}</h1>

          <p className="mt-3 text-primary text-3xl font-semibold">
            {car.price}
          </p>

          <p className="text-slate-700 mt-5 leading-relaxed">
            {car.description}
          </p>

          <ul className="mt-6 space-y-2 text-slate-600">
            <li>✔ Fully serviced</li>
            <li>✔ Export-ready documentation</li>
            <li>✔ Clean engine + transmission</li>
            <li>✔ Delivery to any African port available</li>
          </ul>

          <button className="mt-8 px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition">
            Request a Quote
          </button>
        </div>
      </div>

      {/* SPECIFICATION TABLE */}
      <section className="mt-16 bg-slate-50 p-8 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Vehicle Specifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.entries(car.specs).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b pb-2">
              <span className="font-medium text-slate-700">{key}</span>
              <span className="text-slate-600">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="mt-16 p-10 bg-primary text-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Interested in this Vehicle?</h2>
        <p className="text-white/90 mb-6">
          Contact us for inspection videos, shipping arrangements, or a full quote.
        </p>

        <div className="space-y-2">
          <p>📍 <strong>Address:</strong> Mahoniestraat 86, 1339EX, Almere, Holland</p>
          <p>📞 <strong>Tel:</strong> +31643451612</p>
          <p>📧 <strong>Email:</strong> femijeje01@yahoo.com</p>
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href="https://wa.me/31643451612"
            className="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:bg-slate-100"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:femijeje01@yahoo.com"
            className="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:bg-slate-100"
          >
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}
