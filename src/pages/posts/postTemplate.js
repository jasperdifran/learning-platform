import React from "react";
import { graphql } from "gatsby";
import "./postTemplate.css";
import Navbar from "../../components/Navbar";

const Post = ({ data }) => {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
        <>
            <Navbar />
            <main className="postPageContainer">
                <div className="postContainer">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </main>
        </>
    );
};

export const pageQuery = graphql`
    query ($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`;

export default Post;
