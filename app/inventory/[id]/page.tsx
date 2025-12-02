import { notFound } from "next/navigation";

export const metadata = {
  title: "GOAF International Company",
  description:
    "Detailed information and specifications for {Car Name}, available for sale or lease across Africa.",
};

const cars = [
  {
    id: 1,
    name: "DAF Truck 2015",
    price: "$12,500",
    image: "/assets/inventory/Goaf-Daf-truck.jpg",
    description: "Certified used Toyota Corolla, well-maintained, full service history.",
  },
  {
    id: 2,
    name: "Ford truck 2020",
    price: "$18,200",
    image: "/assets/inventory/Goaf-Daf-truck1.jpeg",
    description: "Luxury sedan with excellent performance and low mileage.",
  },
  {
    id: 3,
    name: "Ford F-150 2019",
    price: "$45,000",
    image: "/assets/inventory/Goaf-Daf-truck2.jpeg",
    description: "Heavy-duty truck ideal for freight and logistics operations.",
  },
  {
    id: 4,
    name: "Chevrolet Silverado 1500 2016",
    price: "$30,000",
    image: "/assets/inventory/Goaf-Daf-truck3.jpeg",
    description: "Reliable pickup truck with great towing capacity and off-road capabilities.",
  },
  {
    id: 5,
    name: "Scania R-Series Truck 2018",
    price: "$15,500",
    image: "/assets/inventory/Goaf-Daf-truck4.jpeg",
    description: "Sporty sedan with advanced features and a comfortable interior.",
  },
  // Add more vehicles as needed
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

