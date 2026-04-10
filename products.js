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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
        name: "Riz Simple Meilleur",
        category: "alimentaire",
        image: "images/riz-meilleur.webp",
        description: "Riz amélioré, meilleure qualité",
        options: [
            { type: "Sac", price: 3400, unit: "5kg" }
        ],
        isMarketplace: false
    },
     {
        id: 12,
        name: "Maïs",
        category: "alimentaire",
        image: "images/mais.webp",
        description: "Maïs sec pour consommation",
        options: [
            { type: "bol", price: 650, unit: "1bol" },
            { type: "Kg", price: 350, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 13,
        name: "Couscous en vrac",
        category: "alimentaire",
        image: "images/couscous.webp",
        description: "Semoule vendue au kilogramme",
        options: [
            { type: "Kg", price: 700, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 14,
        name: "Couscous Samia",
        category: "alimentaire",
        image: "images/couscous-samia.webp",
        description: "Semoule fine de qualité",
        options: [
            { type: "Paquet", price: 650, unit: "500g" }
        ],
        isMarketplace: false
    },
    {
        id: 15,
        name: "Couscous Kayna",
        category: "alimentaire",
        image: "images/couscous-kayna.webp",
        description: "Semoule de blé",
        options: [
            { type: "Paquet", price: 600, unit: "500g" }
        ],
        isMarketplace: false
    },
    {
        id: 16,
        name: "Haricot rouge",
        category: "alimentaire",
        image: "images/haricot-rouge.webp",
        description: "Haricot sec riche en protéines",
        options: [
            { type: "Kg", price: 800, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 17,
        name: "Voandzou",
        category: "alimentaire",
        image: "images/voandzou.webp",
        description: "Légumineuse locale nutritive",
        options: [
            { type: "Kg", price: 900, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 18,
        name: "Gari",
        category: "alimentaire",
        image: "images/gari.webp",
        description: "Semoule de manioc",
        options: [
            { type: "Kg", price: 300, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 19,
        name: "Farine de Maïs",
        category: "alimentaire",
        image: "images/farine-mais.webp",
        description: "Farine pour pâte et bouillie",
        options: [
            { type: "Kg", price: 400, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 20,
        name: "Tapioca",
        category: "alimentaire",
        image: "images/tapioca.webp",
        description: "Granulés de manioc",
        options: [
            { type: "Kg", price: 600, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 21,
        name: "Sorgho",
        category: "alimentaire",
        image: "images/sorgho.webp",
        description: "Céréale locale",
        options: [
            { type: "Kg", price: 350, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 22,
        name: "Boule d'akassan",
        category: "alimentaire",
        image: "images/akassan.webp",
        description: "Préparation traditionnelle",
        options: [
            { type: "Unité", price: 200, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 23,
        name: "Atchèkè",
        category: "alimentaire",
        image: "images/atcheke.webp",
        description: "Semoule de manioc fermenté",
        options: [
            { type: "Kg", price: 500, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 24,
        name: "Manioc séché et moulu",
        category: "alimentaire",
        image: "images/manioc-moulu.webp",
        description: "Farine de manioc",
        options: [
            { type: "Kg", price: 450, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 25,
        name: "Manioc séché",
        category: "alimentaire",
        image: "images/manioc-seche.webp",
        description: "Manioc sec",
        options: [
            { type: "Kg", price: 300, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 26,
        name: "Pain P4",
        category: "alimentaire",
        image: "images/pain.webp",
        description: "Pain format 100f",
        options: [
            { type: "Unité", price: 100, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 27,
        name: "Pain P3",
        category: "alimentaire",
        image: "images/pain.webp",
        description: "Pain format 200f",
        options: [
            { type: "Unité", price: 200, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 28,
        name: "Pain P2",
        category: "alimentaire",
        image: "images/pain.webp",
        description: "Pain format 300f",
        options: [
            { type: "Unité", price: 300, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 29,
        name: "Pain P1",
        category: "alimentaire",
        image: "images/pain.webp",
        description: "Pain format 500f",
        options: [
            { type: "Unité", price: 500, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 30,
        name: "Zakalê en boîte",
        category: "alimentaire",
        image: "images/zakale.webp",
        description: "Produit local en conserve",
        options: [
            { type: "Boîte", price: 1200, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 31,
        name: "Argile blanche",
        category: "alimentaire",
        image: "images/argile.webp",
        description: "Argile comestible",
        options: [
            { type: "Unité", price: 100, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 32,
        name: "Arachide grillée",
        category: "alimentaire",
        image: "images/arachide.webp",
        description: "Arachides prêtes à consommer",
        options: [
            { type: "Kg", price: 1000, unit: "1kg" }
        ],
        isMarketplace: false
    },
    {
        id: 33,
        name: "Chips nature",
        category: "alimentaire",
        image: "images/chips.webp",
        description: "Chips croustillantes",
        options: [
            { type: "Sachet", price: 500, unit: "100g" }
        ],
        isMarketplace: false
    },
    {
        id: 34,
        name: "Bouillon Onga",
        category: "alimentaire",
        image: "images/onga.webp",
        description: "Cube d'assaisonnement",
        options: [
            { type: "Paquet", price: 300, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 35,
        name: "Bouillon Bonfood",
        category: "alimentaire",
        image: "images/bouillon.webp",
        description: "Assaisonnement alimentaire",
        options: [
            { type: "Paquet", price: 300, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 36,
        name: "Bouillon Cookzen",
        category: "alimentaire",
        image: "images/bouillon.webp",
        description: "Cube de bouillon",
        options: [
            { type: "Paquet", price: 300, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 37,
        name: "Bouillon Maggi",
        category: "alimentaire",
        image: "images/maggi.webp",
        description: "Cube d'assaisonnement populaire",
        options: [
            { type: "Paquet", price: 350, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 38,
        name: "Huile Tournesol Lesieur",
        category: "alimentaire",
        image: "images/huile-lesieur.webp",
        description: "Huile de tournesol raffinée",
        options: [
            { type: "Bouteille", price: 7500, unit: "5L" },
            { type: "Bouteille", price: 1800, unit: "1L" }
        ],
        isMarketplace: false
    },
    {
        id: 39,
        name: "Bouillon curry",
        category: "alimentaire",
        image: "images/curry.webp",
        description: "Assaisonnement au curry",
        options: [
            { type: "Paquet", price: 350, unit: "1" }
        ],
        isMarketplace: false
    },
    {
        id: 40,
        name: "Curry Gino",
        category: "alimentaire",
        image: "images/curry-gino.webp",
        description: "Épice curry",
        options: [
            { type: "Sachet", price: 500, unit: "1" }
        ],
        isMarketplace: false
    }
];
