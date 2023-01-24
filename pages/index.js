import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <Link href="/ninjas">See Ninjas Listing</Link>
      <Footer />
    </div>
  );
}
