// Example catering data (for demonstration purposes)
const cateringData = {

        kukatpally: [
            { id: 'cater1', name: 'Best Vintage Caterers', description: 'Premium services with variety.', contact: '+91 097006 55988', hours: 'Mon-Sun, 7:30 AM - 10:30 PM', picture: "https://www.captainjoe.in/blog/images/crafting-menu-that-caters-emotions.jpg" },
            { id: 'cater2', name: 'Master Caterers', description: 'Elegant and tailored for your needs.', contact: '+91 097006 55989', hours: 'Mon-Sun, 8:00 AM - 11:00 PM', image: 'path/to/master-caterers.jpg' },
            { id: 'cater3', name: 'Jyothi Caterers', description: 'Exceptional services for all events.', contact: '+91 097006 55990', hours: 'Mon-Sun, 6:00 AM - 9:00 PM', image: 'path/to/jyothi-caterers.jpg' }
        ],
    ameerpet: [
        { id: 'cater1', name: 'Pakka Local', description: 'Quality catering for all occasions.', contact: '+91 097006 55991', hours: 'Mon-Sun, 7:00 AM - 8:00 PM' },
        { id: 'cater2', name: 'Friendz Caterers', description: 'Delicious and diverse menus.', contact: '+91 097006 55992', hours: 'Mon-Sun, 8:00 AM - 9:00 PM' },
        { id: 'cater3', name: 'Banjara Caterers', description: 'Trusted and reliable catering services.', contact: '+91 097006 55993', hours: 'Mon-Sun, 9:00 AM - 10:00 PM' }
    ],
    banjarahills: [
        { id: 'cater1', name: 'Iyengar Caterers', description: 'Specializing in traditional South Indian cuisine.', contact: '+91 097006 55994', hours: 'Mon-Sun, 8:00 AM - 8:00 PM' },
        { id: 'cater2', name: 'Arora Caterers', description: 'Expert in North Indian delicacies.', contact: '+91 097006 55995', hours: 'Mon-Sun, 9:00 AM - 9:00 PM' },
        { id: 'cater3', name: 'New Vindu Caterers', description: 'Homely and nutritious catering options.', contact: '+91 097006 55996', hours: 'Mon-Sun, 7:00 AM - 7:00 PM' }
    ],
    secunderabad: [
        { id: 'cater1', name: 'Sampradaya Caterers', description: 'Pure Vegetarian Catering Services.', contact: '+91 097006 55997', hours: 'Mon-Sun, 7:00 AM - 8:00 PM' },
        { id: 'cater2', name: 'Dakshina Ruchulu Caterers', description: 'Authentic South Indian flavors.', contact: '+91 097006 55998', hours: 'Mon-Sun, 8:00 AM - 9:00 PM' },
        { id: 'cater3', name: 'Vaah Bhojanam Caterers', description: 'Tasty and affordable catering.', contact: '+91 097006 55999', hours: 'Mon-Sun, 9:00 AM - 10:00 PM' }
    ],
    nagole: [
        { id: 'cater1', name: 'www.yumEATS.in', description: 'Party & Corporate Catering Services.', contact: '+91 097006 55000', hours: 'Mon-Sun, 7:00 AM - 8:00 PM' },
        { id: 'cater2', name: 'Mana Bhojanam', description: 'Wide range of menu options.', contact: '+91 097006 55001', hours: 'Mon-Sun, 8:00 AM - 9:00 PM' },
        { id: 'cater3', name: 'The Good Food Guys', description: 'Great food and excellent service.', contact: '+91 097006 55002', hours: 'Mon-Sun, 9:00 AM - 10:00 PM' }
    ],
    hitechcity: [
        { id: 'cater1', name: 'Treat Caterers', description: 'Catering Services in Hyderabad.', contact: '+91 097006 55003', hours: 'Mon-Sun, 8:00 AM - 9:00 PM' },
        { id: 'cater2', name: 'Homely Catering Services', description: 'Comforting and homely food.', contact: '+91 097006 55004', hours: 'Mon-Sun, 9:00 AM - 10:00 PM' },
        { id: 'cater3', name: 'TELUGU VARI RUCHULU Caterers', description: 'Authentic Telugu cuisine.', contact: '+91 097006 55005', hours: 'Mon-Sun, 7:00 AM - 8:00 PM' }
    ],
    narsingi: [
        { id: 'cater1', name: 'Rasoi Rajasthan Caterers', description: 'Pure Vegetarian North Indian & Rajasthani Food.', contact: '+91 097006 55006', hours: 'Mon-Sun, 8:00 AM - 8:00 PM' },
        { id: 'cater2', name: 'Manjeera Caterers', description: 'Delicious and hearty meals.', contact: '+91 097006 55007', hours: 'Mon-Sun, 9:00 AM - 9:00 PM' },
        { id: 'cater3', name: 'Telugu Inti Vindhu Catering Services', description: 'Traditional Telugu dishes.', contact: '+91 097006 55008', hours: 'Mon-Sun, 7:00 AM - 7:00 PM' }
    ],
    gachibowli: [
        { id: 'cater1', name: 'Home\'s Kitchen', description: 'Homely & Nutritious Breakfast, Lunch & Dinner Meal Boxes & Catering.', contact: '+91 097006 55009', hours: 'Mon-Sun, 7:00 AM - 8:00 PM' },
        { id: 'cater2', name: 'Concept Caterers MR Group', description: 'Customized catering solutions.', contact: '+91 097006 55010', hours: 'Mon-Sun, 8:00 AM - 9:00 PM' },
        { id: 'cater3', name: 'Zia Caterer - Hyderabad', description: 'Top-quality catering services.', contact: '+91 097006 55011', hours: 'Mon-Sun, 9:00 AM - 10:00 PM' }
    ]
    // Add other cities with similar structure
};

