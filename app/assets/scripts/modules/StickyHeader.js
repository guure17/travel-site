import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader{
    constructor(){
        this.siteHeader=$(".site-header");
        this.siteHeaderTitel=$(".large-hero__title");
        this.headerWaypoit();
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

}
export default StickyHeader;