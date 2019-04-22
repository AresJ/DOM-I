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
let navBar = document.querySelectorAll('nav a');
navBar[0].innerHTML = siteContent['nav']['nav-item-1'].fontcolor("green");
navBar[1].innerHTML = siteContent['nav']['nav-item-2'].fontcolor("green");
navBar[2].innerHTML = siteContent['nav']['nav-item-3'].fontcolor("green");
navBar[3].innerHTML = siteContent['nav']['nav-item-4'].fontcolor("green");
navBar[4].innerHTML = siteContent['nav']['nav-item-5'].fontcolor("green");
navBar[5].innerHTML = siteContent['nav']['nav-item-6'].fontcolor("green");
var node = document.createElement("a");
node.innerHTML = '<font color="green">Location</font>';
document.querySelector("nav").appendChild(node);
let heading = document.querySelector(".cta-text > h1");
heading.textContent = siteContent["cta"]["h1"];
let headerImg = document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);
let headerButton = document.querySelector(".cta-text > button").innerHTML = siteContent["cta"]["button"];
var a = document.querySelectorAll("h4");
var b = document.querySelectorAll(".text-content > p");
a[0].textContent = siteContent["main-content"]["features-h4"];
a[1].textContent = siteContent["main-content"]["about-h4"];
a[2].textContent = siteContent["main-content"]["services-h4"];
a[3].textContent = siteContent["main-content"]["product-h4"];
a[4].textContent = siteContent["main-content"]["vision-h4"];
b[0].textContent = siteContent["main-content"]["features-content"];
b[1].textContent = siteContent["main-content"]["about-content"];
b[2].textContent = siteContent["main-content"]["services-content"];
b[3].textContent = siteContent["main-content"]["product-content"];
b[4].textContent = siteContent["main-content"]["vision-content"];
let middleImg = document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);
a[5].textContent = siteContent["contact"]["contact-h4"];
var c = document.querySelectorAll(".contact > p");
c[0].textContent = siteContent["contact"]["address"];
c[1].textContent = siteContent["contact"]["phone"];
c[2].textContent = siteContent["contact"]["email"];
var d = document.querySelectorAll("footer > p");
d[0].innerHTML = siteContent["footer"]["copyright"];