import { Module } from "@nestjs/common";
import { FeedModule } from "./feed/feed.module";
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [FeedModule, BlogModule],
})
export class AppModule {}
