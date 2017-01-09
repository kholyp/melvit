if($('#main-slider').length){
  $('#main-slider').bxSlider({
    mode: 'fade',
    auto: true
  });
}
if($('.countdown').length){
  $('.countdown').dsCountDown({
   endDate: new Date("September 31, 2016 11:33:00"),
  }); 
}

var countZoom = 1;


if($('#raise-slider').length){

  var slider = $('#raise-slider').bxSlider({
    onSliderLoad: function (currentIndex){
      $('#slide-counter .current-index').text(currentIndex + 1);
      $("#raise-slider li:not([class='bx-clone'])").eq(0).addClass('active-slide');
      fancyImg()
    },
    onSlideBefore: function ($slideElement, oldIndex, newIndex){
      $('#slide-counter .current-index').text(newIndex + 1);
      $("#raise-slider li").removeClass('active-slide');
      current = slider.getCurrentSlide();
      $("#raise-slider li:not([class='bx-clone'])").eq(current).addClass('active-slide');
      fancyImg()
    },
    pager: false,
    nextSelector: '#next-raise',
    prevSelector: '#prev-raise',
    nextText: '<i class="fm fm-right-arrow"></i>',
    prevText: '<i class="fm fm-right-arrow"></i>'
  });

  $('.total-index').append(slider.getSlideCount()); 
}

$(document).ready(function() {
  $(".fancybox").fancybox({
    padding : 0,
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

});

function fancyImg(){
  var activeSlide = $('#raise-slider').find('.active-slide');
  var indexImg = activeSlide.find('.fancybox').attr('href');
  $('.full-size').attr('href', indexImg);
}
// function zoomImg(){
//   var activeImg = $('#raise-slider').find('img');
//   $('.zoom-img').click(function() {
//     countZoom = countZoom + 1;
//     activeImg.css({
//       "-webkit-transform": 'scale3d' + '('+countZoom+','+countZoom+',1)',
//       "-ms-transform":'scale3d' + '('+countZoom+','+countZoom+',1)',
//       "transform":'scale3d' + '('+countZoom+','+countZoom+',1)'
//     });​
//   });
// }
// function smallZoom(){
//   var activeImg = $('#raise-slider').find('img');

//   $('.small-zoom').click(function() {
//     if(countZoom > 1){
//       countZoom = countZoom - 1; 
//       activeImg.css({
//         "-webkit-transform": 'scale3d' + '('+countZoom+','+countZoom+',1)',
//         "-ms-transform":'scale3d' + '('+countZoom+','+countZoom+',1)',
//         "transform":'scale3d' + '('+countZoom+','+countZoom+',1)'
//       });​
//     }
//   });
// }
// function removeZoom(){
//   countZoom = 1;
//   var Img = $('#raise-slider').find('img');
//   Img.css({
//     "-webkit-transform": 'scale3d' + '('+countZoom+','+countZoom+',1)',
//     "-ms-transform":'scale3d' + '('+countZoom+','+countZoom+',1)',
//     "transform":'scale3d' + '('+countZoom+','+countZoom+',1)'
//   });​
// }

if($('.slider-range').length){
    $(".slider-range").slider({
     min: 0,
     max: 150000,
     values: [0,150000],
     range: true,
     stop: function(event, ui) {
        $(".minCost").html($(".slider-range").slider("values",0));
        $(".maxCost").html($(".slider-range").slider("values",1));
      },
      slide: function(event, ui){
        $(".minCost").html($(".slider-range").slider("values",0));
        $(".maxCost").html($(".slider-range").slider("values",1));
      }
    });
     $(".minCost").change(function(){
     var value1=$(".minCost").html();
     var value2=$(".maxCost").html();

      if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        $(".minCost").html(value1);
     }
     $(".slider-range").slider("values",0,value1); 
    });
    $(".maxCost").change(function(){
     var value1=$(".minCost").html();
     var value2=$(".maxCost").html();
     
     if (value2 > 12000) { value2 = 12000; $(".maxCost").html(12000)}

     if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        $(".maxCost").html(value2);
     }
     $(".slider-range").slider("values",1,value2);
   });
}

  // Select
$('.slct').click(function(){
  var dropBlock = $(this).parent().find('.drop');

  if( dropBlock.is(':hidden') ) {
    dropBlock.slideDown(50);

    $(this).addClass('active');
    $('.drop').find('li').click(function(){
      var selectResult = $(this).html();
      $(this).closest('.select').find('input').val(selectResult);
      $(this).closest('.select').find('.slct').removeClass('active').html(selectResult);

      dropBlock.slideUp(50);
    });
  
  } else {
    $(this).removeClass('active');
    dropBlock.slideUp(50);
  }

  return false;
});

