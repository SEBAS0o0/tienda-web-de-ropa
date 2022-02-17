'use strict'
window.addEventListener('load',()=>{

    function imagesFloats (){

        const productsData = {

            products : {

                product1: {
                    divclass : "img1",
                    imgsrc : "./public/assets/img/2323.gif",
            
                    dataspeed : "-5",
                    imgalt : "Sombreo color turquesa."
                   
                },

               

                product2: {
                    divclass : "img2",
                    imgsrc : "https://scontent.xx.fbcdn.net/v/t39.1997-6/22880423_161004304494177_422470356377272320_n.webp?_nc_cat=1&ccb=1-5&_nc_sid=0572db&_nc_ohc=DE4udYcwfikAX8-xpCx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT8EX1dQGE7anWtabdIA3bDQkrl3bCBAD4LN1kGLA66QaA&oe=620F37A1",
                    dataspeed : "5",
                    imgalt : "Chamarra deportiva marca Nike color rosada."
                },

                product3: {
                    divclass : "img3",
                    imgsrc : "./public/assets/img/cardigan-marron.webp",
                    dataspeed : "2",
                    imgalt : "Sueter cardigan color cafe."
                },

                product4: {
                    divclass : "img4",
                    imgsrc : "./public/assets/img/vestido-flores.webp",
                    dataspeed : "6",
                    imgalt : "Vestido floreado color azul oscuro."
                },

                product5: {
                    divclass : "img6",
                    imgsrc : "./public/assets/img/torera-moztaza.webp",
                    dataspeed : "-4",
                    imgalt : "Torero color mostaza con cortes."
                },

                product6: {
                    divclass : "img7",
                    imgsrc : "./public/assets/img/tacos-rosas.webp",
                    dataspeed : "-9",
                    imgalt : "Tacos de punta color rosa."
                },

                product7: {
                    divclass : "img8",
                    imgsrc : "./public/assets/img/vestido-rojo.webp",
                    dataspeed : "-7",
                    imgalt : "Vestido color rojo con cinturon negro."
                },

                product8: {
                    divclass : "img9",
                    imgsrc : "./public/assets/img/tnt.gif",
                    dataspeed : "-12",
                    imgalt : "Tenis deportivos rosados marca puma."
                },

                product9: {
                    divclass : "img10",
                    imgsrc : "https://i.pinimg.com/originals/d8/55/9f/d8559f57d2cfcc8db35f032b424f1fe8.gif",
                    dataspeed : "12",
                    imgalt : "Chompa color guindo cardigna de lana."
                }

               
            }
        }

        const productos_etiqueta = document.getElementById("productos");
        const div = document.createElement('div');

        for(const key in productsData.products) {
            div.innerHTML += `
            <div class="${productsData.products[key].divclass}">
                <img src="${productsData.products[key].imgsrc}" data-speed="${productsData.products[key].dataspeed}" class="layer" alt="${productsData.products[key].imgalt}">
            </div>`;
        }
        productos_etiqueta.appendChild(div);
    }

    imagesFloats();

});