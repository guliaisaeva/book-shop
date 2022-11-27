
// Create a document fragment
const dFrag = document.createDocumentFragment();
console.log(document.body.appendChild(dFrag))
// Create a document header
const headerEl=document.createElement("header");
headerEl.setAttribute("class", "header");
dFrag.appendChild(headerEl)
// Create a document container
const containerEl=document.createElement("div");
containerEl.setAttribute("class", "container");
headerEl.appendChild(containerEl);
// Create a document nav
const navEl=document.createElement("nav");
navEl.setAttribute("class", "nav");
containerEl.appendChild(navEl);
// Create a document logo
const logoEl=document.createElement("div");
logoEl.setAttribute("class", "logo");
logoEl.setAttribute("id", "logo");
const logoLink=document.createElement("a");
logoLink.href="#hero";
logoEl.appendChild(logoLink);
const logoImg=document.createElement("img");
logoImg.src="../../assets/icons/logo.svg";
logoImg.setAttribute("alt", "logo");
logoImg.setAttribute("width", "80");
logoLink.appendChild(logoImg);
navEl.appendChild(logoEl);
// Create a document nav Menu
const menuEl=document.createElement("div");
menuEl.setAttribute("class", "nav__menu");
navEl.appendChild(menuEl);
// ul
const ulEl=document.createElement("ul");
ulEl.setAttribute("class", "nav__list");
menuEl.appendChild(ulEl);
ulEl.innerHTML=`<li class="nav__item"><a href="#hero" class="nav__link nav-p">Home</a></li>
<li class="nav__item"><a href="#catalog" class="nav__link nav-p">Catalog</a></li>
<li class="nav__item"><a href="#footer" class="nav__link nav-p">Contact</a></li>`
//create basket icon
const basketEl=document.createElement("div");
basketEl.setAttribute("class", "basket-shopping");
basketEl.innerHTML=`<a href="#form"><i class="fa-solid fa-cart-shopping nav__link"></i></a>`
navEl.appendChild(basketEl);

// ---------------- Main Block--------------------------
// create main block

const mainEl=document.createElement("main");
mainEl.setAttribute("class","main");
const heroSection=document.createElement("section");
heroSection.setAttribute("class","hero");
heroSection.setAttribute("id","hero");
mainEl.appendChild(heroSection);
const heroContainerEl=document.createElement("div");
heroContainerEl.setAttribute("class", "container");
heroSection.appendChild(heroContainerEl);
const heroContentEl=document.createElement("div");
heroContentEl.setAttribute("class","hero__content");
heroContainerEl.appendChild(heroContentEl);
const heroImgEl=document.createElement("div");
heroImgEl.setAttribute("class","hero__img");
heroContentEl.appendChild(heroImgEl);

//right side of Hero
const heroTextEl=document.createElement("div");
heroTextEl.setAttribute("class","hero__text-content");
heroContentEl.appendChild(heroTextEl);
const heroSubtitle=document.createElement("p");
heroSubtitle.setAttribute("class","hero__paragraf");
heroSubtitle.innerText="Dear Book Lover"
heroTextEl.appendChild(heroSubtitle);
const heroTitle=document.createElement("h1");
heroTitle.innerText="Welcome To Our Book Shop!"
heroTextEl.appendChild(heroTitle);
//right side Quotes part of Hero
const heroQuotesEl=document.createElement("div");
heroQuotesEl.setAttribute("class","hero__quotes");
heroTextEl.appendChild(heroQuotesEl);
const heroQuotesTextEl=document.createElement("div");
heroQuotesTextEl.setAttribute("class","hero__quotes-text");
const heroQuotesSpanEl=document.createElement("span");
heroQuotesSpanEl.setAttribute("class","hero__quotes-p")
let quotesText="A good bookshop is not just about selling books from shelves,but reaching out into the world and making a difference.";
heroQuotesSpanEl.innerText=quotesText;
heroQuotesTextEl.appendChild(heroQuotesSpanEl);
const quoutAuthor=document.createElement("p");
quoutAuthor.setAttribute("class","hero__quotes-author")
quoutAuthor.innerText="David Almond"
heroQuotesTextEl.appendChild(quoutAuthor);
const quoutBtn=document.createElement("button");
quoutBtn.setAttribute("id","hero__quotes-btn")
quoutBtn.innerText="New Quote"
heroQuotesTextEl.appendChild(quoutBtn);
heroQuotesEl.appendChild(heroQuotesTextEl);

// HERO QUOTES BLOCK functionlaity

const quotes = [
  {
    quote:
    '"A good bookshop is like a genteel black hole that knows how to read."',
    person: "Terry Pratchett",
  },
  {
    quote:
      '"When I have a little money, I buy books; and if I have any left, I buy food and clothes."',
    person: "Erasmus",
  },
  {
    quote:
      '"That’s the thing about books. They let you travel without moving your feet."',
    person: "Jhumpa Lahiri",
  },
  {
    quote:
      '"If you only read the books that everyone else is reading, you can only think what everyone else is thinking."',
    person: "Haruki Murakami",
  },
  {
    quote: '"Where is human nature so weak as in the bookstore."',
    person: "Henry Ward Beecher",
  },
  {
    quote:
      '"A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one."',
    person: "George R.R. Martin",
  },
];
quoutBtn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    heroQuotesSpanEl.innerText = quotes[random].quote;
    quoutAuthor.innerText = quotes[random].person;
  });





// -------------Catalog Section------------------
 const catalogEl=document.createElement("section");
 catalogEl.setAttribute("class","catalog");
 catalogEl.setAttribute("id","catalog");
 mainEl.appendChild(catalogEl);
 const catalogContainer=document.createElement("div");
 catalogContainer.setAttribute("class","container");
 catalogEl.appendChild(catalogContainer);
//  catalog title
const catalogTitle=document.createElement("h2");
catalogTitle.setAttribute('class',"catalog__title");
catalogTitle.innerText="Book Catalog";
catalogContainer.appendChild(catalogTitle);

 async function renderCatalogCarts(){
    let url = '../main/catalogBooks.json';
    let data = await fetch(url);
    let dataFrom= await data.json();
    console.log(dataFrom)

    for(cards of dataFrom.results){
        boxGenerator(charachters);
    }
    }
    renderCatalogCarts();
    function boxGenerator(dataFrom){
        const boxEl=document.createElement("div");
        boxEl.classList.add("container__items");
        container.appendChild(boxEl);
        const imgEl=document.createElement("img");
        imgEl.src=`${dataFrom.image}`;
        boxEl.appendChild(imgEl);
        const linkEl=document.createElement("a");
        linkEl.href="charackter.html";
        linkEl.innerHTML=`${dataFrom.name}`
        boxEl.appendChild(linkEl);
    }


 //add to body
dFrag.appendChild(mainEl);
document.body.appendChild(dFrag);