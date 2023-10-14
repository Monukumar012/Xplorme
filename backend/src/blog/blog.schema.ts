import { Prop,SchemaFactory,Schema } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type BlogDocument = HydratedDocument<Blog>;



@Schema()
export class Blog{
    @Prop({required:true,type:String})
    title:string


    @Prop({required:true,type:String})
    description:string

    @Prop()
    code?:string


    @Prop({required:true,type:String})
    image:string
}


export const BlogSchema = SchemaFactory.createForClass(Blog);