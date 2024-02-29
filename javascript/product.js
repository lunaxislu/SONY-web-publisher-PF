// PRODUCT
var swiper = new Swiper(".prd_container_tab1 .swiper-container", {
    slidesPerView: 1,
    loop: true,
     slidesPerGroup: 1,
     loopFillGroupWithBlank: true,
    allowTouchMove: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".prd_container_tab1 .swiper-button-next",
      prevEl: ".prd_container_tab1 .swiper-button-prev",
    }, 
    pagination: {
      el: '.prd_container_tab1 .swiper-pagination',
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".prd_container_tab2 .swiper-container", {
    slidesPerView: 1,
    loop: true,
     slidesPerGroup: 1,
     loopFillGroupWithBlank: true,
    allowTouchMove: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".prd_container_tab2 .swiper-button-next",
      prevEl: ".prd_container_tab2 .swiper-button-prev",
    }, 
    pagination: {
      el: '.prd_container_tab2 .swiper-pagination',
      clickable: true,
    },
  });
  
  const prd_camera_img = document.querySelectorAll(".prd_img");
  const prd_camera_color = document.querySelectorAll(".prd_color_box li");
  
  prd_camera_color.forEach((el,i)=> {
    el.addEventListener("click",()=> {
      for(let i = 0 ; i< prd_camera_color.length; i++) {
        prd_camera_color[i].classList.add("false");
        prd_camera_img[i].classList.add("false");
      }
      prd_camera_color[i].classList.remove("false");
      prd_camera_img[i].classList.remove("false");
    })
  });
  
  
  
  // plus 
  const plus = document.querySelectorAll(".plus"),
  minus = document.querySelectorAll(".minus"),
  num = document.querySelectorAll(".main_prd_select_inp"),
  count = document.querySelectorAll(".count"),
  price = document.querySelectorAll(".price"),
  total_price = document.querySelectorAll(".result_price .num");
  let a = 1;
  
  function locale(el) {
    for(let item of el) {
      let number= parseFloat(item.innerText.replace(',',''));
       item.innerHTML = number.toLocaleString();
    }
  }
  locale(price);
  locale(total_price);
  
  let convert_price = [];
  for(let el of price){
   let number = parseFloat(el.innerText.replace(',',''));
    convert_price.push(number);
  }
  
  
  plus.forEach((el,i)=> {
    el.addEventListener("click",()=> {
      a++;
      a = (a < 20) ?  a: a;
      num[i].value =a;
      count[i].innerHTML = a;
  
      let scrub_price = a*convert_price[i]
      price[i].innerHTML = scrub_price.toLocaleString();
      total_price[i].innerHTML = scrub_price.toLocaleString();
      
    });
  })
  
  minus.forEach((el,i)=> {
    el.addEventListener("click",()=> {
      if(a > 1) {
        a--;
        a = (a < 20) ?  a: a;
        num[i].value =a;
        count[i].innerHTML = a;
        let scrub_price = a*convert_price[i]
        price[i].innerHTML = scrub_price.toLocaleString();
        total_price[i].innerHTML = scrub_price.toLocaleString();
      }
      });
  });
  
  // prd_view_camera
  
  const pv_camera_btn = document.querySelector(".prd_view_camera .selected_btn");
  const pv_camera_box = document.querySelector(".prd_view_camera .select_inner");
  
  pv_camera_btn.addEventListener("click",()=> {
  if(!pv_camera_box.classList.contains("on")) {
    pv_camera_btn.classList.add("on");
    pv_camera_box.classList.add("on");
    const result_price = document.querySelector(".result_price .num");
    result_price.innerHTML = '948,000';
    const count = document.querySelector(".s_txt .count");
    count.innerHTML = '1';
    const pv_camera_item = document.querySelectorAll(".prd_view_camera .prd_opt_list_item");
    const pv_camera_item_name = document.querySelectorAll(".prd_view_camera .prd_opt_name");
    const pv_camera_item_count = document.querySelector(".prd_view_camera .main_prd_select_opt");
    const camera_count_name = document.querySelectorAll(".prd_view_camera .main_prd_select_opt .prd_opt_list_item");
    pv_camera_item.forEach((el,i)=> {
      el.addEventListener("click",()=> {
        pv_camera_btn.innerHTML = pv_camera_item_name[i].textContent;
        pv_camera_btn.classList.remove("on");
        pv_camera_box.classList.remove("on");
        pv_camera_item_count.classList.remove("false");
        for(let i = 0; i < camera_count_name.length; i++) {
          camera_count_name[i].classList.add("false");
        }
        camera_count_name[i].classList.remove("false");
      })
    })
  } else {
    pv_camera_btn.classList.remove("on");
    pv_camera_box.classList.remove("on");
  }
  })
  
  
        
  const prd_like =document.querySelectorAll(".prd_view_social_like");
        prd_like.forEach((el,i)=> {
          el.addEventListener("click",()=> {
            if(!el.classList.contains("on")) {
              el.classList.add("on");
            } else {
              el.classList.remove("on");
            }
          })
        })
  
  const prd_view_select_boxes = document.querySelectorAll(".main_prd_select_opt");
  const prd_view_select_box_close = document.querySelectorAll(".prd_selected_close_container");
  const select_boxes = document.querySelectorAll(".selected_btn");
  prd_view_select_box_close.forEach((el,i)=> {
    el.addEventListener("click",()=> {
      prd_view_select_boxes[i].classList.add("false");
      select_boxes[i].classList.remove("on");
      select_boxes[i].innerHTML = '제품을 선택하세요.';
      price[i].innerHTML = convert_price[i].toLocaleString();
        a = 1;
      num[i].value = a;
      count[i].innerHTML = 0;
      total_price[i].innerHTML = 0;
    })
  })
  // PRODUCT END
  
  // PRODUCT MODAL
  const prd_modalbtn = document.querySelectorAll(".prd_view_social_list .share");
  const product_link = document.querySelector(".product_link_modal");
  const body_fixed = document.querySelector("body")
  const prd_link_modal_close = document.querySelector(".prd_link_modal_close");
  
  for(let el of prd_modalbtn) {
    el.addEventListener("click",()=> {
      product_link.classList.remove("false");
      body_fixed.style.overflow = 'hidden';
    })
  };
  
  prd_link_modal_close.addEventListener("click",()=> {
    product_link.classList.add("false");
    body_fixed.style.overflow = 'auto';
  });
  
  // PRODUCT MODAL END

//   PRODUCT CAUTION
const question_trigger = document.querySelector(".prd_mem_title");
const question_text = document.querySelector(".question_sign");
question_trigger.addEventListener("click",()=> {
    if(!question_text.classList.contains("on")) {
        question_text.classList.add("on")
    } else {
        question_text.classList.remove("on");
    }
})
//   PRODUCT CAUTION END
// PRODCUT RECOMMEND
const re_items = document.querySelectorAll(".rec_img .re_cont");
const re_bg_img = document.querySelectorAll(".rec_img .re_cont_bg");
re_items.forEach((el,i)=> {
    el.addEventListener("mouseover",()=> {
        el.classList.add("on");
        re_bg_img[i].classList.add("on");
    });
    el.addEventListener("mouseleave",()=> {
        el.classList.remove("on");
        re_bg_img[i].classList.remove("on");
    })
})
// PRODCUT RECOMMEND END