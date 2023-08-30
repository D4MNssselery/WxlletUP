<?php
    $Nickname = $_POST['Nickname'];
    $RegEmail = $_POST['RegEmail'];
    $RegPassword = $_POST['RegPassword'];

    $conn = new mysqli('localhost','root','','test');
    if ($conn->connect_error){
        die('Connection Failed : ' .$conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into test( Nickname, RegEmail, RegPassword) values(?,?,?)");
        $stmt -> bind_param("sss",$Nickname,$RegEmail,$RegPassword);
        $stmt -> execute();
        echo "registration Succeessfully...";
        $stmt -> close();
    }
?>