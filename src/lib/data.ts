import biryani from "@/assets/dish-biryani.jpg";
import butterChicken from "@/assets/dish-butter-chicken.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import tandoori from "@/assets/dish-tandoori.jpg";
import noodles from "@/assets/dish-noodles.jpg";
import risotto from "@/assets/dish-risotto.jpg";
import soup from "@/assets/dish-soup.jpg";
import beverage from "@/assets/dish-beverage.jpg";
import dal from "@/assets/dish-dal.jpg";
import chef1 from "@/assets/chef-1.jpg";
import chef2 from "@/assets/chef-2.jpg";
import chef3 from "@/assets/chef-3.jpg";
import chef4 from "@/assets/chef-4.jpg";
import interior from "@/assets/interior.jpg";
import kitchen from "@/assets/kitchen.jpg";
import ambience from "@/assets/ambience.jpg";
import ingredients from "@/assets/ingredients.jpg";
import eventPrivate from "@/assets/event-private.jpg";
import hero from "@/assets/hero.jpg";

export const IMAGES = {
  hero,
  interior,
  kitchen,
  ambience,
  ingredients,
  eventPrivate,
};

export type Dish = {
  id: string;
  name: string;
  category: string;
  price: number;
  veg: boolean;
  popular?: boolean;
  chefSpecial?: boolean;
  image: string;
  alt: string;
  short: string;
  description: string;
  ingredients: string[];
  dietary: string[];
  chefNote: string;
  spice: "Mild" | "Medium" | "Fiery";
};

export const CATEGORIES = [
  "Starters",
  "Soups",
  "Vegetarian",
  "Non-Vegetarian",
  "Indian Specialties",
  "Biryanis",
  "Continental",
  "Chinese",
  "Desserts",
  "Beverages",
] as const;

