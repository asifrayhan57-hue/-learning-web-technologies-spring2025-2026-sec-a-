<?php

    $name = "";

    if(isset($_POST['submit'])){

        $name = $_POST['name'];

    }

?>

 

<form method="POST">

    <fieldset>

        <legend>NAME</legend>

        <input type="text" name="name" value="<?php echo $name; ?>"> <br>

        <hr>

        <input type="submit" name="submit" value="Submit">

    </fieldset>

</form>

 

<?php

    // Task B: Display on current page

    if($name != "") { echo "Output: " . $name; }

?>