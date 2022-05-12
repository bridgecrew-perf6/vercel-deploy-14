
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


export default function Contact(){
  return (
    <MainLayout>
          <h1 className={'title'}>
            {/* ir a<a href="/"> Home</a> */}
            ir a <Link href="/">Home</Link>
          </h1>
          <h4>Aqui contact otra ve </h4>

          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/index.js</code>
          </p>
    </MainLayout>
    
  )
}

