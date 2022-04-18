<?php include('config/config.php'); ?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAMP Stack Application</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <?php include('components/menu.php'); ?>

    <h1>LAMP Stack Template</h1>

    <?php
        $query = mysqli_query($sql, "SELECT * FROM users");
        while ($row = mysqli_fetch_assoc($query)){
            $name = $row["name"];
            $address = $row["address"];
        }
    ?>

    <p><?php echo $name; ?></p>
    <p><?php echo $address; ?></p>
</body>
</html>