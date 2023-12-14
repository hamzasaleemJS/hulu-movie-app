import Head from "next/head";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import moviesRequests from "@/utils/request";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu - 2.0</title>
        <link rel="icon" href="hulu.png" />
      </Head>
      <div>
        {/* Header */}
        <Header />
        {/* Nav */}
        <Navbar />
        {/* Results */}
        <Results results={results} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const fetchedData = await fetch(
    `https://api.themoviedb.org/3${
      moviesRequests[genre]?.url || moviesRequests.fetchTreanding.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: fetchedData.results,
    },
  };
}
