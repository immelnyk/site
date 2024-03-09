import Head from "next/head";
import Image from "next/image";
import Card from "~/components/layout/Card";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Card>
        <div className="flex gap-4">
          <div className="h-60 w-60 overflow-hidden rounded-[4px] object-cover">
            <Image src="/me.jpg" alt="Taras Melnyk" height={500} width={500} />
          </div>
          <div className="flex flex-grow flex-col gap-4">
            <h2 className="text-xl font-bold text-primary-dark">
              Taras Melnyk
            </h2>
            <ul className="flex flex-col gap-1">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-light"></div>
                <span className="font-semibold text-copy">23 y.o</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-light"></div>
                <span className="font-semibold text-copy">
                  3 years of experience
                </span>
              </li>
            </ul>
            <div className="flex flex-col gap-4"></div>
          </div>
        </div>
      </Card>
    </>
  );
}
