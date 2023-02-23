// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

function makeGallery(items) {
    return items.map(item => {
        const listItem = document.createElement('li');
        const itemLink = document.createElement('a');
        itemLink.classList.add('gallery__item');
        itemLink.href = `${item.original}`;

        const itemImg = document.createElement('img');
        itemImg.classList.add('gallery__image');
        itemImg.src = `${item.preview}`;
        itemImg.dataset.source = `${item.original}`;
        itemImg.alt = `${item.description}`;

        itemLink.append(itemImg);
        listItem.append(itemLink);
        return listItem;

    })
};

const galeryListRef = document.querySelector('.gallery');

const items = makeGallery(galleryItems);
galeryListRef.append(...items);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt", });