$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0){
      container.slideUp(50);
      $('.slct').removeClass('active');
  }
});
$(document).ready(function(){
  if($('.scrollbar-inner').length){
    $('.scrollbar-inner').scrollbar();
  }
});

var mydivs = new Array('#product-det','#pitch','#transaction','#rating','#shipping');

function opcl(arr, e){
  if ($(e).css('display') == 'none'){
    for(var i in arr){   
       $(arr[i]).removeClass('active');     
    }
    $(e).addClass('active');       
  }
}


$('.view-btn').click(function() {
  $('.view-btn').removeClass('active')
  $(this).addClass('active')
});
$('.company-tab__item').click(function() {
  $('.company-tab__item').removeClass('active')
  $(this).addClass('active')
});

if (window.matchMedia("(max-width: 767px)").matches){
  $('.menu-toogle').click(function(e) {
    e.preventDefault();
    var menu = $(this).next();
    if(menu.is(':hidden')){
      menu.slideDown(250)
      $(this).addClass('active')
    }
    else{
      menu.slideUp(250)
      $(this).removeClass('active')
    }
  });
}

$('.navbar-toggle').click(function() {
  var drop = $('.main-nav');
  if(drop.is(':hidden')){
    drop.fadeIn(250)
    drop.find('.main-drop-menu').addClass('active')
  }
});
$('.close-menu').click(function(e) {
  var dropmenu = $(this).closest('.main-nav');
  dropmenu.find('.main-drop-menu').removeClass('active')
  dropmenu.fadeOut(250)
});
$('.filter-toogle').click(function(e) {
  e.preventDefault();
  var filter = $('#sidebar');
  if(filter.is(':hidden')){
    filter.slideDown(250)
  }
  else{
    filter.slideUp(250)
  }
});
if($('#awards-slider').length){
  $('#awards-slider').bxSlider({
    pagerCustom: '#awards-pager',
    nextSelector: '#awards-next',
    prevSelector: '#awards-prev',
    nextText: '',
    prevText: ''
  });
}
if($('#cert-slider').length){
  $('#cert-slider').bxSlider({
    pagerCustom: '#cert-pager',
    nextSelector: '#cert-next',
    prevSelector: '#cert-prev',
    nextText: '',
    prevText: ''
  });
}

if($('#card-slider').length){
  $('#card-slider').bxSlider({
    pagerCustom: '#card-thumb',
    mode: 'fade',
    controls: false
  });
}

$(document).ready(function() {

  if($('.services__wrapp').length){
    var servPos, winPosMain;
    function refreshServ() {
      servPos = $('.services__wrapp').offset().top;
    }

    refreshServ();
    $(window).resize(refreshServ);
      
    $(window).scroll(function() {
      winPosMain = $(window).scrollTop();
      
      if (winPosMain >= servPos) {
        $('.services__wrapp').parent().addClass('container');
        $('.services__wrapp').parent().parent().addClass('services-fixed');
        $('.nav__cat').addClass('fixed');
        $('.logo').addClass('fixed');
        $('.logo a img').attr('src', 'img/footer-logo.png');
      }  
      else {
        $('.services__wrapp').parent().removeClass('container');
        $('.services__wrapp').parent().parent().removeClass('services-fixed');
        $('.nav__cat').removeClass('fixed');
        $('.logo').removeClass('fixed');
        $('.logo a img').attr('src', 'img/logo.png');
      }
    });
  }
  if($('.floating-bar-card').length){
    var navPos, winPos;

    function refreshVar() {
      navPos = $('.floating-bar-card').offset().top;
    }

    refreshVar();
    $(window).resize(refreshVar);
      
    $(window).scroll(function() {
      winPos = $(window).scrollTop();
      
      if (winPos >= navPos) {
        $('.floating-bar-card').parent().addClass('col-lg-9 col-md-8 col-sm-7 col-xs-12');
        $('.floating-bar-card').parent().parent().addClass('container clearfix');
        $('.floating-bar-card').parent().parent().parent().addClass('fixed-bar');
        $('.fixed-panel__rating').after($('#add-card'))
        $('#add-card').after($('#contact-seller'))
        $('.fixed-panel').show();
      }  
      else {
        $('.floating-bar-card').parent().removeClass('col-lg-9 col-md-8 col-sm-7 col-xs-12');
        $('.floating-bar-card').parent().parent().removeClass('container clearfix');
        $('.floating-bar-card').parent().parent().parent().removeClass('fixed-bar');
        $('.card-link').prepend($('#add-card'))
        $('.card-button').prepend($('#contact-seller'))
        $('.fixed-panel').hide();
      }
    });
  }
  if($('.float-bar').length){
    var barPos, win2Pos;

    function refreshBar() {
      barPos = $('.float-bar').offset().top;
    }

    refreshBar();
    $(window).resize(refreshBar);
      
    $(window).scroll(function() {
      win2Pos = $(window).scrollTop();
      
      if (win2Pos >= barPos) {
        $('.float-bar').parent().addClass('container clearfix');
        $('.float-bar').parent().parent().addClass('fixed-wrapp');
      }  
      else {
        $('.float-bar').parent().removeClass('container clearfix');
        $('.float-bar').parent().parent().removeClass('fixed-wrapp');
      }
    });
  }
  if($('.all-categories').length){
    var catPos, win3Pos;

    function refreshCat() {
      catPos = $('.all-categories').offset().top;
    }

    refreshCat();
    $(window).resize(refreshCat);
      
    $(window).scroll(function() {
      win3Pos = $(window).scrollTop();
      
      if (win3Pos >= catPos) {
        $('.all-categories').parent().addClass('container clearfix');
        $('.all-categories').parent().parent().addClass('fixed-wrapp');
      }  
      else {
        $('.all-categories').parent().removeClass('container clearfix');
        $('.all-categories').parent().parent().removeClass('fixed-wrapp');
      }
    });
  }

    $(".card-tab").click(function () {
      elementClick = $(this).attr("data-scroll")
      destination = $(elementClick).offset().top - 44;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    });

  
});

