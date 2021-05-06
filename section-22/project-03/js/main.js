console.log( "JS cargado." );

$(document).ready( () => {
    $("#review-slider-content").lightSlider({
        auto: true,
        loop: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6
                },
            },
            {
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                },
            }
        ]
    });
} );