export const DISHES: Dish[] = [
  {
    id: "smoked-paneer-tikka",
    name: "Smoked Paneer Tikka",
    category: "Starters",
    price: 420,
    veg: true,
    popular: true,
    image: paneerTikka,
    alt: "Char-grilled paneer tikka skewers with mint chutney on a dark slate board",
    short: "Hand-pressed paneer, hung curd marinade, coal-smoked in the tandoor.",
    description:
      "Milk is set in-house each morning; the paneer rests overnight in a hung curd and kasuri methi marinade before meeting the coals. Finished under a copper dome with clove smoke for ninety seconds.",
    ingredients: [
      "House-set paneer",
      "Hung curd",
      "Kasuri methi",
      "Kashmiri chilli",
      "Mustard oil",
      "Mint & coriander chutney",
    ],
    dietary: ["Vegetarian", "Gluten free", "Contains dairy"],
    chefNote: "Ask for the coal-smoke service at the table — it is worth the extra two minutes.",
    spice: "Medium",
  },
  {
    id: "tandoori-platter",
    name: "Tandoori Grill Platter",
    category: "Starters",
    price: 890,
    veg: false,
    chefSpecial: true,
    image: tandoori,
    alt: "Sizzling tandoori mixed grill platter with lemon and onion rings",
    short: "Four cuts from the clay oven, lemon, burnt onion, house masala.",
    description:
      "A rotating selection of chicken malai, seekh kebab, ajwaini fish and lamb boti, each marinated separately and cooked to its own temperature. Served on a cast-iron platter with pickled onion.",
    ingredients: ["Chicken thigh", "Lamb mince", "River sole", "Cream cheese", "Garam masala", "Lemon"],
    dietary: ["Non-vegetarian", "Contains dairy", "Contains fish"],
    chefNote: "Best shared between three. Pair with the smoked old fashioned.",
    spice: "Medium",
  },
  {
    id: "tomato-shorba",
    name: "Roasted Tomato Shorba",
    category: "Soups",
    price: 290,
    veg: true,
    image: soup,
    alt: "Roasted tomato shorba soup with cream swirl in a ceramic bowl",
    short: "Slow-roasted tomatoes, cardamom cream, curry leaf oil.",
    description:
      "Vine tomatoes are roasted for four hours with garlic and green cardamom, passed twice, and finished with a cold-pressed curry leaf oil poured at the table.",
    ingredients: ["Vine tomatoes", "Green cardamom", "Garlic", "Cream", "Curry leaf oil"],
    dietary: ["Vegetarian", "Gluten free"],
    chefNote: "A quiet opener before the biryani — it resets the palate.",
    spice: "Mild",
  },
  {
    id: "burnt-garlic-broth",
    name: "Burnt Garlic Clear Broth",
    category: "Soups",
    price: 260,
    veg: true,
    image: soup,
    alt: "Clear vegetable broth served in a dark bowl with herbs",
    short: "Twelve-hour vegetable stock, burnt garlic, seasonal greens.",
    description:
      "A clear, restorative broth built on charred onion and root vegetables, finished with burnt garlic slivers and whatever greens the morning market offered.",
    ingredients: ["Charred onion", "Root vegetables", "Burnt garlic", "Seasonal greens", "White pepper"],
    dietary: ["Vegan", "Gluten free"],
    chefNote: "Our most ordered dish on rainy evenings.",
    spice: "Mild",
  },
  {
    id: "dal-makhani",
    name: "Twenty-Four Hour Dal Makhani",
    category: "Vegetarian",
    price: 480,
    veg: true,
    popular: true,
    image: dal,
    alt: "Creamy dal makhani in a black bowl served with naan",
    short: "Black urad simmered overnight over embers, white butter, naan.",
    description:
      "Whole black urad is soaked at dawn and simmered for a full day over dying embers with tomato and ginger, then mounted with white butter just before it leaves the pass.",
    ingredients: ["Whole black urad", "Tomato", "Ginger", "White butter", "Cream", "Kasuri methi"],
    dietary: ["Vegetarian", "Contains dairy"],
    chefNote: "Order the sourdough kulcha with it rather than rice.",
    spice: "Mild",
  },
  {
    id: "malai-kofta",
    name: "Saffron Malai Kofta",
    category: "Vegetarian",
    price: 460,
    veg: true,
    image: paneerTikka,
    alt: "Golden malai kofta dumplings in a rich saffron gravy",
    short: "Paneer and cashew dumplings, saffron gravy, rose petal.",
    description:
      "Delicate koftas of paneer, khoya and cashew, fried to order and rested in a saffron-lifted cashew gravy that is finished with a single drop of rose.",
    ingredients: ["Paneer", "Khoya", "Cashew", "Saffron", "Rose water", "Cream"],
    dietary: ["Vegetarian", "Contains nuts", "Contains dairy"],
    chefNote: "Sweet-leaning. Balance it with the burnt garlic broth.",
    spice: "Mild",
  },
  {
    id: "butter-chicken",
    name: "Old Delhi Butter Chicken",
    category: "Non-Vegetarian",
    price: 620,
    veg: false,
    popular: true,
    image: butterChicken,
    alt: "Butter chicken curry with cream swirl in a black bowl",
    short: "Tandoor-charred thigh, tomato-cashew gravy, honey and fenugreek.",
    description:
      "Bone-in thigh is charred in the tandoor first, never boiled, then folded into a gravy of San Marzano-style tomatoes reduced with cashew, a whisper of honey and toasted fenugreek.",
    ingredients: ["Chicken thigh", "Tomato", "Cashew", "Butter", "Honey", "Kasuri methi"],
    dietary: ["Non-vegetarian", "Gluten free", "Contains nuts"],
    chefNote: "We finish it with less sugar than most kitchens. Trust the tomato.",
    spice: "Mild",
  },
  {
    id: "coastal-fish-curry",
    name: "Coastal Fish Curry",
    category: "Non-Vegetarian",
    price: 720,
    veg: false,
    image: butterChicken,
    alt: "Coastal fish curry in coconut gravy served in a dark bowl",
    short: "Line-caught fish, coconut, kokum, tempered curry leaf.",
    description:
      "A bright Konkan-style curry of the day's line-caught fish, thin coconut milk soured with kokum and finished with a mustard and curry leaf tempering.",
    ingredients: ["Line-caught fish", "Coconut milk", "Kokum", "Curry leaf", "Mustard seed"],
    dietary: ["Non-vegetarian", "Gluten free", "Contains fish"],
    chefNote: "Eat it with steamed red rice, not naan.",
    spice: "Fiery",
  },
  {
    id: "laal-maas",
    name: "Rajasthani Laal Maas",
    category: "Indian Specialties",
    price: 780,
    veg: false,
    chefSpecial: true,
    image: tandoori,
    alt: "Fiery red Rajasthani laal maas lamb curry",
    short: "Mathania chilli, mutton on the bone, ghee, smoked in an iron pot.",
    description:
      "Mutton on the bone braised in a paste of Mathania chillies and garlic, cooked entirely in ghee and smoked with a live coal at the end. Hot, honest and unadapted.",
    ingredients: ["Mutton on the bone", "Mathania chilli", "Ghee", "Garlic", "Yoghurt"],
    dietary: ["Non-vegetarian", "Gluten free", "Contains dairy"],
    chefNote: "We will not tone this down. We will happily bring extra bajra roti.",
    spice: "Fiery",
  },
  {
    id: "nalli-nihari",
    name: "Nalli Nihari",
    category: "Indian Specialties",
    price: 820,
    veg: false,
    image: dal,
    alt: "Slow cooked nalli nihari lamb shank stew with bread",
    short: "Lamb shank, overnight stew, marrow, ginger julienne.",
    description:
      "Shanks are set on the fire at midnight and served the next evening, the marrow spooned back into the gravy at the pass with lime and ginger julienne.",
    ingredients: ["Lamb shank", "Bone marrow", "Nihari masala", "Wheat flour", "Ginger", "Lime"],
    dietary: ["Non-vegetarian", "Contains gluten"],
    chefNote: "Limited to twelve portions each evening.",
    spice: "Medium",
  },
  {
    id: "hyderabadi-biryani",
    name: "Hyderabadi Kacchi Biryani",
    category: "Biryanis",
    price: 760,
    veg: false,
    popular: true,
    chefSpecial: true,
    image: biryani,
    alt: "Hyderabadi mutton biryani served in a copper handi with saffron rice",
    short: "Raw marinated mutton, aged basmati, sealed handi, saffron.",
    description:
      "The kacchi method: raw marinated mutton layered under aged basmati, sealed with dough and cooked exactly forty minutes. Opened at your table so the first steam is yours.",
    ingredients: ["Mutton", "Aged basmati", "Saffron", "Fried onion", "Mint", "Yoghurt"],
    dietary: ["Non-vegetarian", "Contains dairy"],
    chefNote: "The dish this kitchen was built around. Please do not stir before we do.",
    spice: "Medium",
  },
  {
    id: "subz-biryani",
    name: "Subz Dum Biryani",
    category: "Biryanis",
    price: 560,
    veg: true,
    image: biryani,
    alt: "Vegetable dum biryani with saffron rice and fried onions",
    short: "Seasonal vegetables, saffron, burani raita.",
    description:
      "Not an afterthought — root vegetables are roasted separately so each keeps its own texture under the rice. Served with burani raita and mirchi ka salan.",
    ingredients: ["Seasonal vegetables", "Aged basmati", "Saffron", "Mint", "Fried onion"],
    dietary: ["Vegetarian", "Contains dairy"],
    chefNote: "Ask for extra salan. Everyone does.",
    spice: "Medium",
  },
  {
    id: "truffle-risotto",
    name: "Wild Mushroom Truffle Risotto",
    category: "Continental",
    price: 690,
    veg: true,
    image: risotto,
    alt: "Creamy wild mushroom truffle risotto in a white bowl",
    short: "Carnaroli rice, forest mushrooms, aged parmesan, black truffle.",
    description:
      "Carnaroli stirred with a mushroom stock built over two days, finished off the heat with cold butter, aged parmesan and shaved black truffle.",
    ingredients: ["Carnaroli rice", "Wild mushrooms", "Parmesan", "Black truffle", "Butter"],
    dietary: ["Vegetarian", "Gluten free", "Contains dairy"],
    chefNote: "Eat it immediately — risotto waits for no guest.",
    spice: "Mild",
  },
  {
    id: "herb-crusted-fish",
    name: "Herb Crusted Sea Bass",
    category: "Continental",
    price: 940,
    veg: false,
    image: risotto,
    alt: "Herb crusted sea bass fillet plated with seasonal vegetables",
    short: "Pan-seared fillet, lemon butter, charred asparagus.",
    description:
      "A thick fillet seared skin-side down until the crust shatters, served over crushed potato with a lemon and caper butter finished at the pass.",
    ingredients: ["Sea bass", "Herb crust", "Lemon", "Caper", "Butter", "Asparagus"],
    dietary: ["Non-vegetarian", "Contains fish", "Contains dairy"],
    chefNote: "Our sommelier will point you to the Chenin.",
    spice: "Mild",
  },
  {
    id: "chilli-garlic-noodles",
    name: "Wok Chilli Garlic Noodles",
    category: "Chinese",
    price: 440,
    veg: true,
    image: noodles,
    alt: "Steaming wok tossed chilli garlic noodles with vegetables",
    short: "High-flame wok, hand-pulled noodles, Sichuan heat.",
    description:
      "Hand-pulled noodles thrown through a screaming wok with garlic, dried red chilli and a splash of black vinegar. Cooked in ninety seconds, as it should be.",
    ingredients: ["Hand-pulled noodles", "Garlic", "Dried red chilli", "Black vinegar", "Spring onion"],
    dietary: ["Vegetarian", "Contains gluten", "Contains soy"],
    chefNote: "Add the chilli oil sparingly; it builds.",
    spice: "Fiery",
  },
  {
    id: "pepper-chicken",
    name: "Black Pepper Chicken",
    category: "Chinese",
    price: 520,
    veg: false,
    image: noodles,
    alt: "Black pepper chicken stir fry with peppers in a dark bowl",
    short: "Crushed Tellicherry pepper, bell pepper, wok-charred.",
    description:
      "Chicken velveted in egg white and cornflour, then tossed with crushed Tellicherry pepper and bell peppers until the edges catch.",
    ingredients: ["Chicken", "Tellicherry pepper", "Bell pepper", "Soy", "Rice wine"],
    dietary: ["Non-vegetarian", "Contains soy", "Contains egg"],
    chefNote: "Order the burnt garlic rice alongside.",
    spice: "Medium",
  },
  {
    id: "gulab-jamun",
    name: "Rose Gulab Jamun",
    category: "Desserts",
    price: 320,
    veg: true,
    popular: true,
    image: dessert,
    alt: "Gulab jamun dessert plated with rose petals and gold leaf",
    short: "Khoya dumplings, rose syrup, edible gold, saffron rabri.",
    description:
      "Khoya kneaded by hand, fried at a low temperature so the centre stays molten, soaked in a light rose syrup and finished with saffron rabri and gold leaf.",
    ingredients: ["Khoya", "Rose syrup", "Saffron", "Rabri", "Edible gold leaf"],
    dietary: ["Vegetarian", "Contains dairy", "Contains gluten"],
    chefNote: "Two per person. Nobody has ever regretted it.",
    spice: "Mild",
  },
  {
    id: "cardamom-brulee",
    name: "Cardamom Crème Brûlée",
    category: "Desserts",
    price: 340,
    veg: true,
    image: dessert,
    alt: "Cardamom crème brûlée with a caramelised sugar crust",
    short: "Green cardamom custard, burnt sugar, pistachio crumb.",
    description:
      "A classic custard infused overnight with hand-crushed green cardamom, torched to order and dusted with a salted pistachio crumb.",
    ingredients: ["Cream", "Egg yolk", "Green cardamom", "Demerara sugar", "Pistachio"],
    dietary: ["Vegetarian", "Contains egg", "Contains nuts"],
    chefNote: "Crack it straight through the middle.",
    spice: "Mild",
  },
  {
    id: "masala-chai",
    name: "Copper Pot Masala Chai",
    category: "Beverages",
    price: 180,
    veg: true,
    image: beverage,
    alt: "Masala chai in a glass beside a signature cocktail on a dark bar",
    short: "Assam leaf, whole spice, boiled in copper, poured tall.",
    description:
      "Second-flush Assam boiled with ginger, cardamom and a single clove in a copper pot, then pulled between vessels until it foams.",
    ingredients: ["Assam tea", "Ginger", "Green cardamom", "Clove", "Milk"],
    dietary: ["Vegetarian", "Contains dairy"],
    chefNote: "The correct end to a heavy meal.",
    spice: "Mild",
  },
  {
    id: "smoked-old-fashioned",
    name: "Smoked Jaggery Old Fashioned",
    category: "Beverages",
    price: 650,
    veg: true,
    chefSpecial: true,
    image: beverage,
    alt: "Signature smoked cocktail served in a coupe glass at the bar",
    short: "Aged whisky, jaggery, bitters, cinnamon smoke.",
    description:
      "Our bar's signature: aged whisky stirred down with jaggery syrup and house bitters, served under a cinnamon-smoked cloche.",
    ingredients: ["Aged whisky", "Jaggery syrup", "House bitters", "Cinnamon smoke", "Orange peel"],
    dietary: ["Contains alcohol", "Vegetarian"],
    chefNote: "Strong. One is the correct number before dinner.",
    spice: "Mild",
  },
];

