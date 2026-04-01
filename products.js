const products = [
    {
        id: 1,
        name: "Huile de Tournesol",
        category: "Alimentation",
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
    category: "bricolage",
    image: "images/perceuse.jpg", // Ajoute le chemin de ton dossier image
    isMarketplace: true, 
    options: [{ type: "Unité", price: 45000, unit: "1 pièce" }]
}
];
