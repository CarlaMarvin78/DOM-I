const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Task 1 & 2

let nav_items= document.querySelector("nav").children;
nav_items[0].textContent=siteContent["nav"]["nav-item-1"];
nav_items[1].textContent=siteContent["nav"]["nav-item-2"];
nav_items[2].textContent=siteContent["nav"]["nav-item-3"];
nav_items[3].textContent=siteContent["nav"]["nav-item-4"];
nav_items[4].textContent=siteContent["nav"]["nav-item-5"];
nav_items[5].textContent=siteContent["nav"]["nav-item-6"];


let cta_h1=document.querySelector(".cta h1");
cta_h1.textContent=siteContent["cta"]["h1"];
let cta_button=document.querySelector(".cta button");
cta_button.textContent=siteContent["cta"]["button"]
let cta_img_src=document.getElementById("cta-img");
cta_img_src.setAttribute('src', siteContent["cta"]["img-src"]);

let top_content_h4s = document.querySelectorAll(".top-content h4");
let top_content_contents = document.querySelectorAll(".top-content p");
top_content_h4s[0].textContent = siteContent["main-content"]["features-h4"];
top_content_contents[0].textContent = siteContent["main-content"]["features-content"];
top_content_h4s[1].textContent = siteContent["main-content"]["about-h4"];
top_content_contents[1].textContent = siteContent["main-content"]["about-content"];

let middle_img = document.getElementById("middle-img");
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottom_content_h4s = document.querySelectorAll(".bottom-content h4");
let bottom_content_contents = document.querySelectorAll(".bottom-content p");
bottom_content_h4s[0].textContent = siteContent["main-content"]["services-h4"];
bottom_content_contents[0].textContent = siteContent["main-content"]["services-content"];
bottom_content_h4s[1].textContent = siteContent["main-content"]["product-h4"];
bottom_content_contents[1].textContent = siteContent["main-content"]["product-content"];
bottom_content_h4s[2].textContent = siteContent["main-content"]["vision-h4"];
bottom_content_contents[2].textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact").children;
contact[0].textContent = siteContent["contact"]["contact-h4"];
contact[1].textContent = siteContent["contact"]["address"];
contact[2].textContent = siteContent["contact"]["phone"];
contact[3].textContent = siteContent["contact"]["email"];

let copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"];


// Task 3

let nav = document.querySelector("nav");
nav.querySelectorAll("a").forEach(nav_a => nav_a.setAttribute('style', 'color:green'));


let back = document.createElement('a');
back.textContent = "Back";
back.setAttribute('href', "#");
nav.prepend(back);

let beyond = document.createElement('a');
beyond.textContent = "To infinity..";
beyond.setAttribute('href', "#");
nav.appendChild(beyond);


