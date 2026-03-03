let endPoint = 'https://mongotest2026.vercel.app/api/foods';

let allFoods = [];

let foodPicture = {

    "Jollof Rice": "https://media.istockphoto.com/id/1650430774/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=1024x1024&w=is&k=20&c=uBeJEH5ra_fOFE1tcGIH1kSZIW625SDowOdfzDJcO4g=",

    "Pounded Yam": "https://media.istockphoto.com/id/1398351216/photo/pounded-yam-fufu.jpg?s=612x612&w=0&k=20&c=4gb1cKRbHaCkhU05W2rDRlQ8yjK5kou7tWUyuHWI3gE=",

    "Egusi Soup": "https://images.unsplash.com/photo-1763048443535-1243379234e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pZ2VyaWFuJTIwZWd1c2klMjBzb3VwfGVufDB8fDB8fHww",

    "Suya": "https://media.istockphoto.com/id/1151916066/photo/nigerian-pepper-beef-suya-on-stakes-at-party.jpg?s=612x612&w=0&k=20&c=Vrd7BdX-rhUAHBkGjUKdecpK02O8X5L4kZCThLvPNJc=",

    "Amala": "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%2Fid%2FOIP.Ov39ajBrSh29YWErxhgExwHaHa%3Fpid%3DApi&sp=1772447312T11fe7ca398007b83a6fa51ea1dd92f6a9ebc5bde5bde65392e1bed357e621904",

    "Akara": "https://media.istockphoto.com/id/1008416572/photo/nigerian-bean-cake-in-plastic-bowl.jpg?s=612x612&w=0&k=20&c=XMS9OvAGlM2x-w-xKj5vzve8uPUKu4WA5EwSMkZmj3Y=",

    "Moi Moi": "https://media.istockphoto.com/id/2246275407/photo/tasty-nigerian-traditional-bean-cake-moi-moi-ready-to-eat.jpg?s=612x612&w=0&k=20&c=Mdllubwn1tGCvr78PulzrWZQQG-VkCl2A6YR4-fH26Q=",

    "Fried Rice": "https://media.istockphoto.com/id/1486327017/photo/party-fried-rice.jpg?s=612x612&w=0&k=20&c=sbyph2GK5iuEwyZYYR_8n9YMsMpTfzGEWcj4JE7rV_U=",

    "Efo Riro": "https://media.istockphoto.com/id/2151441775/photo/a-serving-of-efo-riro-being-served-at-a-party-for-guests.jpg?s=612x612&w=0&k=20&c=kq4evWMLrp2cxf1eG74tOOJb3ru5bJxMo-IQa3qfT-0=",

    "Banga Soup": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800",

    "Afang Soup": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800",

    "Okra Soup": "https://images.unsplash.com/photo-1582878826629-29b7ad1ccd2d?auto=format&fit=crop&w=800",

    "Pepper Soup": "https://media.istockphoto.com/id/1087788114/photo/nigerian-goat-meat-pepper-soup-served-in-a-white-bowl.jpg?s=612x612&w=0&k=20&c=nWPgg4w9DdjUTtPOxfFd07_vq-EVIgPs7NTQJfV0J1c=",

    "Tuwo Shinkafa": "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800",

    "Puff Puff": "https://images.unsplash.com/photo-1581006528751-be456574944d?auto=format&fit=crop&w=800",

    "Boli (Roasted Plantain)": "https://media.istockphoto.com/id/1410562741/photo/nigerian-roasted-plantains-boli-ready-to-eat.jpg?s=612x612&w=0&k=20&c=74Uafo31fs4X26RN8LRgy0DIhX-Hf6dgku224S5mn7A=",

    "Beans (Ewa Agoyin)": "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=800",

    "Asun": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800",

    "Abacha": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800",

    "Ofada Rice": "https://media.istockphoto.com/id/964296304/photo/fish-with-tomato-sauce-with-rice.jpg?s=612x612&w=0&k=20&c=GWap71DgkxOtCm8GE61XvVs-Oj2Tm29TRm4m_kfHqDM=",

    "Yam Porridge": "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=800",

    "Catfish Pepper Soup": "https://images.unsplash.com/photo-1534940859016-d530846d19da?auto=format&fit=crop&w=800",

    "Nkwobi": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800",

    "Edikang Ikong":"https://media.istockphoto.com/id/1360632769/photo/nigerian-pounded-yam-served-with-afang-soup-ready-to-eat.jpg?s=612x612&w=0&k=20&c=UqA_3Xslpl_7sTj1zYmolDOl93eVdwPYvYbF1OIUqTU=",

   

};

