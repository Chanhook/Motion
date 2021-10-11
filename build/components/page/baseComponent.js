export class BaseComponent {
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
