import React from "react";

const PostPreview = (props) => {
    return (
        <>
            <div>
                {props.title}, {props.date}
            </div>
        </>
    );
};

export default PostPreview;
