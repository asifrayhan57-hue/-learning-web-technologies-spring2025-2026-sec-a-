<?php
$amount = 1000;
$vat_rate = 0.15;
 
$vat = $amount * $vat_rate;
 
echo "Amount: $amount <br>";
echo "VAT (15%): " . $vat;
?>