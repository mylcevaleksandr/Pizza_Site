const cookieToggle = document.getElementsByClassName( "cookie-accept" );
const cookieBlock = document.querySelector( ".cookie" );


document.getElementById( "burger" ).onclick = function () {
    document.getElementById( "menu" ).classList.add( "menu__open" );
};

document.querySelectorAll( "#menu *" ).forEach( ( item ) => {
    item.onclick = () => {
        document.getElementById( "menu" ).classList.remove( "menu__open" );
    };
} );

document.querySelectorAll( "a[href^=\"#\"]" ).forEach( anchor => {
    anchor.addEventListener( "click", function ( e ) {
        e.preventDefault();

        document.querySelector( this.getAttribute( "href" ) ).scrollIntoView( {
            behavior: "smooth"
        } );
    } );
} );

if ( !localStorage.getItem( "cookieAccepted" ) ) {
    cookieBlock.style.display = "block";
}

for ( const cookieElement of cookieToggle ) {
    cookieElement.addEventListener( "click", () => {
        cookieBlock.style.display = "none";
        localStorage.setItem( "cookieAccepted", "1" );
    } );
}

$( ".footer__rights span" ).text( (new Date()).getFullYear() );

// let products = $( ".product" );


$( "#main__btn" ).on( () => {
    $( ".products__items" )[0].scrollIntoView( { behavior: "smooth" } );
} );

let addToCart = $( ".product__btn" );
let product = $( "#product-input" );
let address = $( "#address__input" );
let phone = $( "#phone__input" );

$( addToCart ).on( "click", ( e ) => {
    product.val( $( e.target ).parents( ".product" ).find( ".product__title" ).text() );
    $( ".order__base-input" )[0].scrollIntoView( { behavior: "smooth" } );
} );

$( ".order__btn" ).on( "click", () => {

    if ( !product.val() ) {
        alert( "fill pizza" );
        return;
    }
    if ( !address.val() ) {
        alert( "fill address" );
        return;
    }
    if ( !phone.val() ) {
        alert( "fill phone" );
        return;
    }
    alert( "Thank You!" );
} );