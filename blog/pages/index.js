import Link from 'next/link'
import Image from 'next/image'
import Header from '../home/components/Header';

export default function Blog() {
  return (
    <div>
    <Header />
      <h3>This is our blog</h3>
      <ul>
        <li>
          <Link href="/post/1">
            <a>Post 1</a>
          </Link>
        </li>
        <li>
          <Link href="/post/2">
            <a>Post 2</a>
          </Link>
        </li>
      </ul>
      <a href="/">Home</a>
      <div>
        <Image
          src="/blog/static/nextjs.png"
          alt="Next.js logo"
          width={200}
          height={160}
        />
      </div>
    </div>
  )
}
