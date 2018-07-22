import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-image-data-upload',
  templateUrl: './image-data-upload.component.html',
  styleUrls: ['./image-data-upload.component.less']
})
export class ImageDataUploadComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
