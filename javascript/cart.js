const all_check = document.querySelector("#check_cart_items"),
 check_item = document.querySelectorAll("input[name='check_select']");


const plus = document.querySelectorAll(".cart_plus"),
minus =document.querySelectorAll(".cart_minus"),
number = document.querySelectorAll('.cart_count'),
price = document.querySelectorAll(".cart_table_cell.prd_total .cart_num"),
preview = document.querySelector(".cart_prd_summary_length .cart_total_sum"),
total_price = document.querySelector(".cart_prd_summary_price .cart_total_num");









let a = [1,1];
let convert_price = [];
let com;
for(let el of price) {
    let number = parseInt(el.innerText);
    convert_price.push(number);
}
function locale(el,sum) {
    for (let item of el) {
        let number = parseInt(item.innerText);
        item.innerHTML = number.toLocaleString();
        com = number.toLocaleString();
    }
    let number = parseInt(sum.innerText);
    sum.innerHTML = number.toLocaleString();
}

locale(price,total_price);


plus.forEach((el,i)=> {
    el.addEventListener("click",(e)=> {
        const parent = e.target.parentElement.parentElement.parentElement;
        const check = parent.querySelector("input[name='check_select']")
        if(!check.checked) {
            alert('체크해주십시오.')
        } else {
        a[i]++;

        const total_count_arr = []
        for(let i = 0 ; i< a.length; i++) {
            total_count_arr.push(a[i])
        }
        const total_count_sum = total_count_arr.reduce((a,b)=> (a+b));


        let real_price_a = a[0]*convert_price[0];
        let real_price_b = a[1]*convert_price[1];
        let total_price_number = real_price_a+real_price_b;

        price.innerHTML = number[i]
        number[i].value= a[i];
        price[0].innerHTML = real_price_a.toLocaleString();
        price[1].innerHTML = real_price_b.toLocaleString();
        


        const check_boxes = document.querySelectorAll("input[name='check_select']");
        if(!check_boxes[0].checked == true) {
            preview.innerHTML = a[1];
            const total_b = total_price_number - real_price_a;
            total_price.innerHTML = total_b.toLocaleString();
        } else if(!check_boxes[1].checked == true) {
            preview.innerHTML = total_count_sum - a[0];
            const total_a = total_price_number - real_price_b;
            total_price.innerHTML = total_a.toLocaleString();
        } else {
            preview.innerHTML = total_count_sum;
            total_price.innerHTML = total_price_number.toLocaleString();
        }
    }
    })
});

check_item.forEach((el,i)=> {
    el.addEventListener("click",()=> {
        
        const number = document.querySelectorAll('.cart_count'),
        price_txt = document.querySelectorAll(".cart_table_cell.prd_total .cart_num");

        const check_boxes = document.querySelectorAll("input[name='check_select']");
        const checked = document.querySelectorAll("input[name='check_select']:checked");

        if(!check_boxes[0].checked) {
            preview.innerHTML = number[1].value;
            total_price.innerHTML = price_txt[1].innerText;
        } else if(!check_boxes[1].checked) {
            preview.innerHTML = number[0].value;
            total_price.innerHTML = price_txt[0].innerText;

        }  
        else if (check_boxes.length == checked.length) {
            
            preview.innerHTML = Number(number[0].value) + Number(number[1].value);
            const convert = []
            for(let el of price_txt) {
                let string = el.innerText.replace(/,/g, "");
                let number = Number(string);
                convert.push(number);
            }
            const total = convert.reduce((a,b)=> (a+b))
            total_price.innerHTML = total.toLocaleString();
        } 
        else  {
            let a = 0;
            const sum = document.getElementsByClassName("cart_total_sum")[0];
            const sum_price = document.getElementsByClassName("cart_total_num")[0];
            sum.innerHTML = 0;
            sum_price.innerHTML = a;
        } 
    })
});

check_item.forEach((el,i)=> {
    el.addEventListener("change",()=> {
        if(!check_item[0].checked && !check_item[1].checked) {
            let a = 0;
            const sum = document.getElementsByClassName("cart_total_sum")[0];
            const sum_price = document.getElementsByClassName("cart_total_num")[0];
            sum.innerHTML = 0;
            sum_price.innerHTML = a;
        }
    })
})



minus.forEach((el,i)=> {
    el.addEventListener("click",(e)=> {
        const parent = e.target.parentElement.parentElement.parentElement;
        const check = parent.querySelector("input[name='check_select']")
        if(!check.checked) {
            alert('체크해주십시오.')
        } else {
        if(a[i]>1) {
            a[i]--;
            const total_count_arr = []
            for(let i = 0 ; i< a.length; i++) {
                total_count_arr.push(a[i])
            }
            const total_count_sum = total_count_arr.reduce((a,b)=> (a+b));

            let real_price_a = a[0]*convert_price[0];
            let real_price_b = a[1]*convert_price[1];

            let total_price_number = real_price_a+real_price_b;
            price.innerHTML = number[i]
            number[i].value= a[i];
            price[0].innerHTML = real_price_a.toLocaleString();
            price[1].innerHTML = real_price_b.toLocaleString();


            const check_boxes = document.querySelectorAll("input[name='check_select']");
            if(!check_boxes[0].checked == true) {
                preview.innerHTML = a[1];
                const total_b = total_price_number - real_price_a;
                total_price.innerHTML = total_b.toLocaleString();
            } else if(!check_boxes[1].checked == true) {
                preview.innerHTML = a[0];
                const total_a = total_price_number - real_price_b;
                total_price.innerHTML = total_a.toLocaleString();
            } else {
                preview.innerHTML = total_count_sum;
                total_price.innerHTML = total_price_number.toLocaleString();
            }
        }
    }
    })
})



all_check.addEventListener("change",(e)=> {
    const check_boxes = document.querySelectorAll("input[name='check_select']");
    const checked = document.querySelectorAll("input[name='check_select']:checked");
    if(!all_check.checked==true) {
        for(let el of check_item) {
            el.checked = false;
        }
        preview.innerHTML = 0;
        total_price.innerHTML = 0;
        
    } else {
        for (let el of check_item) {
            el.checked = true;
        }
       const total_price_txt = document.querySelector(".cart_prd_summary_price .cart_total_num");
        const total_price =document.getElementsByClassName("cart_num");
        const convert = [];

        for(let i = 0; i< total_price.length; i++) {
            let string = total_price[i].innerText.replace(/,/g, "");
            let number = Number(string);
            convert.push(number)
        }
        const numbera = Number(number[0].value);
        const numberb = Number(number[1].value);
        const sum = numbera + numberb;
        preview.innerHTML = sum;
        const total = convert.reduce((a,b)=> (a+b))
       total_price_txt.innerHTML = total.toLocaleString();
    }
});

check_item.forEach((el,i)=> {
    el.addEventListener("click",()=> {
        const check_boxes = document.querySelectorAll("input[name='check_select']");
        const checked = document.querySelectorAll("input[name='check_select']:checked");
        if(check_boxes.length == checked.length) {
            all_check.checked = true;
        } else {
            all_check.checked = false;
        }
    })
});







