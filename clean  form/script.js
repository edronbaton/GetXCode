// @GetXCode

window.addEventListener("DOMContentLoaded", function () {
    let button = this.document.querySelector('.clear_btn'),
        form = this.document.querySelector(".input_text");

    button.addEventListener("click", function () {
        form.value = ''
    })
})


