import React, { FC } from "react";

interface BlogListProps {
  data: [];
}

const BlogList: FC<BlogListProps> = ({ data }) => {
  return <div>{data}</div>;
};

export default BlogList;
