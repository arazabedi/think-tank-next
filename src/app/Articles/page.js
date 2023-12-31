import React from "react";
import Head from "next/head";
import { ArticleCard } from "@/components/ArticleCard";
import { TitleBox } from "@/components/TitleBox";
import "./Articles.css";

const articles_path = `${process.env.APP_URL}/api/articles/`;

async function getArticles() {
  const response = await fetch(articles_path);
  const data = await response.json();
  return data;
}

export default async function Articles() {
  const articles = await getArticles();
  console.log(articles.data);
  return (
    <>
      <>
        <TitleBox
          image="/images/titleboxes/articles.jpg"
          color="#2e2d2b"
          font="white"
        >
          Articles<span className="hilite">.</span>
        </TitleBox>
        <div className="articles-wrapper">
          {articles.data.map((article) => (
            <ArticleCard
              key={article.id} // Add a unique key for each iteration
              subject={article.subject}
              thumbnail={`${process.env.VITE_API_PUBLIC_URL}${article.cardImage}`}
              title={article.title}
              type="Article"
              author={article.author}
              path={`/Articles/${article.id}`}
            />
          ))}
        </div>
      </>
    </>
  );
}
