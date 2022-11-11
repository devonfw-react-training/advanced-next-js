import Image from "next/image";
import styles from "./page.module.css";
import * as util from "date-fns";
import Preferences from "./pref";

export default async function Home() {
  const hero = Math.floor(Math.random() * 10 + 1);
  console.log("Hero Id: ", hero);

  const data = await (
    await fetch(`https://swapi.dev/api/people/${hero}`, {
      next: { revalidate: 30 },
    })
  ).json();

  const age =
    1900 + Number.parseInt((data.birth_year as string).substring(0, 2));

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://beta.nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </a>

          <a
            className={styles.card}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Learn &rarr;</h2>
            <p>
              Learn React with {data.name}. <br />I am master for{" "}
              {util.getYear(util.addYears(new Date(), -age))} years!
            </p>
            <div>
              <Preferences />
            </div>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
