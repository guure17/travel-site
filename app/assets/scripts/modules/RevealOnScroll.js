import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
class RevealOnScroll{
  constructor(elem, offset){
       this.revealOnScrollItem=elem;
       this.offsetPercentage=offset;
       this.hideInitially();
       this.createWaypoints();
  }
   hideInitially(){
      this.revealOnScrollItem.addClass("reveal-feature-item");
  }
  createWaypoints(){
    var that=this;
      this.revealOnScrollItem.each(function(){        
          var currentItem=this;
           new Waypoint({
             element:currentItem,
             handler:function(){
              $(currentItem).addClass("reveal-feature-item--isVisible");
             },
             offset: that.offsetPercentage
         });
      });
  }
}
export default RevealOnScroll;