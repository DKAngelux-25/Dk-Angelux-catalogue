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
    },
    {
    id: 41,
    name: "Bouillon curry",
    category: "alimentaire",
    image: "images/bouillon-curry.webp",
    description: "Bouillon saveur curry",
    options: [
        { type: "Unité", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 42,
    name: "Huile Tournesol Lesueur 1 L",
    category: "alimentaire",
    image: "images/huile-lesueur-1l.webp",
    description: "Huile de tournesol 1L",
    options: [
        { type: "Bouteille", price: 0, unit: "1L" }
    ],
    isMarketplace: false
},
{
    id: 43,
    name: "Huile Tournesol Lesueur 5 L",
    category: "alimentaire",
    image: "images/huile-lesueur-5l.webp",
    description: "Huile de tournesol 5L",
    options: [
        { type: "Bidon", price: 0, unit: "5L" }
    ],
    isMarketplace: false
},
{
    id: 44,
    name: "Huile Tournesol Bonita 1L",
    category: "alimentaire",
    image: "images/huile-bonita-1l.webp",
    description: "Huile de tournesol 1L",
    options: [
        { type: "Bouteille", price: 0, unit: "1L" }
    ],
    isMarketplace: false
},
{
    id: 45,
    name: "Huile Tournesol Bonita 5 L",
    category: "alimentaire",
    image: "images/huile-bonita-5l.webp",
    description: "Huile de tournesol 5L",
    options: [
        { type: "Bidon", price: 0, unit: "5L" }
    ],
    isMarketplace: false
},
{
    id: 46,
    name: "Huile Tournesol Aïcha 1 L",
    category: "alimentaire",
    image: "images/huile-aicha-1l.webp",
    description: "Huile de tournesol 1L",
    options: [
        { type: "Bouteille", price: 0, unit: "1L" }
    ],
    isMarketplace: false
},
{
    id: 47,
    name: "Huile Tournesol Aïcha 5L",
    category: "alimentaire",
    image: "images/huile-aicha-5l.webp",
    description: "Huile de tournesol 5L",
    options: [
        { type: "Bidon", price: 0, unit: "5L" }
    ],
    isMarketplace: false
},
{
    id: 48,
    name: "Huile Tournesol Ok 1L",
    category: "alimentaire",
    image: "images/huile-ok-1l.webp",
    description: "Huile de tournesol 1L",
    options: [
        { type: "Bouteille", price: 0, unit: "1L" }
    ],
    isMarketplace: false
},
{
    id: 49,
    name: "Huile Tournesol Ok 5 L",
    category: "alimentaire",
    image: "images/huile-ok-5l.webp",
    description: "Huile de tournesol 5L",
    options: [
        { type: "Bidon", price: 0, unit: "5L" }
    ],
    isMarketplace: false
},
{
    id: 50,
    name: "Huile Tournesol Gino 1 L",
    category: "alimentaire",
    image: "images/huile-gino-1l.webp",
    description: "Huile de tournesol 1L",
    options: [
        { type: "Bouteille", price: 0, unit: "1L" }
    ],
    isMarketplace: false
},
{
    id: 51,
    name: "Huile Tournesol Gino 5 L",
    category: "alimentaire",
    image: "images/huile-gino-5l.webp",
    description: "Huile de tournesol 5L",
    options: [
        { type: "Bidon", price: 0, unit: "5L" }
    ],
    isMarketplace: false
},
{
    id: 52,
    name: "Huile Tournesol 25 L",
    category: "alimentaire",
    image: "images/huile-25l.webp",
    description: "Huile de tournesol 25L",
    options: [
        { type: "Bidon", price: 0, unit: "25L" }
    ],
    isMarketplace: false
},
{
    id: 53,
    name: "Huile végétal",
    category: "alimentaire",
    image: "images/huile-vegetale.webp",
    description: "Huile végétale",
    options: [
        { type: "Bouteille", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 54,
    name: "Huile rouge",
    category: "alimentaire",
    image: "images/huile-rouge.webp",
    description: "Huile de palme",
    options: [
        { type: "Bouteille", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 55,
    name: "Lait Peak poudre boite gm",
    category: "alimentaire",
    image: "images/lait-peak-boite.webp",
    description: "Lait en poudre grande boîte",
    options: [
        { type: "Boîte", price: 0, unit: "gm" }
    ],
    isMarketplace: false
},
{
    id: 56,
    name: "Lait Peak poudre Sachet gm",
    category: "alimentaire",
    image: "images/lait-peak-sachet.webp",
    description: "Lait en poudre sachet",
    options: [
        { type: "Sachet", price: 0, unit: "gm" }
    ],
    isMarketplace: false
},
    {
    id: 57,
    name: "Lait peak moyen",
    category: "alimentaire",
    image: "images/lait-peak-moyen.webp",
    description: "Lait Peak format moyen",
    options: [
        { type: "Boîte", price: 0, unit: "moyen" }
    ],
    isMarketplace: false
},
{
    id: 58,
    name: "Lait peak",
    category: "alimentaire",
    image: "images/lait-peak.webp",
    description: "Lait Peak",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 59,
    name: "Lait peak sachet",
    category: "alimentaire",
    image: "images/lait-peak-sachet.webp",
    description: "Lait Peak en sachet",
    options: [
        { type: "Sachet", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 60,
    name: "Lait Bonnet rouge 1",
    category: "alimentaire",
    image: "images/lait-bonnet-rouge-1.webp",
    description: "Lait Bonnet Rouge format 1",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 61,
    name: "Lait Bonnet rouge 2",
    category: "alimentaire",
    image: "images/lait-bonnet-rouge-2.webp",
    description: "Lait Bonnet Rouge format 2",
    options: [
        { type: "Boîte", price: 0, unit: "2" }
    ],
    isMarketplace: false
},
{
    id: 62,
    name: "Lait cowbell gm",
    category: "alimentaire",
    image: "images/lait-cowbell-gm.webp",
    description: "Lait Cowbell grand modèle",
    options: [
        { type: "Boîte", price: 0, unit: "gm" }
    ],
    isMarketplace: false
},
{
    id: 63,
    name: "Lait cowbell concentré",
    category: "alimentaire",
    image: "images/lait-cowbell-concentre.webp",
    description: "Lait concentré Cowbell",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 64,
    name: "Lait cowbell sachet",
    category: "alimentaire",
    image: "images/lait-cowbell-sachet.webp",
    description: "Lait Cowbell en sachet",
    options: [
        { type: "Sachet", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 65,
    name: "Lait Cèbon concentré",
    category: "alimentaire",
    image: "images/lait-cebon.webp",
    description: "Lait concentré Cèbon",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 66,
    name: "Lait Nido",
    category: "alimentaire",
    image: "images/lait-nido.webp",
    description: "Lait Nido",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 67,
    name: "Lait Jago concentré",
    category: "alimentaire",
    image: "images/lait-jago.webp",
    description: "Lait concentré Jago",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 68,
    name: "Nescafé clasic pm",
    category: "alimentaire",
    image: "images/nescafe-pm.webp",
    description: "Nescafé petit modèle",
    options: [
        { type: "Boîte", price: 0, unit: "pm" }
    ],
    isMarketplace: false
},
{
    id: 69,
    name: "Nescafé Moyen",
    category: "alimentaire",
    image: "images/nescafe-moyen.webp",
    description: "Nescafé format moyen",
    options: [
        { type: "Boîte", price: 0, unit: "moyen" }
    ],
    isMarketplace: false
},
{
    id: 70,
    name: "Nescafé sachet",
    category: "alimentaire",
    image: "images/nescafe-sachet.webp",
    description: "Nescafé en sachet",
    options: [
        { type: "Sachet", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 71,
    name: "Lait Miksi",
    category: "alimentaire",
    image: "images/lait-miksi.webp",
    description: "Lait Miksi",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 72,
    name: "Milo Cowbell chocolat",
    category: "alimentaire",
    image: "images/milo-cowbell.webp",
    description: "Boisson chocolatée Milo Cowbell",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 73,
    name: "Milo Ovaltine",
    category: "alimentaire",
    image: "images/milo-ovaltine.webp",
    description: "Boisson chocolatée Ovaltine",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 74,
    name: "Milo nestlé gm",
    category: "alimentaire",
    image: "images/milo-nestle.webp",
    description: "Milo Nestlé grand modèle",
    options: [
        { type: "Boîte", price: 0, unit: "gm" }
    ],
    isMarketplace: false
},
{
    id: 75,
    name: "Nescafé Tradicio pm",
    category: "alimentaire",
    image: "images/nescafe-tradicio.webp",
    description: "Nescafé Tradicio petit modèle",
    options: [
        { type: "Boîte", price: 0, unit: "pm" }
    ],
    isMarketplace: false
},
{
    id: 76,
    name: "Mayonnaise Bama",
    category: "alimentaire",
    image: "images/mayo-bama.webp",
    description: "Mayonnaise Bama",
    options: [
        { type: "Pot", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 77,
    name: "Miksi chocolat",
    category: "alimentaire",
    image: "images/miksi-chocolat.webp",
    description: "Boisson chocolatée Miksi",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 78,
    name: "Milo Cowbell chocolat gm",
    category: "alimentaire",
    image: "images/milo-cowbell-gm.webp",
    description: "Milo Cowbell grand modèle",
    options: [
        { type: "Boîte", price: 0, unit: "gm" }
    ],
    isMarketplace: false
},
{
    id: 79,
    name: "Milo sachet",
    category: "alimentaire",
    image: "images/milo-sachet.webp",
    description: "Milo en sachet",
    options: [
        { type: "Sachet", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 80,
    name: "Moyonnaise Sossa Sachet",
    category: "alimentaire",
    image: "images/mayo-sossa.webp",
    description: "Mayonnaise Sossa en sachet",
    options: [
        { type: "Sachet", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 81,
    name: "Mayonnaise Aromate sachet",
    category: "alimentaire",
    image: "images/mayo-aromate.webp",
    description: "Mayonnaise aromatisée",
    options: [
        { type: "Sachet", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 82,
    name: "Mayonnaise Jadida",
    category: "alimentaire",
    image: "images/mayo-jadida.webp",
    description: "Mayonnaise Jadida",
    options: [
        { type: "Pot", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 83,
    name: "Mayonnaise Jm's",
    category: "alimentaire",
    image: "images/mayo-jms.webp",
    description: "Mayonnaise Jm's",
    options: [
        { type: "Pot", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 84,
    name: "Coquiette pm",
    category: "alimentaire",
    image: "images/coquilette-pm.webp",
    description: "Coquillettes petit modèle",
    options: [
        { type: "Sachet", price: 0, unit: "pm" }
    ],
    isMarketplace: false
},
{
    id: 85,
    name: "Vermisselle",
    category: "alimentaire",
    image: "images/vermicelle.webp",
    description: "Vermicelle",
    options: [
        { type: "Sachet", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 86,
    name: "Coquiette gm",
    category: "alimentaire",
    image: "images/coquilette-gm.webp",
    description: "Coquillettes grand modèle",
    options: [
        { type: "Sachet", price: 0, unit: "gm" }
    ],
    isMarketplace: false
},
{
    id: 87,
    name: "Beurre 250g",
    category: "alimentaire",
    image: "images/beurre-250g.webp",
    description: "Beurre 250g",
    options: [
        { type: "Plaquette", price: 0, unit: "250g" }
    ],
    isMarketplace: false
},
{
    id: 88,
    name: "Sucre 1kg",
    category: "alimentaire",
    image: "images/sucre-1kg.webp",
    description: "Sucre 1kg",
    options: [
        { type: "Sac", price: 0, unit: "1kg" }
    ],
    isMarketplace: false
},
{
    id: 89,
    name: "Sucre roux",
    category: "alimentaire",
    image: "images/sucre-roux.webp",
    description: "Sucre roux",
    options: [
        { type: "Sac", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 90,
    name: "Sucre st louis gm",
    category: "alimentaire",
    image: "images/sucre-stlouis-gm.webp",
    description: "Sucre St Louis grand modèle",
    options: [
        { type: "Sac", price: 0, unit: "gm" }
    ],
    isMarketplace: false
},
{
    id: 91,
    name: "Sucre st louis pm",
    category: "alimentaire",
    image: "images/sucre-stlouis-pm.webp",
    description: "Sucre St Louis petit modèle",
    options: [
        { type: "Sac", price: 0, unit: "pm" }
    ],
    isMarketplace: false
},
{
    id: 92,
    name: "Vinaigre Rouge",
    category: "alimentaire",
    image: "images/vinaigre-rouge.webp",
    description: "Vinaigre rouge",
    options: [
        { type: "Bouteille", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 93,
    name: "Vinaigre Blanc",
    category: "alimentaire",
    image: "images/vinaigre-blanc.webp",
    description: "Vinaigre blanc",
    options: [
        { type: "Bouteille", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 94,
    name: "Peti pois Bonduelle",
    category: "alimentaire",
    image: "images/petit-pois.webp",
    description: "Petit pois Bonduelle",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 95,
    name: "Indomie Grand",
    category: "alimentaire",
    image: "images/indomie-gm.webp",
    description: "Indomie grand format",
    options: [
        { type: "Paquet", price: 0, unit: "gm" }
    ],
    isMarketplace: false
},
{
    id: 96,
    name: "Indomie Petit",
    category: "alimentaire",
    image: "images/indomie-pm.webp",
    description: "Indomie petit format",
    options: [
        { type: "Paquet", price: 0, unit: "pm" }
    ],
    isMarketplace: false
},
{
    id: 97,
    name: "Spaguettie Bonita",
    category: "alimentaire",
    image: "images/spaghetti-bonita.webp",
    description: "Spaghetti Bonita",
    options: [
        { type: "Paquet", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 98,
    name: "Spaghetti p-2",
    category: "alimentaire",
    image: "images/spaghetti-p2.webp",
    description: "Spaghetti paquet 2",
    options: [
        { type: "Paquet", price: 0, unit: "p2" }
    ],
    isMarketplace: false
},
{
    id: 99,
    name: "Spaghetti p-1",
    category: "alimentaire",
    image: "images/spaghetti-p1.webp",
    description: "Spaghetti paquet 1",
    options: [
        { type: "Paquet", price: 0, unit: "p1" }
    ],
    isMarketplace: false
},
{
    id: 100,
    name: "Spiral Rad gm",
    category: "alimentaire",
    image: "images/spiral-rad.webp",
    description: "Pâtes spiralées grand modèle",
    options: [
        { type: "Paquet", price: 0, unit: "gm" }
    ],
    isMarketplace: false
},
{
    id: 101,
    name: "Oeuf 1 Plateau",
    category: "alimentaire",
    image: "images/oeuf-plateau.webp",
    description: "Plateau d'œufs",
    options: [
        { type: "Plateau", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 102,
    name: "Maïs",
    category: "alimentaire",
    image: "images/mais.webp",
    description: "Maïs",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 103,
    name: "Tomate Aicha Moyen",
    category: "alimentaire",
    image: "images/tomate-aicha.webp",
    description: "Tomate Aicha format moyen",
    options: [
        { type: "Boîte", price: 0, unit: "moyen" }
    ],
    isMarketplace: false
},
{
    id: 104,
    name: "Tomate demi",
    category: "alimentaire",
    image: "images/tomate-demi.webp",
    description: "Tomate demi boîte",
    options: [
        { type: "Boîte", price: 0, unit: "demi" }
    ],
    isMarketplace: false
},
{
    id: 105,
    name: "Sardine Napa",
    category: "alimentaire",
    image: "images/sardine-napa.webp",
    description: "Sardine Napa",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 106,
    name: "Sardine de variétés",
    category: "alimentaire",
    image: "images/sardine-variete.webp",
    description: "Sardines variées",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 107,
    name: "Sardines Apollo",
    category: "alimentaire",
    image: "images/sardine-apollo.webp",
    description: "Sardines Apollo",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 108,
    name: "Sardines Safy",
    category: "alimentaire",
    image: "images/sardine-safy.webp",
    description: "Sardines Safy",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
{
    id: 109,
    name: "Sardine Tinapa 555",
    category: "alimentaire",
    image: "images/sardine-555.webp",
    description: "Sardine Tinapa 555",
    options: [
        { type: "Boîte", price: 0, unit: "1" }
    ],
    isMarketplace: false
},
 {
        id: 110,
        name: "Ralonge",
        category: "bricolage",
        image: "images/ralonge.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 111,
        name: "Colle Adhésive",
        category: "bricolage",
        image: "images/colle_adhesive.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 112,
        name: "Colle Adhésive liquide",
        category: "bricolage",
        image: "images/colle_adhesive_liquide.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 113,
        name: "Chaise plastique",
        category: "bricolage",
        image: "images/chaise_plastique.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 114,
        name: "Brosse toilette",
        category: "bricolage",
        image: "images/brosse_toilette.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 115,
        name: "Brosse à tige",
        category: "bricolage",
        image: "images/brosse_tige.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 116,
        name: "Bougie Pm",
        category: "bricolage",
        image: "images/bougie_pm.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 117,
        name: "Bougie Gm",
        category: "bricolage",
        image: "images/bougie_gm.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 118,
        name: "Balai à main",
        category: "bricolage",
        image: "images/balai_main.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 119,
        name: "Balais à tige traditionnel",
        category: "bricolage",
        image: "images/balai_tige_traditionnel.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 120,
        name: "Balai moderne (tige)",
        category: "bricolage",
        image: "images/balai_moderne.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 121,
        name: "Balai à toile d'araignée",
        category: "bricolage",
        image: "images/balai_toile.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 122,
        name: "Allumette Amen",
        category: "bricolage",
        image: "images/allumette_amen.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 123,
        name: "Allumette Cuisy pot",
        category: "bricolage",
        image: "images/allumette_cuisy.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 124,
        name: "Ampoule en jeu de lumière",
        category: "bricolage",
        image: "images/ampoule_jeu.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 125,
        name: "Ampoule 10 w-220",
        category: "bricolage",
        image: "images/ampoule_10w.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 126,
        name: "Ampoule LED 60W",
        category: "bricolage",
        image: "images/ampoule_led_60.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 127,
        name: "Ampoule LED 50W",
        category: "bricolage",
        image: "images/ampoule_led_50.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 128,
        name: "Multiprise sans fil P5",
        category: "bricolage",
        image: "images/multiprise_p5.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 129,
        name: "Multiprise sans fil P4",
        category: "bricolage",
        image: "images/multiprise_p4.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 130,
        name: "Multiprise sans fil P3",
        category: "bricolage",
        image: "images/multiprise_p3.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 131,
        name: "Multiprise sans fil P2",
        category: "bricolage",
        image: "images/multiprise_p2.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 132,
        name: "Multiprise sans fil P1",
        category: "bricolage",
        image: "images/multiprise_p1.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 133,
        name: "Ventilo à pieds",
        category: "bricolage",
        image: "images/ventilo.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 134,
        name: "Brasseur",
        category: "bricolage",
        image: "images/brasseur.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 135,
        name: "Rallonge 5 troues 5 m de corde",
        category: "bricolage",
        image: "images/rallonge_5m.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 136,
        name: "Javel 5 L",
        category: "bricolage",
        image: "images/javel_5l.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 137,
        name: "Javel poudre",
        category: "bricolage",
        image: "images/javel_poudre.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 138,
        name: "Javel liquide pm",
        category: "bricolage",
        image: "images/javel_pm.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 139,
        name: "Omo Yso",
        category: "bricolage",
        image: "images/omo_yso.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 140,
        name: "Coton tige",
        category: "bricolage",
        image: "images/coton_tige.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 141,
        name: "Lingette",
        category: "bricolage",
        image: "images/lingette.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 142,
        name: "Fourchette jetable",
        category: "bricolage",
        image: "images/fourchette_jetable.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 143,
        name: "Cuillère jetable",
        category: "bricolage",
        image: "images/cuillere_jetable.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 144,
        name: "Assiette jetable",
        category: "bricolage",
        image: "images/assiette_jetable.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 145,
        name: "Taken away",
        category: "bricolage",
        image: "images/take_away.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 146,
        name: "Pipette",
        category: "bricolage",
        image: "images/pipette.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 147,
        name: "Pipette",
        category: "bricolage",
        image: "images/pipette.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 148,
        name: "Verre jetable",
        category: "bricolage",
        image: "images/verre_jetable.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 149,
        name: "Papiers aluminium",
        category: "bricolage",
        image: "images/papier_aluminium.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 150,
        name: "Papiers Sopala",
        category: "bricolage",
        image: "images/papier_sopala.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 151,
        name: "Papier torchon",
        category: "bricolage",
        image: "images/papier_torchon.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 152,
        name: "Papiers mouchoirs",
        category: "bricolage",
        image: "images/papiers_mouchoirs.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 153,
        name: "Papier hygiénique Clean soft",
        category: "bricolage",
        image: "images/papier_clean_soft.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 154,
        name: "Papier hygiénique Pride",
        category: "bricolage",
        image: "images/papier_pride.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 155,
        name: "Papier hygiénique Garden",
        category: "bricolage",
        image: "images/papier_garden.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 156,
        name: "Papier hygiénique Aqua Soft",
        category: "bricolage",
        image: "images/papier_aqua_soft.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 157,
        name: "Tampon Naval girl",
        category: "bricolage",
        image: "images/tampon_naval.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 158,
        name: "Tampon Maxplus",
        category: "bricolage",
        image: "images/tampon_maxplus.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 159,
        name: "Tampon Softcare",
        category: "bricolage",
        image: "images/tampon_softcare.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 160,
        name: "Tampon Softcare",
        category: "bricolage",
        image: "images/tampon_softcare.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 161,
        name: "Ventaille Simple",
        category: "bricolage",
        image: "images/ventaille_simple.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 162,
        name: "Ventaille",
        category: "bricolage",
        image: "images/ventaille.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 163,
        name: "Plastique",
        category: "bricolage",
        image: "images/plastique.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 164,
        name: "Pate dentifrice Signal",
        category: "bricolage",
        image: "images/dentifrice_signal.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 165,
        name: "Pate dentifrice Longrich",
        category: "bricolage",
        image: "images/dentifrice_longrich.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 166,
        name: "Dentifrice Colgate",
        category: "bricolage",
        image: "images/dentifrice_colgate.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 167,
        name: "Dentifrice Aquafresh",
        category: "bricolage",
        image: "images/dentifrice_aquafresh.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 168,
        name: "Dentifrice Maxam gm",
        category: "bricolage",
        image: "images/dentifrice_maxam_gm.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 169,
        name: "Dentifrice Maxam pm",
        category: "bricolage",
        image: "images/dentifrice_maxam_pm.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    },
    {
        id: 170,
        name: "Javel gm",
        category: "bricolage",
        image: "images/javel_gm.webp",
        description: "Produit de bricolage",
        options: [{ type: "Unité", price: 0, unit: "" }],
        isMarketplace: false
    }
];
