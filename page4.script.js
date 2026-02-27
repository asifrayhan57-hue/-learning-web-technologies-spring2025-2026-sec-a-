<script>
function validateDate() {
    let dd = parseInt(document.getElementById("dd").value);
    let mm = parseInt(document.getElementById("mm").value);
    let yy = parseInt(document.getElementById("yy").value);
    if (dd < 1 || dd > 31 || mm < 1 || mm > 12 || yy < 1900 || yy > 2016) {
        alert("Invalid Date");
        return false;
    }
    alert("Valid Date");
    return true;
}
</script>