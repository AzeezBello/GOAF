import { notFound } from "next/navigation";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla 2018",
    price: "$12,500",
    image: "/assets/inventory/toyota-corolla.jpg",
    description: "Certified used Toyota Corolla, well-maintained, full service history.",
  },
  {
    id: 2,
    name: "BMW 5 Series 2017",
    price: "$18,200",
    image: "/assets/inventory/bmw-5series.jpg",
    description: "Luxury sedan with excellent performance and low mileage.",
  },
  {
    id: 3,
    name: "Mercedes-Benz Actros Truck 2019",
    price: "$45,000",
    image: "/assets/inventory/mercedes-truck.jpg",
    description: "Heavy-duty truck ideal for freight and logistics operations.",
  },
];

interface Params {
  id: string;
}

export default function CarDetailPage({ params }: { params: Params }) {
  const car = cars.find((c) => c.id === parseInt(params.id));
  if (!car) return notFound();

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <img src={car.image} alt={car.name} className="w-full lg:w-1/2 h-auto rounded-lg" />
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold">{car.name}</h1>
          <p className="text-primary text-xl font-semibold mt-2">{car.price}</p>
          <p className="text-slate-700 mt-4">{car.description}</p>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md font-medium">
            Request a Quote
          </button>
        </div>
      </div>
    </main>
  );
}

