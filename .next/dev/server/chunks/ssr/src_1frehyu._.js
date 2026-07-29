module.exports = [
"[project]/src/data/menuData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "MENU_ITEMS",
    ()=>MENU_ITEMS,
    "RESTAURANT_INFO",
    ()=>RESTAURANT_INFO
]);
const RESTAURANT_INFO = {
    name: "Momo Weds Shawarma",
    tagline: "Delhi's Authentic Shawarmas, Kathi Rolls, Dumplings & Street Delights",
    phones: [
        "9779593096",
        "9915977605"
    ],
    whatsapp: "919779593096",
    address: "Delhi & Company Food Menu Hub",
    timing: "12:00 PM - 11:30 PM",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Momo+Weds+Shawarma"
};
const CATEGORIES = [
    {
        id: "all",
        name: "All Items",
        icon: "Flame"
    },
    {
        id: "popular",
        name: "🔥 Popular",
        icon: "Sparkles"
    },
    {
        id: "shawarma-veg",
        name: "Shawarma (Veg)",
        icon: "UtensilsCrossed"
    },
    {
        id: "shawarma-nonveg",
        name: "Shawarma (Non-Veg)",
        icon: "Utensils"
    },
    {
        id: "rumali-veg",
        name: "Rumali Rolls (Veg)",
        icon: "Scroll"
    },
    {
        id: "rumali-nonveg",
        name: "Rumali Rolls (Non-Veg)",
        icon: "Scroll"
    },
    {
        id: "kathi-veg",
        name: "Kathi Rolls (Veg)",
        icon: "Wrap"
    },
    {
        id: "kathi-nonveg",
        name: "Kathi Rolls (Non-Veg)",
        icon: "Wrap"
    },
    {
        id: "momos",
        name: "Momo Starters",
        icon: "Soup"
    },
    {
        id: "mws-dumplings",
        name: "MWS Special Dumplings",
        icon: "Sparkles"
    },
    {
        id: "tandoori-veg",
        name: "Tandoori Starters (Veg)",
        icon: "Flame"
    },
    {
        id: "tandoori-nonveg",
        name: "Tandoori Starters (Non-Veg)",
        icon: "Flame"
    },
    {
        id: "chicken-wings",
        name: "Chicken Wings",
        icon: "Drumstick"
    },
    {
        id: "chinese-veg",
        name: "Chinese (Veg)",
        icon: "Salad"
    },
    {
        id: "chinese-nonveg",
        name: "Chinese (Non-Veg)",
        icon: "Drumstick"
    },
    {
        id: "crispy-chicken",
        name: "Crispy Chicken",
        icon: "Sparkles"
    },
    {
        id: "rice-bowl",
        name: "Rice Bowl",
        icon: "BowlFood"
    },
    {
        id: "noodles",
        name: "Noodles",
        icon: "Utensils"
    },
    {
        id: "pasta",
        name: "Pasta",
        icon: "Utensils"
    },
    {
        id: "naan-sliders",
        name: "MWS Naan Sliders",
        icon: "Sandwich"
    },
    {
        id: "fries",
        name: "Fries",
        icon: "Utensils"
    },
    {
        id: "sandwich",
        name: "Sandwich",
        icon: "Sandwich"
    },
    {
        id: "wraps",
        name: "Wraps",
        icon: "Wrap"
    },
    {
        id: "main-veg",
        name: "Main Course (Veg)",
        icon: "Soup"
    },
    {
        id: "main-nonveg",
        name: "Main Course (Non-Veg)",
        icon: "Soup"
    },
    {
        id: "mws-specials",
        name: "MWS Specials",
        icon: "Crown"
    },
    {
        id: "breads",
        name: "Breads",
        icon: "Cookie"
    }
];
const MENU_ITEMS = [
    // 1. SHAWARMA (VEG)
    {
        id: "shw-v-1",
        name: "Classic Paneer Shawarma",
        category: "shawarma-veg",
        price: 120,
        isVeg: true,
        description: "Authentic pit-grilled paneer wrapped in freshly baked bread with garlic cream.",
        popular: true
    },
    {
        id: "shw-v-2",
        name: "Flavoured Paneer Shawarma",
        category: "shawarma-veg",
        price: 140,
        isVeg: true,
        description: "Infused with aromatic Delhi spice marinades and special house drizzles.",
        popular: true
    },
    {
        id: "shw-v-3",
        name: "Korean Paneer Shawarma",
        category: "shawarma-veg",
        price: 150,
        isVeg: true,
        description: "Sweet & spicy Korean Gochujang glaze with pickled veggies and grilled paneer.",
        popular: true
    },
    {
        id: "shw-v-4",
        name: "BBQ Paneer Shawarma",
        category: "shawarma-veg",
        price: 150,
        isVeg: true,
        description: "Smoky barbeque glazes over tender paneer cubes and crunchy salad.",
        popular: true
    },
    {
        id: "shw-v-5",
        name: "Chef's Garlic Paneer Shawarma",
        category: "shawarma-veg",
        price: 150,
        isVeg: true,
        description: "Loaded with signature garlic emulsion and secret Delhi spice blend.",
        popular: true
    },
    {
        id: "shw-v-6",
        name: "Chilly Paneer Shawarma",
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
        image: "/images/shawarma.png",
        description: "Slow-roasted tender chicken spit-grilled to perfection, rolled with garlic sauce.",
        popular: true
    },
    {
        id: "shw-nv-2",
        name: "Flavoured Chicken Shawarma",
        category: "shawarma-nonveg",
        price: 140,
        isVeg: false,
        description: "Tangy spices drizzled over succulent roasted chicken shawarma slices.",
        popular: true
    },
    {
        id: "shw-nv-3",
        name: "BBQ Chicken Shawarma",
        category: "shawarma-nonveg",
        price: 150,
        isVeg: false,
        description: "Rich hickory smoked BBQ sauces drenched over tender chicken shreds.",
        popular: true
    },
    {
        id: "shw-nv-4",
        name: "Korean Chicken Shawarma",
        category: "shawarma-nonveg",
        price: 150,
        isVeg: false,
        description: "Fiery & sweet Korean chilli glazed chicken wrap with sesame hint.",
        popular: true
    },
    {
        id: "shw-nv-5",
        name: "Chef's Garlic Chicken Shawarma",
        category: "shawarma-nonveg",
        price: 150,
        isVeg: false,
        description: "Our signature garlic crema folded into warm soft bread with juicy chicken.",
        popular: true
    },
    {
        id: "shw-nv-6",
        name: "Kurkure Chicken Shawarma",
        category: "shawarma-nonveg",
        price: 180,
        isVeg: false,
        description: "Ultra-crunchy fried outer shell surrounding hot spiced chicken shawarma.",
        popular: true
    },
    {
        id: "shw-nv-7",
        name: "Chicken Kabab Shawarma",
        category: "shawarma-nonveg",
        price: 200,
        isVeg: false,
        description: "Charcoal seekh kababs tucked in warm shawarma roll with mint mayo.",
        popular: true
    },
    {
        id: "shw-nv-8",
        name: "Special Egg Shawarma",
        category: "shawarma-nonveg",
        price: 160,
        isVeg: false,
        description: "Fluffy seasoned egg layer wrapped with spiced roasted chicken filling.",
        popular: true
    },
    {
        id: "shw-nv-9",
        name: "Special Egg Kabab Shawarma",
        category: "shawarma-nonveg",
        price: 230,
        isVeg: false,
        description: "Double delight of egg and juicy seekh kabab wrapped together.",
        popular: true
    },
    {
        id: "shw-nv-10",
        name: "Chilly Chicken Shawarma",
        category: "shawarma-nonveg",
        price: 220,
        isVeg: false,
        description: "Spicy tossed chilly chicken wrapped in traditional shawarma flatbread.",
        popular: true
    },
    // 3. FULLY LOADED RUMALI ROLLS (VEG) (DELHI SPECIALITY)
    {
        id: "rum-v-1",
        name: "Tandoori Chaap Roll",
        category: "rumali-veg",
        price: 200,
        isVeg: true,
        description: "Smoky clay-oven charred soya chaap rolled in paper-thin Rumali roti.",
        popular: true
    },
    {
        id: "rum-v-2",
        name: "Malai Chaap Roll",
        category: "rumali-veg",
        price: 220,
        isVeg: true,
        description: "Rich cream and cashew marinated soya chaap wrapped in soft Rumali.",
        popular: true
    },
    {
        id: "rum-v-3",
        name: "Bhatti Chaap Roll",
        category: "rumali-veg",
        price: 220,
        isVeg: true,
        description: "Rustic Delhi bhatti spiced chaap with pickled onions.",
        popular: true
    },
    {
        id: "rum-v-4",
        name: "Sharabi Chaap Roll",
        category: "rumali-veg",
        price: 240,
        isVeg: true,
        description: "Our secret house recipe rum-infused gravy chaap in delicate Rumali.",
        popular: true
    },
    {
        id: "rum-v-5",
        name: "Bhatti Paneer Roll",
        category: "rumali-veg",
        price: 230,
        isVeg: true,
        description: "Charred bhatti paneer tikka wrapped with spicy green chutney.",
        popular: true
    },
    {
        id: "rum-v-6",
        name: "Sharabi Paneer Roll",
        category: "rumali-veg",
        price: 240,
        isVeg: true,
        description: "Richly spiced cocktail sauce marinated paneer in Rumali roti.",
        popular: true
    },
    // 4. FULLY LOADED RUMALI ROLLS (NONVEG) (DELHI SPECIALITY)
    {
        id: "rum-nv-1",
        name: "Tandoori Tikka Roll",
        category: "rumali-nonveg",
        price: 220,
        isVeg: false,
        description: "Charcoal grilled chicken tikka folded in buttery Rumali roti.",
        popular: true
    },
    {
        id: "rum-nv-2",
        name: "Malai Tikka Roll",
        category: "rumali-nonveg",
        price: 230,
        isVeg: false,
        description: "Creamy cardamom spiced malai chicken tikka wrapped in fresh Rumali.",
        popular: true
    },
    {
        id: "rum-nv-3",
        name: "Bhatti Tikka Roll",
        category: "rumali-nonveg",
        price: 230,
        isVeg: false,
        description: "Dark roasted Delhi bhatti spiced chicken tikka roll.",
        popular: true
    },
    {
        id: "rum-nv-4",
        name: "Sharabi Tikka Roll",
        category: "rumali-nonveg",
        price: 250,
        isVeg: false,
        description: "Signature flamed chicken tikka roll with rich tangy sauces.",
        popular: true
    },
    {
        id: "rum-nv-5",
        name: "Chicken Seekh Roll",
        category: "rumali-nonveg",
        price: 240,
        isVeg: false,
        description: "Melt-in-mouth chicken seekh kababs wrapped with ring onions.",
        popular: true
    },
    {
        id: "rum-nv-6",
        name: "Malai Seekh Roll",
        category: "rumali-nonveg",
        price: 260,
        isVeg: false,
        description: "Rich malai glazed chicken seekh wrapped in paper-thin roti.",
        popular: true
    },
    // 5. KATHI ROLLS (VEG)
    {
        id: "kat-v-1",
        name: "Authentic Noodles Roll",
        category: "kathi-veg",
        price: 130,
        isVeg: true,
        description: "Street-style desi wok fried noodles encased in crispy paratha.",
        popular: false
    },
    {
        id: "kat-v-2",
        name: "Authentic Paneer Roll",
        category: "kathi-veg",
        price: 200,
        isVeg: true,
        description: "Classic Kolkata style flaky paratha roll loaded with cottage cheese.",
        popular: false
    },
    {
        id: "kat-v-3",
        name: "Soya Makhni Roll",
        category: "kathi-veg",
        price: 190,
        isVeg: true,
        description: "Butter makhni gravy dipped soya chunks in flaky Kathi roll.",
        popular: false
    },
    {
        id: "kat-v-4",
        name: "Afghani Soya Roll",
        category: "kathi-veg",
        price: 200,
        isVeg: true,
        description: "Mild white marinade creamy soya roll.",
        popular: false
    },
    {
        id: "kat-v-5",
        name: "Bhatti Soya Roll",
        category: "kathi-veg",
        price: 220,
        isVeg: true,
        description: "Charcoal smoked bhatti soya chunks in Kathi wrap.",
        popular: false
    },
    {
        id: "kat-v-6",
        name: "Sharabi Chaap Roll",
        category: "kathi-veg",
        price: 240,
        isVeg: true,
        description: "Spicy intoxicated flavor soya chaap Kathi roll.",
        popular: false
    },
    {
        id: "kat-v-7",
        name: "Mushroom Tikka Roll",
        category: "kathi-veg",
        price: 220,
        isVeg: true,
        description: "Grilled juicy button mushrooms stuffed with spices in Kathi roll.",
        popular: false
    },
    {
        id: "kat-v-8",
        name: "Paneer Makhni Roll",
        category: "kathi-veg",
        price: 250,
        isVeg: true,
        description: "Velvety butter gravy cottage cheese roll.",
        popular: false
    },
    {
        id: "kat-v-9",
        name: "Bhatti Paneer Roll",
        category: "kathi-veg",
        price: 250,
        isVeg: true,
        description: "Bhatti spiced paneer tikka Kathi roll.",
        popular: false
    },
    {
        id: "kat-v-10",
        name: "Sharabi Paneer Roll",
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
        category: "kathi-nonveg",
        price: 100,
        isVeg: false,
        description: "Single egg coated flaky paratha with sliced onions and lime juice.",
        popular: false
    },
    {
        id: "kat-nv-2",
        name: "Double Egg Roll",
        category: "kathi-nonveg",
        price: 120,
        isVeg: false,
        description: "Double egg layer paratha roll with tangy Delhi chat masala.",
        popular: false
    },
    {
        id: "kat-nv-3",
        name: "Classic Chicken Roll",
        category: "kathi-nonveg",
        price: 200,
        isVeg: false,
        description: "Traditional Kolkata style egg-layered roll packed with spiced chicken.",
        popular: false
    },
    {
        id: "kat-nv-4",
        name: "Chicken Tikka Roll",
        category: "kathi-nonveg",
        price: 220,
        isVeg: false,
        description: "Smoky tandoori chicken tikka rolled in lacha paratha.",
        popular: false
    },
    {
        id: "kat-nv-5",
        name: "Malai Tikka Roll",
        category: "kathi-nonveg",
        price: 230,
        isVeg: false,
        description: "Mouth-watering cashew malai chicken tikka roll.",
        popular: false
    },
    {
        id: "kat-nv-6",
        name: "Bhatti Chicken Roll",
        category: "kathi-nonveg",
        price: 230,
        isVeg: false,
        description: "Intense bhatti roasted chicken shreds in crispy roll.",
        popular: false
    },
    {
        id: "kat-nv-7",
        name: "Butter Chicken Roll",
        category: "kathi-nonveg",
        price: 250,
        isVeg: false,
        description: "Creamy butter chicken gravy shredded inside a hot flaky roll.",
        popular: false
    },
    {
        id: "kat-nv-8",
        name: "Sharabi Chicken Roll",
        category: "kathi-nonveg",
        price: 250,
        isVeg: false,
        description: "Spiced up cocktail gravy chicken inside crispy paratha.",
        popular: false
    },
    {
        id: "kat-nv-9",
        name: "Crispy Chicken Roll",
        category: "kathi-nonveg",
        price: 250,
        isVeg: false,
        description: "Deep fried crunch chicken tenders loaded in Kathi wrap.",
        popular: false
    },
    {
        id: "kat-nv-10",
        name: "Chicken Seekh Roll",
        category: "kathi-nonveg",
        price: 200,
        isVeg: false,
        description: "Charcoal seekh kabab sliced inside hot Kathi roll.",
        popular: false
    },
    {
        id: "kat-nv-11",
        name: "Flavoured Seekh Roll",
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
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 60,
                    full: 100
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 70,
                    full: 120
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 80,
                    full: 130
                },
                isVeg: false
            }
        ],
        basePrice: 60,
        description: "Traditional authentic steamed dumplings served with red hot sauce and garlic mayo.",
        popular: false
    },
    {
        id: "mom-2",
        name: "Fried Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 80,
                    full: 130
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 90,
                    full: 140
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 100,
                    full: 160
                },
                isVeg: false
            }
        ],
        basePrice: 80,
        description: "Golden crispy fried momos served piping hot.",
        popular: false
    },
    {
        id: "mom-3",
        name: "Pan Fried Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 90,
                    full: 150
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 100,
                    full: 180
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 110,
                    full: 200
                },
                isVeg: false
            }
        ],
        basePrice: 90,
        description: "Wok-tossed pan-fried dumplings with spicy chili glaze.",
        popular: false
    },
    {
        id: "mom-4",
        name: "Kurkure Momos",
        category: "momos",
        isVeg: null,
        image: "/images/momos.png",
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 90,
                    full: 170
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 110,
                    full: 200
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 120,
                    full: 220
                },
                isVeg: false
            }
        ],
        basePrice: 90,
        description: "Super crunchy outer coating coated with spiced crumbs and deep fried.",
        popular: false
    },
    {
        id: "mom-5",
        name: "Tandoori Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 110,
                    full: 200
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 120,
                    full: 220
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 130,
                    full: 240
                },
                isVeg: false
            }
        ],
        basePrice: 110,
        description: "Charcoal oven grilled momos tossed in tandoori masala and lemon butter.",
        popular: false
    },
    {
        id: "mom-6",
        name: "Peri Peri Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 120,
                    full: 220
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 130,
                    full: 230
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 140,
                    full: 240
                },
                isVeg: false
            }
        ],
        basePrice: 120,
        description: "Tossed in fiery African peri peri spice blend.",
        popular: false
    },
    {
        id: "mom-7",
        name: "Afghani Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 110,
                    full: 210
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 120,
                    full: 240
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 140,
                    full: 240
                },
                isVeg: false
            }
        ],
        basePrice: 110,
        description: "Rich cream, butter and cashew paste coated delicate grilled momos.",
        popular: false
    },
    {
        id: "mom-8",
        name: "Spl Bhatti Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 120,
                    full: 220
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 140,
                    full: 250
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 150,
                    full: 250
                },
                isVeg: false
            }
        ],
        basePrice: 120,
        description: "Robust Bhatti smoked momos with fiery black pepper undertones.",
        popular: false
    },
    {
        id: "mom-9",
        name: "Sharabi Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 130,
                    full: 250
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 140,
                    full: 240
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 150,
                    full: 250
                },
                isVeg: false
            }
        ],
        basePrice: 130,
        description: "Chef special intoxicating spicy tangy gravy coated momos.",
        popular: false
    },
    {
        id: "mom-10",
        name: "Hot Garlic Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 140,
                    full: 240
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 150,
                    full: 250
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 150,
                    full: 250
                },
                isVeg: false
            }
        ],
        basePrice: 140,
        description: "Sizzling garlic chili gravy smothered momos.",
        popular: false
    },
    {
        id: "mom-11",
        name: "Schezwan Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 140,
                    full: 240
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 150,
                    full: 250
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 150,
                    full: 250
                },
                isVeg: false
            }
        ],
        basePrice: 140,
        description: "Spicy Sichuan pepper wok tossed momos.",
        popular: false
    },
    {
        id: "mom-12",
        name: "Honey Chilly Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 140,
                    full: 240
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 150,
                    full: 250
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 150,
                    full: 250
                },
                isVeg: false
            }
        ],
        basePrice: 140,
        description: "Sweet honey and spicy red chili glaze tossed momos.",
        popular: false
    },
    {
        id: "mom-13",
        name: "Spl Pizza Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 150,
                    full: 250
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 150,
                    full: 250
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 140,
                    full: 240
                },
                isVeg: false
            }
        ],
        basePrice: 140,
        description: "Cheesy baked pizza sauced momos with Italian herbs.",
        popular: false
    },
    {
        id: "mom-14",
        name: "Butter Makhni Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 150,
                    full: 260
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 150,
                    full: 270
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 150,
                    full: 270
                },
                isVeg: false
            }
        ],
        basePrice: 150,
        description: "Our signature Butter Makhni gravy poured over juicy momos.",
        popular: false
    },
    {
        id: "mom-15",
        name: "Rogan Josh Gravy Momos",
        category: "momos",
        isVeg: null,
        variants: [
            {
                name: "Veg (Half / Full)",
                prices: {
                    half: 150,
                    full: 270
                },
                isVeg: true
            },
            {
                name: "Paneer (Half / Full)",
                prices: {
                    half: 150,
                    full: 270
                },
                isVeg: true
            },
            {
                name: "Chicken (Half / Full)",
                prices: {
                    half: 150,
                    full: 270
                },
                isVeg: false
            }
        ],
        basePrice: 150,
        description: "Kashmiri spices infused aromatic gravy momos.",
        popular: false
    },
    // 8. MWS SPECIAL DUMPLINGS
    {
        id: "dmp-1",
        name: "Midnight Mushroom Dumpling",
        category: "mws-dumplings",
        price: 250,
        isVeg: true,
        description: "Exotic shiitake & button mushroom stuffed delicate midnight grey dumplings.",
        popular: false
    },
    {
        id: "dmp-2",
        name: "Chicken Royal Dumplings",
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
        category: "tandoori-veg",
        price: 220,
        isVeg: true,
        description: "Classic red tandoori marinated soya chaap grilled over live coals.",
        popular: false
    },
    {
        id: "tan-v-2",
        name: "Afghani Chaap",
        category: "tandoori-veg",
        price: 230,
        isVeg: true,
        description: "Mild cashew cream marinated juicy soya chaap.",
        popular: false
    },
    {
        id: "tan-v-3",
        name: "Spl Bhatti Chaap",
        category: "tandoori-veg",
        price: 240,
        isVeg: true,
        description: "Delhi bhatti style smoky black pepper chaap.",
        popular: false
    },
    {
        id: "tan-v-4",
        name: "Sharabi Chaap",
        category: "tandoori-veg",
        price: 250,
        isVeg: true,
        description: "Flamed in house-special spiced marinade.",
        popular: false
    },
    {
        id: "tan-v-5",
        name: "Tandoori Paneer Tikka",
        category: "tandoori-veg",
        price: 300,
        isVeg: true,
        description: "Charcoal roasted cottage cheese blocks with onions & bell peppers.",
        popular: false
    },
    {
        id: "tan-v-6",
        name: "Spl Bhatti Paneer Tikka",
        category: "tandoori-veg",
        price: 350,
        isVeg: true,
        description: "Special dark roast bhatti masala paneer tikka.",
        popular: false
    },
    {
        id: "tan-v-7",
        name: "Sharabi Paneer Tikka",
        category: "tandoori-veg",
        price: 400,
        isVeg: true,
        description: "Intense spice flame grilled premium paneer blocks.",
        popular: false
    },
    {
        id: "tan-v-8",
        name: "Mushroom Tikka",
        category: "tandoori-veg",
        price: 220,
        isVeg: true,
        description: "Charcoal grilled fresh mushrooms marinated in yoghurt & spices.",
        popular: false
    },
    {
        id: "tan-v-9",
        name: "Bhatti Mushroom Tikka",
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
        category: "tandoori-nonveg",
        price: 380,
        isVeg: false,
        description: "Boneless tender chicken pieces charred in traditional clay oven.",
        popular: false
    },
    {
        id: "tan-nv-2",
        name: "Afghani Chicken Tikka",
        category: "tandoori-nonveg",
        price: 400,
        isVeg: false,
        description: "Rich cream and aromatic cardamom spiced chicken tikka.",
        popular: false
    },
    {
        id: "tan-nv-3",
        name: "Bhatti Tikka",
        category: "tandoori-nonveg",
        price: 400,
        isVeg: false,
        description: "Old Delhi bhatti style charcoal roasted spicy chicken tikka.",
        popular: false
    },
    {
        id: "tan-nv-4",
        name: "Lehnsuni Tikka",
        category: "tandoori-nonveg",
        price: 420,
        isVeg: false,
        description: "Garlic infused rich tandoori roasted chicken tikka.",
        popular: false
    },
    {
        id: "tan-nv-5",
        name: "Kali Mirch Tikka",
        category: "tandoori-nonveg",
        price: 430,
        isVeg: false,
        description: "Crushed black pepper spiced succulent chicken tikka.",
        popular: false
    },
    {
        id: "tan-nv-6",
        name: "Sharabi Tikka",
        category: "tandoori-nonveg",
        price: 420,
        isVeg: false,
        description: "Fiery cocktail sauce glazed charcoal chicken tikka.",
        popular: false
    },
    {
        id: "tan-nv-7",
        name: "Peri Peri Tikka",
        category: "tandoori-nonveg",
        price: 420,
        isVeg: false,
        description: "African bird eye chili spiced tandoori tikka.",
        popular: false
    },
    {
        id: "tan-nv-8",
        name: "Banjara Tikka",
        category: "tandoori-nonveg",
        price: 450,
        isVeg: false,
        description: "Rustic green herb and crushed spice marinated chicken tikka.",
        popular: false
    },
    {
        id: "tan-nv-9",
        name: "Chicken Kabab",
        category: "tandoori-nonveg",
        price: 200,
        isVeg: false,
        description: "Classic spiced minced chicken seekh grilled on skewer.",
        popular: false
    },
    {
        id: "tan-nv-10",
        name: "Spl Handmade Kabab (Must Try)",
        category: "tandoori-nonveg",
        price: 250,
        isVeg: false,
        description: "MWS signature chef crafted melt-in-mouth chicken kababs.",
        popular: false
    },
    {
        id: "tan-nv-11",
        name: "Tandoori Chicken (With Bone)",
        category: "tandoori-nonveg",
        price: 250,
        isVeg: false,
        description: "Whole chicken pieces marinated in red yoghurt spice and clay-grilled.",
        popular: false
    },
    {
        id: "tan-nv-12",
        name: "Afghani Chicken (With Bone)",
        category: "tandoori-nonveg",
        price: 280,
        isVeg: false,
        description: "Bone-in chicken slow roasted in cream and mild white spices.",
        popular: false
    },
    {
        id: "tan-nv-13",
        name: "Bhatti Chicken (With Bone)",
        category: "tandoori-nonveg",
        price: 280,
        isVeg: false,
        description: "Signature Delhi Bhatti style bone-in grilled chicken.",
        popular: false
    },
    {
        id: "tan-nv-14",
        name: "Kali Mirch Chicken (With Bone)",
        category: "tandoori-nonveg",
        price: 300,
        isVeg: false,
        description: "Black pepper marinated juicy bone-in tandoori chicken.",
        popular: false
    },
    {
        id: "tan-nv-15",
        name: "Spl Sharabi Chicken (With Bone)",
        category: "tandoori-nonveg",
        price: 320,
        isVeg: false,
        description: "Flamed intoxicated glaze over bone-in roasted chicken.",
        popular: false
    },
    {
        id: "tan-nv-16",
        name: "Tandoori Tangri",
        category: "tandoori-nonveg",
        price: 300,
        isVeg: false,
        description: "Juicy chicken drumsticks roasted in clay oven with spicy tandoori masala.",
        popular: false
    },
    {
        id: "tan-nv-17",
        name: "Afghani Tangri",
        category: "tandoori-nonveg",
        price: 330,
        isVeg: false,
        description: "Creamy cashew paste glazed chicken drumsticks.",
        popular: false
    },
    {
        id: "tan-nv-18",
        name: "Sharabi Tangri",
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
        category: "chicken-wings",
        price: 350,
        isVeg: false,
        description: "Charcoal grilled chicken wings tossed in tandoori spices & butter.",
        popular: false
    },
    {
        id: "wng-2",
        name: "Tandoori Malai Wings",
        category: "chicken-wings",
        price: 380,
        isVeg: false,
        description: "Velvety malai marinated juicy chicken wings.",
        popular: false
    },
    {
        id: "wng-3",
        name: "Afghani Wings",
        category: "chicken-wings",
        price: 380,
        isVeg: false,
        description: "Mild creamy white Afghani sauce glazed wings.",
        popular: false
    },
    {
        id: "wng-4",
        name: "Bhatti Wings",
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
        category: "chinese-veg",
        price: 200,
        isVeg: true,
        description: "Crispy fried potato fingers tossed in sweet chili honey glaze & sesame.",
        popular: false
    },
    {
        id: "chn-v-2",
        name: "Special Manchurian",
        category: "chinese-veg",
        price: 250,
        isVeg: true,
        description: "Veg dumplings tossed in dark ginger soy sauce.",
        popular: false
    },
    {
        id: "chn-v-3",
        name: "Honey Manchurian",
        category: "chinese-veg",
        price: 280,
        isVeg: true,
        description: "Sweet and savory honey soy tossed Manchurian balls.",
        popular: false
    },
    {
        id: "chn-v-4",
        name: "Chilly Mushroom",
        category: "chinese-veg",
        price: 270,
        isVeg: true,
        description: "Crispy button mushrooms sautéed with bell peppers and chili soy sauce.",
        popular: false
    },
    {
        id: "chn-v-5",
        name: "Cheese Chilly",
        category: "chinese-veg",
        price: 290,
        isVeg: true,
        description: "Cubes of cottage cheese tossed in tangy garlic chili gravy.",
        popular: false
    },
    {
        id: "chn-v-6",
        name: "Paneer 65",
        category: "chinese-veg",
        price: 300,
        isVeg: true,
        description: "South-fusion fiery fried paneer bites with curry leaves.",
        popular: false
    },
    {
        id: "chn-v-7",
        name: "Veg Spring Roll",
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
        category: "chinese-nonveg",
        price: 350,
        isVeg: false,
        description: "Classic Indo-Chinese diced chicken tossed with green chillies & capsicum.",
        popular: false
    },
    {
        id: "chn-nv-2",
        name: "Hot Garlic Chicken",
        category: "chinese-nonveg",
        price: 350,
        isVeg: false,
        description: "Boneless chicken drenched in fiery hot garlic sauce.",
        popular: false
    },
    {
        id: "chn-nv-3",
        name: "Schezwan Chicken",
        category: "chinese-nonveg",
        price: 380,
        isVeg: false,
        description: "Sichuan red pepper sauce sautéed crispy chicken.",
        popular: false
    },
    {
        id: "chn-nv-4",
        name: "Lemon Chicken",
        category: "chinese-nonveg",
        price: 380,
        isVeg: false,
        description: "Tangy refreshing lemon glaze over fried chicken pieces.",
        popular: false
    },
    {
        id: "chn-nv-5",
        name: "Chicken Manchurian",
        category: "chinese-nonveg",
        price: 300,
        isVeg: false,
        description: "Minced chicken balls cooked in rich soy garlic gravy.",
        popular: false
    },
    {
        id: "chn-nv-6",
        name: "Chicken Popcorn",
        category: "chinese-nonveg",
        price: 230,
        isVeg: false,
        description: "Bite-sized crispy fried chicken nuggets with peri peri dip.",
        popular: false
    },
    {
        id: "chn-nv-7",
        name: "Chicken Lollypop",
        category: "chinese-nonveg",
        price: 300,
        isVeg: false,
        description: "Frenched chicken winglets marinated in fiery red spices and fried.",
        popular: false
    },
    {
        id: "chn-nv-8",
        name: "Drums of Heaven",
        category: "chinese-nonveg",
        price: 350,
        isVeg: false,
        description: "Chicken lollypops tossed in spicy sweet Schezwan garlic sauce.",
        popular: false
    },
    {
        id: "chn-nv-9",
        name: "Chicken Spring Roll",
        category: "chinese-nonveg",
        price: 250,
        isVeg: false,
        description: "Crispy fried rolls filled with spiced minced chicken filling.",
        popular: false
    },
    {
        id: "chn-nv-10",
        name: "Flavoured Chicken Sausages",
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
        category: "crispy-chicken",
        price: 220,
        isVeg: false,
        description: "Double battered extra crunchy fried chicken wings.",
        popular: false
    },
    {
        id: "crp-2",
        name: "MWS Juicy Chicken",
        category: "crispy-chicken",
        price: 350,
        isVeg: false,
        description: "Succulent bone-in fried chicken with secret spice rub.",
        popular: false
    },
    {
        id: "crp-3",
        name: "MWS Crispy Boneless",
        category: "crispy-chicken",
        price: 400,
        isVeg: false,
        description: "100% tender boneless chicken strips fried to gold perfection.",
        popular: false
    },
    {
        id: "crp-4",
        name: "MWS Chicken Bang Bang",
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
        category: "rice-bowl",
        price: 200,
        isVeg: true,
        description: "Aromatic basmati rice tossed with burnt garlic, green chilies and spring onions.",
        popular: false
    },
    {
        id: "rc-2",
        name: "Chef Special Fried Rice",
        category: "rice-bowl",
        price: 220,
        isVeg: true,
        description: "Loaded house special wok-tossed fried rice.",
        popular: false
    },
    {
        id: "rc-3",
        name: "Golden Egg Chicken Rice",
        category: "rice-bowl",
        price: 300,
        isVeg: false,
        description: "Golden fried egg ribbons and shredded spiced chicken over fragrant rice.",
        popular: false
    },
    {
        id: "rc-4",
        name: "MWS Special Rice Bowl",
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
        category: "noodles",
        price: 180,
        isVeg: true,
        description: "Desi chowmein wok tossed with crunchy julienne veggies.",
        popular: false
    },
    {
        id: "ndl-2",
        name: "Chilly Garlic Noodles",
        category: "noodles",
        price: 200,
        isVeg: true,
        description: "Fiery red chili and toasted garlic noodles.",
        popular: false
    },
    {
        id: "ndl-3",
        name: "Schezwan Noodles",
        category: "noodles",
        price: 220,
        isVeg: true,
        description: "Spicy Sichuan pepper spicy fried noodles.",
        popular: false
    },
    {
        id: "ndl-4",
        name: "Spl Dan Dan Noodles",
        category: "noodles",
        price: 240,
        isVeg: true,
        description: "Rich sesame chili oil infused noodles with crushed peanuts.",
        popular: false
    },
    {
        id: "ndl-5",
        name: "MWS Special Noodles",
        category: "noodles",
        price: 230,
        isVeg: true,
        description: "House special wok-fried secret sauce noodles.",
        popular: false
    },
    {
        id: "ndl-6",
        name: "Add Chicken and Egg",
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
        category: "pasta",
        price: 240,
        isVeg: true,
        description: "Creamy Alfredo sauce penne tossed with garlic butter and herbs.",
        popular: false
    },
    {
        id: "pst-2",
        name: "Red Sauce Pasta",
        category: "pasta",
        price: 240,
        isVeg: true,
        description: "Tangy tomato basil Arrabbiata sauce pasta with chili flakes.",
        popular: false
    },
    {
        id: "pst-3",
        name: "Mix Sauce Pasta",
        category: "pasta",
        price: 250,
        isVeg: true,
        description: "Pink sauce harmony of rich cream and tangy tomato sauce.",
        popular: false
    },
    {
        id: "pst-4",
        name: "Cheese Pasta",
        category: "pasta",
        price: 280,
        isVeg: true,
        description: "Loaded with melted mozzarella and cheddar cheese sauce.",
        popular: false
    },
    {
        id: "pst-5",
        name: "Mac N Cheese",
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
        category: "naan-sliders",
        price: 250,
        isVeg: true,
        description: "Soft mini naan bun stuffed with creamy royal shahi paneer.",
        popular: false
    },
    {
        id: "sld-2",
        name: "Kadai Paneer Slider",
        category: "naan-sliders",
        price: 250,
        isVeg: true,
        description: "Spiced wok kadai paneer encased in buttery warm mini naan.",
        popular: false
    },
    {
        id: "sld-3",
        name: "Butter Chicken Slider",
        category: "naan-sliders",
        price: 280,
        isVeg: false,
        description: "Delhi's iconic butter chicken inside soft garlic naan slider buns.",
        popular: false
    },
    {
        id: "sld-4",
        name: "Kadai Chicken Slider",
        category: "naan-sliders",
        price: 280,
        isVeg: false,
        description: "Robust capsicum and onion chicken kadai in naan slider.",
        popular: false
    },
    {
        id: "sld-5",
        name: "Rara Chicken Slider",
        category: "naan-sliders",
        price: 280,
        isVeg: false,
        description: "Keema-gravy infused chicken slider.",
        popular: false
    },
    {
        id: "sld-6",
        name: "Kali Mirch Chicken Slider",
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
        category: "fries",
        price: 150,
        isVeg: true,
        description: "Crispy french fries dusted with tangy zesty Peri Peri seasoning.",
        popular: false
    },
    {
        id: "fr-2",
        name: "Cheese Loaded Fries",
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
        category: "sandwich",
        price: 180,
        isVeg: true,
        description: "Sautéed wild mushrooms and melted cheese inside toasted artisan bread.",
        popular: false
    },
    {
        id: "snd-2",
        name: "Cheesy Paneer Sandwich",
        category: "sandwich",
        price: 200,
        isVeg: true,
        description: "Spiced paneer bhurji and stretchy mozzarella grill sandwich.",
        popular: false
    },
    {
        id: "snd-3",
        name: "Chicken & Cheese Sandwich",
        category: "sandwich",
        price: 220,
        isVeg: false,
        description: "Shredded spiced chicken with melted cheddar in crispy toasted bread.",
        popular: false
    },
    {
        id: "snd-4",
        name: "Peri Peri Chicken Sandwich",
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
        category: "wraps",
        price: 200,
        isVeg: true,
        description: "Garlic butter sautéed mushrooms with oozing cheese sauce wrap.",
        popular: false
    },
    {
        id: "wrp-2",
        name: "The Melted Paneer Wrap",
        category: "wraps",
        price: 220,
        isVeg: true,
        description: "Warm tortilla stuffed with grilled paneer and double cheese dip.",
        popular: false
    },
    {
        id: "wrp-3",
        name: "The Melted Chicken Wrap",
        category: "wraps",
        price: 250,
        isVeg: false,
        description: "Grilled spiced chicken soaked in warm melted cheese wrap.",
        popular: false
    },
    {
        id: "wrp-4",
        name: "Peri Peri Chicken Wrap",
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
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 170
            },
            {
                name: "Full Portion",
                price: 280
            }
        ],
        basePrice: 170,
        description: "Slow-cooked black lentils overnight with white butter & cream.",
        popular: false
    },
    {
        id: "mc-v-2",
        name: "Dal Double Tadka",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 170
            },
            {
                name: "Full Portion",
                price: 280
            }
        ],
        basePrice: 170,
        description: "Yellow arhar dal tempered twice with garlic, cumin & desi ghee.",
        popular: false
    },
    {
        id: "mc-v-3",
        name: "Shahi Paneer",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 220
            },
            {
                name: "Full Portion",
                price: 350
            }
        ],
        basePrice: 220,
        description: "Royal cottage cheese cubes in rich almond-cashew tomato gravy.",
        popular: false
    },
    {
        id: "mc-v-4",
        name: "Paneer Butter Masala",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 240
            },
            {
                name: "Full Portion",
                price: 360
            }
        ],
        basePrice: 240,
        description: "Velvety spiced tomato gravy enriched with fresh butter.",
        popular: false
    },
    {
        id: "mc-v-5",
        name: "Kadhai Paneer",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 240
            },
            {
                name: "Full Portion",
                price: 360
            }
        ],
        basePrice: 240,
        description: "Wok-cooked cottage cheese with coarsely ground coriander and capsicum.",
        popular: false
    },
    {
        id: "mc-v-6",
        name: "Kali Mirch Paneer",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 240
            },
            {
                name: "Full Portion",
                price: 360
            }
        ],
        basePrice: 240,
        description: "Rich white gravy seasoned with cracked black pepper.",
        popular: false
    },
    {
        id: "mc-v-7",
        name: "Rara Paneer",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 250
            },
            {
                name: "Full Portion",
                price: 400
            }
        ],
        basePrice: 250,
        description: "Minced paneer gravy combined with cottage cheese cubes.",
        popular: false
    },
    {
        id: "mc-v-8",
        name: "Spl Rogan Josh Paneer",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 250
            },
            {
                name: "Full Portion",
                price: 400
            }
        ],
        basePrice: 250,
        description: "Kashmiri red chilly infused gravy with cottage cheese.",
        popular: false
    },
    {
        id: "mc-v-9",
        name: "Tawa Masala Chaap",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 180
            },
            {
                name: "Full Portion",
                price: 320
            }
        ],
        basePrice: 180,
        description: "Street-style griddle fried spicy chaap masala gravy.",
        popular: false
    },
    {
        id: "mc-v-10",
        name: "Kadhai Chaap",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 180
            },
            {
                name: "Full Portion",
                price: 320
            }
        ],
        basePrice: 180,
        description: "Spiced soya chaap cooked in traditional Kadhai gravy.",
        popular: false
    },
    {
        id: "mc-v-11",
        name: "Kali Mirch Chaap",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 200
            },
            {
                name: "Full Portion",
                price: 350
            }
        ],
        basePrice: 200,
        description: "Creamy black pepper gravy soya chaap.",
        popular: false
    },
    {
        id: "mc-v-12",
        name: "Makhni Chaap",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 200
            },
            {
                name: "Full Portion",
                price: 350
            }
        ],
        basePrice: 200,
        description: "Rich buttery tomato gravy with tender soya chaap.",
        popular: false
    },
    {
        id: "mc-v-13",
        name: "Rara Gravy Chaap",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 220
            },
            {
                name: "Full Portion",
                price: 370
            }
        ],
        basePrice: 220,
        description: "Thick coarse spiced gravy with soft soya chaap.",
        popular: false
    },
    {
        id: "mc-v-14",
        name: "Spl Veg Keema Maeat",
        category: "main-veg",
        isVeg: true,
        variants: [
            {
                name: "Half Portion",
                price: 250
            },
            {
                name: "Full Portion",
                price: 400
            }
        ],
        basePrice: 250,
        description: "Plant-based minced keema cooked in Delhi spices.",
        popular: false
    },
    // 23. MAIN COURSE (NON-VEG)
    {
        id: "mc-nv-1",
        name: "Chicken Curry",
        category: "main-nonveg",
        isVeg: false,
        variants: [
            {
                name: "Half Portion",
                price: 400
            },
            {
                name: "Full Portion",
                price: 780
            }
        ],
        basePrice: 400,
        description: "Homestyle aromatic onion-tomato home cooked style chicken curry.",
        popular: false
    },
    {
        id: "mc-nv-2",
        name: "Delhi Spl Butter Chicken",
        category: "main-nonveg",
        isVeg: false,
        image: "/images/butter_chicken.png",
        variants: [
            {
                name: "Half Portion",
                price: 440
            },
            {
                name: "Full Portion",
                price: 800
            }
        ],
        basePrice: 440,
        description: "Iconic Delhi style charcoal tandoori chicken simmered in velvet butter gravy.",
        popular: false
    },
    {
        id: "mc-nv-3",
        name: "Kadhai Chicken",
        category: "main-nonveg",
        isVeg: false,
        variants: [
            {
                name: "Half Portion",
                price: 440
            },
            {
                name: "Full Portion",
                price: 800
            }
        ],
        basePrice: 440,
        description: "Wok-cooked chicken with whole coriander seeds, onions and capsicum.",
        popular: false
    },
    {
        id: "mc-nv-4",
        name: "Matki Chicken",
        category: "main-nonveg",
        isVeg: false,
        variants: [
            {
                name: "Half Portion",
                price: 500
            },
            {
                name: "Full Portion",
                price: 800
            }
        ],
        basePrice: 500,
        description: "Earthen pot dum-cooked slow simmered spiced chicken gravy.",
        popular: false
    },
    {
        id: "mc-nv-5",
        name: "Kali Mirch Chicken",
        category: "main-nonveg",
        isVeg: false,
        variants: [
            {
                name: "Half Portion",
                price: 440
            },
            {
                name: "Full Portion",
                price: 800
            }
        ],
        basePrice: 440,
        description: "Crushed black pepper & cashew cream rich white gravy chicken.",
        popular: false
    },
    {
        id: "mc-nv-6",
        name: "Rara Chicken",
        category: "main-nonveg",
        isVeg: false,
        variants: [
            {
                name: "Half Portion",
                price: 450
            },
            {
                name: "Full Portion",
                price: 800
            }
        ],
        basePrice: 450,
        description: "Chicken pieces simmered in rich spiced chicken keema gravy.",
        popular: false
    },
    {
        id: "mc-nv-7",
        name: "Spl Rogan Josh Chicken",
        category: "main-nonveg",
        isVeg: false,
        variants: [
            {
                name: "Half Portion",
                price: 450
            },
            {
                name: "Full Portion",
                price: 800
            }
        ],
        basePrice: 450,
        description: "Aromatic Kashmiri chilli red gravy chicken curry.",
        popular: false
    },
    {
        id: "mc-nv-8",
        name: "Cream Chicken",
        category: "main-nonveg",
        isVeg: false,
        variants: [
            {
                name: "Half Portion",
                price: 450
            },
            {
                name: "Full Portion",
                price: 800
            }
        ],
        basePrice: 450,
        description: "Rich malai cream gravy with mild green cardamom notes.",
        popular: false
    },
    // 24. MWS SPECIALS
    {
        id: "spc-1",
        name: "Veg Keema Naan with Gravy",
        category: "mws-specials",
        price: 280,
        isVeg: true,
        description: "Stuffed soya keema naan served with rich spicy gravy.",
        popular: false
    },
    {
        id: "spc-2",
        name: "Veg Keema Ricebowl",
        category: "mws-specials",
        price: 250,
        isVeg: true,
        description: "Flavoured basmati rice topped with spiced soya keema gravy.",
        popular: false
    },
    {
        id: "spc-3",
        name: "Chicken Naan with Gravy",
        category: "mws-specials",
        price: 300,
        isVeg: false,
        description: "Clay-oven baked naan stuffed with minced chicken, served with butter gravy.",
        popular: false
    },
    {
        id: "spc-4",
        name: "Chicken Keema Ricebowl",
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
        category: "breads",
        price: 20,
        isVeg: true,
        description: "Whole wheat iron griddle flatbread.",
        popular: false
    },
    {
        id: "brd-2",
        name: "Tandoori Roti",
        category: "breads",
        price: 25,
        isVeg: true,
        description: "Clay-oven baked crisp wheat roti.",
        popular: false
    },
    {
        id: "brd-3",
        name: "Butter Roti",
        category: "breads",
        price: 25,
        isVeg: true,
        description: "Freshly baked tandoori roti brushed with fresh butter.",
        popular: false
    },
    {
        id: "brd-4",
        name: "Cream Roti",
        category: "breads",
        price: 30,
        isVeg: true,
        description: "Soft tandoori roti brushed with rich cream.",
        popular: false
    },
    {
        id: "brd-5",
        name: "Missi Roti",
        category: "breads",
        price: 40,
        isVeg: true,
        description: "Spiced gram flour flatbread with onion & coriander.",
        popular: false
    },
    {
        id: "brd-6",
        name: "Garlic Roti",
        category: "breads",
        price: 40,
        isVeg: true,
        description: "Toasted minced garlic flatbread.",
        popular: false
    },
    {
        id: "brd-7",
        name: "Butter Naan",
        category: "breads",
        price: 60,
        isVeg: true,
        description: "Traditional soft refined flour naan brushed with butter.",
        popular: false
    },
    {
        id: "brd-8",
        name: "Garlic Naan",
        category: "breads",
        price: 70,
        isVeg: true,
        description: "Toasted garlic & coriander sprinkled soft tandoori naan.",
        popular: false
    },
    {
        id: "brd-9",
        name: "Laccha Parantha",
        category: "breads",
        price: 50,
        isVeg: true,
        description: "Multi-layered flaky crisp tandoori paratha.",
        popular: false
    },
    {
        id: "brd-10",
        name: "Lal Mirch Parantha",
        category: "breads",
        price: 60,
        isVeg: true,
        description: "Layered paratha seasoned with red chilli flakes.",
        popular: false
    },
    {
        id: "brd-11",
        name: "Hari Mirch Parantha",
        category: "breads",
        price: 60,
        isVeg: true,
        description: "Layered paratha stuffed with spicy green chillies.",
        popular: false
    },
    {
        id: "brd-12",
        name: "Masala Rumali",
        category: "breads",
        price: 35,
        isVeg: true,
        description: "Thin rumali roti dusted with chat masala.",
        popular: false
    },
    {
        id: "brd-13",
        name: "Rumali Roti",
        category: "breads",
        price: 25,
        isVeg: true,
        description: "Paper-thin delicate soft Delhi rumali flatbread.",
        popular: false
    },
    {
        id: "brd-14",
        name: "Kulcha",
        category: "breads",
        price: 30,
        isVeg: true,
        description: "Soft leavened tandoori bread.",
        popular: false
    },
    {
        id: "brd-15",
        name: "Masala Kulcha",
        category: "breads",
        price: 40,
        isVeg: true,
        description: "Spiced potato and herb stuffed golden tandoori kulcha.",
        popular: false
    }
];
}),
"[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
function createClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo-placeholder.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseAnonKey);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerMenuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.mjs [app-ssr] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils-crossed.mjs [app-ssr] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scroll.mjs [app-ssr] (ecmascript) <export default as Scroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$soup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Soup$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/soup.mjs [app-ssr] (ecmascript) <export default as Soup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drumstick$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Drumstick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/drumstick.mjs [app-ssr] (ecmascript) <export default as Drumstick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$salad$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Salad$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/salad.mjs [app-ssr] (ecmascript) <export default as Salad>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sandwich$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sandwich$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sandwich.mjs [app-ssr] (ecmascript) <export default as Sandwich>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.mjs [app-ssr] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.mjs [app-ssr] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menuData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menuData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// Category Icon Helper
const getCategoryIcon = (iconName)=>{
    switch(iconName){
        case 'Flame':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0));
        case 'Sparkles':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 37,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0));
        case 'UtensilsCrossed':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0));
        case 'Utensils':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0));
        case 'Scroll':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0));
        case 'Soup':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$soup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Soup$3e$__["Soup"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0));
        case 'Drumstick':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drumstick$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Drumstick$3e$__["Drumstick"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0));
        case 'Salad':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$salad$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Salad$3e$__["Salad"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 43,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0));
        case 'Sandwich':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sandwich$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sandwich$3e$__["Sandwich"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0));
        case 'Cookie':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 45,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0));
        case 'Crown':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 46,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0));
    }
};
function CustomerMenuPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [dietFilter, setDietFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [itemVariants, setItemVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Checkout Form State
    const [customerName, setCustomerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerPhone, setCustomerPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [orderType, setOrderType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Dine In');
    const [tableNumber, setTableNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToMenu = ()=>{
        menuRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    const handleSelectVariant = (itemId, variantIdx)=>{
        setItemVariants((prev)=>({
                ...prev,
                [itemId]: variantIdx
            }));
    };
    const getItemDetails = (item)=>{
        if (item.variants && item.variants.length > 0) {
            const selectedIdx = itemVariants[item.id] || 0;
            const variant = item.variants[selectedIdx];
            let price = item.basePrice;
            let label = variant.name;
            if (typeof variant.price === 'number') {
                price = variant.price;
            } else if (variant.prices) {
                price = variant.prices.full || variant.prices.half || item.basePrice;
                label = `${variant.name} (₹${variant.prices.half} Half / ₹${variant.prices.full} Full)`;
            }
            const isVeg = variant.isVeg !== undefined ? variant.isVeg : item.isVeg;
            return {
                variantKey: `${item.id}_v${selectedIdx}`,
                variantName: label,
                price,
                isVeg
            };
        }
        return {
            variantKey: item.id,
            variantName: '',
            price: item.price,
            isVeg: item.isVeg
        };
    };
    const addToCart = (item)=>{
        const { variantKey, variantName, price, isVeg } = getItemDetails(item);
        setCart((prev)=>{
            const existing = prev[variantKey];
            const currentQty = existing ? existing.quantity : 0;
            return {
                ...prev,
                [variantKey]: {
                    item,
                    variantName,
                    price,
                    isVeg,
                    quantity: currentQty + 1
                }
            };
        });
    };
    const removeFromCart = (variantKey)=>{
        setCart((prev)=>{
            const existing = prev[variantKey];
            if (!existing) return prev;
            if (existing.quantity <= 1) {
                const next = {
                    ...prev
                };
                delete next[variantKey];
                return next;
            }
            return {
                ...prev,
                [variantKey]: {
                    ...existing,
                    quantity: existing.quantity - 1
                }
            };
        });
    };
    const cartSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let totalItems = 0;
        let totalPrice = 0;
        Object.values(cart).forEach((entry)=>{
            totalItems += entry.quantity;
            totalPrice += entry.price * entry.quantity;
        });
        return {
            totalItems,
            totalPrice
        };
    }, [
        cart
    ]);
    const filteredItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menuData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MENU_ITEMS"].filter((item)=>{
            if (searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase();
                const matchesName = item.name.toLowerCase().includes(query);
                const matchesDesc = item.description?.toLowerCase().includes(query);
                if (!matchesName && !matchesDesc) return false;
            }
            if (selectedCategory === 'popular') {
                if (!item.popular) return false;
            } else if (selectedCategory !== 'all' && item.category !== selectedCategory) {
                return false;
            }
            if (dietFilter === 'veg') {
                if (item.isVeg === false) return false;
            } else if (dietFilter === 'nonveg') {
                if (item.isVeg === true) return false;
            }
            return true;
        });
    }, [
        searchQuery,
        selectedCategory,
        dietFilter
    ]);
    const groupedSections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menuData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORIES"].forEach((cat)=>{
            if (cat.id !== 'all' && cat.id !== 'popular') {
                map[cat.id] = [];
            }
        });
        filteredItems.forEach((item)=>{
            if (map[item.category]) {
                map[item.category].push(item);
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menuData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORIES"].filter((cat)=>cat.id !== 'all' && cat.id !== 'popular' && map[cat.id] && map[cat.id].length > 0).map((cat)=>({
                category: cat,
                items: map[cat.id]
            }));
    }, [
        filteredItems
    ]);
    // Place order into Supabase
    const handlePlaceOrder = async (e)=>{
        e.preventDefault();
        setFormError('');
        if (!customerName.trim()) {
            setFormError('Please enter your name.');
            return;
        }
        if (!customerPhone.trim()) {
            setFormError('Please enter your phone number.');
            return;
        }
        if (orderType === 'Dine In' && !tableNumber.trim()) {
            setFormError('Please enter your Table Number for Dine In.');
            return;
        }
        setIsSubmitting(true);
        try {
            const generatedOrderNumber = `#MWS-${Math.floor(1000 + Math.random() * 9000)}`;
            // 1. Insert into orders table in Supabase
            const { data: orderData, error: orderError } = await supabase.from('orders').insert({
                order_number: generatedOrderNumber,
                customer_name: customerName,
                customer_phone: customerPhone,
                order_type: orderType,
                table_number: orderType === 'Dine In' ? tableNumber : null,
                notes: notes.trim() ? notes : null,
                total: cartSummary.totalPrice,
                status: 'Pending'
            }).select().single();
            const orderId = orderData?.id || `local-${Date.now()}`;
            // 2. Insert into order_items table in Supabase
            const orderItemsToInsert = Object.values(cart).map((entry)=>({
                    order_id: orderId,
                    menu_item_id: entry.item.id,
                    item_name: entry.item.name,
                    quantity: entry.quantity,
                    price: entry.price,
                    variant_name: entry.variantName || null
                }));
            if (orderData?.id) {
                await supabase.from('order_items').insert(orderItemsToInsert);
            }
            // Clear Cart & Redirect to Order Confirmation Success page
            setCart({});
            setIsCartOpen(false);
            router.push(`/order-success/${orderId}?num=${encodeURIComponent(generatedOrderNumber)}&name=${encodeURIComponent(customerName)}&total=${cartSummary.totalPrice}`);
        } catch (err) {
            console.error('Order Error:', err);
            setFormError('There was an issue saving your order. Please try again.');
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "app-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-section",
                    style: {
                        backgroundImage: `url('/images/hero_shawarma.png')`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-overlay"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge-tag",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        " Delhi's #1 Street-Food Destination"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "hero-title",
                                    children: [
                                        "Momo ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Weds"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 292,
                                            columnNumber: 20
                                        }, this),
                                        " Shawarma"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "hero-tagline",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menuData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESTAURANT_INFO"].tagline
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-info-pills",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info-pill",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menuData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESTAURANT_INFO"].timing
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info-pill",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menuData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESTAURANT_INFO"].phones.join(' / ')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info-pill",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 17
                                                }, this),
                                                " Authentic Delhi Flavors"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-browse",
                                    onClick: scrollToMenu,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        " Browse Menu ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky-nav-container",
                ref: menuRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "search-filter-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "search-icon",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "search-input",
                                            placeholder: "Search shawarma, momos, rolls, pasta...",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "clear-search",
                                            onClick: ()=>setSearchQuery(''),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "diet-filter-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `diet-btn ${dietFilter === 'all' ? 'active' : ''}`,
                                            onClick: ()=>setDietFilter('all'),
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `diet-btn ${dietFilter === 'veg' ? 'active veg-active' : ''}`,
                                            onClick: ()=>setDietFilter('veg'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "veg-icon-box",
                                                    style: {
                                                        width: 14,
                                                        height: 14
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "veg-dot",
                                                        style: {
                                                            width: 6,
                                                            height: 6
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 17
                                                }, this),
                                                "Veg"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `diet-btn ${dietFilter === 'nonveg' ? 'active nonveg-active' : ''}`,
                                            onClick: ()=>setDietFilter('nonveg'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "nonveg-icon-box",
                                                    style: {
                                                        width: 14,
                                                        height: 14
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "nonveg-triangle",
                                                        style: {
                                                            borderBottomWidth: 7,
                                                            borderLeftWidth: 4,
                                                            borderRightWidth: 4
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 17
                                                }, this),
                                                "Non-Veg"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "category-chips-scroll",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menuData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `chip-btn ${selectedCategory === cat.id ? 'active' : ''}`,
                                    onClick: ()=>setSelectedCategory(cat.id),
                                    children: [
                                        getCategoryIcon(cat.icon),
                                        cat.name
                                    ]
                                }, cat.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container menu-main-content",
                children: groupedSections.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "empty-state animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
                            size: 48,
                            className: "empty-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "empty-title",
                            children: "No Menu Items Found"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "empty-text",
                            children: "Try adjusting your search query or switching your dietary filter."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 386,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 383,
                    columnNumber: 11
                }, this) : groupedSections.map(({ category, items })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: category.id,
                        className: "section-block animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "section-title",
                                        children: category.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "item-count-badge",
                                        children: [
                                            items.length,
                                            " Items"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 393,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-grid",
                                children: items.map((item)=>{
                                    const details = getItemDetails(item);
                                    const cartEntry = cart[details.variantKey];
                                    const qty = cartEntry ? cartEntry.quantity : 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "food-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-media",
                                                children: [
                                                    item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.image,
                                                        alt: item.name,
                                                        className: "food-img",
                                                        loading: "lazy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "placeholder-card-img",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "placeholder-icon-wrap",
                                                                children: getCategoryIcon(category.icon)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "placeholder-tag",
                                                                children: category.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 27
                                                    }, this),
                                                    item.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "badge-popular",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 29
                                                            }, this),
                                                            " Popular"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 27
                                                    }, this),
                                                    details.isVeg !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "badge-diet",
                                                        children: details.isVeg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "veg-icon-box",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "veg-dot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "nonveg-icon-box",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "nonveg-triangle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card-header-line",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "food-name",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 25
                                                    }, this),
                                                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "food-desc",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 27
                                                    }, this),
                                                    item.variants && item.variants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "variant-picker",
                                                        children: item.variants.map((v, vIdx)=>{
                                                            const activeIdx = itemVariants[item.id] || 0;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: `variant-btn ${activeIdx === vIdx ? 'active' : ''}`,
                                                                onClick: ()=>handleSelectVariant(item.id, vIdx),
                                                                children: v.name
                                                            }, vIdx, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 33
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card-footer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "price-display",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "price-val",
                                                                    children: [
                                                                        "₹",
                                                                        details.price
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 474,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 27
                                                            }, this),
                                                            qty === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "btn-add-item",
                                                                onClick: ()=>addToCart(item),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 482,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    " ADD"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "counter-box",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "counter-btn",
                                                                        onClick: ()=>removeFromCart(details.variantKey),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 490,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 486,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "counter-val",
                                                                        children: qty
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 492,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "counter-btn",
                                                                        onClick: ()=>addToCart(item),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 493,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 400,
                                columnNumber: 15
                            }, this)
                        ]
                    }, category.id, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 392,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menuData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESTAURANT_INFO"].phones[0]}`,
                className: "fixed-call-fab",
                title: "Call Momo Weds Shawarma",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Call"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 513,
                columnNumber: 7
            }, this),
            cartSummary.totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cart-floating-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cart-floating-bar animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cart-count",
                                    children: [
                                        cartSummary.totalItems,
                                        " Items Added"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cart-total",
                                    children: [
                                        "₹",
                                        cartSummary.totalPrice
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 526,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-view-cart",
                            onClick: ()=>setIsCartOpen(true),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 531,
                                    columnNumber: 15
                                }, this),
                                " Checkout ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 531,
                                    columnNumber: 51
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 530,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 525,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 524,
                columnNumber: 9
            }, this),
            isCartOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-backdrop",
                onClick: ()=>setIsCartOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "modal-title",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            size: 20,
                                            style: {
                                                color: 'var(--fire-red-light)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 543,
                                            columnNumber: 17
                                        }, this),
                                        " Checkout & Place Order"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "modal-close",
                                    onClick: ()=>setIsCartOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 546,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 541,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                fontSize: '0.9rem',
                                                color: 'var(--text-muted)',
                                                marginBottom: 8,
                                                textTransform: 'uppercase',
                                                letterSpacing: 0.5
                                            },
                                            children: "Order Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 553,
                                            columnNumber: 17
                                        }, this),
                                        Object.entries(cart).map(([variantKey, entry])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cart-item-row",
                                                style: {
                                                    marginBottom: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cart-item-details",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "cart-item-title",
                                                                children: [
                                                                    entry.item.name,
                                                                    entry.variantName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        style: {
                                                                            opacity: 0.75,
                                                                            display: 'block',
                                                                            fontSize: '0.8rem'
                                                                        },
                                                                        children: entry.variantName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 47
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "cart-item-price",
                                                                children: [
                                                                    "₹",
                                                                    entry.price * entry.quantity
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 561,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "counter-box",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "counter-btn",
                                                                onClick: ()=>removeFromCart(variantKey),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 569,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 565,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "counter-val",
                                                                children: entry.quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "counter-btn",
                                                                onClick: ()=>addToCart(entry.item),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 576,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, variantKey, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 555,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handlePlaceOrder,
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 12
                                    },
                                    children: [
                                        formError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: 'rgba(239, 68, 68, 0.15)',
                                                border: '1px solid rgba(239, 68, 68, 0.4)',
                                                color: '#EF4444',
                                                padding: '10px 14px',
                                                borderRadius: 8,
                                                fontSize: '0.85rem'
                                            },
                                            children: formError
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 586,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-sub)',
                                                        display: 'block',
                                                        marginBottom: 4
                                                    },
                                                    children: "Your Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "Enter your full name",
                                                    value: customerName,
                                                    onChange: (e)=>setCustomerName(e.target.value),
                                                    style: {
                                                        width: '100%',
                                                        background: 'var(--bg-dark)',
                                                        border: '1px solid var(--border-dark)',
                                                        color: 'white',
                                                        padding: '10px 14px',
                                                        borderRadius: 8,
                                                        fontSize: '0.9rem',
                                                        outline: 'none'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-sub)',
                                                        display: 'block',
                                                        marginBottom: 4
                                                    },
                                                    children: "Phone Number *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 604,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    required: true,
                                                    placeholder: "Enter 10-digit mobile number",
                                                    value: customerPhone,
                                                    onChange: (e)=>setCustomerPhone(e.target.value),
                                                    style: {
                                                        width: '100%',
                                                        background: 'var(--bg-dark)',
                                                        border: '1px solid var(--border-dark)',
                                                        color: 'white',
                                                        padding: '10px 14px',
                                                        borderRadius: 8,
                                                        fontSize: '0.9rem',
                                                        outline: 'none'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 603,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-sub)',
                                                        display: 'block',
                                                        marginBottom: 4
                                                    },
                                                    children: "Order Type *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: 10
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setOrderType('Dine In'),
                                                            style: {
                                                                flex: 1,
                                                                padding: '10px',
                                                                borderRadius: 8,
                                                                border: orderType === 'Dine In' ? '1px solid var(--fire-red-light)' : '1px solid var(--border-dark)',
                                                                background: orderType === 'Dine In' ? 'rgba(193, 18, 31, 0.2)' : 'var(--bg-dark)',
                                                                color: orderType === 'Dine In' ? 'white' : 'var(--text-muted)',
                                                                fontWeight: 700,
                                                                cursor: 'pointer'
                                                            },
                                                            children: "🍽 Dine In"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setOrderType('Takeaway'),
                                                            style: {
                                                                flex: 1,
                                                                padding: '10px',
                                                                borderRadius: 8,
                                                                border: orderType === 'Takeaway' ? '1px solid var(--fire-red-light)' : '1px solid var(--border-dark)',
                                                                background: orderType === 'Takeaway' ? 'rgba(193, 18, 31, 0.2)' : 'var(--bg-dark)',
                                                                color: orderType === 'Takeaway' ? 'white' : 'var(--text-muted)',
                                                                fontWeight: 700,
                                                                cursor: 'pointer'
                                                            },
                                                            children: "🛍 Takeaway"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 615,
                                            columnNumber: 17
                                        }, this),
                                        orderType === 'Dine In' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-sub)',
                                                        display: 'block',
                                                        marginBottom: 4
                                                    },
                                                    children: "Table Number *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "e.g. Table 5",
                                                    value: tableNumber,
                                                    onChange: (e)=>setTableNumber(e.target.value),
                                                    style: {
                                                        width: '100%',
                                                        background: 'var(--bg-dark)',
                                                        border: '1px solid var(--border-dark)',
                                                        color: 'white',
                                                        padding: '10px 14px',
                                                        borderRadius: 8,
                                                        fontSize: '0.9rem',
                                                        outline: 'none'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 654,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-sub)',
                                                        display: 'block',
                                                        marginBottom: 4
                                                    },
                                                    children: "Special Instructions / Notes (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 668,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 2,
                                                    placeholder: "Extra spicy, less oil, sauces on the side...",
                                                    value: notes,
                                                    onChange: (e)=>setNotes(e.target.value),
                                                    style: {
                                                        width: '100%',
                                                        background: 'var(--bg-dark)',
                                                        border: '1px solid var(--border-dark)',
                                                        color: 'white',
                                                        padding: '10px 14px',
                                                        borderRadius: 8,
                                                        fontSize: '0.9rem',
                                                        outline: 'none',
                                                        resize: 'none'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 667,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-summary-line",
                                            style: {
                                                marginTop: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Total Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--fire-red-light)'
                                                    },
                                                    children: [
                                                        "₹",
                                                        cartSummary.totalPrice
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 678,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 10,
                                                width: '100%',
                                                background: 'linear-gradient(135deg, var(--fire-red-light) 0%, var(--fire-red) 100%)',
                                                color: 'white',
                                                padding: '14px',
                                                borderRadius: 'var(--radius-full)',
                                                fontSize: '1rem',
                                                fontWeight: 800,
                                                border: 'none',
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                boxShadow: '0 6px 20px var(--fire-red-glow)',
                                                marginTop: 8
                                            },
                                            children: isSubmitting ? 'Submitting Order...' : '🚀 Confirm & Place Order'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 683,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 584,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 550,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 540,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 539,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "app-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "footer-logo",
                        children: [
                            "Momo ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Weds"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 714,
                                columnNumber: 42
                            }, this),
                            " Shawarma"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 714,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "footer-text",
                        children: "Delhi's Premier Destination for Shawarmas, Kathi Rolls, Dumplings & Tandoori Delights."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 715,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "footer-copyright",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Momo Weds Shawarma. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 718,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 713,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_1frehyu._.js.map