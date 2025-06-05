document.addEventListener("DOMContentLoaded", () => {
    const subscribeBtn = document.querySelector("button:nth-of-type(1)");
    const messageBtn = document.querySelector("button:nth-of-type(2)");
    const likeBtn = document.getElementById("likeBtn");
    const shareBtn = document.getElementById("shareBtn");

    subscribeBtn.addEventListener("click", () => {
        alert("Thank you for subscribing!");
        console.log("User clicked Subscribe");
    });

    messageBtn.addEventListener("click", () => {
        alert("Message sent!");
        console.log("User clicked Message");
    });

    likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("liked");
    });

    shareBtn.addEventListener("click", () => {
        alert("User clicked share.");
        console.log("User clicked Share");
        // Optional: copy dummy profile link to clipboard
        navigator.clipboard.writeText("https://example.com/profile");
    });
});
