export const RESTAURANT_INFO = {
  name: "Momo Weds Shawarma",
  tagline: "Delhi's Authentic Shawarmas, Kathi Rolls, Dumplings & Street Delights",
  rating: "3.7",
  ratingCount: "Zomato Verified",
  phones: ["8389130000", "8669400000", "9779593096"],
  whatsapp: "918389130000",
  address: "Booth 71C, B-28-1402/71, Urban Estate, Phase 2, Dugri, Ludhiana",
  shortAddress: "Booth 71C, Phase 2, Dugri, Ludhiana",
  timing: "4:00 PM - 3:00 AM",
  zomatoUrl: "https://www.zomato.com/ludhiana/momo-weds-shawarma-dugri",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Momo+Weds+Shawarma+Booth+71C+Phase+2+Dugri+Ludhiana"
};

export const CATEGORIES = [
  { id: "all", name: "All Items", icon: "Flame",
    popular: false
  },
  { id: "popular", name: "🔥 Chef's Specials", icon: "Sparkles",
    popular: false
  },
  { id: "shawarma-veg", name: "Shawarma (Veg)", icon: "UtensilsCrossed",
    popular: false
  },
  { id: "shawarma-nonveg", name: "Shawarma (Non-Veg)", icon: "Utensils",
    popular: false
  },
  { id: "rumali-veg", name: "Rumali Rolls (Veg)", icon: "Scroll",
    popular: false
  },
  { id: "rumali-nonveg", name: "Rumali Rolls (Non-Veg)", icon: "Scroll",
    popular: false
  },
  { id: "kathi-veg", name: "Kathi Rolls (Veg)", icon: "Wrap",
    popular: false
  },
  { id: "kathi-nonveg", name: "Kathi Rolls (Non-Veg)", icon: "Wrap",
    popular: false
  },
  { id: "momos", name: "Momo Starters", icon: "Soup",
    popular: false
  },
  { id: "mws-dumplings", name: "MWS Special Dumplings", icon: "Sparkles",
    popular: false
  },
  { id: "tandoori-veg", name: "Tandoori Starters (Veg)", icon: "Flame",
    popular: false
  },
  { id: "tandoori-nonveg", name: "Tandoori Starters (Non-Veg)", icon: "Flame",
    popular: false
  },
  { id: "chicken-wings", name: "Chicken Wings", icon: "Drumstick",
    popular: false
  },
  { id: "chinese-veg", name: "Chinese (Veg)", icon: "Salad",
    popular: false
  },
  { id: "chinese-nonveg", name: "Chinese (Non-Veg)", icon: "Drumstick",
    popular: false
  },
  { id: "crispy-chicken", name: "Crispy Chicken", icon: "Sparkles",
    popular: false
  },
  { id: "rice-bowl", name: "Rice Bowl", icon: "BowlFood",
    popular: false
  },
  { id: "noodles", name: "Noodles", icon: "Utensils",
    popular: false
  },
  { id: "pasta", name: "Pasta", icon: "Utensils",
    popular: false
  },
  { id: "naan-sliders", name: "MWS Naan Sliders", icon: "Sandwich",
    popular: false
  },
  { id: "fries", name: "Fries", icon: "Utensils",
    popular: false
  },
  { id: "sandwich", name: "Sandwich", icon: "Sandwich",
    popular: false
  },
  { id: "wraps", name: "Wraps", icon: "Wrap",
    popular: false
  },
  { id: "main-veg", name: "Main Course (Veg)", icon: "Soup",
    popular: false
  },
  { id: "main-nonveg", name: "Main Course (Non-Veg)", icon: "Soup",
    popular: false
  },
  { id: "mws-specials", name: "MWS Specials", icon: "Crown",
    popular: false
  },
  { id: "breads", name: "Breads", icon: "Cookie",
    popular: false
  }
];

