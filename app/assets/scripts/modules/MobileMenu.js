import $ from 'jquery';
class MobileMenu{
    constructor(){
      $(".site-header--mobile-menu").click(function(){
        $(".site-header--mobile-menu").toggleClass("site-header--mobile-menu--close-x");
        $(".site-header").toggleClass("site-header--bg-opicity"); 
        $(".site-header--menu-content").toggleClass("site-header--menuIsVisible");          
      });

    }
    
    
}

export default MobileMenu;