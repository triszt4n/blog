import { ImageDataLike } from 'gatsby-plugin-image'

export interface PostProps {
  title: string
  lead?: string
  date: Date
  tags?: Array<string>
  featuredImage: ImageDataLike
  comment: boolean
}
