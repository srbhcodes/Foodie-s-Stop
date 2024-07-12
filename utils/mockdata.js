const ResObj = [
  {
    id: 1,
    name: "The Wandering Wok",
    cuisine: ["Asian Fusion", "Thai", "Vietnamese"],
    avgRating: 4.7,
    cost: {
      priceRange: "$ $$",
      deliveryFee: 5.99,
    },
    imageUrl: "https://placeimg.com/640/480/food",
    openHours: {
      weekdays: "11:00 AM - 10:00 PM",
      weekends: "10:00 AM - 11:00 PM",
    },
    isFavorite: false,
  },
  {
    id: 2,
    name: "Mama Mia's Pizzeria",
    cuisine: ["Italian"],
    avgRating: 4.3,
    cost: {
      priceRange: "$$",
      deliveryFee: 3.99,
    },
    imageUrl: "https://placeimg.com/640/480/pizza",
    openHours: {
      weekdays: "11:00 AM - 11:00 PM",
      weekends: "10:00 AM - 12:00 AM",
    },
    isFavorite: true,
  },
  // Add more restaurant objects here...
];

export default ResObj;
