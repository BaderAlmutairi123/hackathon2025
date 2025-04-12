export type ServiceResult = {
    name: string;
    rating: number;
    categories: string[];
    location: string;
    phone: string;
    image_url: string;
    url: string;
  };
  
  export default function ServiceCard({ service }: { service: ServiceResult }) {
    return (
      <div className="flex gap-4 p-4 rounded-xl bg-gray-800 shadow hover:bg-gray-700 transition-all justify-center">
        {/* Image */}
        <img
          src={service.image_url}
          alt={service.name}
          className="w-24 h-24 object-cover rounded-md border border-gray-600 left-10"
        />
  
        {/* Text content */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">{service.name}</h2>
            <p className="text-sm text-gray-400">{service.location}</p>
            <p className="text-sm text-gray-300">
              {service.categories.join(", ")}
            </p>
          </div>
  
          <div className="mt-2 text-sm text-gray-300">
            <span>⭐ {service.rating}</span> · <span>{service.phone}</span>
          </div>
  
          <a
            href={service.url}
            target="_blank"
            className="mt-2 text-blue-400 hover:underline text-sm"
          >
            View on Yelp →
          </a>
        </div>
      </div>
    );
  }
  