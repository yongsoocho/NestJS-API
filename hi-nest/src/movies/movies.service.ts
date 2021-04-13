import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity'

@Injectable()
export class MoviesService {
	private movies: Movie[] = [];
	
	getAll(): Movie[] {
		return this.movies;
	}
	
	getOne(movieId: string): any {
		const movie = this.movies.find(v => v.id === +movieId)
		if(!movie){
			return new Error(`NOT FOUND 404`)
		}
		return movie;
	}
	
	deleteOne(movieId: string): boolean {
		this.getOne(movieId);
		this.movies = this.movies.filter(v => v.id !== +movieId)
		return true;
	}
	
	create(movieData: { title: string; year: number; genres: string[] }) {
		this.movies.push({
			id: this.movies.length + 1,
			...movieData
		})
	}
	
	update(movieId: string, updateData) {
		const movie = this.getOne(movieId);
		this.deleteOne(movieId);
		this.movies.push({ ...updateData });
	}
}
