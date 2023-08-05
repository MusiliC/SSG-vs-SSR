import Image from "next/image";
import Posts from "./components/posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="my-12 text-3xl text-center dark:text-white">
        Hello and welcome 😉&nbsp;
        <span className="whitespace-nowrap">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm <span className="font-bold">Musili</span>{" "}
        </span>{" "}
      </p>
      <Posts/>
    </main>
  );
}
