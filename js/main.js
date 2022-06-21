let call_me = document.querySelector('#call_me');
let btn_callme = document.querySelector('.btn_callme_disabled');
let container_form_callback = document.querySelector('.container_form_callback_hiden');
let checkbox = document.querySelector('.checkbox');
let input = document.querySelector('.input');
let close_btn = document.querySelector('.close_btn');

let userPhone;

close_btn.addEventListener('click', function() {
    container_form_callback.classList.remove('container_form_callback');
    container_form_callback.classList.add('container_form_callback_hiden');
})

call_me.addEventListener('click', function() {
    container_form_callback.classList.remove('container_form_callback_hiden');
    container_form_callback.classList.add('container_form_callback');
})

checkbox.addEventListener('click', function() {
    btn_callme.disabled = !btn_callme.disabled;
    if (btn_callme.classList == 'btn_callme_disabled') {
        btn_callme.classList = 'btn_callme';
    } else if (btn_callme.classList == 'btn_callme') {
        btn_callme.classList = 'btn_callme_disabled';
    }
})

btn_callme.addEventListener('click', function() {
    userPhone = input.value.split('');
    console.log(userPhone)

    if (checkbox.checked === true && userPhone.length == 11) {
        alert(`Ваша заявка на обратный звонок была отправлена! Мы перезвоним вам в ближайшее время на номер ${input.value}!`);
    } else if (checkbox.checked === false || userPhone.length != 11) {
        alert('Вы не ознакомились с условиями Политики конфиденциальности или ввели номер в неверном формате! Номер должен содержать 11 символов с учетом знака "+"!')
    }
})