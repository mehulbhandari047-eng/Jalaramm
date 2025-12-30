
export interface TourPackage {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: 'adventure' | 'luxury' | 'cultural' | 'nature';
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'SUV' | 'Sedan' | 'Luxury' | 'Van';
  pricePerDay: number;
  passengers: number;
  transmission: 'Auto' | 'Manual';
  images: string[];
}

export interface BookingRequest {
  type: 'tour' | 'car';
  itemId: string;
  itemName: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: number;
  notes?: string;
}
