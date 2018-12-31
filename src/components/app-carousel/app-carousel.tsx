import { Component, State } from "@stencil/core";

@Component({
  tag: "app-carousel",
  styleUrl: "app-carousel.css"
})
export class AppCarousel {
  @State() images = [
    "https://loremflickr.com/320/240/seoul",
    "https://loremflickr.com/320/240/tokyo",
    "https://loremflickr.com/320/240/paris"
  ];

  render() {
    return (
      <div class="app-carousel">
        <ul class="app-carousel-images">
          {this.images.map(img => (
            <li class="app-carousel-image">
              <img src={img} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
