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
  
  })

  var tl=gsap.timeline();

  tl.from("#count", {
      y:-1000,
      
  })
  tl.to("#count", {
      y:-1000,
      delay:2
      
  })
  
  gsap.from("#anime",{
      x:-2500,
      repeat:-1,
      duration:4
      
  })
  gsap.to("#anime2", {
    duration: 2, 
    opacity: 0.5,
    y: 20, 
    repeat: -1, 
    yoyo: true, 
    ease: "power2.out" 
  })

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
})

let cartOrder = 0 ;

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
        imgUrl: "./image/NIKE+DUNK+LOW+RETRO.png"
    },
    {
        name: "Nike Lunar Gato II",
        price:  9995,
        imgUrl: "./image/NIKE+LUNARGATO.png",
        imgUrl1: "./image/NIKE+LUNARGATO1.png"
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
        imgUrl5: "./image/JORDAN+LUKA5.jpeg"

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
  imgUrl4:"./image/GIANNIS+FREAK+6+EP4.png",
 
  
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

},
];




    nikeShoes.forEach((shoe, index) => {
        // Get the card by its ID
        const card = document.getElementById(`buy-${index + 1}`);
       
        
        // If the card exists, populate its content
        if (card) {
            const nameElement = card.querySelector(".shoe-name");
            const priceElement = card.querySelector(".shoe-price");
          const imgElement = card.querySelector(".shoe-img");
          const imgElement1 = card.querySelector(".shoe-img1");
          const imgElement2 = card.querySelector(".shoe-img2");
          const imgElement3 = card.querySelector(".shoe-img3");
          const imgElement4 = card.querySelector(".shoe-img4");
          const imgElement5 = card.querySelector(".shoe-img5");
          
      
          // Update the content
          nameElement.textContent = shoe.name;
          priceElement.textContent = `${shoe.price}*`;
          imgElement.src = shoe.imgUrl;
          imgElement1.src = shoe.imgUrl1;
          imgElement2.src = shoe.imgUrl2;
          imgElement3.src = shoe.imgUrl3;
          imgElement4.src = shoe.imgUrl4;
          imgElement5.src = shoe.imgUrl5; 
          imgElement.alt = shoe.name;
          
        }
        
      });

const notificationElement = document.getElementById("notification-count");
const buy = Array(18);

function updateNotificationCount() {
  // Update the count
  notificationElement.textContent = cartOrder;
  
  // Show or hide the badge based on count
  if (cartOrder > 0) {
    notificationElement.style.display = "inline-block";
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
  total.textContent = `Total: ${price}`;
} ;

const cartOrderElement = document.getElementById("cart-order");





function appendCartItem(n, shoe) {
  // Get the container element
  const cartContainer = document.getElementById("page-0");

  // Create the main card div
  const cartItem = document.createElement("div");
  const cartItemId = `cart-item${n}`; // Unique ID for each cart item
  cartItem.id = cartItemId;
  cartItem.style.cssText =
    "display: flex;overflow:hidden; justify-content: space-between;padding-left:5vw ;padding-right:5vw;align-items: center; height: 80px; width: 70vw; background-color: #F6F6F6; border-radius: 100px; margin: 1vw 10vw 1vw 5vw;";

  // Create and append the image
  const img = document.createElement("img");
  img.style.cssText = "height: 10vh;border: 0px solid white;border-radius: 100px";
  img.src = nikeShoes[n].imgUrl;
  img.alt = nikeShoes[n].name;
  cartItem.appendChild(img);

  // Create and append the name
  const name = document.createElement("h1");
  name.style.cssText = "font-size: 3vw;";
  name.textContent = nikeShoes[n].name;
  cartItem.appendChild(name);
  

  // Create and append the price
  const price = document.createElement("h1");
  price.style.cssText = "font-size: 2vw;margin-left: 10vw;";
  price.textContent = `₹${nikeShoes[n].price}`;
  cartItem.appendChild(price);

  const close = document.createElement("button");
  close.style.cssText = "background-color: #F6F6F6; color: #FF0000; border: none; border-radius: 50px; padding: 5px 10px; cursor: pointer; margin-left:5vw;font-size: 3vw;";
  close.textContent = "X";
  close.addEventListener("click", () => {
    removeCartItem(n);
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
     if(n === 0){
        pic.src = nikeShoes[m-1].imgUrl;
     }
     else if(n === 1) {
       let photo = `${m-1}`
       pic.src = nikeShoes[photo].imgUrl1;
     }
     else if(n === 2) {
      let photo = `${m-1}`;
      pic.src = nikeShoes[photo].imgUrl2;
    }
    else if(n === 3){
      let photo = `${m-1}`;
      pic.src = nikeShoes[photo].imgUrl3;
    }
    else if(n === 4){
      let photo = `${m-1}`;
      pic.src = nikeShoes[photo].imgUrl4;
    }
    else if(n === 5){
      let photo = `${m-1}`;
      pic.src = nikeShoes[photo].imgUrl5;
    }
}