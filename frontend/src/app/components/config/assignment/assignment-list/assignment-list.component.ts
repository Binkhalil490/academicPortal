import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../../../model/config/assignment'; // Import the Assignment interface
import { CrudService } from '../../../../services/crud.service';
import {Router} from "@angular/router";
import {AppResponse} from "../../../../dto/response.dto";

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'dueDate', 'course', 'actions'];
  dataSource: Assignment[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments() {
    this.service.getList('assignment').then((res: AppResponse) => { // Assuming endpoint is 'assignment'
      this.dataSource = res.data.content;
    });
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "assignment").subscribe(() => { // Assuming endpoint is 'assignment'
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    });
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/assignment-form']); // Route to 'assignment-form' when editing
  }
}
