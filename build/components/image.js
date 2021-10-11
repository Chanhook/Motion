export class ImageComponent {
    constructor() {
        this.element = document.createElement("img");
        this.element.src = "https://picsum.photos/800/400";
        this.element.setAttribute("class", "image");
        this.element.alt = "This is a random image";
        this.sentence = document.createElement("span");
        this.sentence.innerText = "new Image";
    }
    attachTo(parent, position = "beforeend") {
        parent.insertAdjacentElement(position, this.element);
    }
}
