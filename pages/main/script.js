(async()=>{

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
//create shopping counter
const shoppingCounter=document.createElement("span");
shoppingCounter.innerText="0";
shoppingCounter.setAttribute("id","shopping-count");
basketEl.appendChild(shoppingCounter);


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
const heroImg=document.createElement("img");
heroImg.setAttribute("alt","hero Img");
heroImg.src="../../assets/images/hero-footer/heroImg.svg";
heroImgEl.appendChild(heroImg);
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
const boxEl=document.createElement("div");
boxEl.classList.add("catalog__content");
catalogContainer.appendChild(boxEl);
// shopping Cart elements
 //create shopping cart section
 const shoppingCartSection=document.createElement("section");
 shoppingCartSection.classList.add("shopping-cart");
 mainEl.appendChild(shoppingCartSection);
 //create shopping cart title
 const shoppingCartTitle=document.createElement("p");
 shoppingCartTitle.classList.add("shopping-cart__title");
 shoppingCartTitle.innerText="Your Book Order Cart";
 shoppingCartSection.appendChild(shoppingCartTitle);
 // //create shopping cart content
 const shoppingCartContent=document.createElement("div");
 shoppingCartContent.classList.add("shopping-cart__content");
 shoppingCartSection.appendChild(shoppingCartContent);
 // //create shopping cart container
 const shoppingCartContainer=document.createElement("div");
 shoppingCartContainer.classList.add("cards-container");
 shoppingCartContent.appendChild(shoppingCartContainer);

//-----------create Total--------------------
const shoppingTotal=document.createElement("div");
shoppingTotal.classList.add("total-div");
shoppingTotal.innerText="Total: $"
const totalSpan=document.createElement("span");
totalSpan.setAttribute("id","total");
totalSpan.innerText="0"
shoppingTotal.appendChild(totalSpan)
shoppingCartContent.appendChild(shoppingTotal);
//create Total confirm button
const confirmBtn=document.createElement("a");
confirmBtn.setAttribute("id","confirmBtn")
confirmBtn.innerText="Confirm Order";
shoppingCartContent.appendChild(confirmBtn);



//function to render carts taking book infos from json file


 async function renderCatalogCarts(){
    // let url = './catalogBooks.json';
    const url = '../../catalogBooks.json';
    let data = await fetch(url);
    let dataFrom = await data.json();
    return dataFrom;
    }
    let dataFrom=await renderCatalogCarts();
    console.log(dataFrom)
    for(cards of dataFrom){
      catalogGenerator(cards)
  }
  // renderCatalogCarts();
    //function to create catalog cards taking book infos from json file
    function catalogGenerator(dataFrom){
      const cardEl=document.createElement("div");
      cardEl.classList.add("card");
      boxEl.appendChild(cardEl);
      //create img-box and img
      const cardImgEl=document.createElement("div");
      cardImgEl.classList.add("card__img-box");
      cardEl.appendChild(cardImgEl);
      const imgEl=document.createElement("img");
      imgEl.setAttribute("alt","book");
      imgEl.src=`${dataFrom.imageLink}`;
      cardImgEl.appendChild(imgEl);
     //create card info part
     const cardInfoEl=document.createElement("div");
     cardInfoEl.classList.add("card__info");
     cardEl.appendChild(cardInfoEl);
        //create card info title
        const bookTitleEl=document.createElement("h3");
        bookTitleEl.classList.add("title");
         bookTitleEl.innerText=`${dataFrom.title}`;
         cardInfoEl.appendChild(bookTitleEl)
           //create card info  author
           const bookAuthorEl=document.createElement("h4");
           bookAuthorEl.classList.add("author");
           bookAuthorEl.innerText=`${dataFrom.author}`;
            cardInfoEl.appendChild(bookAuthorEl)
            //create card info  show more link
            const bookDetailEl=document.createElement("span");
            bookDetailEl.classList.add("show-more");
            bookDetailEl.setAttribute("id","show-more")
            bookDetailEl.innerText="Show more";
             cardInfoEl.appendChild(bookDetailEl);
            //create card info  price
            const priceBox=document.createElement("div")
             priceBox.innerText="$"
             priceBox.classList.add("priceDiv")
            const bookPrice=document.createElement("span");
            bookPrice.classList.add("price");
            bookPrice.innerText=`${dataFrom.price}`;
             priceBox.appendChild(bookPrice)
             cardInfoEl.appendChild(priceBox)
            //create card info button
            const bookBtnEl=document.createElement("button");
            bookBtnEl.setAttribute("id","bookBtn")
            bookBtnEl.innerText="Add To Bag";
             cardInfoEl.appendChild(bookBtnEl);



        // Popup Block
        //create popup container
        const popupContainerEl=document.createElement("div");
        popupContainerEl.classList.add("popup-container","active");
        //create popup title
        const popupTitleEl=document.createElement("h3");
        popupTitleEl.classList.add("title");
        popupTitleEl.innerText=`${dataFrom.title}`;
        popupContainerEl.appendChild(popupTitleEl);
        //create popup author
        const popupAuthorEl=document.createElement("h4");
        popupAuthorEl.classList.add("author");
        popupAuthorEl.innerText=`${dataFrom.author}`;
        popupContainerEl.appendChild(popupAuthorEl);
        //create popup  info about book
        const aboutBookEl=document.createElement("p");
        aboutBookEl.classList.add("about-book");
        aboutBookEl.setAttribute("id","about-book");
        aboutBookEl.innerText=`${dataFrom.description}`
        popupContainerEl.appendChild(aboutBookEl);
        cardInfoEl.appendChild(popupContainerEl);
        //create popup close btn
        const popupcloseEl=document.createElement("div");
        popupcloseEl.classList.add("close-icon");
        popupContainerEl.appendChild( popupcloseEl);
        //create popup close icon
        const closeIcon=document.createElement("i")
        closeIcon.classList.add("fa-solid","fa-xmark","fa-2x");
        popupcloseEl.appendChild(closeIcon);

        // POPUP FUNCTIONLAITY

        bookDetailEl.addEventListener("click",()=>{
          cardImgEl.classList.add("active");
          popupContainerEl.classList.remove("active");
        });

        popupcloseEl.addEventListener("click",()=>{
          cardImgEl.classList.remove("active");
          popupContainerEl.classList.add("active");
        })

// -----------------SHOPPING CART SECTION-------------------------

         bookBtnEl.addEventListener('click',function(event){
          alert("Thank you!Your book is added to cart")
          let shoppinCartImgFullPAth=event.target.parentElement.previousElementSibling.children[0].src;
          let pos=shoppinCartImgFullPAth.indexOf("img")+22;
          let partPath=shoppinCartImgFullPAth.slice(pos);
          console.log(partPath)
          let bookName=event.target.parentElement.parentElement.children[1].children[0].textContent;
          let bookAuthor=event.target.parentElement.parentElement.children[1].children[1].textContent;
          let bookPriceinCart=event.target.parentElement.parentElement.children[1].children[3].textContent;
          let finalPrice=bookPriceinCart.slice(1).trim();
          console.log(finalPrice)
          const items={}
          items.image=`${partPath}`;
          items.name=bookName;
          items.author=bookAuthor;
          items.price=bookPriceinCart;
          items.price=finalPrice;
          const shoppingCart=document.createElement("div");
          shoppingCart.classList.add("sh-card");
               shoppingCart.innerHTML=`
               <div class="card__img-box">
                   <img src=${items.image} alt="book">
               </div>
               <div class="card__info shoppingcartinfo">
                   <h3 class="title">${items.name}</h3>
                   <h4 class="author">${items.author}</h4>
                   <span class="card-price">${items.price}</span>
               </div> <i class="fa-solid fa-xmark fa-2x cart-icon"></i>`
               shoppingCartContainer.appendChild(shoppingCart);
               showTotals()
            //remove selected book function
            function deleteCart(){
              const deleteBtns=document.querySelectorAll(".fa-xmark");
              deleteBtns.forEach(function(btn){
               btn.addEventListener("click",(e)=>{
                 let selectedItem = e.target.parentElement;
                selectedItem.remove();
               })
             })

            }
            deleteCart()

            });

  }
  //Shopping Card Show Functionality
  basketEl.addEventListener("click",()=>{
    console.log("works")
    shoppingCartSection.classList.toggle("active");
   })
  //show Total function

  function showTotals(){
    const total=[];
    const items=document.querySelectorAll(".card-price");
    items.forEach(function(item){
      total.push(parseFloat(item.textContent));
    })
      const totalMoney=total.reduce(function(total,item){
        total += item;
        return total;
      },0);
      const finalMoney=totalMoney.toFixed(2);
     totalSpan.textContent=finalMoney;
     shoppingCounter.textContent=total.length
    }

// Confirm Order Functionality
confirmBtn.addEventListener("click",()=>{
 location.href=("/book-shop/pages/form/index.html");
})

 //add to body
dFrag.appendChild(mainEl);
document.body.appendChild(dFrag);
})()
// // Create a document fragment
// const dFrag = document.createDocumentFragment();
// console.log(document.body.appendChild(dFrag))
// // Create a document header
// const headerEl=document.createElement("header");
// headerEl.setAttribute("class", "header");
// dFrag.appendChild(headerEl)
// // Create a document container
// const containerEl=document.createElement("div");
// containerEl.setAttribute("class", "container");
// headerEl.appendChild(containerEl);
// // Create a document nav
// const navEl=document.createElement("nav");
// navEl.setAttribute("class", "nav");
// containerEl.appendChild(navEl);
// // Create a document logo
// const logoEl=document.createElement("div");
// logoEl.setAttribute("class", "logo");
// logoEl.setAttribute("id", "logo");
// const logoLink=document.createElement("a");
// logoLink.href="#hero";
// logoEl.appendChild(logoLink);
// const logoImg=document.createElement("img");
// logoImg.src="../../assets/icons/logo.svg";
// logoImg.setAttribute("alt", "logo");
// logoImg.setAttribute("width", "80");
// logoLink.appendChild(logoImg);
// navEl.appendChild(logoEl);
// // Create a document nav Menu
// const menuEl=document.createElement("div");
// menuEl.setAttribute("class", "nav__menu");
// navEl.appendChild(menuEl);
// // ul
// const ulEl=document.createElement("ul");
// ulEl.setAttribute("class", "nav__list");
// menuEl.appendChild(ulEl);
// ulEl.innerHTML=`<li class="nav__item"><a href="#hero" class="nav__link nav-p">Home</a></li>
// <li class="nav__item"><a href="#catalog" class="nav__link nav-p">Catalog</a></li>
// <li class="nav__item"><a href="#footer" class="nav__link nav-p">Contact</a></li>`
// //create basket icon
// const basketEl=document.createElement("div");
// basketEl.setAttribute("class", "basket-shopping");
// basketEl.innerHTML=`<a href="#form"><i class="fa-solid fa-cart-shopping nav__link"></i></a>`
// navEl.appendChild(basketEl);
// //create shopping counter
// const shoppingCounter=document.createElement("span");
// shoppingCounter.innerText="0";
// shoppingCounter.setAttribute("id","shopping-count");
// basketEl.appendChild(shoppingCounter);


