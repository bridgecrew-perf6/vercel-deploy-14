
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function About() {
  return (
    <>
    
         <h1 className={'title'}>
        
        {/* ir a<a href="/"> Home</a> */}
        ir a <Link href="/">Conatact</Link>
      </h1>
      <h4>Aqui bout </h4>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>

    </>

  )
}

About.getLayout = function getLayout( page: JSX.Element){
  return(
    <MainLayout>
    <DarkLayout>
       { page }
    </DarkLayout>
  </MainLayout>
  )
}

