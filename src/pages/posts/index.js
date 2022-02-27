import { graphql } from "gatsby";
import * as React from "react";
import Navbar from "../../components/Navbar";
import PostPreview from "../../components/PostPreview";

const PostPage = (props) => {
    console.log(props.data.allMarkdownRemark.edges);
    return (
        <>
            <Navbar />
            <div>This is a list of all our posts</div>
            {props.data.allMarkdownRemark.edges &&
                props.data.allMarkdownRemark.edges.map((item) => {
                    var itemInfo = item.node.frontmatter;
                    return (
                        <PostPreview
                            title={itemInfo.title}
                            date={itemInfo.date}
                            image={itemInfo.image}
                        />
                    );
                })}
        </>
    );
};

export default PostPage;

export const pageQuery = graphql`
    query MyQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                        date
                    }
                }
            }
        }
    }
`;
