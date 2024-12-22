const menuData={
    coffee:[
        {name:'Espresso',price:20.00},
        {name:'Cappuccino',price:15.00},
        {name:'Double Espresso',price:16.00},
        {name:'Latte',price:16.00},
        {name:'Mocha',price:17.00},
        {name:'Americano',price:25.00},
    ],
    nonCoffee:[
        {name:'Smoothie',price:10.00},
        {name:'Hot Chocolate',price:12.00},
        {name:'Fresh Juice',price:15.00},
        {name:'Fresh Lemonade',price:14.00},
        {name:'Milkshake',price:25}
    ],
    tea:[
        {name:'Lemon Tea',price:10.00},
        {name:'Earl Grey Tea',price:12.00},
        {name:'Jasmine',price :15.00},
    ],
    desserts:[
        {name:'Cake',price:15.00},
        {name:'Croissant',price:12.00},
        {name:'Lemon Pie',price:10.00},
        {name:'Croissant',price:14.00},
    ],
    food:[
        {name:'Sandwich',price:15.00},
        {name:'Salad',price:12.00},
        {name:'Brownies',price:10.00},
        {name:'Chocolate Muffin',price:14.00},
    ]
    
}

export function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = ''; //clear previous page 

    const headerDiv = document.createElement("div");
    headerDiv.className = "header";
    
    const sectionTitle = document.createElement("h1");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = "Menu";
    
    const cafeNameDiv = document.createElement("div"); 
    cafeNameDiv.className = "cafe-name";
    cafeNameDiv.textContent = "Grounded Cafe";
    
    headerDiv.appendChild(sectionTitle);
    headerDiv.appendChild(cafeNameDiv);
    content.appendChild(headerDiv);

    // Create menu section
    const menuSection = document.createElement("div");
    menuSection.className = "menu-section";

    // Emoji mapping for each category
    const categoryEmojis = {
        coffee: "☕",
        nonCoffee: "🥤",
        tea: "🫖",
        desserts: "🍰",
        food: "🍽️"
    };

    // Loop through each category in menuData
    for (const [category, items] of Object.entries(menuData)) {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "menu-category";
        
        // Add category title with emoji
        const categoryTitle = document.createElement("h2");
        const emoji = categoryEmojis[category] || ""; // Get emoji or empty string if not found
        const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
        categoryTitle.textContent = `${emoji} ${formattedCategory}`;
        categoryDiv.appendChild(categoryTitle);

        const itemsList = document.createElement("div");
        itemsList.className = "menu-items";

        items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "menu-item";
            
            const itemName = document.createElement("span");
            itemName.className = "item-name";
            itemName.textContent = item.name;

            const itemPrice = document.createElement("span");
            itemPrice.className = "item-price";
            itemPrice.textContent = `$${item.price.toFixed(2)}`;

            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemPrice);
            itemsList.appendChild(itemDiv);
        });

        categoryDiv.appendChild(itemsList);
        menuSection.appendChild(categoryDiv);
    }

    content.appendChild(menuSection);
}