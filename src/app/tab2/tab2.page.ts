import { Component } from '@angular/core';
import {MediaCapture,MediaFile,CaptureAudioOptions} from '@ionic-native/media-capture/ngx'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private mediaCapture: MediaCapture,
  ) {}

  async startRecording() {
     
    var options:CaptureAudioOptions={
     limit:1
    }
    this.mediaCapture.captureAudio(options).then((mediaFiles: MediaFile[]) => {
      // Success case: mediaFiles is an array of captured video files
      if (mediaFiles.length > 0) {
        const firstVideoFile = mediaFiles[0]; 
        alert(firstVideoFile.fullPath)// Assuming you want to work with the first captured video
        console.log('Captured video:', firstVideoFile.fullPath);
        // Your further processing logic for successful capture
      } else {
        alert('error')
        console.error('No video files captured.');
        // Handle the case where no video files were captured
      }
    })
  }




}