export const FEATURED_DISH_IDS = [
  "hyderabadi-biryani",
  "butter-chicken",
  "smoked-paneer-tikka",
  "laal-maas",
  "dal-makhani",
  "truffle-risotto",
  "gulab-jamun",
  "tandoori-platter",
];

export const CHEFS = [
  {
    name: "Chef Arun Menon",
    role: "Executive Chef",
    specialty: "Dum & slow-fire cookery",
    image: chef1,
    alt: "Portrait of Executive Chef Arun Menon in a white chef coat",
    bio: "Twenty-two years across Chennai, Dubai and Hyderabad. Arun runs the pass with a stopwatch and an unreasonable belief that biryani should never be stirred before it reaches the guest.",
  },
  {
    name: "Chef Meera Iyer",
    role: "Head Pastry Chef",
    specialty: "Indian desserts, reimagined",
    image: chef2,
    alt: "Portrait of Head Pastry Chef Meera Iyer smiling in the kitchen",
    bio: "Trained in Lyon, returned to rebuild the mithai of her grandmother's kitchen with French technique. The rose gulab jamun took her nine months to sign off.",
  },
  {
    name: "Chef Ishaan Kaul",
    role: "Tandoor Master",
    specialty: "Clay oven & kebabs",
    image: chef3,
    alt: "Portrait of Tandoor Master Ishaan Kaul holding kebab skewers",
    bio: "Third-generation tandoorwala from Amritsar. He reads the oven by the sound the dough makes, and has never once used a thermometer.",
  },
  {
    name: "Chef Neha Rao",
    role: "Sous Chef",
    specialty: "Coastal & continental plating",
    image: chef4,
    alt: "Portrait of Sous Chef Neha Rao plating a dish in the kitchen",
    bio: "Neha owns the garde manger and the tasting menu. Every plate that leaves the kitchen passes her eye before it passes the door.",
  },
];

