import { Component, OnInit } from '@angular/core';
import { Announcement } from '../../../../model/config/announcement'; // Import the Announcement interface
import { CrudService } from '../../../../services/crud.service';
import {AppResponse} from "../../../../dto/response.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'content', 'datePosted', 'actions'];
  dataSource: Announcement[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements() {
    this.service.getList('announcement').subscribe((res: AppResponse) => { // Assuming endpoint is 'announcement'
      this.dataSource = res.data.content;
    });
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "announcement").subscribe(() => { // Assuming endpoint is 'announcement'
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    });
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/announcement-form']); // Route to 'announcement-form' when editing
  }
}
