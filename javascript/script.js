// main 
const spanies = document.querySelectorAll(".mS_title span span");
var bullet = ['01','02']
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "1",
    loop: true,
    allowTouchMove: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: ".swiper-pagination-current",
        type: "fraction",
        renderFraction: function(currentClass, totalClass) {
          return '<span class= "bold"> No.0 </span>' + '<span class= " ' + currentClass + '"></span>' +
          '<span class= "' + totalClass + '"></span>';
          totalClass +=0;
        }
      },

  });

  // main END


//   article1

const a1_hero_option = {
    threshold: 0.6,
    root: null,
  }
  const a1_option ={
    threshold: 0.3,
    root: null,
  }

  const article1_container_txt = document.querySelector(".main_article1_container_box");
  const article_txt_observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const object = entry.target;

      if (entry.isIntersecting) {
        object.classList.add("on");
        observer.unobserve(object)
      } 
    });
  }, a1_option);
  article_txt_observer.observe(article1_container_txt);

const article1_container_boxes = document.querySelectorAll(".main_article1_container_box .main_article1_wrap ul li");
const tl = new TimelineMax()

let observer_article1_container = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    let overlap = '-=0.4';
    if (entry.isIntersecting) {
      

      if (!tl.isActive()) {
        overlap = '+=0';
      }

      tl.to(entry.target, 0.5, {
        autoAlpha: 1
      }, overlap);
    // observer.unobserve(entry.target);
    } else {
      overlap = '+=0.4'
      tl.to(entry.target, 0.5, {
        autoAlpha: 0.4
      }, overlap);
    }
  });
}, a1_option);
article1_container_boxes.forEach(box => {
  observer_article1_container.observe(box);
});




  const article1_hero = document.querySelector(".main_article1_hero_box");
  const observer_article1_hero = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const object = entry.target;

      if (!entry.isIntersecting) {
        object.classList.remove("on");
      } else {
        object.classList.add("on");
        
      }
    });
  }, a1_hero_option);
  
  observer_article1_hero.observe(article1_hero);
//   article1 END


// artcile3
const a3_option ={
  threshold: 0.45,
  root: null,
}
const article3 = document.querySelector(".main_tech_lense");
const observer_article3 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
      const object = entry.target;

    if (!entry.isIntersecting) {
      object.classList.remove("on");
    } else {
      object.classList.add("on");
      
    }
  });
}, a3_option);

observer_article3.observe(article3);
// artcile3 END

// article4
const article4 = document.querySelector(".main_pf_view_container");
const a4_static_bg = document.querySelector(".main_perfomance_bg_wraper img");
const observer_article4 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
      const object = entry.target;

    if (!entry.isIntersecting) {
      object.classList.remove("on");
      a4_static_bg.style.objectPosition = '0%'
    } else {
      object.classList.add("on");
      a4_static_bg.style.objectPosition = '24%'
    }
  });
},a3_option);

observer_article4.observe(article4);


const a4_pc_line_option = {
  threshold:0.6,
  root: null,
}


const article4_pc_line = document.querySelectorAll(".pc_main_pf_line");
const article4_performance = document.querySelector(".performance");
const observer_pc_article4 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
      const object = entry.target;

    if (!entry.isIntersecting) {
      for(let el of article4_pc_line) {
        el.classList.remove("on");
      }
    } else {
      for(let el of article4_pc_line) {
        el.classList.add("on");
      }  
    }
  });
},a4_pc_line_option);



const startQuery = () => {
  const MediaQueryNew = matchMedia(`(min-width:960px)`);

  const view_list = document.querySelectorAll(".main_pf_view_list");
  const view_sub_list = document.querySelectorAll(".main_pf_view_sub_list");
  const view_bgs =document.querySelectorAll(".main_perfomance_bg");
  const ifMatchesChange = e => {

    if (!e.matches) {
      const view_bg_mobile = document.querySelectorAll(".main_perfomance_bg.video.mobile");
      view_list.forEach((el,i)=> {
        el.addEventListener("click",()=> {
          if(!el.classList.contains("false")) {
          for(let i =0; i <view_list.length; i++) {
            view_list[i].classList.remove("false");
            view_sub_list[i].classList.remove("on");
          }
          view_sub_list[i].classList.add("on");
          for(let bg of view_bgs) {
            bg.classList.remove("on");
          }
          view_list[i].classList.add("false");
          view_bg_mobile[i].classList.add("on");
        }        
        })
      })
      view_sub_list.forEach((el,i)=> {
        el.addEventListener("click",()=> {
          if(view_sub_list[i].classList.contains("on")) {
            for(let bg of view_bgs) {
              bg.classList.remove("on");
            }
            view_bgs[0].classList.add("on");
            view_sub_list[i].classList.remove("on");
            view_list[i].classList.remove("false");
            view_bg_mobile[i].classList.remove("on");
          }
        })
      })
      observer_pc_article4.unobserve(article4_performance);
    } else {
      const view_bg_pc = document.querySelectorAll(".main_perfomance_bg.pc");
      view_list.forEach((el,i)=> {
        el.addEventListener("click",()=> {
          if(!el.classList.contains("false")) {
          for(let i =0; i <view_list.length; i++) {
            view_list[i].classList.remove("false");
            view_sub_list[i].classList.remove("on");
          }
          view_sub_list[i].classList.add("on");
          for(let bg of view_bgs) {
            bg.classList.remove("on");
          }
          view_list[i].classList.add("false");
          view_bg_pc[i].classList.add("on");
        }        
        })
      })
      view_sub_list.forEach((el,i)=> {
        el.addEventListener("click",()=> {
          if(view_sub_list[i].classList.contains("on")) {
            for(let bg of view_bgs) {
              bg.classList.remove("on");
            }
            view_bgs[0].classList.add("on");
            view_sub_list[i].classList.remove("on");
            view_list[i].classList.remove("false");
            view_bg_pc[i].classList.remove("on");
          }
        })
      })
      observer_pc_article4.observe(article4_performance);
    }
  }
  MediaQueryNew.addListener(ifMatchesChange)
  ifMatchesChange(MediaQueryNew)
}
startQuery();
// article4 ENd

