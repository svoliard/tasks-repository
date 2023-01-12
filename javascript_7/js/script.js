const viewButton = document.querySelector('.button');
const image = document.querySelector('img');
const removeButton = document.querySelector('.remove');
const showImage = () => {
    if (image === null) {
        console.log('image does not exist');
        return;
    }
    image.classList.add('show');
}
const hideImage = () => image.className = 'hidden';
const remove = () => {
    const parent = image.parentNode;
    parent.removeChild(image);
    remove.removeEventListener('click', remove);
}
viewButton.addEventListener('click', showImage);
image.addEventListener('click', hideImage);
removeButton.addEventListener('click', remove);