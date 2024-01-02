import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Screen2() {
    const [route, setRoute] = useState<string>("");
    const router = useRouter();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        router.push(`/${route}`);
    };
    
    return (
        <>
            <Head>
                <title>Second Screen - Electron NextJS Desktop App</title>
            </Head>
            
            <h1>Screen 2</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="route" id="route" placeholder="Slug:" onChange={(e) => setRoute(e.target.value)} value={route} required/>
                <button type="submit">Go!</button>
            </form>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </>
    );
}