export const GALLERY = [
  { src: biryani, alt: "Hyderabadi biryani in a copper handi", category: "Food", tall: true },
  { src: interior, alt: "Main dining room with velvet chairs and arched windows", category: "Interior" },
  { src: chef1, alt: "Executive chef in the kitchen", category: "Chefs", tall: true },
  { src: eventPrivate, alt: "Guests toasting at a private dining celebration", category: "Events" },
  { src: ambience, alt: "Intimate bar corner with brass shelving and candles", category: "Ambience" },
  { src: butterChicken, alt: "Butter chicken with a cream swirl", category: "Food" },
  { src: kitchen, alt: "Chefs working over open flames in the kitchen", category: "Chefs", tall: true },
  { src: tandoori, alt: "Tandoori grill platter with lemon", category: "Food" },
  { src: dessert, alt: "Rose gulab jamun with gold leaf", category: "Food" },
  { src: ingredients, alt: "Whole spices and herbs on dark stone", category: "Ambience", tall: true },
  { src: chef2, alt: "Pastry chef in the kitchen", category: "Chefs" },
  { src: risotto, alt: "Wild mushroom truffle risotto", category: "Food" },
  { src: beverage, alt: "Masala chai and signature cocktail at the bar", category: "Ambience" },
  { src: noodles, alt: "Wok tossed chilli garlic noodles", category: "Food", tall: true },
  { src: hero, alt: "Dining room at night under brass pendant lights", category: "Interior" },
  { src: chef3, alt: "Tandoor master with skewers", category: "Chefs" },
  { src: soup, alt: "Roasted tomato shorba", category: "Food" },
  { src: dal, alt: "Dal makhani with naan", category: "Food" },
];

