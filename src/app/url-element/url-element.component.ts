import { Component, OnInit } from '@angular/core';
import { GetUrlService } from '../get-url.service'

@Component({
  selector: 'url-element',
  templateUrl: './url-element.component.html',
  styleUrls: ['./url-element.component.scss'],
  providers:[GetUrlService]
})
export class UrlElementComponent implements OnInit {
	readonly urlPattern : string = "(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})";
	private shortUrl:String;
  private inProgress: Boolean = false;
	private shorten = (a,$e)=> {

    if(this.inProgress)
    return false

    this.shortUrl = '';
    this.inProgress = true;
		this.getUrlService.getUrl(a).then(a => {
      this.shortUrl = a['id'];
      this.inProgress = false;
    });
    return false;
	}

  constructor(private getUrlService : GetUrlService) { }

  ngOnInit() {
  }

}
