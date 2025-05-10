import './index.css'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { FaunaHariIni } from './components/FaunaHariIni'
import { TopikHangat } from './components/TopikHangat'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <h1 className="text-4xl font-bold text-amber-400">tesss</h1>
      <FaunaHariIni />
      <TopikHangat />
    </>
  )
}

export default App