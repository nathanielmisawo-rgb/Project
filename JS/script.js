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

function openImage(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

function toggleText(button) {
    let extra = button.previousElementSibling;

    if (extra.style.display === "none" || extra.style.display === "") {
        extra.style.display = "block";
        button.innerText = "Show Less";
    } else {
        extra.style.display = "none";
        button.innerText = "Read More";
    }
}