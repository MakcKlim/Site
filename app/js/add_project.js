var myModule=(function
     (){
        var init=function () {
            _setUpListners();
        };
        var _setUpListners=function () {
               $('add-new-item').on('clic', _showModal);
               $('add-new-project').on('submit', _addProject);
        };
        var _showModal=function(ev){
            console.log('Вызов модального окна');
            ev.preventDefault();
            $('new-progect-popup').bPopup({
                speed:650,
                translition:'slideDown'
            });
        };
        var _addProject=function(ev){
            console.log('Добавление проекта');
            ev.preventDefault();
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