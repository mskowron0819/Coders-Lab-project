document.addEventListener("DOMContentLoaded", function () {

    // Slider

    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var sliderImg = document.querySelectorAll(".slider li");
    var imgIndex = 0;

    for (i = 0; i < sliderImg.length; i++) {
        sliderImg[i].style.display = "none";

    }
    sliderImg[0].style.display = "block";

    prev.addEventListener("click", function (event) {
        event.preventDefault();
        sliderImg[imgIndex].style.display = "none";
        if(imgIndex == 0){
            imgIndex = sliderImg.length;
        }
        imgIndex --;
        sliderImg[imgIndex].style.display = "block";

    });
    next.addEventListener("click", function (event) {
        event.preventDefault();
        sliderImg[imgIndex].style.display = "none";
        imgIndex ++;
        if(imgIndex == sliderImg.length) {
            imgIndex = 0;
        }
        sliderImg[imgIndex].style.display = "block";

    });

    //  Chair modifier


    var type = document.getElementById('type');
    var color = document.getElementById('color');
    var material = document.getElementById('material');
    var typeText = document.querySelector('.panel_left .title');
    var typeValue = document.querySelector('.panel_right .title');
    var colorText = document.querySelector('.panel_left .color');
    var colorValue = document.querySelector('.panel_right .color');
    var materialText = document.querySelector('.panel_left .pattern');
    var materialValue = document.querySelector('.panel_right .pattern');
    var transportText = document.querySelector('.panel_left .transport');
    var transportValue = document.querySelector('.panel_right .transport');
    var dropList = document.querySelectorAll('.drop_down_list');
    var listElements = document.querySelectorAll('.drop_down_list li');
    var checkbox = document.querySelector('#transport');
    var sum = document.querySelector('.sum strong');

    function sumCheck () {
        var totalValue = Number(transportValue.innerText) + Number(typeValue.innerText) + Number(materialValue.innerText) + Number(colorValue.innerText);
        sum.innerText = totalValue;
    }

    // Drop-down-list
    dropList.forEach(function(element){
        element.addEventListener('click', function(event) {
            this.querySelector('.list_panel').classList.toggle('visible');
        });
    })

    listElements.forEach(function(element){
        element.addEventListener('click', function(event) {
            var attribute = this.parentElement.parentElement.getAttribute('id');
            switch (attribute) {
                case 'color':
                    colorText.innerText = this.innerText;
                    colorValue.innerText = this.dataset.price;
                    break;
                case 'material':
                    materialText.innerText = this.innerText;
                    materialValue.innerText = this.dataset.price;
                    break;
                case 'type':
                    typeText.innerText = this.innerText;
                    typeValue.innerText = this.dataset.price;
                    break;
            }
            sumCheck();
        });
    });

    // checkbox

    checkbox.addEventListener('change', function(event) {
        if (checkbox.checked) {
            transportText.innerText = 'Transport';
            transportValue.innerText = this.dataset.price;
        }else {
            transportValue.innerText =' ';
            transportText.innerText=' ';
        }
        sumCheck();
    });


    // Form validation

    var form = document.getElementsByTagName("form")[1];
    var name = document.querySelector("input[name='name']");
    var email = document.querySelector("input[name='email']");
    var message = document.querySelector("textarea");
    var checkboxForm = document.getElementById("form-agree");

        form.addEventListener("submit", function(event) {
            var emailValue = email.value;
            var nameValue = name.value;
            var messageValue = message.value;
            var formError = document.getElementById("form-error");

            if (emailValue.indexOf("@") === -1) {
                formError.innerText = "Wpisz poprawny adres email.";
                event.preventDefault();
            }
            if (nameValue.length < 4) {
                formError.innerText = "Podaj swoje imię.";
                event.preventDefault();
            }
            if (messageValue.length < 10) {
                formError.innerText = "Wprowadź wiadomość.";
                event.preventDefault();
            }
            if (checkboxForm.checked === false) {
                formError.innerText = "Aby wysłać wiadomość musisz wyrazić zgodę na przetwarzanie danych osobowych.";
                event.preventDefault();
            }
        });

});

