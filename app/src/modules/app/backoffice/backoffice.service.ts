import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/modules/shared/services/database.service';

@Injectable({
  providedIn: 'root'
})
export class BackofficeService {

  constructor(private databaseService: DatabaseService) { }
  
  saveCeramic(data: any, file: any) {
    const formData = new FormData();
    formData.append('image', file); // Solo el archivo

    for (const key in data) {
      if (key !== 'ce_img_schedule') {
        if (data[key] !== null && typeof data[key] === "object" && !Array.isArray(data[key])) {
          formData.append(key, JSON.stringify(data[key])); // Convertir objetos a JSON
        } else {
          formData.append(key, data[key]);
        }
      }
    }
    
    const params = {
      url: '/api/ceramics/save',
      body: formData
    }

    return this.databaseService.wsHttpRequest(params);
  }

  getTypologies() {
    const params = {
        url: '/api/typologies/get'
    }
  
    return this.databaseService.wsHttpRequest(params);
  }

  getCeramics() {
    const params = {
        url: '/api/ceramics/get'
    }
  
    return this.databaseService.wsHttpRequest(params);
  }

}
