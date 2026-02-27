<script>
function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        alert("Email cannot be empty");
        return false;
    }
    if (!pattern.test(email)) {
        alert("Invalid Email");
        return false;
    }
    alert("Valid Email");
    return true;
}
</script>