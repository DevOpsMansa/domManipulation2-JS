/*
Part 1: Getting Started
Take a few moments to explore your code and refamiliarize yourself with it. Now that you have a deeper understanding of DOM manipulation concepts, if there is anything you would like to fix or change, now is the time to do so.
Progress Check - Here is what the page should look before beginning this lab from DOM Manipulation - part 1:

//Part one
// 1. Select and cache the <main> element in a variable named mainEl.
// const mainEl = document.querySelector(`main`);

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4. Add a class of flex-ctr to mainEl.
mainEl.classList.add(`flex-ctr`);

// Hint: Use the Element.classList API.

//Part two:

// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.save in a variable
const topMenuEl = document.getElementById("top-menu");
// //console.log(topMenuEl);

// 2.Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// 3.Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`
;
// 3.Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(`flex-around`);

//Part three:
// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];     //this is an array
// 1.Iterate over the entire menuLinks array and for each "link" object: 
menuLinks.forEach((link) => {

// 2.Create an <a> element.
let menuItems = document.createElement(`a`);

// 3.On the new element, add an href attribute with its value set to the href property of the "link" object.
menuItems.setAttribute(`href`, link.href);
// //console.log(menuItems) // always console to see your code is workig

// 4.Set the new element's content to the value of the text property of the "link" object.
menuItems.textContent = link.text
// //console.log(menuItems)
// 5.Append the new element to the topMenuEl element.
topMenuEl.appendChild(menuItems)
});

/*
Part 2: Adding Additional HTML and CSS
One of the most important features of an interactive user interface is feedback. The user needs to know that their actions are accomplishing something, even if it is something as simple as a button shifting color slightly or changing the cursor style when hovered, indicating that it is clickable.
In order to facilitate this, add the following additional "sub-menu" <nav> element to the index.html file within your <header> element, beneath the existing <nav> element.
*/

/*
Part 3: Creating the Submenu
A submenu serves as an additional menu for users to select from, and offers more specific context to the top-level menu's options. We will start by using some DOM manipulation techniques to format the submenu before adding interaction to each menu component.
Throughout this process, note that you are also becoming accustomed to another important skill: working with another developer's code. Many of these variables, elements, CSS classes, and other features have already been developed, and you are simply working with them for your own purposes.
 */

// 1.Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector(`main`);

// 2.Set the height subMenuEl element to be "100%".
subMenuEl.style.height = `100%`;

// 3.Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// 4.Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add(`flex-around`);

// Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:

// 1.Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = `absolete`;
console.log(subMenuEl);

// 2.Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = `0`;

/*
Part 4: Adding Menu Interaction
In order to add submenu links, we will need to restructure the menuLinks array within index.js. 
*/
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

menuLinks.forEach(menu) => {
    const link = document.createElement("a");
    link.innerHTML = menu.text;
    link.href = '${menu.href}';
    topMenuEl.appendChild(link);
    topMenuLinks.push(link)
};

let cataLofArray = [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
];
let ordersArray = [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
];
let accountArray = [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
];

menuLinks.forEach((menu) => {
    if (menu.text === "catalog") {
        menu.subLinks = catalogArray;
    } else if (menu.text === "orders") {
        menu.subLinks = ordersArray;
    } else if (menu.text === "account") {
        menu.subLinks = accountArray;
    }
});


/*
In order to add interaction:
*/
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = document.querySelector(`a`);

// Attach a delegated 'click' event listener to topMenuEl.
const topMenuEl = document.getElementById("topMenuEl")[0]


// The first line of code of the event listener function should call the event object's preventDefault() method.
topMenuEl.addEventListener("click", e) => {
    e.preventDefault();
    if (e.target.tagName === "A"){
        e.target.classList.add("active");
        console.log(e.target)
    } 

// The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if(e.target.classList.contains("active")){
        e.target.classList.remove("active")
    }
// Log the content of the <a> to verify the handler is working.
console.log();

/*
Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
*/

// The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
    menuLinks.forEach((link) => {
        if (link.text === "about" && link.href === "/about"){
            subMenuEl.style.top= 0;
        }else if (link["subLinks"]){
            subMenuEl.style.top= "100%";
        }
    })
}
   
// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.

// Hint: Removing a non-existent class from an element does not cause an error!

/*
Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:
 */

// 1.Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// a.If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
// b.Otherwise, set the CSS top property of subMenuEl to 0.
// Hint: Caching the "link" object will come in handy for passing its subLinks array later.

/*

 */