import Link from "next/link";

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
  // Add more vehicles as needed
];

export default function InventoryPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Vehicle Inventory</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div key={car.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
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
