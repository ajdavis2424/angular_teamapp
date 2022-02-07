// State of app lives here, As Well as Methods!

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // store state of app here
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | "" = "";
  teams:string [][] = []

  onInput(member: string) {
    this.newMemberName = member;
    // console.log(this.newMemberName);
  }
  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty!";
      return;
    }
    this.errorMessage = "Name can't be empty";
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    // console.log(this.members);
  }

  generateTeams(){
    if(!this.numberOfTeams || this.numberOfTeams <=0){
      return
    }
    
// allMembers copies member state
    const allMembers = [...this.members]

    for(let i = 0; i < this.numberOfTeams;i++){
    const randomIndex=Math.floor(Math.random() * allMembers.length)
    const member = allMembers.splice(randomIndex, 1)[0];

    if(this.teams[i]){
      this.teams[i].push(member)
    } else{
      this.teams[i] = [member]
    }
  }
}
}