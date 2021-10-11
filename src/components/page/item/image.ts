export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `<section class="image">
    <div class="image__holder">
        <img class="image__thumbnail">
    </div>
    <p class="image__title"></p>
</section>`;
    //직접 접근은 위험
    this.element = template.content.firstElementChild! as HTMLElement;
    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;
    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
    //      old version
    //     this.element = document.createElement("img");
    //     this.element.src = "https://picsum.photos/800/400";
    //     this.element.setAttribute("class", "image");
    //     this.element.alt = "This is a random image";
    //     this.sentence = document.createElement("span");
    //     this.sentence.innerText = "new Image";
  }
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
