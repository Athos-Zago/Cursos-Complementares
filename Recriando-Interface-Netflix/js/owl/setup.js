$('.owl-carousel').owlCarousel({
    loop:true, /*Consegue navegar infinito para o lado*/
    margin:10,
    nav:false,
    responsive:{
        0:{ /* perto de 0 mostra 1 item*/
            items:1
        },
        600:{ /* 600px mostra 3 itens*/
            items:3
        },
        1000:{ /* 1000px mostra 5 itens*/
            items:5
        }
    }
})