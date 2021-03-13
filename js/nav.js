//讓寵物用品、貓、狗連結失效

$(document).ready(function(){
  let winW = $(window).width();
  console.log(winW);

  if(winW <= 768 && winW >= 320){
    $('.ham_bar').click(function(){
      console.log('disabled')
      $('.pet_goods p a').attr('disabled' ,true);
      $('.pet_goods p a').css({
        'pointer-events': 'none'
      });
      $('.submenu_cat a').attr('disabled' ,true);
      $('.submenu_cat a').css({
        'pointer-events': 'none'
      });
  
      $('.submenu_dog a').attr('disabled' ,true);
      $('.submenu_dog a').css({
        'pointer-events': 'none'
      });
      
    })
  }
});
// -----------------------------------------

$(document).ready(function(){
  let winW = $(window).width();
  console.log(winW);

  if(winW <= 768 && winW >= 320){
    $('.ham_bar').click(function(){
      $('nav .menu').slideToggle();
      
      console.log('1');
    });
    // -----------------------------------------
    $('.pet_goods > p').click(function(){
      $(`.submenu_cat .son_menu`).hide();
      $(`.submenu_dog .son_menu`).hide();
      $(`.submenu2`).slideToggle();//貓狗出現
      $('.icon .last').show();
  
      // console.log('2');
    });
  
    // -----------------------------------------
    $('.last').click(function(){
      $(`.submenu2`).slideUp(); //貓狗消失
      $('.icon .last').hide();
  
      // console.log('3.0');
    })
  
    $('.icon .last2').click(function(){
      $(`.submenu2 .son_menu`).slideUp(); //貓、狗商品選單消失
      // $(`.submenu_dog .son_menu`).slideUp();
      $('.icon .last').show();
      $('.icon .last2').hide();
  
      // console.log('3.0.1');
    })
  }
  $(`.submenu2 .submenu_cat`).click(function(){
    $('.icon .last2').show();
    $('.icon .last').hide();
    $(`.submenu_cat .son_menu`).slideToggle();//貓商品選單出現

    // console.log('3.1.1')
  })

  $(`.submenu2 .submenu_dog`).click(function(){
    $('.icon .last').hide();
    $('.icon .last2').show();
    $(`.submenu_dog .son_menu`).slideToggle();//狗商品選單出現

    // console.log('3.1.2')
  })
  
})