// // ---------------- Main Block--------------------------
// // create main block

// const mainEl=document.createElement("main");
// mainEl.setAttribute("class","main");
// const heroSection=document.createElement("section");
// heroSection.setAttribute("class","hero");
// heroSection.setAttribute("id","hero");
// mainEl.appendChild(heroSection);
// const heroContainerEl=document.createElement("div");
// heroContainerEl.setAttribute("class", "container");
// heroSection.appendChild(heroContainerEl);
// const heroContentEl=document.createElement("div");
// heroContentEl.setAttribute("class","hero__content");
// heroContainerEl.appendChild(heroContentEl);
// const heroImgEl=document.createElement("div");
// heroImgEl.setAttribute("class","hero__img");
// const heroImg=document.createElement("img");
// heroImg.setAttribute("alt","hero Img");
// heroImg.src="../../assets/images/hero-footer/heroImg.svg";
// heroImgEl.appendChild(heroImg);
// heroContentEl.appendChild(heroImgEl);

// //right side of Hero
// const heroTextEl=document.createElement("div");
// heroTextEl.setAttribute("class","hero__text-content");
// heroContentEl.appendChild(heroTextEl);
// const heroSubtitle=document.createElement("p");
// heroSubtitle.setAttribute("class","hero__paragraf");
// heroSubtitle.innerText="Dear Book Lover"
// heroTextEl.appendChild(heroSubtitle);
// const heroTitle=document.createElement("h1");
// heroTitle.innerText="Welcome To Our Book Shop!"
// heroTextEl.appendChild(heroTitle);
// //right side Quotes part of Hero
// const heroQuotesEl=document.createElement("div");
// heroQuotesEl.setAttribute("class","hero__quotes");
// heroTextEl.appendChild(heroQuotesEl);
// const heroQuotesTextEl=document.createElement("div");
// heroQuotesTextEl.setAttribute("class","hero__quotes-text");
// const heroQuotesSpanEl=document.createElement("span");
// heroQuotesSpanEl.setAttribute("class","hero__quotes-p")
// let quotesText="A good bookshop is not just about selling books from shelves,but reaching out into the world and making a difference.";
// heroQuotesSpanEl.innerText=quotesText;
// heroQuotesTextEl.appendChild(heroQuotesSpanEl);
// const quoutAuthor=document.createElement("p");
// quoutAuthor.setAttribute("class","hero__quotes-author")
// quoutAuthor.innerText="David Almond"
// heroQuotesTextEl.appendChild(quoutAuthor);
// const quoutBtn=document.createElement("button");
// quoutBtn.setAttribute("id","hero__quotes-btn")
// quoutBtn.innerText="New Quote"
// heroQuotesTextEl.appendChild(quoutBtn);
// heroQuotesEl.appendChild(heroQuotesTextEl);

