export const RESTAURANT = {
  name: "Jashwanth & Co.",
  tagline: "Modern Indian Dining",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@example.com",
  address: "12 Heritage Lane, Banjara Hills, Hyderabad 500034",
  hours: [
    { day: "Monday – Thursday", time: "12:00 – 15:00 · 19:00 – 23:00" },
    { day: "Friday – Saturday", time: "12:00 – 15:30 · 18:30 – 23:45" },
    { day: "Sunday", time: "11:30 – 16:00 · 19:00 – 23:00" },
  ],
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/chefs", label: "Chefs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/offers", label: "Offers" },
  { to: "/contact", label: "Contact" },
] as const;
