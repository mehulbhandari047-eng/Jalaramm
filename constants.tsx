
import { TourPackage, Vehicle } from './types';

export const TOURS: TourPackage[] = [
  {
    id: '1',
    title: 'Daman Heritage Tour',
    location: 'Daman, India',
    description: 'Explore the historic Moti Daman Fort, sea-facing cathedrals, and the serene Jampore beach.',
    price: 1500,
    duration: '1 Day',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    category: 'cultural'
  },
  {
    id: '2',
    title: 'Goa Coastal Odyssey',
    location: 'Goa, India',
    description: 'A premium journey through North and South Goa’s finest beaches and vibrant night markets.',
    price: 4500,
    duration: '4 Days',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    category: 'luxury'
  },
  {
    id: '3',
    title: 'Saputara Hill Escape',
    location: 'Gujarat, India',
    description: 'Breath of fresh air at Gujarat’s only hill station. Enjoy lake boating and sunset points.',
    price: 2800,
    duration: '2 Days',
    image: 'https://images.unsplash.com/photo-1626014303757-646c21dc91b3?auto=format&fit=crop&w=800&q=80',
    category: 'nature'
  },
  {
    id: '4',
    title: 'Udaipur Royal Getaway',
    location: 'Rajasthan, India',
    description: 'Live like royalty in the city of lakes with guided palace tours and sunset cruises.',
    price: 8500,
    duration: '3 Days',
    image: 'https://images.unsplash.com/photo-1590393952601-b223832c3894?auto=format&fit=crop&w=800&q=80',
    category: 'luxury'
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'v0',
    name: 'Toyota Premium Sedan',
    type: 'Sedan',
    pricePerDay: 2800,
    passengers: 4,
    transmission: 'Auto',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'v-logistics-1',
    name: 'Jalaram Logistics Truck',
    type: 'Van',
    pricePerDay: 4500,
    passengers: 3,
    transmission: 'Manual',
    images: [
      'https://images.unsplash.com/photo-1586191121278-200df1d4d659?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519003300449-424ad040507b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'v1',
    name: 'Toyota Innova Crysta',
    type: 'Van',
    pricePerDay: 3500,
    passengers: 7,
    transmission: 'Manual',
    images: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'v4',
    name: 'Toyota Fortuner 4x4',
    type: 'SUV',
    pricePerDay: 5500,
    passengers: 7,
    transmission: 'Auto',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Proprietor, RK Industrial Solutions",
    location: "Mumbai",
    text: "Amar Bhandari and his team at Jalaram Enterprises are the most reliable logistics partners we've had in Daman. Their Pan-India delivery is truly 'on-time' every single time.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Family Traveler",
    location: "Delhi",
    text: "Our Udaipur tour was managed perfectly. From the Toyota Crysta's cleanliness to the driver's professional behavior, Jalaram Enterprises made our holiday unforgettable.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Operations Manager",
    location: "Surat",
    text: "We use Jalaram's staff transport daily. Their punctuality and safety protocols under Amar's supervision are unmatched in the region. Highly recommended for corporate contracts.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "NRI Client",
    location: "USA / Daman",
    text: "Every time I visit Daman, I rely only on Jalaram Enterprises for car rentals. The vehicles are premium, and the service feels like family. Best in Nani Daman!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

export const TRAVEL_SERVICES = [
  {
    title: "Airport Pickup & Drop",
    description: "Reliable and punctual transfers to and from major airports.",
    icon: "✈️"
  },
  {
    title: "Corporate & Staff Transport",
    description: "Daily office staff transportation solutions for companies.",
    icon: "💼"
  },
  {
    title: "Outstation Cab Services",
    description: "Comfortable long-distance travel across India.",
    icon: "🛣️"
  },
  {
    title: "Contractual Services",
    description: "Monthly or yearly vehicle contracts tailored to your needs.",
    icon: "📄"
  }
];

export const TRANSPORT_DETAILS = {
  title: "Jalaram Enterprises: Transport & Logistics",
  features: [
    "All types of Tempo Available",
    "Pan India Delivery Safe",
    "Reliable & On-time services",
    "Goods & Parcel Transport"
  ],
  lead: "Amar Bhandari"
};

export const COMPANY_PHONE = "9979338355";
export const COMPANY_PHONE_ALT = "9979438355";
export const COMPANY_EMAIL = "jalaramenterprisesdaman@gmail.com";
export const COMPANY_ADDRESS = "1360/1 school falia dunetha road, dunetha Nani daman , Daman 396210";