const menu = `
    <h2>Veg Menu</h2>
    <ul>
        <li>Appetizers</li>
        <ul>
            <li>Paneer Tikka</li>
            <li>Spring Rolls</li>
            <li>Vegetable Samosas</li>
            <li>Stuffed Mushrooms</li>
            <li>Aloo Tikki</li>
            <li>Vegetable Pakoras</li>
            <li>Crispy Corn Fritters</li>
        </ul>
        <li>Soups</li>
        <ul>
            <li>Creamy Vegetables Soup</li>
            <li>Corn Soup</li>
            <li>Broccoli Cheddar Soup</li>
            <li>Hot and Sour Vegetables Soup</li>
            <li>Mushroom Soup</li>
        </ul>
        <li>Salads</li>
        <ul>
            <li>Caesar Salad (with Grilled Vegetables)</li>
            <li>Vegetables Kebab Salad</li>
            <li>Grilled Mushroom Salad</li>
            <li>Avocado Mushroom Salad</li>
        </ul>
        <li>Main Course</li>
        <ul>
            <li>Vegetable Biryani</li>
            <li>Vegetable Pulav</li>
            <li>Paneer Tikka Biryani</li>
            <li>Panner Butter Masala</li>
            <li>Chana Masala</li>
            <li>All mix Vegetable Masala Curry</li>
            <li>Gutti Vankaya Masala Curry</li>
            <li>Aloo Tomato Curry</li>
            <li>Pappu Tomato Curry</li>
            <li>Dal Makhni</li>
            <li>Sambhar</li>
            <li>Palak Paneer Curry</li>
            <li>Malai Kofta</li>
            <li>Paneer Tikka Masala</li>
            <li>Kaddai Paneer</li>
        </ul>
        <h2>Non-Veg Menu</h2>
        <ul>
            <li>Appetizers</li>
            <ul>
                <li>Chicken Wings (Buffalo, BBQ, Teriyaki)</li>
                <li>Chicken Lollipops</li>
                <li>Chicken Pakoras</li>
                <li>Crispy Chicken Tenders</li>
                <li>Chicken Shawarma Wraps</li>
                <li>Lemon Herb Chicken Bites</li>
                <li>Mutton Seekh Kebabs</li>
                <li>Mutton Shami Kebabs</li>
                <li>Mutton Samosas</li>
                <li>Mutton Kebab Rolls</li>
                <li>Mutton Tikka</li>
                <li>Prawn Cocktail</li>
                <li>Spicy Tuna Roll (Sushi)</li>
                <li>Grilled Shrimp Skewers</li>
                <li>Spicy Tuna Tartare</li>
                <li>Miso Glazed Salmon Bites</li>
            </ul>
            <li>Soups</li>
            <ul>
                <li>Creamy Chicken Soup</li>
                <li>Chicken and Sweetcorn Soup</li>
                <li>Chicken Broccoli Cheddar Soup</li>
                <li>Chicken Hot and Sour Soup</li>
                <li>Chicken Mushroom Soup</li>
                <li>Mutton Shorba</li>
                <li>Mutton Yakhni Soup</li>
                <li>Mutton Paya Soup</li>
                <li>Mutton Barley Soup</li>
                <li>Fish Chowder</li>
                <li>Fish Head Soup</li>
                <li>Fish and Coconut Milk Soup</li>
                <li>Fish and Vegetable Soup</li>
            </ul>
            <li>Salads</li>
            <ul>
                <li>Caesar Salad (with Grilled Chicken)</li>
                <li>Chicken Caesar Salad</li>
                <li>BBQ Chicken Salad</li>
                <li>Mutton Kebab Salad</li>
                <li>Grilled Lamb Salad</li>
                <li>Mutton Shredded Salad</li>
                <li>Grilled Salmon Salad</li>
                <li>Shrimp Avocado Salad</li>
                <li>Spicy Tuna Salad</li>
                <li>Prawn Mango Salad</li>
            </ul>
            <li>Main Course</li>
            <ul>
                <li>Chicken Biryani</li>
                <li>Chicken Dum Biryani</li>
                <li>Chicken Handi</li>
                <li>Bone-less Chicken Biryani</li>
                <li>Chicken Fried Rice</li>
                <li>Tandoori Chicken</li>
                <li>Butter Chicken</li>
                <li>Chicken Handi</li>
                <li>Murgh Musallam</li>
                <li>Hyderabad Mutton Biryani</li>
                <li>Mutton Curry</li>
                <li>Mutton Yakhni</li>
                <li>Nalli Nihari</li>
                <li>Mutton Keema</li>
                <li>Laal Maas</li>
                <li>Mutton Rogan Josh</li>
                <li>Mutton Shahi Korma</li>
                <li>Mutton Mugulai</li>
                <li>Fish Biryani</li>
                <li>Fish Malai Curry</li>
                <li>Salmon Teriyaki</li>
                <li>Methi Machli</li>
                <li>Crispy Fried Calamari</li>
                <li>Prawn Masala Curry</li>
                <li>Butter Garlic Prawns</li>
                <li>Crab Curry</li>
                <li>Prawn Coconut Curry</li>
                <li>Lobster Thermidor</li>
                <li>Grilled Lobster with Garlic Butter</li>
                <li>Egg Dum Masala</li>
                <li>Egg Biryani</li>
                <li>Egg Pulusu</li>
                <li>Egg Butter Masala</li>
            </ul>
            <h2>Bread</h2>
            <ul>
                <li>Garlic Naan</li>
                <li>Butter Naan</li>
                <li>Paneer Naan</li>
                <li>Stuffed Naan</li>
                <li>Roti</li>
                <li>Paratha</li>
                <li>Roomali Roti</li>
                <li>Aloo Paratha</li>
                <li>Butter Roti</li>
                <li>Missi Roti</li>
                <li>Chapati</li>
                <li>Bhakri</li>
            </ul>
            <h2>Rice</h2>
            <ul>
                <li>Vegetable Pulao</li>
                <li>Chicken Pulao</li>
                <li>Chicken Biryani</li>
                <li>Mutton Biryani</li>
                <li>Jeera Rice</li>
                <li>Coconut Rice</li>
                <li>Palak Rice</li>
                <li>Lemon Rice</li>
                <li>Khichdi</li>
                <li>Vegetable Fried Rice</li>
                <li>Egg Fried Rice</li>
                <li>Chicken Fried Rice</li>
                <li>Mutton Fried Rice</li>
                <li>Prawn Fried Rice</li>
            </ul>
            <h2>Bread</h2>
                    <ul>
                        <li>Naan</li>
                        <li>Garlic Bread</li>
                        <li>Dinner Rolls</li>
                        <li>Pita Bread</li>
                        <li>Sour Dough</li>
                    </ul>
                <h2>Desserts</h2>
                    <ul>
                        <li>Cakes</li>
                        <li>Pastries</li>
                        <li>Ice-creams</li>
                        <li>Sweets</li>
                        <li>Cup-Cakes</li>
                        <li>Fruit Custards</li>
                    </ul> 
                <h2>Beverages</h2>
                    <ul>
                        <h2>Non-Alcoholic</h2>
                        <ul>
                            <li>Soft Drinks</li>
                            <li>Mocktails</li>
                            <li>Fresh Juices</li>
                            <li>Coffee</li>
                            <li>Tea</li>
                        </ul>
                <h2>Alcoholic</h2>
                        <ul>
                            <li>Wine</li>
                            <li>Beer</li>
                            <li>Cocktails</li>
                            <li>Whiskey</li>
                            <li>Champagne</li>
                        </ul> 
                    </ul>
                    
                <h2>Special Stations</h2>
                    <ul>
                        <li>Live BBQ Station</li>
                        <li>Pasta Station</li>
                        <li>Live Paan Station</li>
                        <li>Chat station</li>
                        <li>Dessert Station</li>
                    </ul> 
                </ul>
        </ul>
    </div>
`;
function displayCateringOptions(city) {
    const cateringContainer = document.getElementById('cateringContainer');
    cateringContainer.innerHTML = '';

    if (cateringData[city]) {
        cateringData[city].forEach(caterer => {
            const catererCard = document.createElement('div');
            catererCard.classList.add('caterer-card');

            const catererName = document.createElement('h2');
            catererName.textContent = caterer.name;
            catererCard.appendChild(catererName);

            const catererDescription = document.createElement('p');
            catererDescription.textContent = caterer.description;
            catererCard.appendChild(catererDescription);

            const catererContact = document.createElement('p');
            catererContact.textContent = `Contact: ${caterer.contact}`;
            catererCard.appendChild(catererContact);

            const catererHours = document.createElement('p');
            catererHours.textContent = `Hours: ${caterer.hours}`;
            catererCard.appendChild(catererHours);

            cateringContainer.appendChild(catererCard);
        });
    } else {
        const noCaterersMessage = document.createElement('p');
        noCaterersMessage.textContent = 'No catering options found in this city.';
        cateringContainer.appendChild(noCaterersMessage);
    }

    document.getElementById('cateringOptions').style.display = 'block';
}

