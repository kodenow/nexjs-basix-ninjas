import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oooooops...</h1>
      <h2>That page cannot be found</h2>
      <p>Go back to the </p>
      <Link href="/">Homepage</Link>
    </div>
  );
};

export default NotFound;
