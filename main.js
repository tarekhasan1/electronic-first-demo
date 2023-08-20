import "./scss/main.scss";

const cart = "/images/icons8-cart-64.png";
const profile = "/images/icons8-user-50 (1).png";
const search = "/images/icons8-search-50.png";
const pc = "/images/icons8-pc-50.png";
const xbox = "/images/icons8-xbox-50.png";
const playstation = "/images/icons8-playstation-50.png";
const nintendo = "/images/icons8-nintendo-50.png";
const down = "/images/icons8-chevron-24.png";

const data = [
  {
    name: "ExampleGame 1",
    image:
      "https://cdn.vox-cdn.com/thumbor/AY2BXA-XELnbJEI5uRNfGpGCqz0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012144/jbareham_201020_ecl1040_xbox_lead_0001.jpg",
    price: "$49.99",
    discount: "20%",
  },
  {
    name: "GamingAdventure 2",
    image:
      "https://cdn.vox-cdn.com/thumbor/AY2BXA-XELnbJEI5uRNfGpGCqz0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012144/jbareham_201020_ecl1040_xbox_lead_0001.jpg",
    price: "$29.99",
    discount: "15%",
  },
  {
    name: "EpicQuest Online",
    image:
      "https://cdn.vox-cdn.com/thumbor/AY2BXA-XELnbJEI5uRNfGpGCqz0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012144/jbareham_201020_ecl1040_xbox_lead_0001.jpg",
    price: "$59.99",
    discount: "10%",
  },
  {
    name: "CyberBattle Royale",
    image:
      "https://cdn.vox-cdn.com/thumbor/AY2BXA-XELnbJEI5uRNfGpGCqz0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012144/jbareham_201020_ecl1040_xbox_lead_0001.jpg",
    price: "$39.99",
    discount: "25%",
  },
  {
    name: "GalacticArena",
    image:
      "https://cdn.vox-cdn.com/thumbor/AY2BXA-XELnbJEI5uRNfGpGCqz0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012144/jbareham_201020_ecl1040_xbox_lead_0001.jpg",
    price: "$69.99",
    discount: "30%",
  },
];


const platformsData = [
    {
      "name": "Steam",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"
    },
    {
      "name": "Ubisoft Connect",
      "image": "https://www.techspot.com/images2/downloads/topdownload/2021/06/2021-06-01-ts3_thumbs-30c.png"
    },
    {
      "name": "EA app",
      "image": "https://www.techspot.com/images2/downloads/topdownload/2021/06/2021-06-01-ts3_thumbs-30c.png"
    },
    {
      "name": "battle.net",
      "image": "https://www.techspot.com/images2/downloads/topdownload/2021/06/2021-06-01-ts3_thumbs-30c.png"
    },
    {
      "name": "battle.net",
      "image": "https://www.techspot.com/images2/downloads/topdownload/2021/06/2021-06-01-ts3_thumbs-30c.png"
    },
    {
      "name": "Rockstar",
      "image": "https://www.techspot.com/images2/downloads/topdownload/2021/06/2021-06-01-ts3_thumbs-30c.png"
    },
    {
      "name": "GOG.com",
      "image": "https://www.techspot.com/images2/downloads/topdownload/2021/06/2021-06-01-ts3_thumbs-30c.png"
    },
    {
      "name": "Microsoft store",
      "image": "https://www.techspot.com/images2/downloads/topdownload/2021/06/2021-06-01-ts3_thumbs-30c.png"
    },
    {
      "name": "Epic",
      "image": "https://www.techspot.com/images2/downloads/topdownload/2021/06/2021-06-01-ts3_thumbs-30c.png"
    },
    {
      "name": "Chrome store",
      "image": "https://www.techspot.com/images2/downloads/topdownload/2021/06/2021-06-01-ts3_thumbs-30c.png"
    },
  ]

  const prepaidCardData = [
    {
      "name": "Steam Gift Cards",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"
    },
    {
      "name": "IG Gift Cards",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"
    },
    {
      "name": "Blizzards Gift Cards",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"
    }
  ];

document.querySelector("#app").innerHTML = `
  <div>
    <div class="header-container">
      <nav>
        <div class="navbar">
          <div class="nav-section-1">
            <button id="menu-btn">☰</button>
            <img class="logo" src="./images/header_logo_dark_1681808133_643e5b05223c4.webp" alt="" />
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
                <li id="openMenuBtn" class="menu-link">
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
                    <img class="search" src="${search}" alt="" />
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
      <div class="trending-products">${trendingProduct()}</div>
    </div>

    <div id="myModal" class="modal">
      <div class="modal-content">
        <div class="first-section">
          <div class="section-header">
            <h3>Platforms</h3>
            <button>view all</button>
          </div>
          <div class="section-content">
            ${platforms()}
          </div>
        </div>
        <div class="second-section">
          <div class="section-header">
            <h3>Prepaid Cards</h3>
            <button>view all</button>
          </div>
          <div class="section-content">
          ${prepaidCard()}
          </div>
            <div>
                <img src="" alt="" />
                <p></p>
            </div>
          </div>
        </div>
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

//trending product from data
function trendingProduct() {
  let html = "";
  data.slice(0, 3).forEach((item) => {
    html += `<div class="trending-item">
        <div class="img-container">
        <img src=${item.image} alt="" />
        <p class="discount">-${item.discount}</p>
        </div>
        <div class="product-description">
        <p>${item.name}</p>
        <p>${item.price}</p>
        </div>
        </div>`;
  });
  return html;
}

//submenu functionality
document.addEventListener("DOMContentLoaded", function () {
  const openMenuBtn = document.getElementById("openMenuBtn");
  const modal = document.getElementById("myModal");

  openMenuBtn.addEventListener("click", function () {
    modal.style.display = "block";
    openMenuBtn.style.color = "gray";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      openMenuBtn.style.color = "#d6d5d5";
    }
  });
});

function platforms(){
    let html = '';
    platformsData.slice(0,9).forEach((item) => {
        html+=`<div class="platform">
        <img src=${item.image} alt="" />
        <p>${item.name}</p>
</div>`
    });

    return html;
}


function prepaidCard(){
    let html = '';
    prepaidCardData.slice(0,3).forEach((item) => {
        html+=`<div class="prepaid-card">
        <img src=${item.image} alt="" />
        <p>${item.name}</p>
</div>`
    });

    return html;
}
