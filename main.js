import './scss/main.scss';


const logo = './src/images/header_logo_dark_1681808133_643e5b05223c4.webp';
const cart = './src/images/icons8-cart-58.png';
const profile = './src/images/icons8-user-50.png';
const search = './src/images/icons8-search-50.png';
const pc = './src/images/icons8-pc.gif';
const xbox = './src/images/icons8-xbox-50.png';
const playstation = './src/images/icons8-playstation-50.png';
const nintendo = './src/images/icons8-nintendo-30.png';
const down = './src/images/icons8-down-arrow-30.png';
const banner = './src/images/starfield-mobile.png';


document.querySelector('#app').innerHTML = `
  <div  class="header-container">
  <nav>
  <div class="navbar">
      <div class="nav-section-1">
        <img class="logo" src=${logo} alt="" />
      </div>
      <div class="nav-section-2">
        <div class="menu-1">
          <a href="">Trending</a>
          <a href="">Pre-order</a>
          <a href="">Upcoming</a>
          <a href="">Support 24/7</a>
        </div>
        <div class="menu-2">
        <a href=""><img src=${pc} alt="" /> PCs <img src=${down} alt="" /></a>
        <a href=""><img src=${xbox} alt="" /> Xbox <img src=${down} alt="" /></a>
        <a href=""><img src=${playstation} alt="" /> PlayStation <img src=${down} alt="" /></a>
        <a href=""><img src=${nintendo} alt="" /> Nintendo <img src=${down} alt="" /></a>
        <a href=""><span class="search-box"><div class="image-box"><img class="search" src=${search} alt="" /></div></span></a>
        </div>
      </div>
      <div class="nav-section-3">
        <img src=${cart} alt="" />
        <img src=${profile} alt="" />
      </div>
  </div>
</nav>
  </div>
`