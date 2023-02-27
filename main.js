// 
//Dom [Traversing];
// --- nextSibling 
// --- previosSibling
// --- nextElementSibling
// -- previousElementSibling
// -- parentElement





let span = document.getElementById("one");
let span1 = document.getElementById("tow");
let span2 = document.getElementById("three");


span2.onclick = function (){
    if(span1.className === ""){
        span1.previousElementSibling.textContent = "color:blue;";
        span1.style.cssText = "background-color:green;opacity:0.2;border-radius:20px";
    }
}
span.onclick = function (){
    if(span1.className === ""){
        span1.nextElementSibling.style.cssText = "font-size:1.2rem;color:#000;border-radius:20px";
        // span2.parentElement.remove();
    }
}

// -----------------------------header js------------------------//

const mydiv = document.createElement("header");
const myHead = document.createElement("h3");
const myDIVS = document.createElement("div");
const myOl = document.createElement("ul");



mydiv.className ="main";
myOl.id ="Parent";
const testLogo = document.createTextNode("Alisawi");




const mynamen = ["Home","images", "servies","contact"];

mynamen.forEach(e => {
    let linkLI = document.createElement("li");
    myOl.appendChild(linkLI);

    const liste = document.createTextNode(e);
    linkLI.appendChild(liste);
   
});





myHead.appendChild(testLogo);
myDIVS.appendChild(myHead);



myDIVS.appendChild(myOl);


document.body.style.cssText = "width:80%;margin:auto;";

myOl.style.cssText = "display:flex;color:red;font-size:15px;gap:20px"
myDIVS.style.cssText = "margin-top:3rem  ;display:flex;justify-content:space-between;align-items: center; background-color:#ccc;padding:0 2.2em;border-radius:0 2rem"

mydiv.appendChild(myDIVS);
document.body.appendChild(mydiv);


///   
// after und before außer den div arbeitet
// append  ===> am ende setzt 
// prepend  ==> am anfang setzt es 
// remove ==> löscht den element absolute (statt  dispaly:none;);





// ----------------cloning-- And  AddEventlistener------------------

let omer = document.getElementById("omer");
let dd = document.getElementById("dd");

omer.onclick = function (){
    let myparent = omer.cloneNode(true);
    document.body.appendChild(myparent);
    omer.id = "Imad";
    omer.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur labore impedit provident officiis suscipit,     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur labore impedit provident officiis suscipit m accusantium accusamus nostrum laboriosam dolorum odio fugit deserunt totam facere! Cupiditate id odio ex?"
    omer.style.cssText= "opacity:0.9; font-size: 0.8rem;word-break: break-all;overflow: scroll;;width:200px;height:120px; background-color:red; text-align: center;padding:1rem;border-radius:10px";
}
// addventlistener
// traget ==> هدف  hier bestätig für zns die id || class
omer.addEventListener("click", function (e){
    if(e.target.id === "Imad"){
        Iamd.textContent = "hallo welt "
    }
})

dd.onclick = function (){
    let maina = dd.cloneNode(true);
    document.body.appendChild(maina);
    dd.classList = "Alisawi";
    dd.textContent = "Hallo mr. Alisawi in Berlin"
}

dd.addEventListener("click", function (e){
    if(dd.className === "Alisawi"){
        dd.style.cssText = "background-color:#000; color:#fff;";
    }
})


// omer.addEventListener("click", function (){
//     dd.style.cssText= "opacity:0.9; font-size: 0.8rem;word-break: break-all;overflow: scroll;;width:200px;height:120px; background-color:red; text-align: center;padding:1rem;border-radius:10px";
//     dd.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur labore impedit provident officiis suscipit,     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur labore impedit provident officiis suscipit m accusantium accusamus nostrum laboriosam dolorum odio fugit deserunt totam facere! Cupiditate id odio ex?"
    
// })
// omer.addEventListener("click", one);
// omer.addEventListener("click", tow);