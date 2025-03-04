import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Head>
        <title>Cyber Cypher 4.0 Elementary Submissions</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      <iframe
        src="https://tally.so/r/mKkQ7z"
        className="absolute inset-0 w-full h-full border-0"
        title="Cyber Cypher 4.0 Elementary Submissions"
      ></iframe>
    </div>
  );
}
