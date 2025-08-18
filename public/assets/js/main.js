// --- START OF FILE: main.js (Corrected for React) ---

// Define global variables to manage state between script runs
let rafId = null; // To control the requestAnimationFrame loop for the payment wheel
let marqueeInstance = null; // To control the marquee instance

function initThemeScripts() {
  const $ = window.jQuery;
  if (!$) {
    console.error("jQuery not loaded. Cannot initialize theme scripts.");
    return;
  }
  
  setTimeout(() => {
    console.log("🚀 Initializing main theme scripts...");
    
    // --- CLEANUP PHASE ---
    
    // Destroy old Swiper instances to prevent conflicts
    if (window.bannerBrandSwiper && window.bannerBrandSwiper.destroy) window.bannerBrandSwiper.destroy(true, true);
    if (window.mySwiper && window.mySwiper.destroy) window.mySwiper.destroy(true, true);
    if (window.brandFourSlider && window.brandFourSlider.destroy) window.brandFourSlider.destroy(true, true);
    if (window.PaymentSwiper && window.PaymentSwiper.destroy) window.PaymentSwiper.destroy(true, true);
    if (window.ourServicesTwoSlider && window.ourServicesTwoSlider.destroy) window.ourServicesTwoSlider.destroy(true, true);
    if (window.servicsSlider && window.servicsSlider.destroy) window.servicsSlider.destroy(true, true);
    if (window.brandSiper && window.brandSiper.destroy) window.brandSiper.destroy(true, true);
    if (window.brandThreeSlider && window.brandThreeSlider.destroy) window.brandThreeSlider.destroy(true, true);
    if (window.testimonialTwoSlider && window.testimonialTwoSlider.destroy) window.testimonialTwoSlider.destroy(true, true);
    if (window.testimonialSlider && window.testimonialSlider.destroy) window.testimonialSlider.destroy(true, true);
    if (window.brandSwiper && window.brandSwiper.destroy) window.brandSwiper.destroy(true, true);

    // Cancel any existing animation frame loop
    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }

    // Destroy old marquee instance if it exists
    if ($.fn.marquee && $(".marquee_mode").data('marquee')) {
        $(".marquee_mode").marquee('destroy');
    }

    // --- INITIALIZATION PHASE ---
    
    $(".select-dropdown-wrapper").each(function(){ /* ... your code ... */ });
    $(".dashboard-toggle-button").off('click').on("click",function(){ /* ... your code ... */ });
    $(".dashboard-close-button").off('click').on("click",function(){ /* ... your code ... */ });
    
    if (document.querySelector(".banner-brand-swiper")) window.bannerBrandSwiper = new Swiper(".banner-brand-swiper",{slidesPerView:7,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:3},524:{slidesPerView:3},640:{slidesPerView:4},768:{slidesPerView:5},1024:{slidesPerView:6},1199:{slidesPerView:7}}});
    if (document.querySelector(".mySwiper")) window.mySwiper = new Swiper(".mySwiper",{slidesPerView:2,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".testimonial-button-next",prevEl:".testimonial-button-prev"},breakpoints:{640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:2}}});
    
    function readURL(e){if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(e){$("#imagePreview").css("background-image","url("+e.target.result+")"),$("#imagePreview").hide(),$("#imagePreview").fadeIn(650)},t.readAsDataURL(e.files[0])}}$("#imageUpload").off("change").on("change",function(){readURL(this)});
    
    if(window.counterUp){const e=window.counterUp.default,t=t=>{t.forEach(t=>{const n=t.target;t.isIntersecting&&!n.classList.contains("is-visible")&&(e(n,{duration:3500,delay:16}),n.classList.add("is-visible"))})},n=new IntersectionObserver(t,{threshold:1});document.querySelectorAll(".counter").forEach(e=>{n.observe(e)})}
    
    if (document.querySelector(".brand-four__slider")) window.brandFourSlider = new Swiper(".brand-four__slider",{slidesPerView:5,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1},499:{slidesPerView:2},640:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4},1199:{slidesPerView:5}}});
    
    $(".dropdown-menu").off('click').on("click",function(e){e.stopPropagation()});
    $(".close-dropdown").off('click').on("click",function(){$(".dropdown-menu").removeClass("show"),$(".dropdown-btn").removeClass("show"),$(".dropdown-btn").attr("aria-expanded","false")});
    
    if (document.querySelector(".payment-mathod-slider")) {
        const multiplier={translate:.1,rotate:.02};window.PaymentSwiper=new Swiper(".payment-mathod-slider",{slidesPerView:7,spaceBetween:24,loop:!0,autoplay:!1,grabCursor:!0,navigation:{nextEl:".payment-method-button-prev",prevEl:".payment-method-button-next"},breakpoints:{320:{slidesPerView:2},640:{slidesPerView:2},768:{slidesPerView:4},1024:{slidesPerView:6},1199:{slidesPerView:7}}});function calculateWheel(){document.querySelectorAll(".single").forEach((e,t)=>{const n=e.getBoundingClientRect(),o=.5*window.innerWidth-(n.x+.5*n.width);let r=Math.abs(o)*multiplier.translate-n.width*multiplier.translate;r<0&&(r=0);const a=o<0?"left top":"right top";e.style.transform=`translate(0, ${r}px) rotate(${-o*multiplier.rotate}deg)`,e.style.transformOrigin=a})}function raf(){calculateWheel(),rafId=requestAnimationFrame(raf)}raf();
    }
    
    $(".settings-button").off('click').on("click",function(){$(".settings-panel").toggleClass("active"),$(this).toggleClass("active")});
    $(document).off('click.settings').on("click.settings",".settings-panel__buttons .settings-panel__button",function(){$(this).siblings().removeClass("active"),$(this).addClass("active")});
    $(".cursor-animate").off('click').on("click",function(){$("body").removeClass("remove-animate-cursor")});
    $(".cursor-default").off('click').on("click",function(){$("body").addClass("remove-animate-cursor")});
    $(".direction-ltr").off('click').on("click",function(){$("html").attr("dir","ltr")});
    $(".direction-rtl").off('click').on("click",function(){$("html").attr("dir","rtl")});
    
    if (document.querySelector(".our-services-two-slider")) window.ourServicesTwoSlider = new Swiper(".our-services-two-slider",{slidesPerView:3,spaceBetween:20,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1},412:{slidesPerView:2},640:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4},1199:{slidesPerView:5}}});
    if (document.querySelector(".servics-slider")) window.servicsSlider = new Swiper(".servics-slider",{slidesPerView:3,spaceBetween:20,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1499:{slidesPerView:3}}});
    
    if(window.AOS) { AOS.refresh(); }
    
    function toggleSubMenu(){$(window).width()<=991?$(".has-submenu").off("click").on("click",function(){$(this).toggleClass("active").siblings(".has-submenu").removeClass("active").find(".nav-submenu").slideUp(300),$(this).find(".nav-submenu").stop(!0,!0).slideToggle(300)}):($(".has-submenu").off("click"), $(".nav-submenu").hide())}toggleSubMenu(),$(window).off("resize.submenu").on("resize.submenu",toggleSubMenu);
    
    var progressPath=document.querySelector(".progress-wrap path");if(progressPath){var pathLength=progressPath.getTotalLength();progressPath.style.transition=progressPath.style.WebkitTransition="none",progressPath.style.strokeDasharray=pathLength+" "+pathLength,progressPath.style.strokeDashoffset=pathLength,progressPath.getBoundingClientRect(),progressPath.style.transition=progressPath.style.WebkitTransition="stroke-dashoffset 10ms linear";var updateProgress=function(){var e=$(window).scrollTop(),t=$(document).height()-$(window).height(),n=pathLength-e*pathLength/t;progressPath.style.strokeDashoffset=n};updateProgress(),$(window).off("scroll.progress").on("scroll.progress",updateProgress);var offset=50,duration=550;jQuery(window).off("scroll.progress-wrap").on("scroll.progress-wrap",function(){jQuery(this).scrollTop()>offset?jQuery(".progress-wrap").addClass("active-progress"):jQuery(".progress-wrap").removeClass("active-progress")}),jQuery(".progress-wrap").off('click').on("click",function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},duration),!1})}
    
    function dynamicActiveMenuClass(e){let t=window.location.pathname.split("/").reverse()[0];""===t?e.find("li.nav-menu__item.has-submenu").eq(0).addClass("activePage"):(e.find("li").removeClass("activePage"),e.find("li").each(function(){let e=$(this).find("a"),n=e.attr("href")||"";n.endsWith(t)&&$(this).addClass("activePage")}),e.children("li").each(function(){$(this).find(".activePage").length&&$(this).addClass("activePage")}))}$("ul.nav-menu").length&&dynamicActiveMenuClass($("ul.nav-menu"));
    
    $(".payment-solutions__item").off('click').on("click",function(){$(".payment-solutions__item").removeClass("active"),$(this).toggleClass("active")});
    
    if (document.querySelector(".brand-siper")) window.brandSiper = new Swiper(".brand-siper",{slidesPerView:1,spaceBetween:10,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:6,spaceBetween:50}}});
    if (document.querySelector(".brand-three-slider")) window.brandThreeSlider = new Swiper(".brand-three-slider",{autoplay:{delay:4e3,disableOnInteraction:!1},speed:1500,grabCursor:!0,loop:!0,slidesPerView:7,breakpoints:{300:{slidesPerView:2},575:{slidesPerView:3},768:{slidesPerView:4},992:{slidesPerView:5},1200:{slidesPerView:6},1400:{slidesPerView:7}}});
    
    if($.fn.marquee && $(".marquee_mode").length > 0){$(".marquee_mode").marquee({speed:100,gap:0,delayBeforeStart:0,direction:$("html").attr("dir")==="rtl"?"left":"right",duplicated:!0,pauseOnHover:!0,startVisible:!0})}
    
    if (document.querySelector(".testimonial-two-slider")) {
        window.testimonialTwoSlider=new Swiper(".testimonial-two-slider",{slidesPerView:2,loop:!0,spaceBetween:20,autoplay:{delay:3000,disableOnInteraction:!1},navigation:{nextEl:".testimonial-button-next",prevEl:".testimonial-button-prev"},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:2}}});
        // Use jQuery's .off().on() to prevent duplicate listeners
        $(".testimonial-two-slider").off("mouseenter mouseleave").on("mouseenter",function(){if(window.testimonialTwoSlider.autoplay)window.testimonialTwoSlider.autoplay.stop()}).on("mouseleave",function(){if(window.testimonialTwoSlider.autoplay)window.testimonialTwoSlider.autoplay.start()});
    }
    if (document.querySelector(".testimonial-slider")) window.testimonialSlider = new Swiper(".testimonial-slider",{slidesPerView:3,loop:!0,spaceBetween:20,navigation:{nextEl:".testimonial-button-next",prevEl:".testimonial-button-prev"},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:2},1199:{slidesPerView:3}}});
    
    $(".toggle-password").off('click').on("click",function(){$(this).toggleClass("active");var e=$($(this).data("target"));"password"==e.attr("type")?(e.attr("type","text"),$(this).removeClass("ph-eye-slash").addClass("ph-eye")):(e.attr("type","password"),$(this).removeClass("ph-eye").addClass("ph-eye-slash"))});
    
    if (document.querySelector(".brand-swiper")) window.brandSwiper = new Swiper(".brand-swiper",{loop:!0,spaceBetween:20,slidesPerView:1,breakpoints:{640:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:5},1280:{slidesPerView:7}}});
    
    if($.fn.magnificPopup){$(".play-button").magnificPopup({type:"iframe",removalDelay:300,mainClass:"mfp-fade"})}

    console.log("✅ Main theme scripts initialization finished.");
  }, 100);
}
window.initThemeScripts = initThemeScripts;

(function ($) {
  "use strict";
  if (!$) return;
  // These event listeners should only be attached ONCE for the whole app lifecycle.
  // They are safe outside the re-runnable function.
  $(window).on("load", function () { $(".preloder").fadeOut(); });
  $(window).on("scroll.header", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });
})(window.jQuery);