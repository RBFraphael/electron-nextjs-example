import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DynamicRoute()
{
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <Head>
                <title>Dynamic Route - Electron NextJS Desktop App</title>
            </Head>
            
            <h1>Dynamic Route</h1>
            <p>URL: /{slug}</p>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/screen2">Screen 2</Link>
                </li>
            </ul>
        </>
    );
}