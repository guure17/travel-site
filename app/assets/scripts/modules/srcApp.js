import MobileMenu from './MobileMenu';
import RevealOnScroll from './RevealOnScroll';
import StickyHeader from './StickyHeader';
import GetInTouch from './GetInTouch';
import $ from 'jquery';


 var mobileMenuObj= new MobileMenu();
 new RevealOnScroll($(".feature-item"),"85%");
 new RevealOnScroll($(".testomonial"),"60%");
 var stickyHeader = new StickyHeader();
 var getInTouch = new GetInTouch();
 