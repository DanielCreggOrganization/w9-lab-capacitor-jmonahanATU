import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';
import { DeviceInfoService } from '../services/device-info.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton,
    IonList,
    IonItem,
    IonLabel
  ],
})
export class HomePage {
  capturedImage: string | undefined;
  currentPosition: { latitude: number; longitude: number } | undefined;
  deviceInfo: any;
  batteryLevel: number = 0;

  constructor(
    private cameraService: CameraService,
    private locationService: LocationService,
    private deviceInfoService: DeviceInfoService
  ) {}

  async takePicture() {
    this.capturedImage = await this.cameraService.takePicture();
  }

  async getLocation() {
    this.currentPosition = await this.locationService.getCurrentPosition();
  }

  async getDeviceInfo() {
    this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
    const batteryInfo = await this.deviceInfoService.getBatteryInfo();
    this.batteryLevel = Math.floor((batteryInfo.batteryLevel ?? 0) * 100);
  }
}
