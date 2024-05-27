let main = document.querySelector("main")
let modal_img =  document.querySelector("#modal-img")
let modal_title = document.querySelector("#modal-title")
let modal_category = document.querySelector("#modal-category")
let modal_desc = document.querySelector("#modal-desc")
let  modal_container = document.querySelector("#modal-container")
let overlay=document.querySelector(".overlay")


let close_btn = document.querySelector("#closeBtn")

//! continoeously fucntion (async)
let fetchAPI = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()

    // console.log(data);
    displayData(data);

}
fetchAPI();  //! for etching data from api



//! below function is to create elements dynamically and display data on the ui

function displayData(data) {
    console.log(data);
    data.map((obj) => {
        console.log(obj);
        let { title,image, price,category,description } = obj;   // destructing object

        //! creating <article> tag 
        let article = document.createElement("article");

        //! setting attribute for <article> tag
        article.setAttribute("class", "product-container");


        //! creating img tag

        let img = document.createElement("img");
        img.setAttribute("src", image);
        img.setAttribute("class", "product-image")



        let section = document.createElement("section");
        section.setAttribute("class", "product-details")

        //! creating <h1> tag and setting attribute
        let productDetail = document.createElement("h2")
        productDetail.innerText = title


        //! creating <h2> tag and settig class attricute
        let productPrice = document.createElement("h3")
        // id1.innerText=id
        productPrice.innerHTML = `<i> &dollar; ${price}</i>`
        section.append(productDetail, productPrice)





        let leftSide = document.createElement("aside")
        leftSide.setAttribute("class", "left-side")
        leftSide.append(productDetail, productPrice)


        let rightSide = document.createElement("aside")
        rightSide.setAttribute("class", "right-side")

        
        let viewMoreBtn = document.createElement("button")
        viewMoreBtn.innerText="View More"

        viewMoreBtn.addEventListener("click",()=>{
            console.log("clicked");
            modal_img.setAttribute("src",image)

            modal_title.innerText=title
            modal_category.innerText=category
            modal_desc.innerText=description
            modal_container.style.display= "block"
            overlay.style.display="block"
            // main.style.overflow="hidden"
            
            

           

        })


        close_btn.addEventListener("click",()=>{
            modal_container.style.display = "none"
             main.style.overflow="scroll"
            overlay.style.display="none"
        })



        rightSide.append(viewMoreBtn)

       



        section.append(leftSide, rightSide)











        // let btn= document.createElement("button")
        // btn.innerText="USER"
        // btn.setAttribute("class", "btn")





        article.append(img, section, viewMoreBtn);


        main.append(article);


    });

}


