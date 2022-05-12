
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';

export default function Home() {
  return (
      <MainLayout >
         <h1 className={'title'}>
          {/* ir a<a href="/about"> About</a> */}
          ir a <Link href="/about"> About</Link>
        </h1>
        <h4>Aqui home principal</h4>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>

      </MainLayout>
  )
}
