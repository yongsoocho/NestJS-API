import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [],	// take urls and execute function, like express router(urls, function)
  providers: [],
})
export class AppModule {}	