// // HERO QUOTES BLOCK functionlaity

// const quotes = [
//   {
//     quote:
//     '"A good bookshop is like a genteel black hole that knows how to read."',
//     person: "Terry Pratchett",
//   },
//   {
//     quote:
//       '"When I have a little money, I buy books; and if I have any left, I buy food and clothes."',
//     person: "Erasmus",
//   },
//   {
//     quote:
//       '"That’s the thing about books. They let you travel without moving your feet."',
//     person: "Jhumpa Lahiri",
//   },
//   {
//     quote:
//       '"If you only read the books that everyone else is reading, you can only think what everyone else is thinking."',
//     person: "Haruki Murakami",
//   },
//   {
//     quote: '"Where is human nature so weak as in the bookstore."',
//     person: "Henry Ward Beecher",
//   },
//   {
//     quote:
//       '"A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one."',
//     person: "George R.R. Martin",
//   },
// ];
// quoutBtn.addEventListener("click", function () {
//     let random = Math.floor(Math.random() * quotes.length);
//     heroQuotesSpanEl.innerText = quotes[random].quote;
//     quoutAuthor.innerText = quotes[random].person;
//   });

// // -------------Catalog Section------------------
//  const catalogEl=document.createElement("section");
//  catalogEl.setAttribute("class","catalog");
//  catalogEl.setAttribute("id","catalog");
//  mainEl.appendChild(catalogEl);
//  const catalogContainer=document.createElement("div");
//  catalogContainer.setAttribute("class","container");
//  catalogEl.appendChild(catalogContainer);
// //  catalog title
// const catalogTitle=document.createElement("h2");
// catalogTitle.setAttribute('class',"catalog__title");
// catalogTitle.innerText="Book Catalog";
// catalogContainer.appendChild(catalogTitle);
// const boxEl=document.createElement("div");
// boxEl.classList.add("catalog__content");
// catalogContainer.appendChild(boxEl);
// // shopping Cart elements
//  //create shopping cart section
//  const shoppingCartSection=document.createElement("section");
//  shoppingCartSection.classList.add("shopping-cart");
//  mainEl.appendChild(shoppingCartSection);
//  //create shopping cart title
//  const shoppingCartTitle=document.createElement("p");
//  shoppingCartTitle.classList.add("shopping-cart__title");
//  shoppingCartTitle.innerText="Your Book Order Cart";
//  shoppingCartSection.appendChild(shoppingCartTitle);
//  // //create shopping cart content
//  const shoppingCartContent=document.createElement("div");
//  shoppingCartContent.classList.add("shopping-cart__content");
//  shoppingCartSection.appendChild(shoppingCartContent);
//  // //create shopping cart container
//  const shoppingCartContainer=document.createElement("div");
//  shoppingCartContainer.classList.add("cards-container");
//  shoppingCartContent.appendChild(shoppingCartContainer);

