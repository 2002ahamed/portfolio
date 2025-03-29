document.addEventListener("DOMContentLoaded", function () {
    console.log("JS Loaded!");

    var menuBtn = document.getElementById("menuBtn");
    var closeBtn = document.getElementById("closeMenu");
    var sidemenu = document.getElementById("sidemenu");

    console.log("menuBtn:", menuBtn);
    console.log("closeBtn:", closeBtn);
    console.log("sidemenu:", sidemenu);

    if (menuBtn) {
        console.log("☰ Menu button found!");
        menuBtn.addEventListener("click", function () {
            console.log("☰ Menu button clicked!");
            sidemenu.style.right = "0"; // Open the menu
        });
    } else {
        console.error("☰ Menu button NOT found!");
    }

    if (closeBtn) {
        console.log("✖ Close button found!");
        closeBtn.addEventListener("click", function () {
            console.log("✖ Close button clicked!");
            sidemenu.style.right = "-200px"; // Close the menu
        });
    } else {
        console.error("✖ Close button NOT found!");
    }
});
