import React, { useEffect } from "react";
import Head from "next/head";
import config from "../config";
import retitle from "../lib/retitle";
import NavigationView from "../components/ui/NavigationView";
import ContactForm from "../components/app/ContactForm";

const Home = () => {
  useEffect(() => {
    document.getElementById(config.rootElementId)?.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>{retitle("Home")}</title>
        <meta property="og:title" content={retitle("Home")} key="title" />
      </Head>
      <NavigationView
        content={
          <article className="topLevelPage pageHome">
            <section>
              <p>
                Hi, I&apos;m <b>Neha Negi</b>.
              </p>
              <p>
                I&apos;m a full-stack software engineer based in India. I love
                reading about history, listening to rock music (I curate annual
                zeitgeist <a href="/playlists">playlists</a>),{" "}
                <a href="/now-watching">watching TV shows</a>, and the
                occassional writing of lore for fictional game worlds.
              </p>
              <p>
                Coding isn&apos;t just a job for me, it&apos;s been a passion of
                mine since I was 9 years old. Check out a selection of my{" "}
                <a href="/projects">personal projects</a>.
              </p>
              <p>
                I mostly develop in TypeScript and JavaScript for both backend
                services and frontend/websites. I&apos;ve used a plethora
                frontend frameworks/libraries such as React, Next.js, Vue.js,
                Svelte/SvelteKit, and Mithril.js for work and personal projects.
              </p>
              <p>
                I have experience developing in Java and Kotlin for backend
                services. I also use Shell and Python scripts from time to time
                for some DevOps or quick data processing.
              </p>
              <p>
                I also actively use Amazon Web Services at work. For personal
                projects I largely use Netlify for CI/CD and hosting, with some
                experimenting with edge functions; Google Firebase for its cloud
                database and cloud functions.
              </p>
              <p>
                You can find me on{" "}
                <a
                  href="https://github.com/ghostman2311"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/neha-negi-0533b4211/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                . You can also find me on{" "}
                <a
                  href="https://twitter.com/nkarnwal07"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
                , though I never post there.
              </p>
              <p>
                You could also email me at{" "}
                <code>nkarnwal07 (at) gmail (dot) com</code>.
              </p>
            </section>
            {config.features.contactForm ? (
              <section>
                <ContactForm />
              </section>
            ) : (
              <></>
            )}
          </article>
        }
      />
    </>
  );
};

export default Home;
