<?php
$name = $_POST['projectName'];
$data = array();



 if($name == '') {
    $data['status'] ='error';
    $data['text'] = 'Заполни имя !';
 } else {
    $data['status'] ='OK';
    $data['text'] = 'Молодец,не забыл заполнить!';
 }

header("Content Type: application/json");
echo json_encode($data);
exit; 
 ?>