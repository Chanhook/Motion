import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
        <section class="video">
            <div class="video__player">
            <iframe class="video__play" width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="video__title"></p>
        </section>`);
    const videoElement = this.element.querySelector(
      ".video__play"
    )! as HTMLIFrameElement;
    console.log(url);
    videoElement.src = "https://youtu.be/ylN-u7GPJls";

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
