import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">หน้าหลัก</Link></li>
          <li><Link href="/activities">กิจกรรม</Link></li>
          <li><Link href="/about">เกี่ยวกับเรา</Link></li>
        </ul>
      </nav>
    </header>
  )
}