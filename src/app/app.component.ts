// import { Component } from '@angular/core';
// import { EventEmitter } from '@angular/core';
// import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'FillUpload';
//   options: UploaderOptions;
//   formData: FormData;
//   files: UploadFile[];
//   uploadInput: EventEmitter<UploadInput>;
//   humanizeBytes: Function;
//   dragOver: boolean;
// constructor() {
//   this.options = { concurrency: 2, maxUploads: 5, };
//     this.files = []; // local uploading files array
//     this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
//     this.humanizeBytes = humanizeBytes;
//  } 
//  onUploadOutput(output: UploadOutput): void {
//     switch (output.type) {
//       case 'addedToQueue':
//         if (typeof output.file !== 'undefined') {
//           this.files.push(output.file);
//         }
//         break;
//       case 'uploading':
//         if (typeof output.file !== 'undefined') {
//           // update current data in files array for uploading file
//           const index = this.files.findIndex((file) => typeof output.file !== 'undefined' && file.id === output.file.id);
//           this.files[index] = output.file;
//           console.log(this.files);
//         }
//         break;
//       case 'removed':
//         // remove file from array when removed
//         this.files = this.files.filter((file: UploadFile) => file !== output.file);
//         break;
//       case 'dragOver':
//         this.dragOver = true;
//         break;
//       case 'dragOut':
//       case 'drop':
//         this.dragOver = false;
//         break;
//       case 'done':
//         // The file is downloaded
//         break;
//     }
//     //console.log("UploadOutput");
//   }
//   startUpload(): void {
//     const event: UploadInput = {
//       type: 'uploadAll',
//       //url: 'http://ngx-uploader.com/upload',
//       method: 'POST',
//       data: { foo: 'bar' }
//     };
 
//     this.uploadInput.emit(event);
//     console.log(this.uploadInput);
//   }
 
//   cancelUpload(id: string): void {
//     this.uploadInput.emit({ type: 'cancel', id: id });
//   }
 
//   removeFile(id: string): void {
//     this.uploadInput.emit({ type: 'remove', id: id });
//   }
 
//   removeAllFiles(): void {
//     this.uploadInput.emit({ type: 'removeAll' });
//   }
  
// }
// ===============================
//   public imagePath;
//   imgURL: any;
//   public message: string;
 
//   preview(files) {
//     if (files.length === 0)
//       return;
 
//     var mimeType = files[0].type;
//     if (mimeType.match(/image\/*/) == null) {
//       this.message = "Only images are supported.";
//       return;
//     }
 
//     var reader = new FileReader();
//     this.imagePath = files;
//     reader.readAsDataURL(files[0]); 
//     reader.onload = (_event) => { 
//       this.imgURL = reader.result; 
//     }
//   }
// }
// ======
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  name = 'Angular 4';
  url:any ='';
  onSelectFile(event) {
    //console.log(event.target);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        console.log(event.target);
        this.url = reader.result;
        //console.log(this.url);
      }
    }
  }
}
