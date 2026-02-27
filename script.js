function validateName() {
    let name = document.getElementById("name").value.trim();
    let pattern = /^[A-Za-z][A-Za-z.-]+\s+[A-Za-z.-]+$/;
    if (name === "") {
        alert("Name cannot be empty");
        return false;
    }
    if (!pattern.test(name)) {
        alert("Enter valid full name (2 words, start with letter)");
        return false;
    }
    alert("Valid Name");
    return true;
}$Env:GITHUB_TOKEN = "YOUR_PERSONAL_ACCESS_TOKEN"
$Env:GITHUB_TOKEN | gh auth login --with-token

cd "c:\xampp\htdocs\Web Tech"
git init
git remote add origin https://github.com/asifrayhan57-hue/-learning-web-technologies-spring2025-2026-sec-a-.git 2>$null || git remote set-url origin https://github.com/asifrayhan57-hue/-learning-web-technologies-spring2025-2026-sec-a-.git
git add "<file>"
git commit -m "Add <file>"
git push -u origin master