$('.keep-open').on({
    "shown.bs.dropdown": function() { $(this).attr('closable', false); },
    "click":             function() { },
    "hide.bs.dropdown":  function() { return $(this).attr('closable') == 'true'; }
});

$('.dropdown-toggle').on({
  "click": function() {
    $(this).parent().attr('closable', true );
  }
})

$('.dropdown-btn').click(function(e) {
  e.preventDefault();
  var menu = $(this).next();
  if(menu.is(':hidden')){
    menu.show();
  }
  else{
    menu.hide();
  }
});

$('.services__item').click(function(e) {
  $('.services__item').removeClass('active');
  $(this).addClass('active');
});

$(document).ready(function(){
  $(".serv-btn").click(function(e) {
    e.preventDefault();
    var offsetTop = $("#"+$(this).data("target")).offset().top - 80;
    $('html, body').animate({scrollTop: offsetTop}, 1000);
  });
  $(document).scroll(function(){
    var offsets = [];
    $('.serv-btn').each(function(index, element){
      offsets.push($("#" + $(element).data('target')).offset().top);
    });
    offsets.push($(document).height());
    var docScroll = $(document).scrollTop() + 130;
    for (var i = 0; i < offsets.length - 1; i++) {
      if (docScroll >= offsets[i] && docScroll < offsets[i+1]) {
        $('.serv-btn.active').removeClass('active');
        $('.serv-btn').eq(i).addClass('active');
        break;
      };
    };
  });
})
$(document).ready(function(){
  $(".float-scroll").click(function(e) {
    e.preventDefault();
    var offsetTop2 = $("#"+$(this).data("target")).offset().top - 44;
    $('html, body').animate({scrollTop: offsetTop2}, 1000);
  });
  $(document).scroll(function(){
    var offsets2 = [];
    $('.float-scroll').each(function(index, element){
      offsets2.push($("#" + $(element).data('target')).offset().top);
    });
    offsets2.push($(document).height());
    var docScroll2 = $(document).scrollTop() + 130;
    for (var i = 0; i < offsets2.length - 1; i++) {
      if (docScroll2 >= offsets2[i] && docScroll2 < offsets2[i+1]) {
        $('.float-scroll.active').removeClass('active');
        $('.float-scroll').eq(i).addClass('active');
        break;
      };
    };
  });
})

$(document).ready(function () {
  $.fn.equivalent = function (){
    var $blocks = $(this),
        maxH    = $blocks.eq(0).height(); 
    $blocks.each(function(){
        maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
    });

    $blocks.height(maxH); 
  }
  $('.logistic-learn').equivalent();
});

$(document).ready(function() {
  $(".categories-link").click(function () {
    var barHeight = $('.all-categories').height();
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top - barHeight;
    $(".categories-link").removeClass('active');
    $(this).addClass('active');
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});