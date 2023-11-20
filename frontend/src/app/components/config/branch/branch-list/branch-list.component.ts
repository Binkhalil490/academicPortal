import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Branch } from 'src/app/model/config/branch';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'contactNo', 'actions'];
  dataSource: Branch[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('branch').subscribe((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "branch").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/branch-form']);
  }

  

}

