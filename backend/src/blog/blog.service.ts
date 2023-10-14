import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from './blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

  async create(createBlogDto: CreateBlogDto) {
    try {
      const blog=new this.blogModel(createBlogDto);
      await blog.save();
      return{
        success:true,
        message:"Blog Added Successfully!",
        blog,
      }
    } catch (error) {
      return{
        success:false,
        message:"Error in Blog Adding!",
        error
      }
    }
    
  }

  async findAll() {
    try {
      const blogs=await this.blogModel.find();
      return{
        success:true,
        message:"Blogs Founded Successfully!",
        blogs,
      }
    } catch (error) {
      return{
        success:false,
        message:"Error in Blogs Finding All!",
        error
      }
    }
  }

  async findOne(id: string) {
    try {
      const blog=await this.blogModel.findOne({_id:id});
      return{
        success:true,
        message:"Blog Founded Successfully!",
        blog,
      }
    } catch (error) {
      return{
        success:false,
        message:"Error in Blog Finding Single!",
        error
      }
    }
  }

  async update(id: string, updateBlogDto: UpdateBlogDto) {
    try {
      const blog=await this.blogModel.updateOne({_id:id},updateBlogDto);
      return{
        success:true,
        message:"Blog Updated Successfully!",
        blog,
      }
    } catch (error) {
      return{
        success:false,
        message:"Error in Blog Updating!",
        error
      }
    }
  }

  async remove(id: string) {
    try {
      const blog=await this.blogModel.deleteOne({_id:id});
      return{
        success:true,
        message:"Blog Deleted Successfully!",
        blog,
      }
    } catch (error) {
      return{
        success:false,
        message:"Error in Blog Deleting!",
      }
    }
  }
}
