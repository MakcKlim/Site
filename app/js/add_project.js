var myModule=(function
     (){
//инициализирует модуль
        var init=function () {
            _setUpListners();
        };
// прослушивает события
        var _setUpListners=function () {
               $('#add-new-item').on('click', _showModal);
               $('#add-new-project').on('submit', _addProject);
               $('#fileupload').on('change', _changefileUpload);
        };
        var _changefileUpload = function () {
            var input = $(this), // инпут type='file'
                name = input[0].files[0].name; //имя загружаемого файла
            $('#filename')
                 .val(name)
                 .trigger('hideTooltip')
                 .removeClass('has-error');
        }
// Работает с модальным окном
        var _showModal=function(ev){
            ev.preventDefault();


            var divPopup = $('#new-progect-popup'),
            form = divPopup.find('.form');

            divPopup.bPopup({
                speed:650,
                translition:'slideDown',
                onClose: function() {
                    form.find('.server-mes').text('').hide();
                    form.trigger("reset");
                }
            });
        };
// добавляет проект
        var _addProject=function(ev) {
            ev.preventDefault();

            var form = $(this),
            url ='add_project.php',
            defObj = _ajaxForm(form, url);

            if(defObj) {
            defObj.done(function(ans) {
            var succesBox = form.find('.succes-mes'),
                errorBox = form.find('.error-mes');

            if(ans.status ==='OK') {
                errorBox.hide();
                succesBox.text(ans.text).show();
            } else {
                succesBox.hide();
                errorBox.text(ans.text).show();
            }
            });
           }
        };
// универсальная функция
// для ее работы используються
// @form - форма
//@url - адрес php файла, к которому мы обращаемся
//   1. собирает данные из формы
//   2. проверяет форму
//   3. делает запрос на сервер и возвращает ответ с сервера
        var _ajaxForm = function(form, url) {
            if (!validation.validateForm(form)) return false;
           var data=form.serialize();
        return $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
        }).fail( function(ans) {
            form.find('.error-mes').text('На сервере произошла ошибка').show();
        });
             return result;
        };
// возвращаем обьект (публичные методы)        
        return {
            init: init
        };
     }) ();
myModule.init();