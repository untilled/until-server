import { Module } from "@nestjs/common";
import { FeedModule } from "./feed/feed.module";
import { BlogModule } from './blog/blog.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [FeedModule, BlogModule, AuthModule],
})
export class AppModule {}
