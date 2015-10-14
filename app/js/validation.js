var validation = (function () {

    // Инициализирует наш модуль
    var init = function () {
        _setUpListners();
    };

    // Прослушивает события 
    var _setUpListners = function () {
        $('form').on('keydown','.has-error', _removeError)
                 .on('reset', _clearForm);
    };
    var _removeError = function () {
        $(this).removeClass('has-error');
    };
    var _clearForm = function (form) {
        var form = $(this);
        form.find('input, textarea').trigger('hideTooltip');
        form.find('.has-error').removeClass('has-error');
    }
    // Создает тултипы
    var _createQtip = function (element, position) {
    // Позиция тултипа
    if (position === 'right') {
        position = {
            my: 'left center',
            at: 'right center'
        }
    }else{
        position = {
            my: 'right center',
            at: 'left center',
            adjust: {
                method: 'shift none'
            }
        }
    }
    // Инициализация тултипа
    element.qtip({
        content: {
            text: function () {
                return $(this).attr('qtip-content');
            }
        },
        show: {
            event: 'show'
        },
        hide: {
            event: 'keydown hideTooltip'
        },
        position: position,
        style: {
            classes: 'gtip-mystyle qtip-rounded qtip-red',
            tip: {
                height: 10,
                width: 16,
              
            }
        }
    }).trigger('show');
    };

    var isImg = function (filename) {
    return /\.(jpeg|jpg|png|gif)$/i.test(filename);
}

    //Универсальная функция
    var validateForm = function (form) {

      var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
      valid = true;

    $.each(elements, function (index, val){
      var element = $(val),
      val = element.val(),
      pos = element.attr('qtip-position'),
      isfile = 'filename' == element.attr('id');
      

    if(val.length === 0 || (isfile && !isImg(val))){
        element.addClass('has-error');
        _createQtip(element, pos);
        valid = false;
    }  
    });
    return valid;
    };

    //Возвращаем обьект (публичные методы)
    return {
        init: init,
        validateForm: validateForm
    };
})();

validation.init();