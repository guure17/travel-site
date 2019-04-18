import $ from 'jquery';
class GetInTouch{
    constructor(){
       // this.modal=$(".modal");
         $(".btn--get-in-touch").click(function(){
               $(".modal").addClass("modal--show");  
             
           });        
           $(".modal--close").click(function(){
            return false; // prevent the defualt scroll of the button when clicked!!        
            $(".modal").removeClass("modal--show");          
           });;
    
           //detect keypress
           $(document).keyup(this.AnyKeyPress.bind(this));
       // this.AnyKeyPress();
    }
    AnyKeyPress(e){
        if(e.keyCode==27){
            $(".modal").removeClass("modal--show");    
        }
    }
}
export default GetInTouch;