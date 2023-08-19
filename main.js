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

document.querySelector("#app").innerHTML = html`
<div class="header-container">
<nav>
  <div class="navbar">
    <div class="nav-section-1">
      <img class="logo" src="${logo}" alt="" />
    </div>
    <div class="nav-section-2">
      <div class="menu-1">
        <a href="">Trending</a>
        <a href="">Pre-order</a>
        <a href="">Upcoming</a>
        <a href="">Support 24/7</a>
      </div>
      <div class="menu-2">
        <div class="menu-to-field">
          <input
            id="search-field"
            type="text"
            name="search"
            placeholder="MineCraft, RPG, Multiplayer.."
          />
        </div>
        <a class="menu-link" href=""
          ><img src="${pc}" alt="" /> PCs <img src="${down}" alt=""
        /></a>
        <a class="menu-link" href=""
          ><img src="${xbox}" alt="" /> Xbox <img src="${down}" alt=""
        /></a>
        <a class="menu-link" href=""
          ><img src="${playstation}" alt="" /> PlayStation
          <img src="${down}" alt=""
        /></a>
        <a class="menu-link" href=""
          ><img src="${nintendo}" alt="" /> Nintendo
          <img src="${down}" alt=""
        /></a>
        <span id="search-btn" class="search-box"
            ><div class="image-box">
              <img class="search" src="${search}" alt="" /></div></span
        >
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
      <div class="early-access-inside">+Early Access</div>
    </div>
  </div>
</div>
</div>
`

const toggleButton = document.getElementById('search-btn');
const searchF = document.getElementById('search-field');

toggleButton.addEventListener('click', () => {
    console.log("clicked");
    searchF.style.display = "block";
});