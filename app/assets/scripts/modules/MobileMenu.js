import $ from 'jquery';
class MobileMenu{
    constructor(){
      $(".site-header--mobile-menu").click(function(){
        showHeaderMenu();
        hideHeaderBg();
         styleClose();         
      });
    }
    styleClose(){
      $(".site-header--mobile-menu").toggleClass("site-header--mobile-menu--close-x");
    } 

    hideHeaderBg(){
      $(".site-header").toggleClass("site-header--bg-opicity"); 
    }
    showHeaderMenu(){
      $(".site-header--menu-content").toggleClass("site-header--menuIsVisible");  
      
    }
}

export default MobileMenu;