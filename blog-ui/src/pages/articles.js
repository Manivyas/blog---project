import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import Article from "../components/article";
import NotFound from "./NotFound";

const Articles = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  if (!article) return <NotFound />;
  const otherArticles = articleContent.filter((article) => article.name !== name);
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((para, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {para}
        </p>
      ))}
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Article articles={otherArticles}/>
      </div>
    </div>
  );
};
export default Articles;
