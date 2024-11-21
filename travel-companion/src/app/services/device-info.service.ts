import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {
  constructor() { }

  async getDeviceInfo() {
    const info = await Device.getInfo();
    return info;
  }

  async getBatteryInfo() {
    const batteryInfo = await Device.getBatteryInfo();
    return batteryInfo;
  }
}
