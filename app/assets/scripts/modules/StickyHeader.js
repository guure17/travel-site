import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
    constructor(){
        this.lazyImages=$(".lazyload");
        this.siteHeader=$(".site-header");
        this.siteHeaderTitel=$(".large-hero__title");
        this.pageSections=$(".page-section");
        this.headerLinks=$(".primary-nav a");

        this.headerWaypoit();
        this.pageSectionWaypoint();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    // this funciton fixes the conflicts of lazyloading and waypoints
    refreshWaypoints(){
        this.lazyImages.on("load", function(){
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
    }

   headerWaypoit(){
       var that =this;
       new Waypoint({
                    element:that.siteHeaderTitel[0],
                    handler:function(direction){
                        if(direction=="down")
                        {
                            that.siteHeader.addClass("site-header--dark");
                        }
                        else{
                            that.siteHeader.removeClass("site-header--dark");
                        }
                    }
       });
   }

   pageSectionWaypoint(){
    var that =this;
    var customOffset=0;
    this.pageSections.each(function(){
        var currentPageSection=this; //page-section collection       
        new Waypoint({
            element:currentPageSection,
            handler: function(direction){ 
               
                var matchingHeaderLink=currentPageSection.getAttribute("data-matching-link");  
                that.headerLinks.removeClass("is-current-link");
                $(matchingHeaderLink).addClass("is-current-link");                            
                        
            },
            offset:"18%"
           
        });
    
    });
       
   }


}
export default StickyHeader;