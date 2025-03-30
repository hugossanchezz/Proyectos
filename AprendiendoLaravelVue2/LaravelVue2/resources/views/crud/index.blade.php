<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    echo $name;
    echo '<br>';
    echo $age;
    echo '<br>';

    ?>
    {{ $name }}

    <a href="{{ route('test') }}">Ir al test</a>
</body>
</html>
