import $ from "jquery";

function getColDif(){
    var totalCols = $(".jk-slider-wrapper").attr("data-numberoftotalcols") ?? '1;'
    var visibleCols = $(".jk-slider-wrapper").attr("data-visiblecols") ?? '1';

    var colDifference = parseInt(totalCols) - parseInt(visibleCols); 

    

    return colDifference;
}




let counter = 0;


$(document).ready(function(){

    let colWidth = $(".jk-slider-single-wrapper").outerWidth();


    $(window).on('resize', () => {
        console.log("I was resized");
        colWidth = $(".jk-slider-single-wrapper").outerWidth();
        $(".jk-slider-wrapper-inner").css("left", "0")
        counter = 0;
   
    })


   $(".jk-slider-arrow-left").click(() => {

    console.log(counter)

    if(counter <= 0){
        return
    }

    counter--;

   
   
    $(".jk-slider-wrapper-inner").animate({left: '+=' + colWidth})
      
   })
   

  

   $(".jk-slider-arrow-right").click(() => {

    if(counter >= getColDif()){
        return
    }

    counter++;

   
   
    $(".jk-slider-wrapper-inner").animate({left: '-=' + colWidth})
   
})
})
