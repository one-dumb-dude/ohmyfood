document.addEventListener('DOMContentLoaded', (event) => {
    // Check if the current page is not the index page
    if (!window.location.pathname.endsWith('index.html') || window.location.pathname !== '/') {
        // Create the new div element
        let newDiv = document.createElement("div");

        // Style the new div
        newDiv.style.position = "fixed";
        newDiv.style.top = "0";
        newDiv.style.left = "0";
        newDiv.style.width = "100vw";
        newDiv.style.height = "100vh";
        newDiv.style.backgroundColor = "rgba(255, 255, 255, 0.5)"; // semi-transparent white
        newDiv.style.zIndex = "1"; // You might need to adjust this based on your other elements

        // Append the new div to the body of the document
        document.body.appendChild(newDiv);

        // Set an animation end listener on the #loader element
        document.querySelector('#loader').addEventListener('animationend', (e) => {
            if (e.animationName === 'loading') {
                // Remove the new div when the loader's animation ends
                e.target.style.display = 'none';
                newDiv.remove();
            }
        });
    }
});
