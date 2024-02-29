


// article1
function grid(el, row, col) {

  el.style.setProperty("--row", row);
  el.style.setProperty("--col", col);
  el.randomIntBetween = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
}

function animate(el) {
  const duration = 2000;
  const x = 9;
  const y = 9;
  for(let i = 0; i < x + 1; i++){
      for(let j =0; j < y + 1; j++){
          const fragment = document.createElement('div');
          fragment.className = "fragment";
          fragment.style.setProperty("--x", j);
          fragment.style.setProperty("--y", i);

          const delay = (x + y) / 2 - Math.abs((x + y) / 2 - (j + i));
          console.log(delay)
          var sum = 0;
         for(let i = 0; i< delay.length; i++) {

              sum += delay[i]
          }


          const Odd = (i + j) % 2 === 0;
           fragment.style.setProperty("--delay", delay * 70 + "ms");
          fragment.style.setProperty("--duration", duration + "ms");
          fragment.style.setProperty(
            "--rotateX",
            `rotateX(${Odd ? -180 : 0}deg)`
          );
          fragment.style.setProperty(
            "--rotateY",
            `rotateY(${Odd ? 0 : -180}deg)`
          );

          el.appendChild(fragment);

          const timer = setTimeout(()=> {
              fragment.style.willChange = "initial";
               fragment.style.transform = "initial";
              fragment.style.animation = "initial";
               fragment.style.backfaceVisibility = "initial";
              clearTimeout(timer);
          }, duration + delay * 70);

      }
  }
}


const box = document.getElementsByClassName('grid_img')[0];
const box2 = document.getElementsByClassName('grid_img_2')[0];
const box3 = document.getElementsByClassName('grid_img_3')[0];
const box4 = document.getElementsByClassName('grid_img_4')[0];
const box5 = document.getElementsByClassName('grid_img_5')[0];
const r = 10;
const c = 10;

grid(box, r ,c);
grid(box2,r,c);
grid(box3,r,c);
grid(box4,r,c);
grid(box5,r,c);
animate(box);
//  animate(box);
// animate(box2);
// animate(box3);
// animate(box4);
// animate(box5);
const grid_option= {
root: null,
threshold: 0.4,
};

const grid_observer = new IntersectionObserver(function (entries, observer) {
entries.forEach((entry) => {
  if (!entry.isIntersecting) {
    box.classList.remove('on');
    let boxoff = document.querySelector('.grid_img');
    let children = boxoff.childNodes;
    for(let el of children) {
       el.style.willChange = '';
       el.style.animation = '';
       el.style.transform = '';
       el.style.backfaceVisibility = '';
     }

  } else {
     box.classList.add('on');

     let boxon = document.getElementsByClassName('grid_img on')[0];
      let child=boxon.children
      for(let el of child) {
  
        const timer = setTimeout(()=> {
           el.style.willChange = 'initial';
           el.style.animation = 'initial';
           el.style.transform = 'initial';
           clearTimeout(timer);
        }, 2000 + child.length/6 * 30);
      }
  }
});
}, grid_option);

grid_observer.observe(box);
// grid_observer.observe(box2);




// const show = "show";
// const firstSlide = document.querySelector(".gallery_main_container> :nth-child(1)");
// function init(item) {
//       let child = item.children;
//       for(let el of child) {
//           el.style.willChange = '';
//           el.style.animation = '';
//           el.style.transform = '';
//       }
// }

// function slide() {
//   const currentSlide = document.querySelector(`.${show}`);
//   init(currentSlide);
//   animate(currentSlide);
//   if (currentSlide) {
//     currentSlide.classList.remove(show);
//     currentSlide.classList.add("hide");
//     const nextSlide = currentSlide.nextElementSibling;

//     if (nextSlide) {
//       nextSlide.classList.remove("hide");
//       nextSlide.classList.add(show);

//     } else {
//       firstSlide.classList.remove("hide");
//       firstSlide.classList.add(show);

//     }
//   } else {
//     firstSlide.classList.remove("hide");
//     firstSlide.classList.add(show);

//   }
// }

// setInterval(slide, 5000);





// article2

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
  "(min-width:960px)" : function(){
    gsap.to(".c2_panels_item1", {
      scrollTrigger: {
        trigger: ".c2_panels_item1",
        start: "-30% 80%",
        end: "+=900px",
        scrub: true,
        toggleActions: "restart pause resume none",
        ease: "ease-power",
      },
      y: "-10%",
      opacity: 1,
      zIndex: 1,
    });
    gsap.to(".c2_panels_item2", {
      scrollTrigger: {
        trigger: ".c2_panels_item2",
        start: "-60% 80%",
        end: "+=800",
        scrub: true,
        toggleActions: "restart pause resume none",
        ease: "none",
      },
      y: "-30%",
      opacity: 1,
      zIndex: 1,
    });

    gsap.to(".c2_panels_item3", {
      scrollTrigger: {
        trigger: ".c2_panels_item3",
        start: "20px 80%",
        end: "+=300",
        scrub: true,
        toggleActions: "restart pause resume none",
        ease: "none",
      },
      y: "-10%",
      opacity: 1,
      zIndex: 1,
    });
  }
});

const tabs = document.querySelectorAll('.c2_tabs_wraper ul li');
const panel1 = document.querySelectorAll('.panel1');
const panel2 = document.querySelectorAll('.panel2');
const panel3 = document.querySelectorAll('.panel3');
const title = document.querySelectorAll('.content2_title');
const on = 'on';

