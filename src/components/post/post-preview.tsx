import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { PostProps } from '~types/post.props'

type Props = {
  post: {
    fields: {
      slug: string
      readingTime: {
        minutes: number
      }
    }
    frontmatter: PostProps
  }
}

const PostPreview: React.FC<Props> = ({ post }) => {
  const featuredImage = getImage(post.frontmatter.featuredImage)

  return (
    <div>
      <div className="mb-5">
        {featuredImage && <GatsbyImage image={featuredImage} alt="Preview" objectFit="contain" />}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link to={post.fields.slug}>
          <p className="hover:underline">{post.frontmatter.title}</p>
        </Link>
      </h3>
      <div className="text-lg mb-4">{post.frontmatter.date}</div>
      <p className="text-lg leading-relaxed mb-4">{post.frontmatter.lead}</p>
    </div>
  )
}

export default PostPreview