export const MENU_ITEMS = [



  // 1. SHAWARMA (VEG)
  {
    id: "shw-v-1",
    name: "Classic Paneer Shawarma",
    image: null,
    category: "shawarma-veg",
    price: 120,
    isVeg: true,
    description: "Authentic pit-grilled paneer wrapped in freshly baked bread with garlic cream.",
    popular: false
  },
  {
    id: "shw-v-2",
    name: "Flavoured Paneer Shawarma",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/flavoured_paneer_shawarma.png",
    category: "shawarma-veg",
    price: 140,
    isVeg: true,
    description: "Infused with aromatic Delhi spice marinades and special house drizzles.",
    popular: false
  },
  {
    id: "shw-v-3",
    name: "Korean Paneer Shawarma",
    image: null,
    category: "shawarma-veg",
    price: 150,
    isVeg: true,
    description: "Sweet & spicy Korean Gochujang glaze with pickled veggies and grilled paneer.",
    popular: false
  },
  {
    id: "shw-v-4",
    name: "BBQ Paneer Shawarma",
    image: null,
    category: "shawarma-veg",
    price: 150,
    isVeg: true,
    description: "Smoky barbeque glazes over tender paneer cubes and crunchy salad.",
    popular: false
  },
  {
    id: "shw-v-5",
    name: "Chef's Garlic Paneer Shawarma",
    image: null,
    category: "shawarma-veg",
    price: 150,
    isVeg: true,
    description: "Loaded with signature garlic emulsion and secret Delhi spice blend.",
    popular: true
  },
  {
    id: "shw-v-6",
    name: "Chilly Paneer Shawarma",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chilli_soya_shawarma.jpg",
    category: "shawarma-veg",
    price: 220,
    isVeg: true,
    description: "Indo-Chinese fusion featuring fiery chilly paneer inside a warm wrap.",
    popular: true
  },

  // 2. SHAWARMA (NON-VEG)
  {
    id: "shw-nv-1",
    name: "Classic Chicken Shawarma",
    category: "shawarma-nonveg",
    price: 120,
    isVeg: false,
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/classic_chicken_shawarma.jpg",
    description: "Slow-roasted tender chicken spit-grilled to perfection, rolled with garlic sauce.",
    popular: false
  },
  {
    id: "shw-nv-2",
    name: "Afghani Chicken Shawarma",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/flavoured_chicken_shawarma.jpg",
    category: "shawarma-nonveg",
    price: 140,
    isVeg: false,
    description: "Tangy spices drizzled over succulent roasted chicken shawarma slices.",
    popular: true
  },
  {
    id: "shw-nv-3",
    name: "BBQ Chicken Shawarma",
    image: null,
    category: "shawarma-nonveg",
    price: 150,
    isVeg: false,
    description: "Rich hickory smoked BBQ sauces drenched over tender chicken shreds.",
    popular: false
  },
  {
    id: "shw-nv-4",
    name: "Korean Chicken Shawarma",
    image: null,
    category: "shawarma-nonveg",
    price: 150,
    isVeg: false,
    description: "Fiery & sweet Korean chilli glazed chicken wrap with sesame hint.",
    popular: false
  },
  {
    id: "shw-nv-5",
    name: "Chef's Garlic Chicken Shawarma",
    image: null,
    category: "shawarma-nonveg",
    price: 150,
    isVeg: false,
    description: "Our signature garlic crema folded into warm soft bread with juicy chicken.",
    popular: true
  },
  {
    id: "shw-nv-6",
    name: "Kurkure Chicken Shawarma",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/kurkure_chicken_shawarma.jpg",
    category: "shawarma-nonveg",
    price: 180,
    isVeg: false,
    description: "Ultra-crunchy fried outer shell surrounding hot spiced chicken shawarma.",
    popular: false
  },
  {
    id: "shw-nv-7",
    name: "Chicken Kabab Shawarma",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chilli_chicken_shawarma.jpg",
    category: "shawarma-nonveg",
    price: 200,
    isVeg: false,
    description: "Charcoal seekh kababs tucked in warm shawarma roll with mint mayo.",
    popular: false
  },
  {
    id: "shw-nv-8",
    name: "Special Egg Shawarma",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/classic_chicken_shawarma.jpg",
    category: "shawarma-nonveg",
    price: 160,
    isVeg: false,
    description: "Fluffy seasoned egg layer wrapped with spiced roasted chicken filling.",
    popular: false
  },
  {
    id: "shw-nv-9",
    name: "Special Egg Kabab Shawarma",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/classic_chicken_shawarma.jpg",
    category: "shawarma-nonveg",
    price: 230,
    isVeg: false,
    description: "Double delight of egg and juicy seekh kabab wrapped together.",
    popular: false
  },
  {
    id: "shw-nv-10",
    name: "Chilly Chicken Shawarma",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chilli_chicken_shawarma.jpg",
    category: "shawarma-nonveg",
    price: 220,
    isVeg: false,
    description: "Spicy tossed chilly chicken wrapped in traditional shawarma flatbread.",
    popular: false
  },

  // 3. FULLY LOADED RUMALI ROLLS (VEG) (DELHI SPECIALITY)
  {
    id: "rum-v-1",
    name: "Tandoori Chaap Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/tandoori_chaap.jpg",
    category: "rumali-veg",
    price: 200,
    isVeg: true,
    description: "Smoky clay-oven charred soya chaap rolled in paper-thin Rumali roti.",
    popular: false
  },
  {
    id: "rum-v-2",
    name: "Malai Chaap Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/malai_chaap_roll.jpg",
    category: "rumali-veg",
    price: 220,
    isVeg: true,
    description: "Rich cream and cashew marinated soya chaap wrapped in soft Rumali.",
    popular: false
  },
  {
    id: "rum-v-3",
    name: "Bhatti Chaap Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/bhatti_chaap_roll.jpg",
    category: "rumali-veg",
    price: 220,
    isVeg: true,
    description: "Rustic Delhi bhatti spiced chaap with pickled onions.",
    popular: false
  },
  {
    id: "rum-v-4",
    name: "Sharabi Chaap Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sharabi_chaap.png",
    category: "rumali-veg",
    price: 240,
    isVeg: true,
    description: "Our secret house recipe rum-infused gravy chaap in delicate Rumali.",
    popular: false
  },
  {
    id: "rum-v-5",
    name: "Bhatti Paneer Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/bhatti_paneer_roll.jpg",
    category: "rumali-veg",
    price: 230,
    isVeg: true,
    description: "Charred bhatti paneer tikka wrapped with spicy green chutney.",
    popular: false
  },
  {
    id: "rum-v-6",
    name: "Sharabi Paneer Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sharabi_paneer_roll.jpg",
    category: "rumali-veg",
    price: 240,
    isVeg: true,
    description: "Richly spiced cocktail sauce marinated paneer in Rumali roti.",
    popular: false
  },

  // 4. FULLY LOADED RUMALI ROLLS (NONVEG) (DELHI SPECIALITY)
  {
    id: "rum-nv-1",
    name: "Tandoori Tikka Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/tandoori_chicken_roll.png",
    category: "rumali-nonveg",
    price: 220,
    isVeg: false,
    description: "Charcoal grilled chicken tikka folded in buttery Rumali roti.",
    popular: false
  },
  {
    id: "rum-nv-2",
    name: "Malai Tikka Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/malai_tikka_roll.jpg",
    category: "rumali-nonveg",
    price: 230,
    isVeg: false,
    description: "Creamy cardamom spiced malai chicken tikka wrapped in fresh Rumali.",
    popular: false
  },
  {
    id: "rum-nv-3",
    name: "Bhatti Tikka Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/bhatti_tikka.png",
    category: "rumali-nonveg",
    price: 230,
    isVeg: false,
    description: "Dark roasted Delhi bhatti spiced chicken tikka roll.",
    popular: false
  },
  {
    id: "rum-nv-4",
    name: "Sharabi Tikka Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sharabi_chicken_roll.jpg",
    category: "rumali-nonveg",
    price: 250,
    isVeg: false,
    description: "Signature flamed chicken tikka roll with rich tangy sauces.",
    popular: false
  },
  {
    id: "rum-nv-5",
    name: "Chicken Seekh Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/flavoured_chicken_seekh_roll.jpg",
    category: "rumali-nonveg",
    price: 240,
    isVeg: false,
    description: "Melt-in-mouth chicken seekh kababs wrapped with ring onions.",
    popular: false
  },
  {
    id: "rum-nv-6",
    name: "Malai Seekh Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/malai_seekh_roll.jpg",
    category: "rumali-nonveg",
    price: 260,
    isVeg: false,
    description: "Rich malai glazed chicken seekh wrapped in paper-thin roti.",
    popular: false
  },

  // 5. KATHI ROLLS (VEG)
  {
    id: "kat-v-1",
    name: "Authentic Noodles Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/authentic_noodles_roll.jpg",
    category: "kathi-veg",
    price: 130,
    isVeg: true,
    description: "Street-style desi wok fried noodles encased in crispy paratha.",
    popular: false
  },
  {
    id: "kat-v-2",
    name: "Authentic Paneer Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/malai_paneer_roll.jpg",
    category: "kathi-veg",
    price: 200,
    isVeg: true,
    description: "Classic Kolkata style flaky paratha roll loaded with cottage cheese.",
    popular: false
  },
  {
    id: "kat-v-3",
    name: "Soya Makhni Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/soya_makhani_roll.jpg",
    category: "kathi-veg",
    price: 190,
    isVeg: true,
    description: "Butter makhni gravy dipped soya chunks in flaky Kathi roll.",
    popular: false
  },
  {
    id: "kat-v-4",
    name: "Afghani Soya Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/achari_chaap_roll.png",
    category: "kathi-veg",
    price: 200,
    isVeg: true,
    description: "Mild white marinade creamy soya roll.",
    popular: false
  },
  {
    id: "kat-v-5",
    name: "Bhatti Soya Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/bhatti_chaap_roll.jpg",
    category: "kathi-veg",
    price: 220,
    isVeg: true,
    description: "Charcoal smoked bhatti soya chunks in Kathi wrap.",
    popular: false
  },
  {
    id: "kat-v-6",
    name: "Sharabi Chaap Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sharabi_chaap.png",
    category: "kathi-veg",
    price: 240,
    isVeg: true,
    description: "Spicy intoxicated flavor soya chaap Kathi roll.",
    popular: false
  },
  {
    id: "kat-v-7",
    name: "Mushroom Tikka Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/mushroom_tikka.png",
    category: "kathi-veg",
    price: 220,
    isVeg: true,
    description: "Grilled juicy button mushrooms stuffed with spices in Kathi roll.",
    popular: false
  },
  {
    id: "kat-v-8",
    name: "Paneer Makhni Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_makhani_roll.jpg",
    category: "kathi-veg",
    price: 250,
    isVeg: true,
    description: "Velvety butter gravy cottage cheese roll.",
    popular: false
  },
  {
    id: "kat-v-9",
    name: "Bhatti Paneer Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/bhatti_paneer_roll.jpg",
    category: "kathi-veg",
    price: 250,
    isVeg: true,
    description: "Bhatti spiced paneer tikka Kathi roll.",
    popular: false
  },
  {
    id: "kat-v-10",
    name: "Sharabi Paneer Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sharabi_paneer_roll.jpg",
    category: "kathi-veg",
    price: 250,
    isVeg: true,
    description: "House special tangy spicy paneer Kathi roll.",
    popular: false
  },

  // 6. KATHI ROLLS (NON-VEG)
  {
    id: "kat-nv-1",
    name: "Egg Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/double_egg_roll.jpg",
    category: "kathi-nonveg",
    price: 100,
    isVeg: false,
    description: "Single egg coated flaky paratha with sliced onions and lime juice.",
    popular: false
  },
  {
    id: "kat-nv-2",
    name: "Double Egg Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/double_egg_roll.jpg",
    category: "kathi-nonveg",
    price: 120,
    isVeg: false,
    description: "Double egg layer paratha roll with tangy Delhi chat masala.",
    popular: false
  },
  {
    id: "kat-nv-3",
    name: "Classic Chicken Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_tikka_roll.jpg",
    category: "kathi-nonveg",
    price: 200,
    isVeg: false,
    description: "Traditional Kolkata style egg-layered roll packed with spiced chicken.",
    popular: false
  },
  {
    id: "kat-nv-4",
    name: "Chicken Tikka Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_tikka_roll.jpg",
    category: "kathi-nonveg",
    price: 220,
    isVeg: false,
    description: "Smoky tandoori chicken tikka rolled in lacha paratha.",
    popular: false
  },
  {
    id: "kat-nv-5",
    name: "Malai Tikka Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/malai_tikka_roll.jpg",
    category: "kathi-nonveg",
    price: 230,
    isVeg: false,
    description: "Mouth-watering cashew malai chicken tikka roll.",
    popular: false
  },
  {
    id: "kat-nv-6",
    name: "Bhatti Chicken Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/bhatti_chicken_roll.jpg",
    category: "kathi-nonveg",
    price: 230,
    isVeg: false,
    description: "Intense bhatti roasted chicken shreds in crispy roll.",
    popular: true
  },
  {
    id: "kat-nv-7",
    name: "Butter Chicken Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/butter_chicken_roll.jpg",
    category: "kathi-nonveg",
    price: 250,
    isVeg: false,
    description: "Creamy butter chicken gravy shredded inside a hot flaky roll.",
    popular: false
  },
  {
    id: "kat-nv-8",
    name: "Sharabi Chicken Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sharabi_chicken_roll.jpg",
    category: "kathi-nonveg",
    price: 250,
    isVeg: false,
    description: "Spiced up cocktail gravy chicken inside crispy paratha.",
    popular: false
  },
  {
    id: "kat-nv-9",
    name: "Crispy Chicken Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/crispy_chicken_roll.jpg",
    category: "kathi-nonveg",
    price: 250,
    isVeg: false,
    description: "Deep fried crunch chicken tenders loaded in Kathi wrap.",
    popular: false
  },
  {
    id: "kat-nv-10",
    name: "Chicken Seekh Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/flavoured_chicken_seekh_roll.jpg",
    category: "kathi-nonveg",
    price: 200,
    isVeg: false,
    description: "Charcoal seekh kabab sliced inside hot Kathi roll.",
    popular: false
  },
  {
    id: "kat-nv-11",
    name: "Flavoured Seekh Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/flavoured_chicken_seekh_roll.jpg",
    category: "kathi-nonveg",
    price: 220,
    isVeg: false,
    description: "Herbed seasoned minced chicken seekh roll.",
    popular: false
  },

  // 7. MOMO STARTERS (Multi-Variant: Veg / Paneer / Chicken)
  {
    id: "mom-1",
    name: "Steam Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg",
    category: "momos",
    isVeg: null, // multi-variant
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 60, full: 100,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 70, full: 120 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 80, full: 130 }, isVeg: false }
    ],
    basePrice: 60,
    description: "Traditional authentic steamed dumplings served with red hot sauce and garlic mayo."
  },
  {
    id: "mom-2",
    name: "Fried Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_pan_fried_momos.jpg",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_pan_fried_momos.jpg", prices: { half: 80, full: 130,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_pan_fried_momos.jpg", prices: { half: 90, full: 140 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_pan_fried_momos.jpg", prices: { half: 100, full: 160 }, isVeg: false }
    ],
    basePrice: 80,
    description: "Golden crispy fried momos served piping hot."
  },
  {
    id: "mom-3",
    name: "Pan Fried Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_pan_fried_momos.jpg",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_pan_fried_momos.jpg", prices: { half: 90, full: 150,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_pan_fried_momos.jpg", prices: { half: 100, full: 180 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_pan_fried_momos.jpg", prices: { half: 110, full: 200 }, isVeg: false }
    ],
    basePrice: 90,
    description: "Wok-tossed pan-fried dumplings with spicy chili glaze."
  },
  {
    id: "mom-4",
    name: "Kurkure Momos",
    category: "momos",
    isVeg: null,
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_kurkure_momos.jpg",
    variants: [
      { name: "Veg (Half / Full)", prices: { half: 90, full: 170,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)", prices: { half: 110, full: 200 }, isVeg: true },
      { name: "Chicken (Half / Full)", prices: { half: 120, full: 220 }, isVeg: false }
    ],
    basePrice: 90,
    description: "Super crunchy outer coating coated with spiced crumbs and deep fried."
  },
  {
    id: "mom-5",
    name: "Tandoori Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_tandoori_momos.png",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_tandoori_momos.png", prices: { half: 110, full: 200,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_tandoori_momos.png", prices: { half: 120, full: 220 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_tandoori_momos.png", prices: { half: 130, full: 240 }, isVeg: false }
    ],
    basePrice: 110,
    description: "Charcoal oven grilled momos tossed in tandoori masala and lemon butter."
  },
  {
    id: "mom-6",
    name: "Peri Peri Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 120, full: 220,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 130, full: 230 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 140, full: 240 }, isVeg: false }
    ],
    basePrice: 120,
    description: "Tossed in fiery African peri peri spice blend."
  },
  {
    id: "mom-7",
    name: "Afghani Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_afghani_momos.jpg",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_afghani_momos.jpg", prices: { half: 110, full: 210,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_afghani_momos.jpg", prices: { half: 120, full: 240 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_afghani_momos.jpg", prices: { half: 140, full: 240 }, isVeg: false }
    ],
    basePrice: 110,
    description: "Rich cream, butter and cashew paste coated delicate grilled momos."
  },
  {
    id: "mom-8",
    name: "Spl Bhatti Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/veg_tandoori_momos.png",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/veg_tandoori_momos.png", prices: { half: 120, full: 220,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/veg_tandoori_momos.png", prices: { half: 140, full: 250 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/veg_tandoori_momos.png", prices: { half: 150, full: 250 }, isVeg: false }
    ],
    basePrice: 120,
    description: "Robust Bhatti smoked momos with fiery black pepper undertones."
  },
  {
    id: "mom-9",
    name: "Sharabi Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 130, full: 250,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 140, full: 240 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 150, full: 250 }, isVeg: false }
    ],
    basePrice: 130,
    description: "Chef special intoxicating spicy tangy gravy coated momos."
  },
  {
    id: "mom-10",
    name: "Hot Garlic Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_hot_garlic_momos.png",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_hot_garlic_momos.png", prices: { half: 140, full: 240,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_hot_garlic_momos.png", prices: { half: 150, full: 250 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_hot_garlic_momos.png", prices: { half: 150, full: 250 }, isVeg: false }
    ],
    basePrice: 140,
    description: "Sizzling garlic chili gravy smothered momos."
  },
  {
    id: "mom-11",
    name: "Schezwan Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_schezwan_momos.jpg",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_schezwan_momos.jpg", prices: { half: 140, full: 240,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_schezwan_momos.jpg", prices: { half: 150, full: 250 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_schezwan_momos.jpg", prices: { half: 150, full: 250 }, isVeg: false }
    ],
    basePrice: 140,
    description: "Spicy Sichuan pepper wok tossed momos."
  },
  {
    id: "mom-12",
    name: "Honey Chilly Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 140, full: 240,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 150, full: 250 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 150, full: 250 }, isVeg: false }
    ],
    basePrice: 140,
    description: "Sweet honey and spicy red chili glaze tossed momos."
  },
  {
    id: "mom-13",
    name: "Spl Pizza Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 150, full: 250,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 150, full: 250 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 140, full: 240 }, isVeg: false }
    ],
    basePrice: 140,
    description: "Cheesy baked pizza sauced momos with Italian herbs."
  },
  {
    id: "mom-14",
    name: "Butter Makhni Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/butter_makhni_momos.png",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 150, full: 260,
    popular: true
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 150, full: 270 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg", prices: { half: 150, full: 270 }, isVeg: false }
    ],
    basePrice: 150,
    description: "Our signature Butter Makhni gravy poured over juicy momos."
  },
  {
    id: "mom-15",
    name: "Rogan Josh Gravy Momos",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/rogan_josh.png",
    category: "momos",
    isVeg: null,
    variants: [
      { name: "Veg (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_rogan_josh_gravy_momos.png", prices: { half: 150, full: 270,
    popular: false
  }, isVeg: true },
      { name: "Paneer (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_rogan_josh_gravy_momos.png", prices: { half: 150, full: 270 }, isVeg: true },
      { name: "Chicken (Half / Full)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_rogan_josh_gravy_momos.png", prices: { half: 150, full: 270 }, isVeg: false }
    ],
    basePrice: 150,
    description: "Kashmiri spices infused aromatic gravy momos."
  },

  // 8. MWS SPECIAL DUMPLINGS
  {
    id: "dmp-1",
    name: "Midnight Mushroom Dumpling",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg",
    category: "mws-dumplings",
    price: 250,
    isVeg: true,
    description: "Exotic shiitake & button mushroom stuffed delicate midnight grey dumplings.",
    popular: false
  },
  {
    id: "dmp-2",
    name: "Chicken Royal Dumplings",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_steamed_momos.jpg",
    category: "mws-dumplings",
    price: 250,
    isVeg: false,
    description: "Royal spiced minced chicken wrapped in golden crystal translucent wrapper.",
    popular: false
  },

  // 9. TANDOORI STARTERS (VEG)
  {
    id: "tan-v-1",
    name: "Tandoori Chaap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/tandoori_chaap.jpg",
    category: "tandoori-veg",
    price: 220,
    isVeg: true,
    description: "Classic red tandoori marinated soya chaap grilled over live coals.",
    popular: false
  },
  {
    id: "tan-v-2",
    name: "Tandoori Malai Chaap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/afghani_chaap_roll.jpg",
    category: "tandoori-veg",
    price: 230,
    isVeg: true,
    description: "Mild cashew cream marinated juicy soya chaap.",
    popular: true
  },
  {
    id: "tan-v-3",
    name: "Spl Bhatti Chaap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/special_bhatti_chaap.jpg",
    category: "tandoori-veg",
    price: 240,
    isVeg: true,
    description: "Delhi bhatti style smoky black pepper chaap.",
    popular: false
  },
  {
    id: "tan-v-4",
    name: "Sharabi Chaap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sharabi_chaap.png",
    category: "tandoori-veg",
    price: 250,
    isVeg: true,
    description: "Flamed in house-special spiced marinade.",
    popular: false
  },
  {
    id: "tan-v-5",
    name: "Tandoori Paneer Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/tandoori_paneer_tikka.png",
    category: "tandoori-veg",
    price: 300,
    isVeg: true,
    description: "Charcoal roasted cottage cheese blocks with onions & bell peppers.",
    popular: false
  },
  {
    id: "tan-v-6",
    name: "Spl Bhatti Paneer Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/special_bhatti_paneer_tikka.jpg",
    category: "tandoori-veg",
    price: 350,
    isVeg: true,
    description: "Special dark roast bhatti masala paneer tikka.",
    popular: false
  },
  {
    id: "tan-v-7",
    name: "Sharabi Paneer Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sharabi_chicken_tikka.png",
    category: "tandoori-veg",
    price: 400,
    isVeg: true,
    description: "Intense spice flame grilled premium paneer blocks.",
    popular: false
  },
  {
    id: "tan-v-8",
    name: "Mushroom Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/mushroom_tikka.png",
    category: "tandoori-veg",
    price: 220,
    isVeg: true,
    description: "Charcoal grilled fresh mushrooms marinated in yoghurt & spices.",
    popular: false
  },
  {
    id: "tan-v-9",
    name: "Bhatti Mushroom Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/mushroom_tikka.png",
    category: "tandoori-veg",
    price: 240,
    isVeg: true,
    description: "Smoky dark bhatti spice coated mushrooms.",
    popular: false
  },

  // 10. TANDOORI STARTER (NONVEG)
  {
    id: "tan-nv-1",
    name: "Tandoori Chicken Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/tandoori_chicken_tikka.jpg",
    category: "tandoori-nonveg",
    price: 380,
    isVeg: false,
    description: "Boneless tender chicken pieces charred in traditional clay oven.",
    popular: false
  },
  {
    id: "tan-nv-2",
    name: "Afghani Chicken Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/afghani_chicken_tikka.jpg",
    category: "tandoori-nonveg",
    price: 400,
    isVeg: false,
    description: "Rich cream and aromatic cardamom spiced chicken tikka.",
    popular: false
  },
  {
    id: "tan-nv-3",
    name: "Bhatti Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/bhatti_tikka.png",
    category: "tandoori-nonveg",
    price: 400,
    isVeg: false,
    description: "Old Delhi bhatti style charcoal roasted spicy chicken tikka.",
    popular: true
  },
  {
    id: "tan-nv-4",
    name: "Lehnsuni Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/lehsuni_tikka.jpg",
    category: "tandoori-nonveg",
    price: 420,
    isVeg: false,
    description: "Garlic infused rich tandoori roasted chicken tikka.",
    popular: false
  },
  {
    id: "tan-nv-5",
    name: "Kali Mirch Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/kali_mirch_tikka.png",
    category: "tandoori-nonveg",
    price: 430,
    isVeg: false,
    description: "Crushed black pepper spiced succulent chicken tikka.",
    popular: false
  },
  {
    id: "tan-nv-6",
    name: "Sharabi Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sharabi_chicken_tikka.png",
    category: "tandoori-nonveg",
    price: 420,
    isVeg: false,
    description: "Fiery cocktail sauce glazed charcoal chicken tikka.",
    popular: true
  },
  {
    id: "tan-nv-7",
    name: "Peri Peri Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/lasooni_tikka.png",
    category: "tandoori-nonveg",
    price: 420,
    isVeg: false,
    description: "African bird eye chili spiced tandoori tikka.",
    popular: false
  },
  {
    id: "tan-nv-8",
    name: "Banjara Tikka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/lasooni_tikka.png",
    category: "tandoori-nonveg",
    price: 450,
    isVeg: false,
    description: "Rustic green herb and crushed spice marinated chicken tikka.",
    popular: false
  },
  {
    id: "tan-nv-9",
    name: "Chicken Kabab",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/handmade_kabab.png",
    category: "tandoori-nonveg",
    price: 200,
    isVeg: false,
    description: "Classic spiced minced chicken seekh grilled on skewer.",
    popular: false
  },
  {
    id: "tan-nv-10",
    name: "Spl Handmade Kabab (Must Try)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/handmade_kabab.png",
    category: "tandoori-nonveg",
    price: 250,
    isVeg: false,
    description: "MWS signature chef crafted melt-in-mouth chicken kababs.",
    popular: true
  },
  {
    id: "tan-nv-11",
    name: "Tandoori Chicken (With Bone)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/tandoori_chicken.jpg",
    category: "tandoori-nonveg",
    price: 250,
    isVeg: false,
    description: "Whole chicken pieces marinated in red yoghurt spice and clay-grilled.",
    popular: false
  },
  {
    id: "tan-nv-12",
    name: "Afghani Chicken (With Bone)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/afghani_chicken.jpg",
    category: "tandoori-nonveg",
    price: 280,
    isVeg: false,
    description: "Bone-in chicken slow roasted in cream and mild white spices.",
    popular: false
  },
  {
    id: "tan-nv-13",
    name: "Bhatti Chicken (With Bone)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/bhatti_chicken.jpg",
    category: "tandoori-nonveg",
    price: 280,
    isVeg: false,
    description: "Signature Delhi Bhatti style bone-in grilled chicken.",
    popular: false
  },
  {
    id: "tan-nv-14",
    name: "Kali Mirch Chicken (With Bone)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/kali_mirch_tikka.png",
    category: "tandoori-nonveg",
    price: 300,
    isVeg: false,
    description: "Black pepper marinated juicy bone-in tandoori chicken.",
    popular: false
  },
  {
    id: "tan-nv-15",
    name: "Spl Sharabi Chicken (With Bone)",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/bhatti_chicken.jpg",
    category: "tandoori-nonveg",
    price: 320,
    isVeg: false,
    description: "Flamed intoxicated glaze over bone-in roasted chicken.",
    popular: false
  },
  {
    id: "tan-nv-16",
    name: "Tandoori Tangri",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/tandoori_chicken.jpg",
    category: "tandoori-nonveg",
    price: 300,
    isVeg: false,
    description: "Juicy chicken drumsticks roasted in clay oven with spicy tandoori masala.",
    popular: false
  },
  {
    id: "tan-nv-17",
    name: "Afghani Tangri",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/afghani_chicken.jpg",
    category: "tandoori-nonveg",
    price: 330,
    isVeg: false,
    description: "Creamy cashew paste glazed chicken drumsticks.",
    popular: false
  },
  {
    id: "tan-nv-18",
    name: "Sharabi Tangri",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sharabi_chicken_tikka.png",
    category: "tandoori-nonveg",
    price: 350,
    isVeg: false,
    description: "House special flamed chicken drumsticks.",
    popular: false
  },

  // 11. CHICKEN WINGS
  {
    id: "wng-1",
    name: "Tandoori Wings",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/hot_garlic_wings.png",
    category: "chicken-wings",
    price: 350,
    isVeg: false,
    description: "Charcoal grilled chicken wings tossed in tandoori spices & butter.",
    popular: false
  },
  {
    id: "wng-2",
    name: "Tandoori Malai Wings",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/hot_garlic_wings.png",
    category: "chicken-wings",
    price: 380,
    isVeg: false,
    description: "Velvety malai marinated juicy chicken wings.",
    popular: false
  },
  {
    id: "wng-3",
    name: "Afghani Wings",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/hot_garlic_wings.png",
    category: "chicken-wings",
    price: 380,
    isVeg: false,
    description: "Mild creamy white Afghani sauce glazed wings.",
    popular: false
  },
  {
    id: "wng-4",
    name: "Bhatti Wings",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/barbeque_flavour_chicken_wings.jpg",
    category: "chicken-wings",
    price: 380,
    isVeg: false,
    description: "Smoky Delhi bhatti pepper tossed crispy wings.",
    popular: false
  },

  // 12. CHINESE (VEG)
  {
    id: "chn-v-1",
    name: "Honey Chilly Potato",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/honey_chilli_potato.png",
    category: "chinese-veg",
    price: 200,
    isVeg: true,
    description: "Crispy fried potato fingers tossed in sweet chili honey glaze & sesame.",
    popular: false
  },
  {
    id: "chn-v-2",
    name: "Special Manchurian",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/special_manchurian.jpg",
    category: "chinese-veg",
    price: 250,
    isVeg: true,
    description: "Veg dumplings tossed in dark ginger soy sauce.",
    popular: false
  },
  {
    id: "chn-v-3",
    name: "Honey Manchurian",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/hong_kong_style_manchurian.png",
    category: "chinese-veg",
    price: 280,
    isVeg: true,
    description: "Sweet and savory honey soy tossed Manchurian balls.",
    popular: false
  },
  {
    id: "chn-v-4",
    name: "Chilly Mushroom",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/mushroom_chilli.jpg",
    category: "chinese-veg",
    price: 270,
    isVeg: true,
    description: "Crispy button mushrooms sautéed with bell peppers and chili soy sauce.",
    popular: false
  },
  {
    id: "chn-v-5",
    name: "Cheese Chilly",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/special_cheese_chilli.jpg",
    category: "chinese-veg",
    price: 290,
    isVeg: true,
    description: "Cubes of cottage cheese tossed in tangy garlic chili gravy.",
    popular: true
  },
  {
    id: "chn-v-6",
    name: "Paneer 65",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/mushroom_chilli.jpg",
    category: "chinese-veg",
    price: 300,
    isVeg: true,
    description: "South-fusion fiery fried paneer bites with curry leaves.",
    popular: false
  },
  {
    id: "chn-v-7",
    name: "Veg Spring Roll",
    image: null,
    category: "chinese-veg",
    price: 200,
    isVeg: true,
    description: "Golden crispy rolled wraps stuffed with wok fried shredded vegetables.",
    popular: false
  },

  // 13. CHINESE (NONVEG)
  {
    id: "chn-nv-1",
    name: "Chilly Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chilly_chicken_roll.png",
    category: "chinese-nonveg",
    price: 350,
    isVeg: false,
    description: "Classic Indo-Chinese diced chicken tossed with green chillies & capsicum.",
    popular: true
  },
  {
    id: "chn-nv-2",
    name: "Hot Garlic Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/honey_chilli_chicken.jpg",
    category: "chinese-nonveg",
    price: 350,
    isVeg: false,
    description: "Boneless chicken drenched in fiery hot garlic sauce.",
    popular: false
  },
  {
    id: "chn-nv-3",
    name: "Schezwan Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/schezwan_chicken.jpg",
    category: "chinese-nonveg",
    price: 380,
    isVeg: false,
    description: "Sichuan red pepper sauce sautéed crispy chicken.",
    popular: false
  },
  {
    id: "chn-nv-4",
    name: "Lemon Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/honey_chilli_chicken.jpg",
    category: "chinese-nonveg",
    price: 380,
    isVeg: false,
    description: "Tangy refreshing lemon glaze over fried chicken pieces.",
    popular: false
  },
  {
    id: "chn-nv-5",
    name: "Chicken Manchurian",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_manchurian.png",
    category: "chinese-nonveg",
    price: 300,
    isVeg: false,
    description: "Minced chicken balls cooked in rich soy garlic gravy.",
    popular: false
  },
  {
    id: "chn-nv-6",
    name: "Chicken Popcorn",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_popcorn.png",
    category: "chinese-nonveg",
    price: 230,
    isVeg: false,
    description: "Bite-sized crispy fried chicken nuggets with peri peri dip.",
    popular: false
  },
  {
    id: "chn-nv-7",
    name: "Chicken Lollypop",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chilli_chicken.jpg",
    category: "chinese-nonveg",
    price: 300,
    isVeg: false,
    description: "Frenched chicken winglets marinated in fiery red spices and fried.",
    popular: false
  },
  {
    id: "chn-nv-8",
    name: "Drums of Heaven",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/drums_of_heaven.png",
    category: "chinese-nonveg",
    price: 350,
    isVeg: false,
    description: "Chicken lollypops tossed in spicy sweet Schezwan garlic sauce.",
    popular: false
  },
  {
    id: "chn-nv-9",
    name: "Chicken Spring Roll",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/veg_pan_fried_momos.jpg",
    category: "chinese-nonveg",
    price: 250,
    isVeg: false,
    description: "Crispy fried rolls filled with spiced minced chicken filling.",
    popular: false
  },
  {
    id: "chn-nv-10",
    name: "Flavoured Chicken Sausages",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_popcorn.png",
    category: "chinese-nonveg",
    price: 260,
    isVeg: false,
    description: "Wok-tossed herb seasoned chicken sausages.",
    popular: false
  },

  // 14. CRISPY CHICKEN
  {
    id: "crp-1",
    name: "MWS Crispy Wings",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/crispy_wings.png",
    category: "crispy-chicken",
    price: 220,
    isVeg: false,
    description: "Double battered extra crunchy fried chicken wings.",
    popular: false
  },
  {
    id: "crp-2",
    name: "MWS Juicy Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_flame_stix.png",
    category: "crispy-chicken",
    price: 350,
    isVeg: false,
    description: "Succulent bone-in fried chicken with secret spice rub.",
    popular: false
  },
  {
    id: "crp-3",
    name: "Fried Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/peri_peri_chicken_popcorn.png",
    category: "crispy-chicken",
    price: 400,
    isVeg: false,
    description: "100% tender boneless chicken strips fried to gold perfection.",
    popular: true
  },
  {
    id: "crp-4",
    name: "MWS Chicken Bang Bang",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/special_chicken_bang_bang.png",
    category: "crispy-chicken",
    price: 380,
    isVeg: false,
    description: "Crispy fried chicken bites drenched in signature Bang Bang spicy mayo sauce.",
    popular: false
  },

  // 15. RICE BOWL
  {
    id: "rc-1",
    name: "Chilly Garlic Fried Rice",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/wok_tossed_fried_rice.jpg",
    category: "rice-bowl",
    price: 200,
    isVeg: true,
    description: "Aromatic basmati rice tossed with burnt garlic, green chilies and spring onions.",
    popular: false
  },
  {
    id: "rc-2",
    name: "Chef Special Fried Rice",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sizzling_fried_rice.jpg",
    category: "rice-bowl",
    price: 220,
    isVeg: true,
    description: "Loaded house special wok-tossed fried rice.",
    popular: false
  },
  {
    id: "rc-3",
    name: "Golden Egg Chicken Rice",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sizzling_chicken_egg_fried_rice.jpg",
    category: "rice-bowl",
    price: 300,
    isVeg: false,
    description: "Golden fried egg ribbons and shredded spiced chicken over fragrant rice.",
    popular: false
  },
  {
    id: "rc-4",
    name: "MWS Special Rice Bowl",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/exotic_oriental_veggies_stir_fry_bowl.jpg",
    category: "rice-bowl",
    price: 400,
    isVeg: false,
    description: "Ultimate bowl topped with chicken gravy, seekh kababs and fried egg.",
    popular: false
  },

  // 16. NOODLES
  {
    id: "ndl-1",
    name: "Veg Noodles",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/spl_veggie_noodles.jpg",
    category: "noodles",
    price: 180,
    isVeg: true,
    description: "Desi chowmein wok tossed with crunchy julienne veggies.",
    popular: false
  },
  {
    id: "ndl-2",
    name: "Chilly Garlic Noodles",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chilli_garlic_noodles.png",
    category: "noodles",
    price: 200,
    isVeg: true,
    description: "Fiery red chili and toasted garlic noodles.",
    popular: false
  },
  {
    id: "ndl-3",
    name: "Schezwan Noodles",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chilli_garlic_noodles.png",
    category: "noodles",
    price: 220,
    isVeg: true,
    description: "Spicy Sichuan pepper spicy fried noodles.",
    popular: false
  },
  {
    id: "ndl-4",
    name: "Spl Dan Dan Noodles",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/spl_dan_dan_noodles.png",
    category: "noodles",
    price: 240,
    isVeg: true,
    description: "Rich sesame chili oil infused noodles with crushed peanuts.",
    popular: false
  },
  {
    id: "ndl-5",
    name: "MWS Special Noodles",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/spl_dan_dan_noodles.png",
    category: "noodles",
    price: 230,
    isVeg: true,
    description: "House special wok-fried secret sauce noodles.",
    popular: false
  },
  {
    id: "ndl-6",
    name: "Add Chicken and Egg",
    image: null,
    category: "noodles",
    price: 100,
    isVeg: false,
    description: "Add-on topping of juicy chicken chunks and scrambled egg to any noodles dish.",
    popular: false
  },

  // 17. PASTA
  {
    id: "pst-1",
    name: "White Sauce Pasta",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/white_sauce_pasta.jpg",
    category: "pasta",
    price: 240,
    isVeg: true,
    description: "Creamy Alfredo sauce penne tossed with garlic butter and herbs.",
    popular: false
  },
  {
    id: "pst-2",
    name: "Red Sauce Pasta",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/red_sauce_pasta.jpg",
    category: "pasta",
    price: 240,
    isVeg: true,
    description: "Tangy tomato basil Arrabbiata sauce pasta with chili flakes.",
    popular: false
  },
  {
    id: "pst-3",
    name: "Mix Sauce Pasta",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/punjabi_mixed_sauce_pasta.jpg",
    category: "pasta",
    price: 250,
    isVeg: true,
    description: "Pink sauce harmony of rich cream and tangy tomato sauce.",
    popular: false
  },
  {
    id: "pst-4",
    name: "Cheese Pasta",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/white_sauce_pasta.jpg",
    category: "pasta",
    price: 280,
    isVeg: true,
    description: "Loaded with melted mozzarella and cheddar cheese sauce.",
    popular: false
  },
  {
    id: "pst-5",
    name: "Mac N Cheese",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/cheese_garlic_pasta.jpg",
    category: "pasta",
    price: 280,
    isVeg: true,
    description: "Golden baked macaroni soaked in gooey 3-cheese sauce.",
    popular: false
  },

  // 18. MWS NAAN SLIDERS
  {
    id: "sld-1",
    name: "Shahi Paneer Slider",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/naan_slider.png",
    category: "naan-sliders",
    price: 250,
    isVeg: true,
    description: "Soft mini naan bun stuffed with creamy royal shahi paneer.",
    popular: false
  },
  {
    id: "sld-2",
    name: "Kadai Paneer Slider",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/naan_slider.png",
    category: "naan-sliders",
    price: 250,
    isVeg: true,
    description: "Spiced wok kadai paneer encased in buttery warm mini naan.",
    popular: false
  },
  {
    id: "sld-3",
    name: "Butter Chicken Slider",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/naan_slider.png",
    category: "naan-sliders",
    price: 280,
    isVeg: false,
    description: "Delhi's iconic butter chicken inside soft garlic naan slider buns.",
    popular: false
  },
  {
    id: "sld-4",
    name: "Kadai Chicken Slider",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/naan_slider.png",
    category: "naan-sliders",
    price: 280,
    isVeg: false,
    description: "Robust capsicum and onion chicken kadai in naan slider.",
    popular: false
  },
  {
    id: "sld-5",
    name: "Rara Chicken Slider",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/naan_slider.png",
    category: "naan-sliders",
    price: 280,
    isVeg: false,
    description: "Keema-gravy infused chicken slider.",
    popular: false
  },
  {
    id: "sld-6",
    name: "Kali Mirch Chicken Slider",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/naan_slider.png",
    category: "naan-sliders",
    price: 280,
    isVeg: false,
    description: "Black pepper cream chicken stuffed in warm naan.",
    popular: false
  },

  // 19. FRIES
  {
    id: "fr-1",
    name: "Peri Peri Fries",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/peri_peri_fries.jpg",
    category: "fries",
    price: 150,
    isVeg: true,
    description: "Crispy french fries dusted with tangy zesty Peri Peri seasoning.",
    popular: false
  },
  {
    id: "fr-2",
    name: "Cheese Loaded Fries",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chicken_and_cheese_fries.jpg",
    category: "fries",
    price: 250,
    isVeg: true,
    description: "Golden fries smothered with hot liquid cheddar cheese & jalapenos.",
    popular: false
  },

  // 20. SANDWICH
  {
    id: "snd-1",
    name: "Wild Mushroom & Cheese Sandwich",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/grilled_sandwich.png",
    category: "sandwich",
    price: 180,
    isVeg: true,
    description: "Sautéed wild mushrooms and melted cheese inside toasted artisan bread.",
    popular: false
  },
  {
    id: "snd-2",
    name: "Cheesy Paneer Sandwich",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/grilled_sandwich.png",
    category: "sandwich",
    price: 200,
    isVeg: true,
    description: "Spiced paneer bhurji and stretchy mozzarella grill sandwich.",
    popular: false
  },
  {
    id: "snd-3",
    name: "Chicken & Cheese Sandwich",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/grilled_sandwich.png",
    category: "sandwich",
    price: 220,
    isVeg: false,
    description: "Shredded spiced chicken with melted cheddar in crispy toasted bread.",
    popular: false
  },
  {
    id: "snd-4",
    name: "Peri Peri Chicken Sandwich",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/grilled_sandwich.png",
    category: "sandwich",
    price: 220,
    isVeg: false,
    description: "Spicy peri-peri chicken grilled sandwich.",
    popular: false
  },

  // 21. WRAPS
  {
    id: "wrp-1",
    name: "The Melted Mushroom Wrap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/malai_paneer_roll.jpg",
    category: "wraps",
    price: 200,
    isVeg: true,
    description: "Garlic butter sautéed mushrooms with oozing cheese sauce wrap.",
    popular: false
  },
  {
    id: "wrp-2",
    name: "The Melted Paneer Wrap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/paneer_tikka_roll.jpg",
    category: "wraps",
    price: 220,
    isVeg: true,
    description: "Warm tortilla stuffed with grilled paneer and double cheese dip.",
    popular: false
  },
  {
    id: "wrp-3",
    name: "The Melted Chicken Wrap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/crispy_chicken_roll.jpg",
    category: "wraps",
    price: 250,
    isVeg: false,
    description: "Grilled spiced chicken soaked in warm melted cheese wrap.",
    popular: false
  },
  {
    id: "wrp-4",
    name: "Peri Peri Chicken Wrap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/butter_chicken_roll.jpg",
    category: "wraps",
    price: 250,
    isVeg: false,
    description: "Fiery peri peri spiced chicken tender wrap.",
    popular: false
  },

  // 22. MAIN COURSE (VEG)
  {
    id: "mc-v-1",
    name: "Delhi Spl Dal Makhni",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/delhi_special_dal_makhni.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/delhi_special_dal_makhni.jpg", price: 170,
    popular: true
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/delhi_special_dal_makhni.jpg", price: 280 }
    ],
    basePrice: 170,
    description: "Slow-cooked black lentils overnight with white butter & cream."
  },
  {
    id: "mc-v-2",
    name: "Dal Double Tadka",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/delhi_special_dal_makhni.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/delhi_special_dal_makhni.jpg", price: 170,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/delhi_special_dal_makhni.jpg", price: 280 }
    ],
    basePrice: 170,
    description: "Yellow arhar dal tempered twice with garlic, cumin & desi ghee."
  },
  {
    id: "mc-v-3",
    name: "Shahi Paneer",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 220,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 350 }
    ],
    basePrice: 220,
    description: "Royal cottage cheese cubes in rich almond-cashew tomato gravy."
  },
  {
    id: "mc-v-4",
    name: "Paneer Butter Masala",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 240,
    popular: true
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 360 }
    ],
    basePrice: 240,
    description: "Velvety spiced tomato gravy enriched with fresh butter."
  },
  {
    id: "mc-v-5",
    name: "Kadhai Paneer",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/kadai_paneer.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 240,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 360 }
    ],
    basePrice: 240,
    description: "Wok-cooked cottage cheese with coarsely ground coriander and capsicum."
  },
  {
    id: "mc-v-6",
    name: "Kali Mirch Paneer",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 240,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 360 }
    ],
    basePrice: 240,
    description: "Rich white gravy seasoned with cracked black pepper."
  },
  {
    id: "mc-v-7",
    name: "Rara Paneer",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/rara_paneer.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/rara_paneer.jpg", price: 250,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/rara_paneer.jpg", price: 400 }
    ],
    basePrice: 250,
    description: "Minced paneer gravy combined with cottage cheese cubes."
  },
  {
    id: "mc-v-8",
    name: "Spl Rogan Josh Paneer",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/rogan_josh.png",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 250,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 400 }
    ],
    basePrice: 250,
    description: "Kashmiri red chilly infused gravy with cottage cheese."
  },
  {
    id: "mc-v-9",
    name: "Tawa Masala Chaap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/tawa_chaap.png",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: null, price: 180,
    popular: false
  },
      { name: "Full Portion",
    image: null, price: 320 }
    ],
    basePrice: 180,
    description: "Street-style griddle fried spicy chaap masala gravy."
  },
  {
    id: "mc-v-10",
    name: "Kadhai Chaap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/tandoori_chaap.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: null, price: 180,
    popular: false
  },
      { name: "Full Portion",
    image: null, price: 320 }
    ],
    basePrice: 180,
    description: "Spiced soya chaap cooked in traditional Kadhai gravy."
  },
  {
    id: "mc-v-11",
    name: "Kali Mirch Chaap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/kali_mirch_tikka.png",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/kali_mirch_tikka.png", price: 200,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/kali_mirch_tikka.png", price: 350 }
    ],
    basePrice: 200,
    description: "Creamy black pepper gravy soya chaap."
  },
  {
    id: "mc-v-12",
    name: "Makhni Chaap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/malai_chaap.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: null, price: 200,
    popular: false
  },
      { name: "Full Portion",
    image: null, price: 350 }
    ],
    basePrice: 200,
    description: "Rich buttery tomato gravy with tender soya chaap."
  },
  {
    id: "mc-v-13",
    name: "Rara Gravy Chaap",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/special_bhatti_chaap.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: null, price: 220,
    popular: false
  },
      { name: "Full Portion",
    image: null, price: 370 }
    ],
    basePrice: 220,
    description: "Thick coarse spiced gravy with soft soya chaap."
  },
  {
    id: "mc-v-14",
    name: "Spl Veg Keema Maeat",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/spl_veggie_noodles.jpg",
    category: "main-veg",
    isVeg: true,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 250,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 400 }
    ],
    basePrice: 250,
    description: "Plant-based minced keema cooked in Delhi spices."
  },

  // 23. MAIN COURSE (NON-VEG)
  {
    id: "mc-nv-1",
    name: "Chicken Curry",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/butter_chicken_with_1_paratha.jpg",
    category: "main-nonveg",
    isVeg: false,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 400,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 780 }
    ],
    basePrice: 400,
    description: "Homestyle aromatic onion-tomato home cooked style chicken curry."
  },
  {
    id: "mc-nv-2",
    name: "Delhi Spl Butter Chicken",
    category: "main-nonveg",
    isVeg: false,
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/butter_chicken_with_1_paratha.jpg",
    variants: [
      { name: "Half Portion", price: 440,
    popular: true
  },
      { name: "Full Portion", price: 800 }
    ],
    basePrice: 440,
    description: "Iconic Delhi style charcoal tandoori chicken simmered in velvet butter gravy."
  },
  {
    id: "mc-nv-3",
    name: "Kadhai Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/butter_chicken_with_1_paratha.jpg",
    category: "main-nonveg",
    isVeg: false,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 440,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 800 }
    ],
    basePrice: 440,
    description: "Wok-cooked chicken with whole coriander seeds, onions and capsicum."
  },
  {
    id: "mc-nv-4",
    name: "Matki Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sweet_sour_chicken_combo.jpg",
    category: "main-nonveg",
    isVeg: false,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 500,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 800 }
    ],
    basePrice: 500,
    description: "Earthen pot dum-cooked slow simmered spiced chicken gravy."
  },
  {
    id: "mc-nv-5",
    name: "Kali Mirch Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/honey_chilli_chicken.jpg",
    category: "main-nonveg",
    isVeg: false,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 440,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 800 }
    ],
    basePrice: 440,
    description: "Crushed black pepper & cashew cream rich white gravy chicken."
  },
  {
    id: "mc-nv-6",
    name: "Rara Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/sweet_sour_chicken_combo.jpg",
    category: "main-nonveg",
    isVeg: false,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 450,
    popular: true
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 800 }
    ],
    basePrice: 450,
    description: "Chicken pieces simmered in rich spiced chicken keema gravy."
  },
  {
    id: "mc-nv-7",
    name: "Spl Rogan Josh Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/rogan_josh.png",
    category: "main-nonveg",
    isVeg: false,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 450,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 800 }
    ],
    basePrice: 450,
    description: "Aromatic Kashmiri chilli red gravy chicken curry."
  },
  {
    id: "mc-nv-8",
    name: "Cream Chicken",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/cream_chicken.png",
    category: "main-nonveg",
    isVeg: false,
    variants: [
      { name: "Half Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 450,
    popular: false
  },
      { name: "Full Portion",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/shahi_paneer.jpg", price: 800 }
    ],
    basePrice: 450,
    description: "Rich malai cream gravy with mild green cardamom notes."
  },

  // 24. MWS SPECIALS
  {
    id: "spc-1",
    name: "Veg Keema Naan with Gravy",
    image: null,
    category: "mws-specials",
    price: 280,
    isVeg: true,
    description: "Stuffed soya keema naan served with rich spicy gravy.",
    popular: false
  },
  {
    id: "spc-2",
    name: "Veg Keema Ricebowl",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/wok_tossed_fried_rice.jpg",
    category: "mws-specials",
    price: 250,
    isVeg: true,
    description: "Flavoured basmati rice topped with spiced soya keema gravy.",
    popular: false
  },
  {
    id: "spc-3",
    name: "Chicken Naan with Gravy",
    image: null,
    category: "mws-specials",
    price: 300,
    isVeg: false,
    description: "Clay-oven baked naan stuffed with minced chicken, served with butter gravy.",
    popular: false
  },
  {
    id: "spc-4",
    name: "Chicken Keema Ricebowl",
    image: "https://rmdgcebtrgbddlvuxsod.supabase.co/storage/v1/object/public/dishes/chef_special_chicken_egg_fried_rice.jpg",
    category: "mws-specials",
    price: 270,
    isVeg: false,
    description: "Aromatic basmati rice topped with hearty chicken keema gravy.",
    popular: false
  },

  // 25. BREADS
  {
    id: "brd-1",
    name: "Tawa Roti",
    image: null,
    category: "breads",
    price: 20,
    isVeg: true,
    description: "Whole wheat iron griddle flatbread.",
    popular: false
  },
  {
    id: "brd-2",
    name: "Tandoori Roti",
    image: null,
    category: "breads",
    price: 25,
    isVeg: true,
    description: "Clay-oven baked crisp wheat roti.",
    popular: false
  },
  {
    id: "brd-3",
    name: "Butter Roti",
    image: null,
    category: "breads",
    price: 25,
    isVeg: true,
    description: "Freshly baked tandoori roti brushed with fresh butter.",
    popular: false
  },
  {
    id: "brd-4",
    name: "Cream Roti",
    image: null,
    category: "breads",
    price: 30,
    isVeg: true,
    description: "Soft tandoori roti brushed with rich cream.",
    popular: false
  },
  {
    id: "brd-5",
    name: "Missi Roti",
    image: null,
    category: "breads",
    price: 40,
    isVeg: true,
    description: "Spiced gram flour flatbread with onion & coriander.",
    popular: false
  },
  {
    id: "brd-6",
    name: "Garlic Roti",
    image: null,
    category: "breads",
    price: 40,
    isVeg: true,
    description: "Toasted minced garlic flatbread.",
    popular: false
  },
  {
    id: "brd-7",
    name: "Butter Naan",
    image: null,
    category: "breads",
    price: 60,
    isVeg: true,
    description: "Traditional soft refined flour naan brushed with butter.",
    popular: false
  },
  {
    id: "brd-8",
    name: "Garlic Naan",
    image: null,
    category: "breads",
    price: 70,
    isVeg: true,
    description: "Toasted garlic & coriander sprinkled soft tandoori naan.",
    popular: false
  },
  {
    id: "brd-9",
    name: "Laccha Parantha",
    image: null,
    category: "breads",
    price: 50,
    isVeg: true,
    description: "Multi-layered flaky crisp tandoori paratha.",
    popular: false
  },
  {
    id: "brd-10",
    name: "Lal Mirch Parantha",
    image: null,
    category: "breads",
    price: 60,
    isVeg: true,
    description: "Layered paratha seasoned with red chilli flakes.",
    popular: false
  },
  {
    id: "brd-11",
    name: "Hari Mirch Parantha",
    image: null,
    category: "breads",
    price: 60,
    isVeg: true,
    description: "Layered paratha stuffed with spicy green chillies.",
    popular: false
  },
  {
    id: "brd-12",
    name: "Masala Rumali",
    image: null,
    category: "breads",
    price: 35,
    isVeg: true,
    description: "Thin rumali roti dusted with chat masala.",
    popular: false
  },
  {
    id: "brd-13",
    name: "Rumali Roti",
    image: null,
    category: "breads",
    price: 25,
    isVeg: true,
    description: "Paper-thin delicate soft Delhi rumali flatbread.",
    popular: false
  },
  {
    id: "brd-14",
    name: "Kulcha",
    image: null,
    category: "breads",
    price: 30,
    isVeg: true,
    description: "Soft leavened tandoori bread.",
    popular: false
  },
  {
    id: "brd-15",
    name: "Masala Kulcha",
    image: null,
    category: "breads",
    price: 40,
    isVeg: true,
    description: "Spiced potato and herb stuffed golden tandoori kulcha.",
    popular: false
  }
];
