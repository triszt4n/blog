import { ImageDataLike } from 'gatsby-plugin-image'

export interface WorkProps {
  title: string
  lead?: string
  date: Date
  url: string
  featuredImage: ImageDataLike
  status: {
    label: string
    color: string
  }
  techs: Array<string>
}
