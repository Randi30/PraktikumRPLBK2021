<?php
$conn = new mysqli('localhost', 'root', '', 'mysite');

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

$array = array();
if (mysqli_num_rows($result) > 0) {
    
    while($row = mysqli_fetch_array($result)) {
        $data = array(
            'userid' => $row['userid'],
            'username' => $row['username'],
            'email' => $row['email'],
            'password' => $row['password'],
        );
        array_push($array, $data);
    }
}

echo json_encode($array);
?>
