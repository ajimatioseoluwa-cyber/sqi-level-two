let endPoint = 'https://mongotest2026.vercel.app/api/foods';

let allFoods = [];

let foodPicture = {

    "Jollof Rice": "https://media.istockphoto.com/id/1650430774/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=1024x1024&w=is&k=20&c=uBeJEH5ra_fOFE1tcGIH1kSZIW625SDowOdfzDJcO4g=",

    "Pounded Yam": "https://media.istockphoto.com/id/1398351216/photo/pounded-yam-fufu.jpg?s=612x612&w=0&k=20&c=4gb1cKRbHaCkhU05W2rDRlQ8yjK5kou7tWUyuHWI3gE=",

    "Egusi Soup": "https://images.unsplash.com/photo-1763048443535-1243379234e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pZ2VyaWFuJTIwZWd1c2klMjBzb3VwfGVufDB8fDB8fHww",

    "Suya": "https://media.istockphoto.com/id/1151916066/photo/nigerian-pepper-beef-suya-on-stakes-at-party.jpg?s=612x612&w=0&k=20&c=Vrd7BdX-rhUAHBkGjUKdecpK02O8X5L4kZCThLvPNJc=",

    "Amala": "https://media.istockphoto.com/id/1398349731/photo/served-amala-with-assorted-meat.jpg?s=612x612&w=0&k=20&c=eU5NvBEprvy-ZgRM3L_HNelHgpeC2CvhTDZqhZvQp8Y=",

    "Akara": "https://media.istockphoto.com/id/1008416572/photo/nigerian-bean-cake-in-plastic-bowl.jpg?s=612x612&w=0&k=20&c=XMS9OvAGlM2x-w-xKj5vzve8uPUKu4WA5EwSMkZmj3Y=",

    "Moi Moi": "https://media.istockphoto.com/id/2246275407/photo/tasty-nigerian-traditional-bean-cake-moi-moi-ready-to-eat.jpg?s=612x612&w=0&k=20&c=Mdllubwn1tGCvr78PulzrWZQQG-VkCl2A6YR4-fH26Q=",

    "Fried Rice": "https://media.istockphoto.com/id/1486327017/photo/party-fried-rice.jpg?s=612x612&w=0&k=20&c=sbyph2GK5iuEwyZYYR_8n9YMsMpTfzGEWcj4JE7rV_U=",

    "Efo Riro": "https://media.istockphoto.com/id/2151441775/photo/a-serving-of-efo-riro-being-served-at-a-party-for-guests.jpg?s=612x612&w=0&k=20&c=kq4evWMLrp2cxf1eG74tOOJb3ru5bJxMo-IQa3qfT-0=",

    "Banga Soup": "https://thunderbayafricanrestaurant.ca/wp-content/uploads/2023/08/Banga-Soup-4-litres-1.jpeg ",

    "Afang Soup": "https://sisijemimah.com/wp-content/uploads/2016/04/Afang-soup-14.jpg",

    "Okro Soup": "https://sisijemimah.com/wp-content/uploads/2015/10/DSC_2189-scaled.jpg",

    "Pepper Soup": "https://media.istockphoto.com/id/1087788114/photo/nigerian-goat-meat-pepper-soup-served-in-a-white-bowl.jpg?s=612x612&w=0&k=20&c=nWPgg4w9DdjUTtPOxfFd07_vq-EVIgPs7NTQJfV0J1c=",

    "Tuwo Shinkafa": "https://eatwellabi.com/wp-content/uploads/2022/10/Jamaican-chicken-soup-and-tuwo-15.jpg",

    "Puff Puff": "https://media.istockphoto.com/id/2208478493/photo/bowl-overflowing-with-freshly-made-golden-brown-puff-puffs-boortsog-boorsok-copy-space.webp?s=1024x1024&w=is&k=20&c=hS4CwxH4BslGUZlhGIR2UAXv9iojzOo2zEKv6nKlBPg=",

    "Boli (Roasted Plantain)": "https://media.istockphoto.com/id/1410562741/photo/nigerian-roasted-plantains-boli-ready-to-eat.jpg?s=612x612&w=0&k=20&c=74Uafo31fs4X26RN8LRgy0DIhX-Hf6dgku224S5mn7A=",

    "Beans (Ewa Agoyin)": "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=800",

    "Asun": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800",

    "Abacha (African Salad)": "https://meetingyoumagazine.com.ng/wp-content/uploads/2022/08/IMG-20220822-WA0030.jpg",

    "Ofada Rice": "https://media.istockphoto.com/id/964296304/photo/fish-with-tomato-sauce-with-rice.jpg?s=612x612&w=0&k=20&c=GWap71DgkxOtCm8GE61XvVs-Oj2Tm29TRm4m_kfHqDM=",

    "Asaro (Yam Porridge)": "https://i.pinimg.com/originals/35/0b/ce/350bceb2a2b981870cec0b3ed9f101f4.jpg",

    "Catfish Pepper Soup": "https://images.unsplash.com/photo-1534940859016-d530846d19da?auto=format&fit=crop&w=800",

    "Nkwobi": "https://fabwoman.ng/wp-content/uploads/2017/11/nkw.jpg",

    "Edikang Ikong":"https://media.istockphoto.com/id/1360632769/photo/nigerian-pounded-yam-served-with-afang-soup-ready-to-eat.jpg?s=612x612&w=0&k=20&c=UqA_3Xslpl_7sTj1zYmolDOl93eVdwPYvYbF1OIUqTU=",

    "Oha Soup":"https://proveg.org/ng/wp-content/uploads/sites/4/2024/04/Oha-soup-scaled-e1696234519954.jpg",

    "Chin Chin":"https://kentetv.com/wp-content/uploads/2023/11/Chin_Chin-scaled.webp",

    "Ewa Agoyin":"https://www.chefspencil.com/wp-content/uploads/Ewa-Agoyin-1.jpg",
   
    "Gizdodo":"https://www.mydiasporakitchen.com/wp-content/uploads/2020/11/img_7747.jpg",

    "Masa":"https://www.seriouseats.com/thmb/wL-iTNLR9XNPMFsb465i98uSvR0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20221108-NigerianMasaMaureen-Celestine-2700-d06fd5ea0a9f4486af4bd555e5810aec.JPG",

    "Ofensala (White Soup)":"https://i.ytimg.com/vi/3OCl7A9v-gs/maxresdefault.jpg",

    "Dodo (Fried Plantain)":"https://fthmb.tqn.com/-Agfk_EB8t3TydL0kPfOO3TK0CY=/4500x3003/filters:fill(auto,1)/cuban-cuisine-deep-fried-ripe-plantains-500247892-582366c65f9b58d5b1f0be67.jpg",

    "Miyan Kuka":"https://afrifoodnetwork.com/wp-content/uploads/2017/06/miyan-kuka.jpg",

    "Yamarita (Egg-coated Yam)":"https://1qfoodplatter.com/wp-content/uploads/2016/01/Yamarita-6-1140x761.jpg"
};

