import "./scss/main.scss";

const logo = "./src/images/header_logo_dark_1681808133_643e5b05223c4.webp";
const cart = "./src/images/icons8-cart-58.png";
const profile = "./src/images/icons8-user-50.png";
const search = "./src/images/icons8-search-50.png";
const pc = "./src/images/icons8-pc.gif";
const xbox = "./src/images/icons8-xbox-50.png";
const playstation = "./src/images/icons8-playstation-50.png";
const nintendo = "./src/images/icons8-nintendo-30.png";
const down = "./src/images/icons8-down-arrow-30.png";

const data = [
    {
      "name": "ExampleGame 1",
      "image": "https://cdn.vox-cdn.com/thumbor/AY2BXA-XELnbJEI5uRNfGpGCqz0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012144/jbareham_201020_ecl1040_xbox_lead_0001.jpg",
      "price": "$49.99",
      "discount": "20%"
    },
    {
      "name": "GamingAdventure 2",
      "image": "https://cdn.vox-cdn.com/thumbor/AY2BXA-XELnbJEI5uRNfGpGCqz0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012144/jbareham_201020_ecl1040_xbox_lead_0001.jpg",
      "price": "$29.99",
      "discount": "15%"
    },
    {
      "name": "EpicQuest Online",
      "image": "https://cdn.vox-cdn.com/thumbor/AY2BXA-XELnbJEI5uRNfGpGCqz0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012144/jbareham_201020_ecl1040_xbox_lead_0001.jpg",
      "price": "$59.99",
      "discount": "10%"
    },
    {
      "name": "CyberBattle Royale",
      "image": "https://cdn.vox-cdn.com/thumbor/AY2BXA-XELnbJEI5uRNfGpGCqz0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012144/jbareham_201020_ecl1040_xbox_lead_0001.jpg",
      "price": "$39.99",
      "discount": "25%"
    },
    {
      "name": "GalacticArena",
      "image": "https://cdn.vox-cdn.com/thumbor/AY2BXA-XELnbJEI5uRNfGpGCqz0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012144/jbareham_201020_ecl1040_xbox_lead_0001.jpg",
      "price": "$69.99",
      "discount": "30%"
    }
  ]

document.querySelector("#app").innerHTML = `
<div>
    <div class="header-container">
        <nav>
            <div class="navbar">
                <div class="nav-section-1">
                    <button id="menu-btn">☰</button>
                    <img class="logo" src="${logo}" alt="" />
                </div>
                <div class="nav-section-2" id="nav-menu">
                    <div class="menu-1">
                        <a href="">Trending</a>
                        <a href="">Pre-order</a>
                        <a href="">Upcoming</a>
                        <a href="">Support 24/7</a>
                    </div>
                    <div class="menu-2">
                        <input
                            id="search-field"
                            type="text"
                            name="search"
                            placeholder="MineCraft, RPG, Multiplayer.."
                        />
                        <ul>
                            <li class="menu-link">
                                <img src="${pc}" alt="" /> PCs
                                <img src="${down}" alt="" />
                            </li>
                            <li class="menu-link">
                                <img src="${xbox}" alt="" /> Xbox
                                <img src="${down}" alt="" />
                            </li>
                            <li class="menu-link">
                                <img src="${playstation}" alt="" /> PlayStation
                                <img src="${down}" alt="" />
                            </li>
                            <li class="menu-link">
                                <img src="${nintendo}" alt="" /> Nintendo
                                <img src="${down}" alt="" />
                            </li>
                            <li>
                                <div id="search-btn" class="search-box">
                                        <img
                                            class="search"
                                            src="${search}"
                                            alt=""
                                        />
                                </div>
                            </li>
                        </ul>
                        <button id="cross-btn">X</button>
                    </div>
                </div>
                <div class="nav-section-3">
                    <img src="${cart}" alt="" />
                    <img src="${profile}" alt="" />
                </div>
            </div>
        </nav>

        <div class="banner">
            <div class="banner-content">
                <div class="heading">
                    <p>in 15 days</p>
                </div>
                <h1>Starfield Digital Premium</h1>
                <h1>Edition + Early Access</h1>
                <div class="pricing">
                    <p class="discount">-25%</p>
                    <h1>79.89$</h1>
                </div>
            </div>
            <div class="offer-section">
                <div class="early-access">
                    <button class="early-access-inside">+EARLY ACCESS</button>
                </div>
            </div>
        </div>
        </div>

        <div class="trending-container">
        <div class="trending-heading">
            <div>
                <h3>Trending</h3>
            </div>
            <div>
                <button>view all</button>
            </div>
        </div>
        <div class="trending-products">
            ${
                trendingProduct()
            }
        </div>
    </div>
    </div>
`;

// search btn hidden and show
const toggleButton = document.getElementById("search-btn");
const searchF = document.getElementById("search-field");
const crossBtn = document.getElementById("cross-btn");

toggleButton.addEventListener("click", () => {
    searchF.style.display = "block";
    toggleButton.style.display = "none";
    crossBtn.style.display = "inline";
});
crossBtn.addEventListener("click", () => {
    searchF.style.display = "none";
    toggleButton.style.display = "flex";
    crossBtn.style.display = "none";
});

// nav menu hidden and show
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    console.log("clicked");
    navMenu.classList.toggle("show");
});


function trendingProduct(){
    let html='';
    data.slice(0,3).forEach(item => {
        html +=`<div class="trending-item">
        <div class="img-container">
        <img src=${item.image} alt="" />
        <p class="discount">-${item.discount}</p>
        </div>
        <div class="product-description">
        <p>${item.name}</p>
        <p>${item.price}</p>
        </div>
        </div>` 
    })
    return html;
}

