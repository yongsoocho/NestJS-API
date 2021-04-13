import { Controller, Param, Query, Body, Get, Post, Delete, Patch } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from '../dto/create-movie.dto';

@Controller('movies')	// Router
export class MoviesController {
	constructor(private readonly moviesService: MoviesService) {}
	
	
	@Get()
	getAll(): Movie[] {
		return this.moviesService.getAll();
	}

	@Post()
	create(@Body() movieData: CreateMovieDto) {
		return this.moviesService.create(movieData);
	}

	@Delete("/:id")
	delete(@Param('id') movieId: string): boolean {
		return this.moviesService.deleteOne(movieId);
	}

	@Patch("/:id")	// Put: entire update, Patch: update partion
	patch(@Param('id') movieId: string,
		  @Body() updateData: { title: string; }) {
		return  { movieId, updateData }
	}

	@Get("/search")
	search(@Query('year') search: string) {	// if @Query(), search would be query Object
		return `Searching Page with title, year=${search}`
	}

	@Get("/:id")
	getOne(@Param('id') movieId: string): Movie {	// if @Param(), movieId would be params Object
		return this.moviesService.getOne(movieId);
	}
}
