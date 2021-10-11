import { ImageComponent } from "./components/image.js";
import { PageComponent } from "./components/page.js"; //확장명 같이 적기

class App {
  private readonly page: PageComponent;
  private readonly image: ImageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    this.image = new ImageComponent();
    this.image.attachTo(appRoot);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
