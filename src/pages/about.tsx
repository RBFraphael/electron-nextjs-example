import Head from "next/head";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Head>
                <title>About - Electron NextJS Desktop App</title>
            </Head>
            
            <h1>About</h1>
            <p>Ea consequat commodo consequat minim commodo. Sint laboris minim eu cillum mollit consequat sunt. In cillum est elit enim eiusmod eiusmod velit dolore ad do id sunt ipsum dolor. Deserunt nisi duis veniam reprehenderit laborum aute anim sint nisi reprehenderit tempor aliqua eu. Reprehenderit dolor sunt officia dolore consequat occaecat adipisicing. Nisi sint tempor id adipisicing tempor esse voluptate nostrud duis non.</p>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/screen2">Screen 2</Link>
                </li>
            </ul>
        </>
    );
}
