import Link from "next/link";
import Image from "next/image";


export const metadata = {
  title: "Vehicle Inventory - GOAF International Company",
  description:
    "Browse our wide range of quality used cars and trucks from Europe and the USA.",
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

export default function InventoryPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Vehicle Inventory</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div key={car.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <Image src={car.image} alt={car.name} className="w-full h-48 object-cover" width={400} height={192} />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-slate-600 mt-2">{car.price}</p>
              <p className="text-sm text-slate-500 mt-2">{car.description}</p>
              <Link
                href={`/inventory/${car.id}`}
                className="inline-block mt-4 px-4 py-2 rounded-md bg-primary text-white font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
