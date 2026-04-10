const products = [
    {
        id: 1,
        name: "Huile de Tournesol",
        category: "alimentaire", // ✅ corrigé
        image: "images/huile.webp",
        description: "Huile pure pression à froid",
        options: [
            { type: "Litre", price: 1500, unit: "1L" },
            { type: "Carton", price: 17000, unit: "12L" }
        ],
        isMarketplace: false
    },
    {
        id: 2,
        name: "Perceuse Bosch Professional",
        category: "bricolage", // ✅ déjà bon
        image: "images/perceuse.jpg",
        isMarketplace: true, 
        options: [{ type: "Unité", price: 45000, unit: "1 pièce" }]
    },
   {
        id: 2,
        name: "Riz Gino",
        category: "alimentaire",
        image: "images/riz-gino.webp",
        description: "Riz blanc de qualité",
        options: [
            { type: "Sachet", price: 400, unit: "0.5kg" },
            { type: "Sachet", price: 800, unit: "1kg" },
            { type: "Sac", price: 3500, unit: "5kg" }
        ],
        isMarketplace: false
    },
    {
        id: 3,
        name: "Riz Sister Grace",
        category: "alimentaire",
        image: "images/riz-sister-grace.webp",
        description: "Riz parfumé de qualité supérieure",
        options: [
            { type: "Sachet", price: 450, unit: "0.5kg" },
            { type: "Sachet", price: 850, unit: "1kg" },
            { type: "Sac", price: 3600, unit: "5kg" }
        ],
        isMarketplace: false
    },
    {
        id: 4,
        name: "Riz Délice",
        category: "alimentaire",
        image: "images/riz-delice.webp",
        description: "Riz blanc premium",
        options: [
            { type: "Sac", price: 3400, unit: "5kg" }
        ],
        isMarketplace: false
    },
    {
        id: 5,
        name: "Riz Rizière",
        category: "alimentaire",
        image: "images/riz-riziere.webp",
        description: "Riz local de bonne qualité",
        options: [
            { type: "Sac", price: 3200, unit: "5kg" }
        ],
        isMarketplace: false
    },
    {
        id: 6,
        name: "Riz Thaïlandais",
        category: "alimentaire",
        image: "images/riz-thai.webp",
        description: "Riz parfumé importé",
        options: [
            { type: "Sac", price: 18000, unit: "25kg" }
        ],
        isMarketplace: false
    },
    {
        id: 7,
        name: "Couscous Dari",
        category: "alimentaire",
        image: "images/couscous-dari.webp",
        description: "Semoule de blé fine",
        options: [
            { type: "Paquet", price: 600, unit: "500g" }
        ],
        isMarketplace: false
    },
    {
        id: 8,
        name: "Riz Ibo",
        category: "alimentaire",
        image: "images/riz-ibo.webp",
        description: "Riz blanc populaire",
        options: [
            { type: "Sac", price: 3300, unit: "5kg" }
        ],
        isMarketplace: false
    },
    {
        id: 9,
        name: "Riz Simple Standard",
        category: "alimentaire",
        image: "images/riz-standard.webp",
        description: "Riz économique pour usage quotidien",
        options: [
            { type: "Sac", price: 3000, unit: "5kg" }
        ],
        isMarketplace: false
    },
    {
        id: 10,
        name: "Riz Simple Meilleur",
        category: "alimentaire",
        image: "images/riz-meilleur.webp",
        description: "Riz amélioré, meilleure qualité",
        options: [
            { type: "Sac", price: 3400, unit: "5kg" }
        ],
        isMarketplace: false
    }
];
