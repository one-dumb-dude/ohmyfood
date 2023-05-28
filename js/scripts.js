if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {

    let newDiv = document.createElement("div");

    newDiv.style.position = "fixed";
    newDiv.style.top = "0";
    newDiv.style.left = "0";
    newDiv.style.width = "100vw";
    newDiv.style.height = "100vh";
    newDiv.style.backgroundColor = "rgba(255, 255, 255, .95)"; // semi-transparent white
    newDiv.style.zIndex = "1";

    document.body.appendChild(newDiv);

    const loader = document.querySelector('#loader');

    if (loader) {
        loader.addEventListener('animationend', (e) => {
            if (e.animationName === 'loading') {
                // Remove the new div when the loader's animation ends
                e.target.style.display = 'none';
                newDiv.remove();
            }
        });
    }
}


