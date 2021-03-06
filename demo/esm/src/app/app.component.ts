import { Component } from '@angular/core';
import { QueryBuilderConfig } from '../../lib/components/query-builder'

@Component({
  selector: 'my-app',
  template: `<query-builder class='margin30' [data]='query' [config]='config'></query-builder>
  <div class='margin30'>
      <textarea >{{query | json}}</textarea>
  </div>`,
  styles: ['.margin30 { margin: 30px; }', 'textarea { width: 100%; height: 250px; }']
})
export class AppComponent {
  public query = {
    condition: 'and',
    rules: [
      {field: 'age', operator: '<='},
      {field: 'birthday', operator: '>='},
      {
        condition: 'or',
        rules: [
          {field: 'gender', operator: '='},
          {field: 'occupation', operator: 'in'},
          {field: 'school', operator: 'is null'}
        ]
      }
    ]
  };
  public config: QueryBuilderConfig = {
    fields: {
      'age': {name: 'Age', type: 'number'},
      'gender': {
        name: 'Gender',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      },
      'name': {name: 'Name', type: 'string'},
      'educated': {name: 'College Degree?', type: 'boolean'},
      'birthday': {name: 'Birthday', type: 'date'},
      'school': {name: 'School', type: 'string', nullable: true},
      'occupation': {
        name: 'Occupation',
        type: 'string',
        options: [
          {name: 'Student', value: 'student'},
          {name: 'Teacher', value: 'teacher'},
          {name: 'Unemployed', value: 'unemployed'},
          {name: 'Scientist', value: 'scientist'}
        ]
      }
    }
  }
}
