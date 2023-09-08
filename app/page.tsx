import Link from 'next/link';

export default function Home() {
  return (
      <div className="flex justify-center">
        <Link href="/about" className="my-btn py-2">LinkedIn About Page</Link>
      </div>
  )
}
