// ------------------index/house_content旋轉---------------------------------
var controller = new ScrollMagic.Controller();

$(document).ready(function(){
  let winW = $(window).width();
  // console.log(winW);

    if(winW > 428){
    var ani1 = TweenMax.to('.content1' , 1 , {
      rotation: '-15'
    })
    
    var ani2 = TweenMax.to('.content3', 1, {
     rotation: '15'
    })
    
    
    new ScrollMagic.Scene({
      triggerElement : '.trigger1'  //觸發點
    }).setTween([ani1, ani2]) 
    .addTo(controller)
  }else if(winW <= 428){
    var ani1 = TweenMax.to('.content1' , 1 , {
      rotation: '-7'
    })
    
    var ani2 = TweenMax.to('.content2', 1, {
     rotation: '7'
    })
    
    
    new ScrollMagic.Scene({
      triggerElement : '.trigger2'  //觸發點
    }).setTween([ani1, ani2]) 
    .addTo(controller)
  }
})

// --------------------index/輪播-------------------------------
// --------------點擊--------------------
$(document).ready(function(){
  let bannerW = $('.banner').width();
  // console.log(bannerW);
  let img_cnt = $('.carousel_img li').length;
  // console.log(img_cnt);

  for(i = 0; i < img_cnt; i++){
    $('.carousel_btn').append('<li></li>');
  }

  $('.carousel_btn li:nth-child(1)').addClass('clicked');

    $('.carousel_img li').width(bannerW);
    $('.carousel_img').width(bannerW * img_cnt);

    // let index;
    $('.carousel_btn li').click(function(){
      let index = $(this).index();
      // console.log(index);

      $('.carousel_img').animate({
        left: bannerW * index * -1,
      })
      $(this).addClass('clicked');
      $('.carousel_btn li').not(this).removeClass('clicked');
    });
});
// $('').();
// --------------自動撥放--------------------
let o = 0;
$(document).ready(function(){
  let bannerW = $('.banner').width();
  // console.log(bannerW);
  
  function carousel(){
    let img_cnt = $('.carousel_img li').length;
    // console.log(img_cnt);

  
    o++;
    // console.log(o);
  
    if(o < img_cnt){
      // console.log(o);
  
      // console.log(bannerW)
  
      $('.carousel_img').animate({
        left: bannerW * o * -1,
      })
    }else if(o >= img_cnt){
      o = 0;
      // console.log(o);
  
      // console.log(bannerW)
  
      $('.carousel_img').animate({
        left: bannerW * o * -img_cnt,
      })
    };
  };
  setInterval(carousel,2300);
})



// --------------輪播按鈕自動變色--------------------
let j = 0;

function carousel_btn(){
  // let btn_index = $('.carousel_btn li').index();
  // console.log(btn_index);
  let btn_cnt = $('.carousel_btn li').length;
  // console.log(btn_cnt);
    
  j++;
  // console.log(j);

 
  if(j > 0 && j < btn_cnt){ //j=1~4
    // console.log(j);

    let last = $(`.carousel_btn li`)
    $(last).removeClass('clicked')

    let chosen = $(`.carousel_btn li:eq(${j})`)
    // console.log(chosen);
    // chosen.classList.add('clicked');
    $(chosen).addClass('clicked')

    
  }else if(j == btn_cnt){ //j=5
    // console.log(j);
    j = 0;
    // console.log(j); //j=0

    let last = $(`.carousel_btn li`)
    // console.log(a);
    $(last).removeClass('clicked')
    
    let chosen = $(`.carousel_btn li:eq(${j})`)
    // console.log(chosen);
    // chosen.classList.add('clicked');
    $(chosen).addClass('clicked')
  }
};

setInterval(carousel_btn,2300);

// --------------------428~389 + 375 + 360 + 320 index/優惠卡片移動-------------------------------

$(document).ready(function(){
  let winW = $(window).width();
  console.log(winW);

  if(winW <= 428 && winW > 389){
    $('.discount .b2').click(function(){
      let card_position = $('.discount_card').position().left;
      console.log(card_position)
      console.log('right')
    
      if(card_position < 209 && card_position > 9){
        $('.discount_card').animate({
          // left: '-42.45vw'
          left: `-=180`
        });
        console.log('A')
      }
    })

    $('.discount .b1').click(function(){
      let card_position = $('.discount_card').position().left;
      console.log(card_position)
      console.log('left')
    
      if(card_position > -171 && card_position < 29){
        $('.discount_card').animate({
          left:'+=180'
        });
        console.log('a')
      }
    })
  }else if(winW == 375 || winW == 360){
    $('.discount .b2').click(function(){
      let card_position = $('.discount_card').position().left;
      console.log(card_position)
      console.log('right')
    
      if(card_position < 209 && card_position > 9){
        $('.discount_card').animate({
          // left: '-42.45vw'
          left: `-=160`
        });
        console.log('A')
      }
    })

    $('.discount .b1').click(function(){
      let card_position = $('.discount_card').position().left;
      console.log(card_position)
      console.log('left')
    
      if(card_position > -171 && card_position < 29){
        $('.discount_card').animate({
          left:'+=160'
        });
        console.log('a')
      }
    })
  }else if(winW == 320){
    $('.discount .b2').click(function(){
      let card_position = $('.discount_card').position().left;
      console.log(card_position)
      console.log('right')
    
      if(card_position < 209 && card_position > 9){
        $('.discount_card').animate({
          // left: '-42.45vw'
          left: `-=140`
        });
        console.log('A')
      }
    })

    $('.discount .b1').click(function(){
      let card_position = $('.discount_card').position().left;
      console.log(card_position)
      console.log('left')
    
      if(card_position > -171 && card_position < 29){
        $('.discount_card').animate({
          left:'+=140'
        });
        console.log('a')
      }
    })
  }
})

$('.closeIcon').click(() => {
  $('.mask').css({"display":"none"})
})