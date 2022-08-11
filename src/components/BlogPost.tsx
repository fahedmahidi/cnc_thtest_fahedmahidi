import { FC } from "react";

interface BlogPostProps {
  title: string;
  image: string;
  author: string;
  date: Date;
  link: string;
  authLink: string;
}

const BlogPost: FC<BlogPostProps> = ({ title, image, author, date, link, authLink }) => {
  const publishDate = new Date(date);
  const fullMonth = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    publishDate.getMonth()
  );
  return (
    <>
      <div className="col-4 ">
        <div className="p-card shadowed ">
          <h5 className="p-muted-heading">Cloud and server</h5>
          <hr className="u-sv1" />
          <img className="p-card__image" src={image} alt="decrivant quelque chose" />
          <div className="p-card__content">
            <h3 className="p-heading--7">
              <a href={link}>{title}</a>
            </h3>
          </div>
          <p className="p-heading--6">
            by <a href={authLink}>{author}</a> on {publishDate.getDate()} {fullMonth}{" "}
            {publishDate.getFullYear()}
          </p>
          <hr className="u-sv1" />
          <p>Article</p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
