import {Component, OnInit, Input} from '@angular/core';
import {DataService} from "../../data.service";
import {DataServiceService} from "../../services/data-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

  item = {};
  id;

  constructor(private data: DataService,
              private dataServ: DataServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.dataServ.get(this.id).subscribe(result => {
      console.log(result);
      this.item = result;
    })
    // this.data.currentText.subscribe(text => this.text = text);
    // this.data.currentImage.subscribe(image => this.image = image);
  }

}
