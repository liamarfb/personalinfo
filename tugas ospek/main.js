// Munculkan tombol saat halaman digulir ke bawah
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Ketika tombol diklik, kembali ke bagian atas halaman
document.getElementById("backToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
