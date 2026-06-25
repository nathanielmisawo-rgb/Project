function validateForm() {
    let name = document.getElementById('name').value;
    if (name ==""){
        alert("Please enter your name.");
        return false;
    }
    return true;
}

function filterProducts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let items = document.querySelectorAll('.product-item');

    items.forEach(item => {
       item.style.display=item.textContent.toLowerCase().includes(input)?"":"none";
});
}
