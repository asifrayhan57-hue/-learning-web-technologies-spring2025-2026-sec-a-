<script>
function validateBlood() {
    let bg = document.getElementById("bg").value;
    if (bg === "") {
        alert("Select blood group");
        return false;
    }
    return true;
}
</script>