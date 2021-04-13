import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],	// take urls and execute function, like express router(urls, function)
  providers: [MoviesService],
})
export class AppModule {}	