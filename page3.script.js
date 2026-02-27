<script>
function validateGender() {
    let g = document.getElementsByName("gender");
    for (let i = 0; i < g.length; i++) {
        if (g[i].checked) {
            alert("Valid Selection");
            return true;
        }