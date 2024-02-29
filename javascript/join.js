
// join

const join_inp = document.querySelectorAll(".join_inp");
const join_error = document.querySelectorAll(".join_error_txt");
const join_label =document.querySelectorAll(".join_label");

join_inp.forEach((el,i)=> {
    el.addEventListener("focus",()=> {
        join_label[i].classList.add("on");
        for(let i = 0; i< join_error.length; i++) {
            join_error[i].classList.remove("on");
        }
    })
});

join_inp.forEach((el,i)=> {
    el.addEventListener("focusout",()=> {
        if(!join_inp[i].value.length == 0) {
            join_error[i].classList.remove('on');
        }
        else {
            join_error[i].classList.add("on");
            join_label[i].classList.remove("on");
    }
    })
});

const join_eye = document.querySelectorAll(".join_eyes");
const join_inp_pw = document.querySelectorAll("input[type=password]");


join_eye.forEach((el,i)=> {
    el.addEventListener("click",()=> {
        if(join_eye[i].classList.contains("open")) {
            join_eye[i].classList.remove("open");
            for(let el of join_inp_pw) {
                el.type = 'password';
            }
        } else {
            join_eye[i].classList.add("open");
            for(let el of join_inp_pw) {
                el.type = 'text';
            }
        }
    });
});


const join_submit = document.querySelector(".mypg_btn");

join_submit.addEventListener("click",()=> {
    for(let i =0; i< join_inp.length; i++) {
        if(join_inp[i].value.length === 0) {
            for(let i = 0; i< join_error.length; i++) {
                join_error[i].classList.add("on");
            }
        } 
    }
})