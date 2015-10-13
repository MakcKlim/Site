var myModule=(function
     (){
        var init=function () {
            _setUpListners();
        };
        var _setUpListners=function () {
               $('#add-new-item').on('click', _showModal);
               $('#add-new-project').on('submit', _addProject);
        };
        var _showModal=function(ev){
            ev.preventDefault();
            console.log('Вызов модального окна');
            $('#new-progect-popup').bPopup({
                speed:650,
                translition:'slideDown'
            });
        };
        var _addProject=function(ev){
            ev.preventDefault();
            console.log('Добавление проекта');
// обьявляем переменные
            var form = $(this),
            url ='add_project.php',
            data=form.serialize();



// Запрос на сервер
        $ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
        })
        .done(function(ans) {
            console.log("success");
            if(ans.mes ==='OK') {
                form.find('.success-mes').text(ans.text);
            } else {
                form.find('.error-mes').text(ans.text);
            }
           
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        };
        return {
            init: init
        };
     }) ();
myModule.init();