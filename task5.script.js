<script>
function validateDegree() {
    let d = document.getElementsByName("degree");
    for (let i = 0; i < d.length; i++) {
        if (d[i].checked) return true;
    }
    alert("Select at least one degree");
    return false;
}
</script>