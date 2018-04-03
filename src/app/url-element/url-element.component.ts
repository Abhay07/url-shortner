import { Component, OnInit } from '@angular/core';
import { GetUrlService } from '../get-url.service'

@Component({
  selector: 'url-element',
  templateUrl: './url-element.component.html',
  styleUrls: ['./url-element.component.scss'],
  providers:[GetUrlService]
})
export class UrlElementComponent implements OnInit {
	readonly urlPattern:String  = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";
	private shortUrl:String;
  private inProgress: Boolean = false;
  private copyText:String = "COPY";
	private shorten = (a,$e)=> {
    this.copyText = "COPY"
    if(this.inProgress)
    return false


    this.shortUrl = '';
    this.inProgress = true;
		this.getUrlService.getUrl(a).then(a => {
      this.shortUrl = a['id'];
      this.inProgress = false;
    }).catch(a=>{
      this.inProgress = false;
    });
    return false;
	}

  private copy =()=>{
    this.copyText = "COPIED";
    const el = (<HTMLInputElement>document.getElementById("copyInput"));
    el.value = this.shortUrl.toString();
    el.select();
    document.execCommand("copy");
  }

  private blurCopy = ()=>{
    this.copyText = "COPY";

  }



  constructor(private getUrlService : GetUrlService) { 
  console.log(this.urlPattern);

  }

  ngOnInit() {
  }

}
