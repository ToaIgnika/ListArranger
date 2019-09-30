import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-list-arranger',
  templateUrl: './list-arranger.component.html',
  styleUrls: ['./list-arranger.component.scss']
})
export class ListArrangerComponent implements OnInit {

  bug = [];
  bugUpload: '';
  showBugUpload = false;

  feature = [];
  featureUpload: '';
  showFeatureUpload = false;
  
  constructor() { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit() {
  }

  copyFeatureList() {
    let features = (this.feature.join('\n'));
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = features;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  copyBugList() {
    let bugs = (this.bug.join('\n'));
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = bugs;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  addItem(list: any[]){
    list.push('New item');
  }

  updateList(event, i) {
    this.feature[i] = event;
  }

  parseBugList() {
    this.bug = this.bugUpload.split(/\r?\n/);
  }

  parseFeatureList() {
    this.feature = this.featureUpload.split(/\r?\n/);
  }

}