// article5
var swiper = new Swiper(".line_up_prd", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  allowTouchMove: true,
  observer: true,
  observeParents: true,
  breakpoints :{
    959:{
      slidesPerView: 'auto',
      // centeredSlides: false,
    },
  },
  navigation: {
    nextEl: ".main_line_up_btn.swiper-button-next",
    prevEl: ".main_line_up_btn.swiper-button-prev",
  },
  pagination: {
    el: ".main_line_up_slide_pagination",
    clickable: true,
  },

});
// article5 END


// article6 other
var bullet = ['camera', 'audio', 'accessary', 'playstaion'];
var cl = 'a4pslide_item';
var swiper = new Swiper(".other_slide_cot", {
  slidesPerView: 1,
  loop: false,
  allowTouchMove: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: ".other_slide_pagination_box.swiper-pagination",
    type: 'bullets',
    clickable: true,
    bulletClass: 'other_slide_bullet',
    bulletActiveClass: 'on',
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
    }
  },
});
// article6 other END

// article8 admitt
const inp = document.querySelectorAll(".inp");
const error = document.querySelectorAll(".error_txt");

inp.forEach((el,i)=> {
    el.addEventListener("focus",()=> {
        for(let i = 0; i< error.length; i++) {
            error[i].classList.remove("on");
        }
    })
});

inp.forEach((el,i)=> {
    el.addEventListener("focusout",()=> {
        if(!inp[i].value.length == 0) {
            error[i].classList.remove('on');
        }
        else {
        error[i].classList.add("on");
    }
    })
});

const remainHour = document.querySelector("#time_hours");
const remainMin = document.querySelector("#time_mins");
const remainSec = document.querySelector("#time_secs");


function diffDay() {
  const masTime = new Date("2022-12-31");
  const todayTime = new Date();

  const diff = masTime - todayTime;

  const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
  const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2, "0");

  remainHour.innerHTML = `${diffHour}<span>HR</span>`;
  remainMin.innerHTML = `${diffMin}<span>MIN</span>`;
  remainSec.innerHTML = `${diffSec}<span>SEC</span>`;
}

diffDay();
setInterval(diffDay, 1000);
// article8 admitt END

// article9 inspiration
const article9_items = document.querySelectorAll(".photos_inner .photo_img_wraper");

const article9_option = {
  threshold: 0.4,
}

const tl_2 = new TimelineMax()
let observer_article9 = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    let overlap = '-=0.4';
    if (entry.isIntersecting) {
      

      if (!tl_2 .isActive()) {
        overlap = '+=0';
      }

      tl_2 .to(entry.target, 0.5, {
        autoAlpha: 1
      }, overlap);
    observer.unobserve(entry.target);
    } 
  });
}, article9_option);
article9_items.forEach(item => {
  observer_article9.observe(item);
});
// article9 inspiration END
 // article10
 const a6_input = document.querySelectorAll(".a6_form input");
 const a6_check = document.querySelectorAll(".a6_error");
 const a6_plh = document.querySelectorAll(".a6_placeholder");
 
 a6_input.forEach((el,i)=> {
     el.addEventListener("focus",()=> {
         a6_plh[i].classList.add("on");
         a6_check[i].classList.remove("on");
         a6_input[i].classList.remove("on");
     });
 });
 a6_input.forEach((el,i)=> {
     el.addEventListener("focusout",()=> {
 
       if(!a6_input[i].value.length == 0)return
       else {
         a6_plh[i].classList.remove("on");
       } 
         if(a6_input[i].value.length === 0) {
                 a6_input[i].classList.add("on");
                 a6_check[i].classList.add("on");
             
         } else {
             a6_check[i].classList.remove("on");
             a6_input[i].classList.remove("on");
         }
     });
 });
 const a6_m_agree  =document.querySelector(".a6_more_gree");
 const a6_hide = document.querySelectorAll(".a6_hide");
 a6_m_agree.addEventListener("click",()=> {
   a6_m_agree.style.display = 'none';
   for(let el of a6_hide) {
     el.classList.add("on");
   }
 })
 
 // article10 END