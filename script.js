for (let i = 0; i < 9; i++) {
    const div = document.createElement(`div`);
    
    div.setAttribute(`id`, `sep${i + 3}`);

    document.querySelector(`body`).appendChild(div);

    const image = document.createElement(`img`); 
    
    image.setAttribute(`src`, `./pictures/sep${i + 3}.jpeg`);
    image.setAttribute(`alt`, `sep${i + 3}`);
    if (i + 3 === 6 || i + 3 === 8 || i + 3 === 11) {
        image.setAttribute(`width`, `auto`);
        image.setAttribute(`height`, `145`);
    } else {
        image.setAttribute(`width`, `145`);
        image.setAttribute(`height`, `auto`);
    }
    
    document.getElementById(`sep${i + 3}`).appendChild(image);

    const h2 = document.createElement(`h2`);
    
    h2.textContent = `September ${i + 3}`;

    document.getElementById(`sep${i + 3}`).appendChild(h2);
}