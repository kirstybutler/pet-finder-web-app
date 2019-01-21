import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Injectable()
export class SettingsService {

  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage) {}

 
}
