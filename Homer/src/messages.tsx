export type ServiceResult = {
    name: string;
    rating: number;
    location: string;
    url: string;
    phone?: string;
  };
  
  export async function fetchServices(
    category: string,
    location: string
  ): Promise<ServiceResult[]> {
    try {
      const res = await fetch("http://127.0.0.1:8000/fetch-services/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category, location }),
      });
  
      if (!res.ok) {
        throw new Error(`Yelp API returned ${res.status}`);
      }
  
      const data: { results: ServiceResult[] } = await res.json();
      return data.results || [];
    } catch (err) {
      console.error("Failed to fetch services:", err);
      return [];
    }
  }

