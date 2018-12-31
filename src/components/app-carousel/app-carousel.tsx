import { Component, State, Listen } from "@stencil/core";

@Component({
  tag: "app-carousel",
  styleUrl: "app-carousel.css",
  shadow: true
})
export class AppCarousel {
  @State()
  images = [
    "https://loremflickr.com/320/240/seoul",
    "https://loremflickr.com/320/240/tokyo",
    "https://loremflickr.com/320/240/paris"
  ];
  @State()
  selectedImage: string = this.images[0];
  @State()
  carouselMode: boolean = false;

  windowWidth = window.innerWidth;
  @Listen("window:resize")
  windowResize() {
    this.windowWidth = window.innerWidth;
    this.handleWindowResize();
  }

  componentWillLoad() {
    this.handleWindowResize();
  }

  handleWindowResize() {
    if (this.windowWidth < 768) {
      this.carouselMode = true;
    } else {
      this.carouselMode = false;
    }
  }

  render() {
    return this.carouselMode ? (
      <div class="app-carousel">
        <div class="app-carousel-selected-image-wrapper">
          <img src={this.selectedImage} />
        </div>
        <ul class="app-carousel-nav">
          {this.images.map(img => (
            <li onClick={() => (this.selectedImage = img)}>.</li>
          ))}
        </ul>
      </div>
    ) : (
      <div class="app-carousel">
        <ul class="app-carousel-images">
          {this.images.map(img => (
            <li class="app-carousel-image-wrapper">
              <img src={img} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
