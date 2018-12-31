import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <app-carousel> </app-carousel>
      </div>
    );
  }
}
