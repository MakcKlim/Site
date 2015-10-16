var contactMe = (function (){

 // Инициализируем наш модуль
 var init = function () {
    _setUpListners();
   };
   $(document).ready(function($) {
 
 if(!Modernizr.input.placeholder){ 
  $('input, textarea').placeholder();
}

});

 // Прослушивает события
 var _setUpListners = function () {
    $('#formPost').on('submit', _submitForm);
 
 };  
 
 var _submitForm = function (ev) {
    ev.preventDefault();

    var form = $(this),
        url = form.attr('action'),
        defObj = _ajaxForm(form, url)
 };

  var _ajaxForm = function (form, url) {
    if (!validation.validateForm(form)) return false;
  };

 //Возвращаем обьект (публичные методы)
 return {
    init: init
 };
})();
contactMe.init();