const defaultImg = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800";

// let favorites = JSON.parse(localStorage.getItem('naijaFavs')) || [];



const renderFoodCards = (dataToDisplay) => {

    const foodcontainer = document.getElementById('foodContainer');

    foodcontainer.innerHTML = ""; 



    if (dataToDisplay.length === 0) {

        foodcontainer.innerHTML = `<div class="col-12 text-center py-5"><h3>No dishes found!</h3></div>`;

        return;

    }

    dataToDisplay.map((info) => {

        // We find the original index so the Modal always shows the right food

        const originalIndex = allFoods.findIndex(f => f._id === info._id);

        const foodPic = foodPicture[info.name] || defaultImg;



        foodcontainer.innerHTML += `

            <div class="col-sm-6 col-lg-4">

                <div class="card food-card shadow-sm h-100">

                    <div class="card-img-container" style="height: 200px; overflow: hidden;">

                        <img src="${foodPic}" class="card-img-top h-100 w-100 object-fit-cover" alt="${info.name}">

                    </div>

                    <div class="card-body p-4">

                        <h5 class="fw-bold mb-0">${info.name}</h5>

                        <p class="text-muted small">${info.description}</p>

                        <div class="d-flex justify-content-between align-items-center pt-3 border-top">

                            <span class="price-tag">₦${info.price}</span>

                            <button class="btn btn-success rounded-pill px-4 btn-sm fw-bold" onclick="showModal('${info._id}')">View Details</button>

                        </div>

                    </div>

                </div>

            </div>`;

    });

}



const fetchAllFoods = async() => {

    const foodcontainer = document.getElementById('foodContainer')

    const loadingSppinner = document.getElementById('loadingSpinner')

    const result = fetch(endPoint);

    const awaited = await result;

    const awaiting = await awaited.json()

    allFoods=awaiting.data;

        loadingSppinner.style.display='block'

    setTimeout(() => {

        loadingSppinner.style.display='none'

        renderFoodCards(allFoods)

    }, 3000);

}







//modal

const showModal = (foodId) => {

    const fooddetailmodal = document.getElementById('foodDetailModal')

    const info = allFoods.find(f => f._id === foodId);

    if (!info) {
        console.error("Could not find food with ID:", foodId);
        return; 
    }

    const foodPic = foodPicture[info.name];

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

                    <h2 class="fw-800 mb-3">${info.name}</h2>

                    <p class="text-muted mb-4">${info.description}</p>

                    <h6 class="fw-bold text-uppercase small opacity-50 mb-3">Ingredients</h6>

                    <p class="fw-bold text-secondary">${info.ingredients}</p>

                    <div class="d-grid gap-2">

                        <button class="btn btn-success py-3 rounded-4 fw-bold">Add to Favorites</button>

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



const handleFilters = () => {

    // 1. Get values using the IDs from your HTML

    const searchValue = document.getElementById('searchInput').value.toLowerCase();

    const categoryValue = document.getElementById('categoryFilter').value;

    const regionValue = document.getElementById('regionFilter').value;

    // MATCH THESE TO YOUR HTML IDs:

    const isSpicy = document.getElementById('spicyFilter').checked;

    const isVeg = document.getElementById('vegFilter').checked;



    const filteredFoods = allFoods.filter((info) => {

        // Search logic

        const matchesSearch = info.name.toLowerCase().includes(searchValue) ||

                              info.description.toLowerCase().includes(searchValue);

       

        // Category logic (Note: Ensure API case matches, e.g., 'Swallow' vs 'swallow')

        const matchesCategory = categoryValue === 'all' || info.category === categoryValue;

       

        // Region logic

        const matchesRegion = regionValue === 'all' || info.region === regionValue;

       

        // Boolean logic (The API might use true/false or "Yes"/"No")

        const matchesSpicy = !isSpicy || info.isSpicy === true;

        const matchesVeg = !isVeg || info.isVegetarian === true;



        return matchesSearch && matchesCategory && matchesRegion && matchesSpicy && matchesVeg;

    });



    renderFoodCards(filteredFoods);

}