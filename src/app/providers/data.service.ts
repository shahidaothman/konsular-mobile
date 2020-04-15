 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Components } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private http: HttpClient) { }

	getUser() {
		return this.http.get('https://jsonplaceholder.typicode.com/users');
	}

	getMenuOpts() {
		return this.http.get<Components[]>('/assets/data/menu.json');
	}

	getAlbumes() {
		return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
	}
	getSuperHeroes() {
		return this.http.get('/assets/data/superheroes.json').pipe(delay(5000));
	}
}
