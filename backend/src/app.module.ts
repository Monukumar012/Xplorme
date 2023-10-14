import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [BlogModule, MongooseModule.forRoot("mongodb+srv://monu:monu-blog@blogcluster.opo3w7v.mongodb.net/")],
  controllers: [],
  providers: [],
})
export class AppModule {}
