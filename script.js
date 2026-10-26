const nikeShoes = [
    {
      name: "KD17 EP",
      price: 13297,
      imgUrl: "./image/KD17+EP.png",
      imgUrl1: "./image/KD17+EP1.jpeg",
      imgUrl2: "./image/KD17+EP2.png",
      imgUrl3: "./image/KD17+EP3.png",
      imgUrl4: "./image/KD17+EP4.jpeg",
      imgUrl5: "./image/KD17+EP5.png",

    },
    {
      name: "DunkLow Black",
      price:  10795,
      imgUrl: "./image/dunk-low-1.jpg",

    },
    {
      name: "Air Force 1 '07",
      price:  11895,
      imgUrl: "./image/air-force-1-07-phantom.jpg",

    },
    {
        name: "Nike Dunk Low Retro",
        price:  8295,
        imgUrl: "./image/NIKE+DUNK+LOW+RETRO.png",

    },
    {
        name: "Nike Lunar Gato II",
        price:  9995,
        imgUrl: "./image/NIKE+LUNARGATO.png",
        imgUrl1: "./image/NIKE+LUNARGATO1.png",

    },
    {
        name: "Air Jordan1 L Premium",
        price:  12295,
        imgUrl: "./image/air-jordan-1-low-premium.jpg",

    },
    {
        name: "Luka 3 PF 'Motorsport'",
        price:  11297,
        imgUrl: "./image/JORDAN+LUKA.PNG",
        imgUrl1: "./image/JORDAN+LUKA1.png",
        imgUrl2: "./image/JORDAN+LUKA2.png",
        imgUrl3: "./image/JORDAN+LUKA3.jpeg",
        imgUrl4: "./image/JORDAN+LUKA4.png",
        imgUrl5: "./image/JORDAN+LUKA5.jpeg",

    },
    {
        name: " Air Jordan 4 RM",
        price: 12795,
        imgUrl: "./image/AIR+JORDAN4.png",
        imgUrl1: "./image/AIR+JORDAN41.png",
        imgUrl2: "./image/AIR+JORDAN42.png",
        imgUrl3: "./image/AIR+JORDAN43.png",
        imgUrl4: "./image/AIR+JORDAN44.png",

    },
    {
      name: "Nike Tiempo Legend 10",
      price:  4747,
      imgUrl: "./image/LEGEND.png",
      imgUrl1: "./image/LEGEND1.png",
      imgUrl2: "./image/LEGEND2.png",
      imgUrl3: "./image/LEGEND3.png",
      imgUrl4: "./image/LEGEND4.png",

  },
  {
    name: "Air Jordan 5 Retro",
    price: 19295,
    imgUrl: "./image/AIR+JORDAN+5.png",

  },
  {
    name: "Nike Dunk Low SE",
    price: 11895,
    imgUrl: "./image/NIKE+DUNK+LOW+SE.png",

  },
  {
    name: "Air Jordan 1 Retro High",
    price: 16995,
    imgUrl: "./image/WMNS+AIR+JORDAN+1+RETRO.jpeg",

  },
  {
    name: "Giannis Freak 6 EP",
    price: 11895,
    imgUrl: "./image/GIANNIS+FREAK+6+EP.png",
    imgUrl1:"./image/GIANNIS+FREAK+6+EP1.png",
    imgUrl2:"./image/GIANNIS+FREAK+6+EP2.png",
    imgUrl3:"./image/GIANNIS+FREAK+6+EP3.png",

  },
  {
    name: "Nike G.T. Cut 3 EP",
    price: 19295,
    imgUrl: "./image/G.T.+CUT+3+EP.png",
    imgUrl1: "./image/G.T.+CUT+3+EP1.png",
    imgUrl2: "./image/G.T.+CUT+3+EP2.png",
    imgUrl3: "./image/G.T.+CUT+3+EP6.png",
    imgUrl4: "./image/G.T.+CUT+3+EP4.png",
    imgUrl5: "./image/G.T.+CUT+3+EP5.png",

  },
  {
    name: "Nike Air Max 90",
    price: 10795,
    imgUrl: "./image/AIR+MAX+90.png",
    imgUrl1: "./image/AIR+MAX+901.png",
    imgUrl2: "./image/AIR+MAX+902.png",
    imgUrl3: "./image/AIR+MAX+903.png",

  },
  {
    name: "Nike Air Max Leather",
    price: 6795,
    imgUrl: "./image/NIKE+AIR+MAX+SC+LEA.png",
    imgUrl1: "./image/NIKE+AIR+MAX+SC+LEA1.png",

  },
  {
    name: "Field General SP ",
    price: 10795,
    imgUrl: "./image/NIKE+FIELD+GENERAL+SP+U.png",

  },
  {
    name: "Nike G.T. Jump 2 EP",
    price: 16995,
    imgUrl: "./image/NIKE+AIR+ZOOM+G.T.+JUMP+2+EP.png",
    imgUrl1: "./image/NIKE+AIR+ZOOM+G.T.+JUMP+2+EP1.png",
    imgUrl2: "./image/NIKE+AIR+ZOOM+G.T.+JUMP+2+EP2.png",

  }
];

