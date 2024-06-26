// NOTE: https://zenn.dev/gekitenius/articles/approuter_with_emotion_202401
'use client'

import Image from 'next/image'
import styles from './page.module.css'
import styled from "@emotion/styled";

// emotion/styledの利用
const Description = styled.div`
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    font-size: 0.85rem;
    max-width: var(--max-width);
    width: 100%;
    z-index: 2;
    font-family: var(--font-mono);
`

export default function Home() {
  return (
      <main className={styles.main}>
        <Description>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/app/page.tsx</code>
          </p>
          <div>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
              By{' '}
              <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={100}
                  height={24}
                  priority
              />
            </a>
          </div>
        </Description>

        <div className={styles.center}>
          <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
          />
        </div>

        <div className={styles.grid}>
          <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <h1>
              Docs <span>-&gt;</span>
            </h1>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2>
              Learn
              {/*Learn <span>-&gt;</span>*/}
            </h2>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>

        <ul>
          <li>test 1</li>
          <li>test 2</li>
          <li>test 3</li>
        </ul>
      </main>
  )
}
