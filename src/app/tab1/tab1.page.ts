import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('slider') slider: IonSlides;
  page = "0";
  
  selectedTab(index) {
      this.slider.slideTo(index);
  }
  
  async moveButton() {
      let index = await this.slider.getActiveIndex();
      this.page = index.toString();
  } 

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