// //-----------create Total--------------------
// const shoppingTotal=document.createElement("div");
// shoppingTotal.classList.add("total-div");
// shoppingTotal.innerText="Total: $"
// const totalSpan=document.createElement("span");
// totalSpan.setAttribute("id","total");
// totalSpan.innerText="0"
// shoppingTotal.appendChild(totalSpan)
// shoppingCartContent.appendChild(shoppingTotal);
// //create Total confirm button
// const confirmBtn=document.createElement("a");
// confirmBtn.setAttribute("id","confirmBtn")
// confirmBtn.innerText="Confirm Order";
// shoppingCartContent.appendChild(confirmBtn);



// //function to render carts taking book infos from json file


//  async function renderCatalogCarts(){
//     // let url = './catalogBooks.json';
//     const url = '../../catalogBooks.json';
//     let data = await fetch(url);
//     let dataFrom = await data.json();
//     return dataFrom;
//     }
//     let dataFrom=await renderCatalogCarts();
//     console.log(dataFrom)
//     for(cards of dataFrom){
//       catalogGenerator(cards)
//   }
//   // renderCatalogCarts();
//     //function to create catalog cards taking book infos from json file
//     function catalogGenerator(dataFrom){
//       const cardEl=document.createElement("div");
//       cardEl.classList.add("card");
//       boxEl.appendChild(cardEl);
//       //create img-box and img
//       const cardImgEl=document.createElement("div");
//       cardImgEl.classList.add("card__img-box");
//       cardEl.appendChild(cardImgEl);
//       const imgEl=document.createElement("img");
//       imgEl.setAttribute("alt","book");
//       imgEl.src=`${dataFrom.imageLink}`;
//       cardImgEl.appendChild(imgEl);
//      //create card info part
//      const cardInfoEl=document.createElement("div");
//      cardInfoEl.classList.add("card__info");
//      cardEl.appendChild(cardInfoEl);
//         //create card info title
//         const bookTitleEl=document.createElement("h3");
//         bookTitleEl.classList.add("title");
//          bookTitleEl.innerText=`${dataFrom.title}`;
//          cardInfoEl.appendChild(bookTitleEl)
//            //create card info  author
//            const bookAuthorEl=document.createElement("h4");
//            bookAuthorEl.classList.add("author");
//            bookAuthorEl.innerText=`${dataFrom.author}`;
//             cardInfoEl.appendChild(bookAuthorEl)
//             //create card info  show more link
//             const bookDetailEl=document.createElement("span");
//             bookDetailEl.classList.add("show-more");
//             bookDetailEl.setAttribute("id","show-more")
//             bookDetailEl.innerText="Show more";
//              cardInfoEl.appendChild(bookDetailEl);
//             //create card info  price
//             const priceBox=document.createElement("div")
//              priceBox.innerText="$"
//              priceBox.classList.add("priceDiv")
//             const bookPrice=document.createElement("span");
//             bookPrice.classList.add("price");
//             bookPrice.innerText=`${dataFrom.price}`;
//              priceBox.appendChild(bookPrice)
//              cardInfoEl.appendChild(priceBox)
//             //create card info button
//             const bookBtnEl=document.createElement("button");
//             bookBtnEl.setAttribute("id","bookBtn")
//             bookBtnEl.innerText="Add To Bag";
//              cardInfoEl.appendChild(bookBtnEl);