const defaultImg = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800";

let favorites = JSON.parse(localStorage.getItem('naijaFavs')) || [];



// --- FAVOURITES HELPERS ---

const updateNavCount = () => {
    document.getElementById('viewFavorites').innerHTML = `
        <img src="mdi--favourite.svg" class="me-2" alt="">Favorites (${favorites.length})
    `;
}

const isFav = (foodId) => favorites.includes(String(foodId));

const addFav = (foodId) => {
    if (isFav(foodId)) {
        favorites = favorites.filter(id => id !== String(foodId));
    } else {
        favorites.push(String(foodId));
    }

    localStorage.setItem('naijaFavs', JSON.stringify(favorites));
    updateNavCount();

    // Update just this card's heart icon without re-rendering everything
    const btn = document.getElementById(`fav-btn-${foodId}`);
    if (btn) {
        btn.querySelector('img').src = isFav(foodId) ? "mdi--favourite.svg" : "mdi--favourite-border.svg";
    }

    // Update modal button text if modal is open for this food
    const modalFavBtn = document.getElementById('modal-fav-btn');
    if (modalFavBtn && modalFavBtn.dataset.id === String(foodId)) {
        modalFavBtn.textContent = isFav(foodId) ? "Remove from Favorites" : "Add to Favorites";
    }
}

const viewfav = () => {
    const favFoods = allFoods.filter(food => isFav(food.id));
    renderFoodCards(favFoods.length > 0 ? favFoods : allFoods);
    if (favFoods.length === 0) {
        document.getElementById('foodContainer').innerHTML = `
            <div class="col-12 text-center py-5">
                <h3>No favourites yet! Click the heart on a dish to save it.</h3>
            </div>`;
    }
}



// --- RENDER ---