function renderShoes() {
    const container = document.getElementById('dynamic-shoe-container');
    if (!container) return;
    
    let html = '';
    nikeShoes.forEach((shoe, index) => {
        const id = index + 1;
        let thumbsHtml = '<div class="thumbnails-container">';
        
        const props = ['imgUrl', 'imgUrl1', 'imgUrl2', 'imgUrl3', 'imgUrl4', 'imgUrl5'];
        props.forEach((prop, i) => {
            if (shoe[prop]) {
                const className = "pic-option active-option";
                thumbsHtml += `<div onclick="change(${id}, ${i})" class="${className}"><img src="${shoe[prop]}" alt="${shoe.name}"></div>`;
            } else {
                const className = "pic-option";
                thumbsHtml += `<div class="${className}"><img src="" alt=""></div>`;
            }
        });
        thumbsHtml += '</div>';
        
        html += `
        <div id="buy-${id}" class="buy">
            <img id="shoe-img-same${id}" class="shoe-img-main" src="${shoe.imgUrl}" alt="${shoe.name}" onclick="openCustomizer(${index})" style="cursor: pointer;">
            <div onclick="cartUpdate(${id})" class="cart-icon-btn"><i class="ri-shopping-bag-2-line"></i></div>
            <div class="shoe-details">
                <h1 class="shoe-name">${shoe.name}</h1>
                <h1 class="shoe-price">₹${shoe.price}</h1>
            </div>
            ${thumbsHtml}
        </div>
        `;
    });
    
    container.innerHTML = html;
}

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#parent"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#parent", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#parent").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    if (document.querySelectorAll(".buy").length > 0) {
        gsap.to(".buy",{
            y:-350,
            scrollTrigger:{
              trigger:"#page-5",
              marker: true,
              scroller:"#parent",
              start:"top 50%",
              end:"top 20%",
              scrub:2
            }
        });
    }

    var tl=gsap.timeline();

    if (document.querySelector("#count")) {
        tl.from("#count", {
            y:-1000,
        });
        tl.to("#count", {
            y:-1000,
            delay:2
        });
    }
      
    if (document.querySelector("#anime")) {
        gsap.fromTo("#anime", {
            x: '100vw'
        }, {
            x: '-100%',
            repeat: -1,
            duration: 8,
            ease: "linear"
        });
    }
    if (document.querySelector("#anime2")) {
        gsap.to("#anime2", {
          duration: 2, 
          opacity: 0.5,
          y: 20, 
          repeat: -1, 
          yoyo: true, 
          ease: "power2.out" 
        });
    }

    if (document.querySelector("#nikee")) {
        gsap.from("#nikee",{
          x:200,
          scrollTrigger:{
              trigger:"#page-5",
              scroller:"#parent",
              marker:true,
              start:"top 20%",
              end:"bottom bottom",
              scrub:2
          }
        });
    }
}

renderShoes();
initAnimations();

let cartOrder = 0;
const notificationElement = document.getElementById("notification-count");
const buy = Array(18);

function updateNotificationCount() {
  // Update the count
  notificationElement.textContent = cartOrder;
  
  // Show or hide the badge based on count
  if (cartOrder > 0) {
    notificationElement.style.display = "inline-block";
    // Trigger pulse animation
    notificationElement.classList.remove("notification-count");
    void notificationElement.offsetWidth; // trigger reflow
    notificationElement.classList.add("notification-count");
  } else {
    notificationElement.style.display = "none";
  }
};

let price = 0;

function cartUpdate(n) {
  if (buy[n] === undefined) {
    buy[n] = 1; 
    cartOrder += 1; 
    price += nikeShoes[n-1].price;
    updateNotificationCount();
    appendCartItem(n-1);
    
  } else {
    buy[n] = undefined; 
    cartOrder -= 1; 
    price -= nikeShoes[n-1].price; 
    
    updateNotificationCount();
    removeCartItem(n);
  }

  console.log(cartOrder);
  
  const total = document.getElementById("price");
  total.textContent = `Total: ₹${price}`;

  if (typeof locoScroll !== 'undefined') {
    locoScroll.update();
  }
} ;

