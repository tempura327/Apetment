// --------------------house/篩選器city&type-------------------------------  
$(document).ready(function(){
  // =================city&type ol出現=========================
  $('.city .filter_btn').click(function(){
    $('.citys').slideToggle('callback');
  });

  $('.type .filter_btn').click(function(){
    $('.types').slideToggle('callback');
  });
});

// --------------------house/篩選器city-------------------------------  
$('.filter .citys li').click(function(){
  // =============城市資訊塞值==================
  let citys_content =  $(this).text();
  // console.log(citys_content);
  var citys_index = $(this).index();
  // console.log(citys_index);

  var citys_index2 = $(this).index();
  // console.log(citys_index2);

  $('.house .city p').text(citys_content);
// =================選完後ol整條消失=========================
  if(citys_index != null){
    $('.city ol').hide();
  }
// ==================區域的選單根據城市的選項決定出現哪個ol+塞值============
  if(citys_index == citys_index2){
    $('.distriction .filter_btn').click(function(){
      $(`.distriction ol:eq(${citys_index})`).slideToggle('callback');
    });

    $(`.distriction ol:eq(${citys_index}) li`).click(function(){
      let districtions_content =  $(this).text();
      console.log(districtions_content);

      var districtions_index = $(this).index();
      console.log(districtions_index);
    
      $(`.filter .distriction p`).text(districtions_content);
        // =================選完後ol整條消失=========================
      if(districtions_index != null){
        $('.distriction ol').hide();
      }
      // ====================❇======================
    });
  }
});

// --------------------house/篩選器type-------------------------------  
// =============房型資訊塞值==================
$('.filter .types li').click(function(){
  let types_content =  $(this).text();
  console.log(types_content);

  var types_index = $(this).index();
  // console.log(types_index);

  var types_index2 = $(this).index();
  // console.log(types_index2);

  $('.house .type p').text(types_content);
// =================選完後ol整條消失=========================
  if(types_index != null){
    $('.type ol').hide();
  }
})



