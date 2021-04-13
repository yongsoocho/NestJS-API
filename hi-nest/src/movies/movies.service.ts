import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity'
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Injectable()
export class MoviesService {
	private movies: Movie[] = [];
	
	getAll(): Movie[] {
		return this.movies;
	}
	
	getOne(movieId: number): any {
		const movie = this.movies.find(v => v.id === +movieId)
		if(!movie){
			return new Error(`NOT FOUND 404`)
		}
		return movie;
	}
	
	deleteOne(movieId: number): boolean {
		this.getOne(movieId);
		this.movies = this.movies.filter(v => v.id !== +movieId)
		return true;
	}
	
	create(movieData: CreateMovieDto) {
		this.movies.push({
			id: this.movies.length + 1,
			...movieData
		})
	}
	
	update(movieId: number, updateData: UpdateMovieDto) {
		const movie = this.getOne(movieId);
		this.deleteOne(movieId);
		this.movies.push({ id:movieId, ...updateData });
	}
}