const cartOrderElement = document.getElementById("cart-order");

function appendCartItem(n) {
  // Get the container element
  const cartContainer = document.getElementById("cart-items-list");
  if (!cartContainer) return;
  
  // Create the main card div
  const cartItem = document.createElement("div");
  const cartItemId = `cart-item${n}`; // Unique ID for each cart item
  cartItem.id = cartItemId;
  cartItem.style.cssText =
    "display: flex; overflow: hidden; justify-content: space-between; padding-left: 3vw; padding-right: 3vw; align-items: center; height: 80px; width: 100%; background-color: #F6F6F6; border-radius: 100px; margin-bottom: 10px; border: 1px solid #eee;";

  // Create and append the image
  const img = document.createElement("img");
  img.style.cssText = "height: 60px; border-radius: 50px;";
  img.src = nikeShoes[n].imgUrl;
  img.alt = nikeShoes[n].name;
  cartItem.appendChild(img);

  // Create and append the name
  const name = document.createElement("h1");
  name.style.cssText = "font-size: 2vw; font-family: nike; margin: 0;";
  name.textContent = nikeShoes[n].name;
  cartItem.appendChild(name);

  // Create and append the price
  const priceTag = document.createElement("h1");
  priceTag.style.cssText = "font-size: 1.8vw; font-family: nike; margin: 0;";
  priceTag.textContent = `₹${nikeShoes[n].price}`;
  cartItem.appendChild(priceTag);

  const close = document.createElement("button");
  close.style.cssText = "background-color: #F6F6F6; color: #FF0000; border: none; border-radius: 50px; padding: 5px 10px; cursor: pointer; font-size: 1.8vw; font-family: nike; font-weight: bold;";
  close.textContent = "X";
  close.addEventListener("click", () => {
    cartUpdate(n + 1);
  });
    
  cartItem.appendChild(close);
  cartContainer.appendChild(cartItem);
};

function removeCartItem(n) {
  const cartItem = document.getElementById(`cart-item${n-1}`);

  if (cartItem) {
    cartItem.remove();
  } 
}






function change(m,n) {
  const pic = document.getElementById(`shoe-img-same${m}`);
  if (!pic) return;

  const shoe = nikeShoes[m-1];
  if (!shoe) return;

  let url = "";
  if(n === 0) url = shoe.imgUrl;
  else if(n === 1) url = shoe.imgUrl1;
  else if(n === 2) url = shoe.imgUrl2;
  else if(n === 3) url = shoe.imgUrl3;
  else if(n === 4) url = shoe.imgUrl4;
  else if(n === 5) url = shoe.imgUrl5;

  if (url) {
    pic.src = url;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("button-menu"); // Assuming you have a navbar div

  // Checkout Button Interaction
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      if (cartOrder === 0) {
        alert("🛒 Your cart is empty!");
      } else {
        alert(`🎉 Thank you for your purchase!\nTotal Amount: ₹${price}\nYour order has been placed successfully.`);
        // Reset all standard items
        for (let i = 1; i <= 18; i++) {
          buy[i] = undefined;
        }
        // Reset cart counters and list
        cartOrder = 0;
        price = 0;
        updateNotificationCount();
        
        const cartList = document.getElementById("cart-items-list");
        if (cartList) {
          cartList.innerHTML = "";
        }
        
        const total = document.getElementById("price");
        if (total) {
          total.textContent = `Total: ₹0`;
        }
        
        if (typeof locoScroll !== 'undefined') {
          locoScroll.update();
        }
        document.getElementById('page-0').style.display = 'none';
      }
    };
  }

  // Hook up add customized shoe button click
  const addCustomCartBtn = document.getElementById("add-custom-cart-btn");
  if (addCustomCartBtn) {
    addCustomCartBtn.onclick = () => {
      if (customizerIndex !== -1) {
        const currentCustomImgSrc = document.getElementById("custom-shoe-img").src;
        addCustomItemToCart(customizerIndex, selectedCustomSize, selectedCustomLace, currentCustomImgSrc);
        document.getElementById("customizer-modal").style.display = "none";
      }
    };
  }
});

// Customizer State
let customizerIndex = -1;
let selectedCustomSize = 10;
let selectedCustomLace = "Default";