export const GALLERY_CATEGORIES = ["All", "Food", "Interior", "Chefs", "Events", "Ambience"];

export const EVENTS = [
  {
    id: "birthdays",
    title: "Birthday Celebrations",
    image: dessert,
    alt: "Celebration dessert with gold leaf on a dark plate",
    description:
      "A table dressed in brass and candlelight, a cake cut to your timing, and a dessert course the kitchen builds around the guest of honour.",
    highlights: ["Reserved corner tables for 6–20", "Custom cake coordination", "Personalised dessert plating", "Complimentary chai service"],
  },
  {
    id: "anniversaries",
    title: "Anniversaries",
    image: ambience,
    alt: "Intimate candlelit table for two in the bar corner",
    description:
      "The quietest table in the room, a rose-petal setting, and a five-course tasting menu paired by our sommelier. Photographs on request.",
    highlights: ["Private alcove seating", "Five-course tasting menu", "Wine pairing", "Rose and candle setting"],
  },
  {
    id: "corporate",
    title: "Corporate Dining",
    image: interior,
    alt: "Formal dining room set for a corporate lunch",
    description:
      "Discreet service, a fixed menu agreed in advance, and a boardroom-adjacent private room with screen and power at every seat.",
    highlights: ["Private room for up to 30", "Pre-agreed set menus", "AV and presentation screen", "Single consolidated invoice"],
  },
  {
    id: "family",
    title: "Family Gatherings",
    image: eventPrivate,
    alt: "Long table set for a family gathering with candles",
    description:
      "Long tables, sharing platters and a pace that lets three generations eat together without anyone waiting on the kitchen.",
    highlights: ["Long tables for 10–40", "Family-style sharing platters", "Children's menu", "Flexible seating times"],
  },
  {
    id: "private-parties",
    title: "Private Parties",
    image: kitchen,
    alt: "Live kitchen counter during a private event",
    description:
      "Exclusive use of the mezzanine, a live kebab counter, a dedicated bartender and a playlist you approve beforehand.",
    highlights: ["Full mezzanine buyout", "Live tandoor counter", "Dedicated bar team", "Curated playlist"],
  },
  {
    id: "special",
    title: "Festival & Special Evenings",
    image: ingredients,
    alt: "Festival spices and ingredients laid out on dark stone",
    description:
      "Diwali thalis, monsoon tasting menus and regional guest-chef nights, announced a fortnight in advance to our reservation list.",
    highlights: ["Seasonal regional menus", "Guest chef collaborations", "Live classical music", "Advance ticketed seating"],
  },
];