//         // Popup Block
//         //create popup container
//         const popupContainerEl=document.createElement("div");
//         popupContainerEl.classList.add("popup-container","active");
//         //create popup title
//         const popupTitleEl=document.createElement("h3");
//         popupTitleEl.classList.add("title");
//         popupTitleEl.innerText=`${dataFrom.title}`;
//         popupContainerEl.appendChild(popupTitleEl);
//         //create popup author
//         const popupAuthorEl=document.createElement("h4");
//         popupAuthorEl.classList.add("author");
//         popupAuthorEl.innerText=`${dataFrom.author}`;
//         popupContainerEl.appendChild(popupAuthorEl);
//         //create popup  info about book
//         const aboutBookEl=document.createElement("p");
//         aboutBookEl.classList.add("about-book");
//         aboutBookEl.setAttribute("id","about-book");
//         aboutBookEl.innerText=`${dataFrom.description}`
//         popupContainerEl.appendChild(aboutBookEl);
//         cardInfoEl.appendChild(popupContainerEl);
//         //create popup close btn
//         const popupcloseEl=document.createElement("div");
//         popupcloseEl.classList.add("close-icon");
//         popupContainerEl.appendChild( popupcloseEl);
//         //create popup close icon
//         const closeIcon=document.createElement("i")
//         closeIcon.classList.add("fa-solid","fa-xmark","fa-2x");
//         popupcloseEl.appendChild(closeIcon);

