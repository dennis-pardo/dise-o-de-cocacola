jQuery(document).ready(lista);

function lista () {
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .menu-nav nav").toggleClass("open");
    });
    jQuery("header .menu-nav nav a").click(function(){
         let link= jQuery(this).attr("href");
         alert(link);
    })
};
