import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home - Electron NextJS Desktop App</title>
            </Head>

            <h1>Home</h1>
            <ul>
                <li>
                    <Link href="/screen2">Screen 2</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </>
    );
}