export const OFFERS = [
  {
    title: "Weekend Signature Evening",
    badge: "Weekends",
    price: "₹2,400 for two",
    description: "A four-course signature menu with the kacchi biryani at its centre, plus a welcome cocktail each.",
    terms: "Friday to Sunday, 19:00 onwards. Reservation required.",
    image: biryani,
    alt: "Hyderabadi biryani served for a weekend signature dinner",
  },
  {
    title: "Family Table",
    badge: "Groups of 4+",
    price: "20% off the food bill",
    description: "Sharing platters, unlimited breads and a complimentary dessert flight for tables of four or more.",
    terms: "All week except public holidays. Dine-in only.",
    image: dal,
    alt: "Dal makhani and breads served family style",
  },
  {
    title: "Chef's Counter Tasting",
    badge: "Chef's Special",
    price: "₹3,200 per guest",
    description: "Eight courses served at the pass by the chef who cooked them. Six seats only, twice a week.",
    terms: "Wednesday and Saturday, 20:00. Prepaid seats.",
    image: kitchen,
    alt: "Chef preparing dishes at the open kitchen counter",
  },
  {
    title: "Business Lunch",
    badge: "Weekdays",
    price: "₹850 per guest",
    description: "Three courses served within fifty minutes, timed for a lunch break that cannot run long.",
    terms: "Monday to Friday, 12:00 – 15:00.",
    image: risotto,
    alt: "Plated lunch course of truffle risotto",
  },
  {
    title: "Festival Feast",
    badge: "Seasonal",
    price: "₹1,900 per guest",
    description: "A regional festival thali with nine preparations, sweets and copper-pot chai to close.",
    terms: "Announced seasonally. Limited seatings.",
    image: dessert,
    alt: "Festival dessert plated with rose petals and gold leaf",
  },
];

