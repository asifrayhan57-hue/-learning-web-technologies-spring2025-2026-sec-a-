
<?php

if(isset($_POST['name'])){

echo "Name: " . $_POST['name'];

}

?>

<form action="handler.php" method="POST"> 

<form action="handler.php" method="POST"><fieldset>
<legend>NAME</legend>

<input type="text" name="name" value=""> <br>
<hr>

<input type="submit" value="Submit">

</fieldset>

</form>



