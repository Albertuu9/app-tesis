import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/modules/shared/services/database.service';

@Injectable({
  providedIn: 'root'
})
export class DesktopService {

  constructor(private databaseService: DatabaseService) { }

  getCeramics() {
    const params = {
        url: '/ceramics/get'
    }
  
    return this.databaseService.wsHttpRequest(params);
  }

}
