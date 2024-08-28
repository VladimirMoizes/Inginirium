// function openForm() {
//     document.getElementById("myForm").style.display = "block"; }

// $('.open-popup').click(function() {
//     $('.popup-bg').fadeIn(600);
// });

const modal = document.getElementById("popup-bg")
const btn = document.getElementById("btn")
const page = document.getElementById("page")

function openModal() {
    modal.style.display = "flex";
    // modal.style.overflow = "scroll";
    page.style.overflow = "hidden";

}

function closeModal() {
    modal.style.display = "none";
    page.style.overflow = "auto";
}

btn.onclick = openModal;

window.onclick = function (e) {
    if(e.target === modal) {
        closeModal();
    }
};


