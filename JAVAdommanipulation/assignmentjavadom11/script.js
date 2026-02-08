const options = document.querySelectorAll(".option");

options.forEach(option => {
    option.addEventListener("click", () => {

        // get part and image
        const part = option.dataset.part;
        const image = option.dataset.image;

        // show image
        const layer = document.getElementById(part);
        layer.src = image;
        layer.style.display = "block";

        // remove selected 
        options.forEach(o => {
            if (o.dataset.part === part) {
                o.classList.remove("selected");
            }
        });

        // add selected 
        option.classList.add("selected");
    });
});