import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  setInformation(storageName: string, data: any) {
    localStorage.setItem(storageName, JSON.stringify(data));
  }

  getInformation(storageName: string) {
    const data = localStorage.getItem(storageName);

    if(data != null) {
      return JSON.parse(data);
    }
  }

  clearInformation(storageName: string) {
    localStorage.removeItem(storageName);
  }

  cleanAll() {
    localStorage.clear()
  }

  cleanTemporaryLocalStorages() {
    this.clearInformation('currentPostNumber');
    this.clearInformation('currentArchivedPostNumber');
    this.clearInformation('currentTaggedPostNumber');
    this.clearInformation('currentEditSeries');
    this.clearInformation('currentEditMovie');
    this.clearInformation('currentPostSeries');
    this.clearInformation('currentPostMovie');
    this.clearInformation('currentRateSeries');
    this.clearInformation('currentRateMovie');
  }
}
