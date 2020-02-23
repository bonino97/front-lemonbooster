import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program/program.service';
import { Program } from 'src/app/models/program.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: []
})
export class ViewProgramComponent implements OnInit {
  
  program: Program;

  constructor(
    public _ProgramService: ProgramService,
    private _route: ActivatedRoute,
    
    ) {
 
    }

  ngOnInit() {
    this.loadProgram();
  }

  loadProgram(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getProgram(id);
      this.getProgramScope(id);
      return id;
    });
  }

  getProgram(id){
    this._ProgramService.getProgram(id).subscribe(
        (resp:any) =>{  
          this.program = resp.program;
          return this.program;
        });
  }

  getProgramScope(id){
    this._ProgramService.getProgram(id).subscribe(
      (resp:any) =>{  
        this.program.scope = resp.program.scope;
        return this.program.scope;
      });
  }

  

}