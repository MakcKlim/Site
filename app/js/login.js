var myLogin = (function (){

 // Инициализируем наш модуль
 var init = function () {
    _setUpListners();
   };

 // Прослушивает события
 var _setUpListners = function () {
    $('#login-open').on('submit', _submitForm);
 
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
myLogin.init();