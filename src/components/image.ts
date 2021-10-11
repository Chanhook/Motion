export class ImageComponent {
  private element: HTMLImageElement;
  private sentence: HTMLSpanElement;
  constructor() {
    this.element = document.createElement("img");
    this.element.src = "https://picsum.photos/800/400";
    this.element.setAttribute("class", "image");
    this.element.alt = "This is a random image";
    this.sentence = document.createElement("span");
    this.sentence.innerText = "new Image";
  }
  attachTo(parent: HTMLElement, position: InsertPosition = "beforeend") {
    parent.insertAdjacentElement(position, this.element);
  }
}
