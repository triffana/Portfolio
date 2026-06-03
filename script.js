console.log("Portfolio Loaded Successfully");

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

fetch("https://api.countapi.xyz/hit/triffana-portfolio/visits")
.then(res => res.json())
.then(data => {
    const counter = document.getElementById("visitor-count");

    if(counter){
        counter.innerText = data.value;
    }
})
.catch(error => {
    console.error("Counter Error:", error);
});