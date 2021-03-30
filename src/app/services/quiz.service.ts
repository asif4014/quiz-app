import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [

      { id: 'data/c.json', name: 'C' },
      { id: 'data/python.json', name: 'Python' },
      { id: 'data/javascript.json', name: 'JavaScript' },
      // { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}
