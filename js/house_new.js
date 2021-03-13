$('.city').click(function(){
  $('.citys').slideToggle();
});
$('.type').click(function(){
  $('.types').slideToggle();
})

// --------------------------------------------
//把值丟上去
$('.citys li').click(function(){
  let citys_content = $(this).text();
  citys_index = $(this).index();
  console.log(citys_index)

  $('.city p').text(citys_content);
});

$('.distriction li').click(function(){
  let distriction_content = $(this).text();
  console.log(distriction_content)

  $('.distriction p').text(distriction_content);
});


$('.types li').click(function(){
  let types_content = $(this).text();

  $('.type p').text(types_content);
});

// ------------------------------------------------
// 如果citys_index不同，出現的區域跟著變
$('.distriction').click(() => {
  if(citys_index == 0){
    $('.districtions1').slideToggle();
  }else if(citys_index == 1){
    $('.districtions2').slideToggle();
  }else if(citys_index == 2){
    $('.districtions3').slideToggle();
  }
});

