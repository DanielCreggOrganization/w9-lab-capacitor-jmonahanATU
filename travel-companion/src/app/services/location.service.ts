import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  async getCurrentPosition() {
    // YOUR CODE HERE
    try {
      const coordinates = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 5000
      });
      
      return {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        accuracy: coordinates.coords.accuracy
      };
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(`Failed to get current position: ${err.message}`);
      } else {
        throw new Error('Failed to get current position: Unknown error occurred');
      }
    }
  }
}
