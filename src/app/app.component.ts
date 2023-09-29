import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularMaterial';
  images: any[]=[];
  preview: any;
  imageIndex !: number ;
 
  ngOnInit(){
   
  }
  getFile(event:any){
    let fileUpload = event.target.files;
    let sliderLength = this.images.length + fileUpload.length
    if(sliderLength > 5){
      let limit = 5 - this.images.length 
      console.log(fileUpload);
      for(let i=0 ; i<limit;i++){
        let file=fileUpload[i]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
          this.images.push(reader.result)
        }
  
      }
    }else{
      for(let i=0 ; i<fileUpload.length;i++){
        let file=fileUpload[i]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
          this.images.push(reader.result)
        }
  
      }
    }
  }
  display(item:number){
    console.log(item);
    this.imageIndex = item
    this.preview = this.images[item]
  }


  delete(){

    console.log(this.imageIndex)
    this.images.splice(this.imageIndex,1);
    if(this.images.length == this.imageIndex){
      --this.imageIndex;
      this.preview = this.images[this.imageIndex] 

    }else{
      this.preview = this.images[this.imageIndex] 

    }
    this.preview = this.images[this.imageIndex] 
    console.log(this.imageIndex)
  }
  next(){
    console.log("next");
    
    ++this.imageIndex;
    this.preview = this.images[this.imageIndex];
    // if(){

    // }

  }
  prev(){
    --this.imageIndex;
    this.preview = this.images[this.imageIndex]

  }

}