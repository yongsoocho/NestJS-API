import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],	// take urls and execute function, like express router(urls, function)
  providers: [MoviesService],
})
export class AppModule {}	
=======

@Module({
  imports: [],
  controllers: [],	// take urls and execute function, like express router(urls, function)
  providers: [],
})

export class AppModule {}
>>>>>>> c98f3a9b9c235854d4a5336c3e0a805df8ac1f02
