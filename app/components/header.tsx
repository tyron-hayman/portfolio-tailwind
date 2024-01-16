import Head from "next/head";
import Link from 'next/link';

export default function Header() {
    return (
        <div id="header" className="flex justify-between content-center">
            <div id="header-logo"><Link href="/">TH</Link></div>
            <div id="mainNav">
                <Link href="/" className="link-items">Home</Link>
                <Link href="/about" className="link-items">About</Link>
                <Link href="/projects" className="link-items">Projects</Link>
            </div>
        </div>
    )
};