function remove(element, cl) {
    for(let el of element) {
        el.classList.remove(`${cl}`);
    }
}

function add(element,cl,i) {
    element[i].classList.add(`${cl}`);
}

tabs.forEach((tab,i)=> {
    tab.addEventListener('click',(e)=> {

        // 더 간단 한건 없는가?
        remove(title,on);
        remove(tabs,on);
        remove(panel1,on);
        remove(panel2,on);
        remove(panel3,on);
        add(title,on,i);
        add(tabs,on,i);
        add(panel1,on,i);
        add(panel2,on,i);
        add(panel3,on,i);
        
    })
});

const appearOption = {
    root: null,
    threshold: 0.5,
  };
  
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const object = entry.target;
      if (entry.isIntersecting) {
        if(object.classList.contains('on')) {
            object.classList.add('show');
        } else return
      } else {
        object.classList.remove("show");
      }
    });
  }, appearOption);
  
  panel1.forEach((target)=> {
    observer.observe(target);
  });

  const observer2 = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const object = entry.target;
      if (entry.isIntersecting) {
        if(object.classList.contains('on')) {
            object.classList.add('show');
        } else return;
      } else {
        object.classList.remove("show");
      }
    });
  }, appearOption);
  
  panel2.forEach((target)=> {
    observer2.observe(target);
  });

  const Options = {
    root: null,
    threshold:0,
    //  rootMargin:'-50% 0px -50% 0px',
  }
  const observer3 = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const object = entry.target;
      if (entry.isIntersecting) {
        if(object.classList.contains('on')) {
            object.classList.add('show');

        } else return;

      } else {
        object.classList.remove("show");
      }
    });
  }, Options);
  
  panel3.forEach((target)=> {
    observer3.observe(target);
  });

  const observer4 = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const object = entry.target;

      if (entry.isIntersecting) {
        if(object.classList.contains('on')) {
            object.classList.add('show');
        } else return;
      } else {
        object.classList.remove("show");
        
      }
    });
  }, appearOption);
  
  title.forEach((target)=> {
    observer4.observe(target);
  });



const c2_tabs = document.querySelector('.c2_tabs');
const c2_tabs_title = document.querySelector('.c2_tabs_wraper');


 const titleOption = {
  root: null,
  threshold: 1,
 }

  const observer5 = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      const object = entry.target;

      if(entry.boundingClientRect.top <0) {
        c2_tabs_title.classList.add('fixed');
      } else if (entry.boundingClientRect.top > 0) {
        c2_tabs_title.classList.remove('fixed');

      }    
    });
  }, titleOption);
  observer5.observe(c2_tabs);


  const scrub = {
    root: null,
  }
const observer6 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    const object = entry.target; 
      if (entry.boundingClientRect.top < 0) {
        c2_tabs_title.classList.add('hidden');
      } else if (entry.boundingClientRect.top > 0) {
        c2_tabs_title.classList.remove('hidden');
      }
 
  });
}, scrub);
const nav_hidden = document.querySelector('.nav_fixed');
observer6.observe(nav_hidden);


const startQuery = () => {
  const MediaQueryNew = matchMedia(`(min-width:900px)`);


  const ifMatchesChange = e => {

    if (e.matches) {
      panel1.forEach((target) => {
        observer.unobserve(target);
      });
      panel2.forEach((target) => {
        observer2.unobserve(target);
      });
      panel3.forEach((target) => {
        observer3.unobserve(target);
      });

    } else {
      panel1.forEach((target) => {
        observer.observe(target);
      });
      panel2.forEach((target) => {
        observer2.observe(target);
      });
      panel3.forEach((target) => {
        observer3.observe(target);
      });
      
    }
  }
  MediaQueryNew.addListener(ifMatchesChange)
  ifMatchesChange(MediaQueryNew)
}
startQuery();


gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
  "(min-width:960px)" : function(){
    gsap.to(".c2_panels_item1", {
      scrollTrigger: {
        trigger: ".c2_panels_item1",
        start: "-30% 80%",
        end: "+=900px",
        scrub: true,
        toggleActions: "restart pause resume none",
        ease: "ease-power",
      },
      y: "-10%",
      opacity: 1,
      zIndex: 1,
    });
    gsap.to(".c2_panels_item2", {
      scrollTrigger: {
        trigger: ".c2_panels_item2",
        start: "-60% 80%",
        end: "+=800",
        scrub: true,
        toggleActions: "restart pause resume none",
        ease: "none",
      },
      y: "-30%",
      opacity: 1,
      zIndex: 1,
    });

    gsap.to(".c2_panels_item3", {
      scrollTrigger: {
        trigger: ".c2_panels_item3",
        start: "20px 80%",
        end: "+=300",
        scrub: true,
        toggleActions: "restart pause resume none",
        ease: "none",
      },
      y: "-10%",
      opacity: 1,
      zIndex: 1,
    });
  }
});


 // article 1
 var swiper = new Swiper(".article1_slide1", {
  slidesPerView: 2.3,
  loop: false,
  spaceBetween: 20,
   slidesPerGroup: 1,
   loopFillGroupWithBlank: true,
  allowTouchMove: true,
  observer: true,
  observeParents: true,
  pagination: {  
    el: ".swiper-progressbar",   
    type: 'progressbar',
  },
  breakpoints: {

    460: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },

    959: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },

    1365: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },

  },

});
// article1 END






