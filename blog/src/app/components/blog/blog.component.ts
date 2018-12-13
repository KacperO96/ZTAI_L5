import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() filterText: string;

  items: any[];

  constructor(private data: DataService, private router: Router, private dataServ: DataServiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.filterText = params['title']);
    // this.filterText = this.route.snapshot.queryParamMap.get("title");
    this.dataServ.getAll().subscribe(result => {
      this.items = result;
      console.log(this.items);
    })

    // this.dataServ.get(10).subscribe(result => {
    //   this.value = result;
    //   console.log(this.value);
    // };
  }

  setQuery(text) {
    this.router.navigate(['/blog'], {
      queryParams: {title: text}
    });
  }

  newValues(text, image, id) {
    this.data.changeImage(image);
    this.data.changeText(text);
    this.router.navigate(['/blog/detail/', id]);
  }
}
