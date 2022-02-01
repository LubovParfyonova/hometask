
const imageDataBase = [
    'https://artguide.com/storage/post/1599/wide_detail_picture.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Kuindzhi_by_I.Kramskoy_%281872%2C_GTG%29.jpg/280px-Kuindzhi_by_I.Kramskoy_%281872%2C_GTG%29.jpg',

];

const nextImage = document.querySelector('#img');
const btn = document.querySelector('#btn'); 


const srcAttr = document.createAttribute('src');
srcAttr.value = imageDataBase[0];
nextImage.setAttributeNode(srcAttr);

// 1.
const changeImage = () => {
    srcAttr.value = srcAttr.value === imageDataBase[0] ? imageDataBase[1] : imageDataBase[0];
}
btn.addEventListener('click', changeImage);

// 2.
const disabledBtn = document.querySelector('#disabled-btn');

const onceClick = (event) => {
    event.target.setAttribute('disabled', true);
    disabledBtn.removeEventListener('click', onceClick);
}

disabledBtn.addEventListener('click', onceClick);