const renderFoodCards = (dataToDisplay) => {

    const foodcontainer = document.getElementById('foodContainer');

    foodcontainer.innerHTML = ""; 



    if (dataToDisplay.length === 0) {

        foodcontainer.innerHTML = `<div class="col-12 text-center py-5"><h3>No dishes found!</h3></div>`;

        return;

    }

    dataToDisplay.map((info) => {

        let foodId = info.id;
        const foodPic = foodPicture[info.name] || defaultImg;
        const favIcon = isFav(foodId) ? "mdi--favourite.svg" : "mdi--favourite-border.svg";

        foodcontainer.innerHTML += `

            <div class="col-sm-6 col-lg-4">

                <div class="card food-card shadow-sm h-100">

                    <div class="card-img-container" style="height: 200px; overflow: hidden;">

                        <img src="${foodPic}" class="card-img-top h-100 w-100 object-fit-cover" alt="${info.name}">

                    </div>

                    <div class="card-body p-4">

                        <h5 class="fw-bold mb-0">${info.name}</h5>
                        <button id="fav-btn-${foodId}" class="bg-transparent" style="border:none; outline:none;" onclick="addFav('${foodId}')">
                            <img src="${favIcon}" alt="favourite">
                        </button>
                        <p class="text-muted small">${info.description}</p>

                        <div class="d-flex justify-content-between align-items-center pt-3 border-top">

                            <span class="price-tag">₦${info.price}</span>

                            <button class="btn btn-success rounded-pill px-4 btn-sm fw-bold" onclick="showModal('${foodId}')">View Details</button>

                        </div>

                    </div>

                </div>

            </div>`;

    });

}



// --- FETCH ---

const fetchAllFoods = async() => {

    const foodcontainer = document.getElementById('foodContainer')

    const loadingSppinner = document.getElementById('loadingSpinner')

    const result = fetch(endPoint);

    const awaited = await result;

    const awaiting = await awaited.json()

    allFoods = awaiting.data;

    loadingSppinner.style.display = 'block'

    setTimeout(() => {

        loadingSppinner.style.display = 'none'

        renderFoodCards(allFoods)
        updateNavCount()

    }, 3000);

}



// --- MODAL ---

const showModal = (foodId) => {

    const fooddetailmodal = document.getElementById('foodDetailModal')
    const info = allFoods.find(f => String(f.id) === String(foodId));

    if (!info) {
        console.error("Could not find food with ID:", foodId);
        return; 
    }


    const foodPic = foodPicture[info.name]
    const favBtnLabel = isFav(foodId) ? "Remove from Favorites" : "Add to Favorites";

    document.querySelector('.modal-content').innerHTML = `

        <div class="row g-0">

            <div class="col-12" style="height: 250px; overflow: hidden;">

                 <img src="${foodPic}" class="w-100 h-100 object-fit-cover" alt="${info.name}">

            </div>

            <div class="col-md-12">

                <div class="modal-header border-0">

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                </div>

                <div class="modal-body p-4 pt-0">

                    <span class="badge bg-success-subtle text-success mb-2">${info.category}</span>

                    <span class="badge bg-warning-subtle text-success mb-2">${info.region}</span>

                    <h2 class="fw-800 mb-3">${info.name}</h2>

                    <p class="text-muted mb-4">${info.description}</p>

                    <p class="text-muted mb-4">Preparation Time: ${info.preparationTime}</p>


                    <p class="text-muted mb-4">serving size: ${info.servingSize}</p>

                    <h6 class="fw-bold text-uppercase small opacity-50 mb-3">Ingredients</h6>
                       
                    <ul class="list-unstyled">
                     ${info.ingredients.map(item => `<li class="fw-bold text-secondary">• ${String(item).trim()}</li>`).join('')}
                    </ul>


                    <p class="text-muted mb-4">Kcal: ${info.calories}J</p>


                    <p class="text-muted mb-4">Price: ₦${info.price}</p>

                    <div class="d-grid gap-2">

                        <button id="modal-fav-btn" data-id="${foodId}" class="btn btn-success py-3 rounded-4 fw-bold" onclick="addFav('${foodId}'); this.textContent = isFav('${foodId}') ? 'Remove from Favorites' : 'Add to Favorites';">${favBtnLabel}</button>

                    </div>

                </div>

            </div>

            </div>

    `;
    


    const modalElement = document.getElementById('foodDetailModal');
    let myModal = bootstrap.Modal.getOrCreateInstance(modalElement); 
    myModal.show();

}

fetchAllFoods()



// --- FILTERS ---

const handleFilters = () => {

    const searchValue = document.getElementById('searchInput').value.toLowerCase();

    const categoryValue = document.getElementById('categoryFilter').value;

    const regionValue = document.getElementById('regionFilter').value;

    const isSpicy = document.getElementById('spicyFilter').checked;

    const isVeg = document.getElementById('vegFilter').checked;



    const filteredFoods = allFoods.filter((info) => {

        const matchesSearch = info.name.toLowerCase().includes(searchValue) || info.description.toLowerCase().includes(searchValue);

       
        const matchesCategory = categoryValue === 'all' || info.category === categoryValue;


        const matchesRegion = regionValue === 'all' || info.region === regionValue;

        const matchesSpicy = !isSpicy || info.isSpicy === true;

        const matchesVeg = !isVeg || info.isVegetarian === true;



        return matchesSearch && matchesCategory && matchesRegion && matchesSpicy && matchesVeg;

    });

    renderFoodCards(filteredFoods);

}
