
// agreed

const switch_box = document.querySelector("input[name='switch_all']");
const agreed_ch_item = document.querySelectorAll("input[name='agreed']");
switch_box.addEventListener("click", (e)=> {

    if(!switch_box.checked == true) {
    for (let el of agreed_ch_item) {
        el.checked = false;
    } 
} else {
    for (let el of agreed_ch_item) {
        el.checked = true;
    } 
}
});

agreed_ch_item.forEach((el,i)=> {
  el.addEventListener("click",()=> {

const agreed_ch_item = document.querySelectorAll("input[name='agreed']");
const agreed_check = document.querySelectorAll("input[name='agreed']:checked");
if(agreed_ch_item.length == agreed_check.length) {
  switch_box.checked = true;
} else {
  switch_box.checked = false;
}
  })
})


function forward() {
    if (document.querySelector('input[id="agreed_chk00"]:checked') && document.querySelector('input[id="agreed_chk01"]:checked') && document.querySelector('input[id="agreed_chk02"]:checked') && document.querySelector('input[id="agreed_chk03"]:checked')) {
        location.href = "join.html"
}
    else window.alert("이용약관에 동의해주세요");
}


const agreed_necessary = document.querySelectorAll(".agreed_btn_view.necess");
const agreed_layer = document.querySelector(".agreed_layer");
for(let el of agreed_necessary) {
    el.addEventListener("click",()=> {
        agreed_layer.classList.add("on");
    });
};

const agreed_layer_close = document.querySelectorAll(".agreed_layer .agreed_layer_close");
for(let el of agreed_layer_close) {
    el.addEventListener('click',()=> {
        agreed_layer.classList.remove("on");
    })
};

const agreed_select_events = document.querySelectorAll(".agreed_layer_event");
const agreed_choices =document.querySelectorAll(".agreed_btn_view.choice");
agreed_choices.forEach((el,i)=> {
    el.addEventListener("click",()=> {
        agreed_select_events[i].classList.add("on");
    })
});

const agreed_event_close = document.querySelectorAll(".agreed_layer_event .agreed_layer_close");

agreed_event_close.forEach((el,i)=> {
    el.addEventListener("click",()=> {
        agreed_select_events[i].classList.remove("on");
    })
})