function showCateringOptions() {
    const city = document.getElementById('city').value;
    const cateringList = document.getElementById('caterings-list');
    const cateringOptions = cateringData[city] || [];
    
    cateringList.innerHTML = cateringOptions.map(catering => `
        <div class="catering-item">
            <h3>${catering.name}</h3>
            <p>${catering.description}</p>
            <p><strong>Contact:</strong> ${catering.contact}</p>
            <p><strong>Hours:</strong> ${catering.hours}</p>
            <button onclick="viewMenu('${catering.id}')">View Menu</button>
            <button onclick="selectCatering('${catering.id}', '${catering.name}')">Select</button>
        </div>
    `).join('');
}

function viewMenu(cateringId) {
    const cateringDetails = document.getElementById('catering-details');
    const cateringInfo = document.getElementById('catering-info');
    
    cateringInfo.innerHTML = menu;
    cateringDetails.style.display = 'block';
}

function closeDetails() {
    const cateringDetails = document.getElementById('catering-details');
    cateringDetails.style.display = 'none';
}

function selectCatering(cateringId, cateringName) {
    // Store the selected catering ID and name
    selectedCatering = { id: cateringId, name: cateringName };
    
    // Provide feedback to the user
    alert(`You have selected ${cateringName}.`);
    
    // Optionally, you can update the UI or perform other actions
    document.getElementById('caterings-list').innerHTML = `
        <p><strong>Selected Catering:</strong> ${cateringName}</p>
        <button onclick="proceedWithSelection()">Proceed</button>
    `;
}

function proceedWithSelection() {
    if (selectedCatering) {
        // Example action: Redirect to another page or update the UI
        alert(`Proceeding with the selected catering: ${selectedCatering.name}.`);
        // You can also redirect to another page or perform further actions
        // window.location.href = 'next-page.html';
    } else {
        alert('No catering option selected.');
    }
}