//         // POPUP FUNCTIONLAITY

//         bookDetailEl.addEventListener("click",()=>{
//           cardImgEl.classList.add("active");
//           popupContainerEl.classList.remove("active");
//         });

//         popupcloseEl.addEventListener("click",()=>{
//           cardImgEl.classList.remove("active");
//           popupContainerEl.classList.add("active");
//         })

// // -----------------SHOPPING CART SECTION-------------------------

//          bookBtnEl.addEventListener('click',function(event){
//           alert("Thank you!Your book is added to cart")
//           let shoppinCartImgFullPAth=event.target.parentElement.previousElementSibling.children[0].src;
//           let pos=shoppinCartImgFullPAth.indexOf("img")+22;
//           let partPath=shoppinCartImgFullPAth.slice(pos);
//           console.log(partPath)
//           let bookName=event.target.parentElement.parentElement.children[1].children[0].textContent;
//           let bookAuthor=event.target.parentElement.parentElement.children[1].children[1].textContent;
//           let bookPriceinCart=event.target.parentElement.parentElement.children[1].children[3].textContent;
//           let finalPrice=bookPriceinCart.slice(1).trim();
//           console.log(finalPrice)
//           const items={}
//           items.image=`${partPath}`;
//           items.name=bookName;
//           items.author=bookAuthor;
//           items.price=bookPriceinCart;
//           items.price=finalPrice;
//           const shoppingCart=document.createElement("div");
//           shoppingCart.classList.add("sh-card");
//                shoppingCart.innerHTML=`
//                <div class="card__img-box">
//                    <img src=${items.image} alt="book">
//                </div>
//                <div class="card__info shoppingcartinfo">
//                    <h3 class="title">${items.name}</h3>
//                    <h4 class="author">${items.author}</h4>
//                    <span class="card-price">${items.price}</span>
//                </div> <i class="fa-solid fa-xmark fa-2x cart-icon"></i>`
//                shoppingCartContainer.appendChild(shoppingCart);
//                showTotals()
//             //remove selected book function
//             function deleteCart(){
//               const deleteBtns=document.querySelectorAll(".fa-xmark");
//               deleteBtns.forEach(function(btn){
//                btn.addEventListener("click",(e)=>{
//                  let selectedItem = e.target.parentElement;
//                 selectedItem.remove();
//                })
//              })

//             }
//             deleteCart()

//             });

//   }
//   //Shopping Card Show Functionality
//   basketEl.addEventListener("click",()=>{
//     console.log("works")
//     shoppingCartSection.classList.toggle("active");
//    })
//   //show Total function

//   function showTotals(){
//     const total=[];
//     const items=document.querySelectorAll(".card-price");
//     items.forEach(function(item){
//       total.push(parseFloat(item.textContent));
//     })
//       const totalMoney=total.reduce(function(total,item){
//         total += item;
//         return total;
//       },0);
//       const finalMoney=totalMoney.toFixed(2);
//      totalSpan.textContent=finalMoney;
//      shoppingCounter.textContent=total.length
//     }

// // Confirm Order Functionality
// confirmBtn.addEventListener("click",()=>{
//  location.href=("/book-shop/pages/form/index.html");
// })

//  //add to body
// dFrag.appendChild(mainEl);
// document.body.appendChild(dFrag);