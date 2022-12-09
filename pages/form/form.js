
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
logoLink.href="../../pages/main/index.html#hero";
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
ulEl.innerHTML=`<li class="nav__item"><a href="../../pages/main/index.html#hero" class="nav__link nav-p">Home</a></li>
<li class="nav__item"><a href="../../pages/main/index.html#catalog" class="nav__link nav-p">Catalog</a></li>
<li class="nav__item"><a href="../../pages/main/index.html#footer" class="nav__link nav-p">Contact</a></li>`
//create basket icon
const basketEl=document.createElement("div");
basketEl.setAttribute("class", "basket-shopping");
basketEl.innerHTML=`<a href="#form"><i class="fa-solid fa-cart-shopping nav__link"></i></a>`
navEl.appendChild(basketEl);
//create shopping counter
const shoppingCounter=document.createElement("span");
shoppingCounter.innerText="4";
shoppingCounter.setAttribute("id","shopping-count");
basketEl.appendChild(shoppingCounter);

//add form container to  dfrag
const formContainer=document.getElementById("form-container");

dFrag.appendChild(formContainer);
document.body.appendChild(dFrag);

//------------------ form name and surname validation--------------------
const formEl = document.getElementById('form');
const inputel=document.querySelectorAll("input");
const usernameEl = document.getElementById('username');
const userSurnameEl = document.getElementById('usersurname');
const nameError=document.querySelector(".userNameError");
const surnameError=document.querySelector(".surnameError");
const submitBtn=document.getElementById("submit");
const deliveryEl=document.getElementById("delivary");
const deliverError=document.querySelector(".delivaryError")
const confirmBtn=document.getElementById("submit")
const flatEl=document.getElementById("flatN");
const streetEl=document.getElementById("street");
const houseEl=document.getElementById("houseN");

    function validateName(){
    let name=usernameEl.value
    if(name==" "){
    nameError.textContent="Write only letters and no white space"
 return false
    }
    if(name.length<4){
    nameError.textContent="The name length min 4 symbols"
     return false
    }
    if(/^[0-9\s]*$/.test(name)){
    nameError.textContent="Write only letters and no white space"
     return false
    }
        nameError.innerHTML=`<i class="fa-sharp fa-solid fa-circle-check"></i>`;
    return true;
    }
    validateName()

    function validateSurName(){
    let surname=userSurnameEl.value
    if(surname==""){
        surnameError.textContent="Write only letters and no white space"
     return false
    }
    if(surname.length<5){
        surnameError.textContent="The name length min 5 letters"
         return false
        }
    if(/^[0-9\s]*$/.test(surname)){
        surnameError.textContent="Write only letters and no white space"
         return false
        }
        surnameError.innerHTML=`<i class="fa-sharp fa-solid fa-circle-check"></i>`
    return true;
    }
    validateSurName()

    function validateDelivaryDate(){
        let delivaryDay=deliveryEl.value
            if(delivaryDay){
                deliverError.innerHTML=`<i class="fa-sharp fa-solid fa-circle-check"></i>`
            return true;
            }}
            validateDelivaryDate()
    // street input validation
     function validateStreet(){

                console.log(streetEl)
                const streetError=document.querySelector(".streetError")
                let street=streetEl.value
                 if(street==""){
                    streetError.textContent="Write letters and numbers"
                    return false
                    }
                 if(street.length<5){
                 streetError.textContent="The name length min 5 letters"
                 return false
            }

            streetError.innerHTML=`<i class="fa-sharp fa-solid fa-circle-check"></i>`
        return true;
            }
            validateStreet();

            //House validation
      function validateHouse(){
                const houseError=document.querySelector(".houseError")
         let house=+houseEl.value
         if(house==""){
            houseError.textContent="This field required"
         return false
        }
            houseError.innerHTML=`<i class="fa-sharp fa-solid fa-circle-check"></i>`
        return true;

            }
            validateHouse();

            //Flat validation
      function validateFlat(){

        const flatError=document.querySelector(".flatError")
         let flat=+flatEl.value
         flatEl.addEventListener('keyup', function(){
            if (flat ==""){
             flatError.textContent="This field required"
         return false
            }
            flatError.innerHTML=`<i class="fa-sharp fa-solid fa-circle-check"></i>`
                return true;
            })
         }

          validateFlat();
    // only two 2 gift selection

    var checks = document.querySelectorAll(".check");
    var max = 2;
    for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;
    function selectiveCheck (event) {
     var checkedChecks = document.querySelectorAll(".check:checked");
    if (checkedChecks.length >= max + 1)
    return false;
    }

    //check if all Field is completed

    function checkFields(){
        const infoFromForm=document.getElementById("alldatas");
        const arr=[];
        for (const input of inputel) {
           let info= arr.push(input.value)
            input.addEventListener(`input`, () => {
                for (const input of inputel) {
                        if (input.value.length===0) {
                           confirmBtn.disabled = true;
                           confirmBtn.addEventListener("click",infoBlatt)
                            break;
                        } else {
                            confirmBtn.disabled = false;
                            confirmBtn.classList.remove('activeBtn');
                        }
                    }
            });
        }


    }
checkFields()


confirmBtn.addEventListener("click",infoBlatt)
 function infoBlatt(){
    const infoEl=document.getElementById("alldatas")
    const infoBlatt=document.createElement("div");
    formContainer.appendChild(infoBlatt);
     infoBlatt.innerHTML=`<div id="alldatas">
     <h3>Order Information</h3>
     <p>Name:${usernameEl.value}</p>
     <p>Surname:${userSurnameEl.value}</p>
     <p>Address:
         <p>Street:${streetEl.value}</p>
         <p>House Number:${flatEl.value}</p>
         <p>Flat Number:${flatEl.value}</p>
         <p>Delivary Date:${deliveryEl.value}</p>
     </p>
     <p class="wish">Have a nice day and enjoy your reading!♥</p>
     </div>`
 }