export const REVIEWS = [
  {
    name: "Ananya Deshpande",
    image: chef2,
    rating: 5,
    date: "Dined in March",
    text: "We opened the handi at the table and the entire room turned to look. The biryani deserves its reputation, but it was the tomato shorba that I have thought about since. Service was quiet and exact.",
  },
  {
    name: "Rohan Bhatt",
    image: chef3,
    rating: 5,
    date: "Dined in February",
    text: "Booked the chef's counter for my father's birthday. Eight courses, and Chef Arun explained each one himself. Nobody rushed us, and the bill was exactly what we were quoted.",
  },
  {
    name: "Kavya Menon",
    image: chef4,
    rating: 4,
    date: "Dined in January",
    text: "The laal maas is genuinely hot — they warned us and they were right. Beautiful room, excellent bread service. Only note is that the bar gets busy before nine.",
  },
  {
    name: "Sameer Qureshi",
    image: chef1,
    rating: 5,
    date: "Dined in December",
    text: "Thirty of us for a corporate dinner in the private room. One menu, one invoice, no chaos. The team handled dietary requirements without a single mistake.",
  },
];

export const FAQS = [
  {
    q: "Do I need a reservation?",
    a: "We strongly recommend it, particularly Thursday through Sunday. Walk-ins are welcome at the bar counter, where the full menu is served, though waiting times can reach forty minutes on weekend evenings.",
  },
  {
    q: "Do you offer vegetarian options?",
    a: "Roughly half the menu is vegetarian, including the subz dum biryani, twenty-four hour dal makhani and the truffle risotto. Jain preparations can be arranged with four hours' notice.",
  },
  {
    q: "Do you host private events?",
    a: "Yes. The private room seats thirty, and the mezzanine can be bought out for up to seventy guests. Our events team responds to enquiries within one working day.",
  },
  {
    q: "Do you offer takeaway?",
    a: "Takeaway is available for the entire menu except the kacchi biryani, which we only serve sealed at the table. Orders can be placed by phone up to ninety minutes before closing.",
  },
  {
    q: "What are your opening hours?",
    a: "Lunch runs from 12:00 and dinner from 19:00, with extended weekend service until 23:45. Full hours are listed on the contact page.",
  },
  {
    q: "Do you accommodate large groups?",
    a: "Tables up to forty guests are seated in the main room with a pre-agreed menu. Beyond forty we move you to the mezzanine.",
  },
  {
    q: "Can I request special dishes?",
    a: "If the ingredients are in the building and the chef has notice, usually yes. Off-menu requests are best made at the time of booking rather than on the evening.",
  },
];

export const WHY_US = [
  {
    title: "Fresh Ingredients",
    text: "Produce arrives twice daily from the Banjara Hills market; nothing is frozen and nothing is carried over.",
  },
  {
    title: "Expert Chefs",
    text: "A brigade of eighteen, led by chefs with two decades each across India and abroad.",
  },
  {
    title: "Authentic Flavours",
    text: "Regional recipes cooked the long way — dum, ember and clay, never shortcuts.",
  },
  {
    title: "Elegant Ambience",
    text: "Charcoal walls, brass light and enough distance between tables to hear your own table.",
  },
  {
    title: "Exceptional Service",
    text: "One server for every eight guests, trained to read a table rather than interrupt it.",
  },
  {
    title: "Memorable Dining",
    text: "Sealed handis opened tableside, smoke under domes, and desserts finished in front of you.",
  },
];