function selectSize(btn, size) {
  // Remove active class from all size buttons
  document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
  // Add active class to clicked button
  btn.classList.add("active");
  selectedCustomSize = size;
}

function selectLace(btn, color) {
  // Remove active class from all lace color options
  document.querySelectorAll(".lace-color").forEach(c => c.classList.remove("active"));
  // Add active class to clicked option
  btn.classList.add("active");
  selectedCustomLace = color;
}

function openCustomizer(index) {
  customizerIndex = index;
  const shoe = nikeShoes[index];
  
  // Set elements
  document.getElementById("custom-shoe-name").textContent = shoe.name;
  document.getElementById("custom-shoe-price").textContent = `₹${shoe.price}`;
  
  // Grab current image selected on the card
  const id = index + 1;
  const currentCardImgUrl = document.getElementById(`shoe-img-same${id}`).src;
  document.getElementById("custom-shoe-img").src = currentCardImgUrl;
  
  // Reset selection choices
  selectedCustomSize = 10;
  selectedCustomLace = "Default";
  
  document.querySelectorAll(".size-btn").forEach(btn => btn.classList.remove("active"));
  const defaultSizeBtn = document.getElementById("default-size-btn");
  if (defaultSizeBtn) defaultSizeBtn.classList.add("active");
  
  document.querySelectorAll(".lace-color").forEach(color => color.classList.remove("active"));
  const defaultLaceBtn = document.getElementById("default-lace-btn");
  if (defaultLaceBtn) defaultLaceBtn.classList.add("active");
  
  // Display Modal
  document.getElementById("customizer-modal").style.display = "flex";
}

let customItemIdCounter = 1000;

function addCustomItemToCart(shoeIndex, size, laceColor, imgSrc) {
  const shoe = nikeShoes[shoeIndex];
  const customPrice = shoe.price;
  
  cartOrder += 1;
  price += customPrice;
  updateNotificationCount();
  
  const cartContainer = document.getElementById("cart-items-list");
  if (!cartContainer) return;
  
  const customId = `custom-item-${customItemIdCounter++}`;
  
  const cartItem = document.createElement("div");
  cartItem.id = customId;
  cartItem.style.cssText =
    "display: flex; overflow: hidden; justify-content: space-between; padding-left: 3vw; padding-right: 3vw; align-items: center; height: 80px; width: 100%; background-color: #F6F6F6; border-radius: 100px; margin-bottom: 10px; border: 1px solid #eee;";

  // Image
  const img = document.createElement("img");
  img.style.cssText = `height: 60px; border-radius: 50px;`;
  img.src = imgSrc;
  img.alt = shoe.name;
  cartItem.appendChild(img);

  // Details
  const details = document.createElement("div");
  details.style.cssText = "display: flex; flex-direction: column; align-items: flex-start; justify-content: center;";
  
  const name = document.createElement("h1");
  name.style.cssText = "font-size: 1.5vw; font-family: nike; margin: 0;";
  name.textContent = shoe.name;
  details.appendChild(name);
  
  const subDetails = document.createElement("span");
  subDetails.style.cssText = "font-size: 1vw; color: #666;";
  subDetails.textContent = `Size: ${size} | Laces: ${laceColor}`;
  details.appendChild(subDetails);
  
  cartItem.appendChild(details);

  // Price
  const priceTag = document.createElement("h1");
  priceTag.style.cssText = "font-size: 1.8vw; font-family: nike; margin: 0;";
  priceTag.textContent = `₹${customPrice}`;
  cartItem.appendChild(priceTag);

  // Delete Action
  const close = document.createElement("button");
  close.style.cssText = "background-color: #F6F6F6; color: #FF0000; border: none; border-radius: 50px; padding: 5px 10px; cursor: pointer; font-size: 1.8vw; font-family: nike; font-weight: bold;";
  close.textContent = "X";
  close.addEventListener("click", () => {
    cartItem.remove();
    cartOrder -= 1;
    price -= customPrice;
    updateNotificationCount();
    const total = document.getElementById("price");
    if (total) total.textContent = `Total: ₹${price}`;
    if (typeof locoScroll !== 'undefined') {
      locoScroll.update();
    }
  });
  cartItem.appendChild(close);
  cartContainer.appendChild(cartItem);
  
  const total = document.getElementById("price");
  if (total) total.textContent = `Total: ₹${price}`;
  
  if (typeof locoScroll !== 'undefined') {
    locoScroll.update();
  }
}

