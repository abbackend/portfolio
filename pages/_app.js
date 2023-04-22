import "@/styles/globals.css";
import Head from "next/head";
import { details } from "../src/constants/index";

export default function App({ Component, pageProps }) {
  const metaData = {
    viewport:
      "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
    title: `${details.first_name} ${details.last_name} | Portfolio`,
    description: details.about,
    icon: "/favicon.svg",
    author: `${details.first_name} ${details.last_name}`,
    tags: details.tags,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content={metaData.viewport} />
        <title>{metaData.title}</title>
        <link rel="icon" href={metaData.icon} />
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
      </Head>

      <div className="select-none">
        <Component {...pageProps} />
      </div>
    </>
  );
}
