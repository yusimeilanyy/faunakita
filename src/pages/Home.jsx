import { Banner } from '../components/home/Banner'
import { FaunaHariIni } from '../components/home/FaunaHariIni'
import { TopikHangat } from '../components/home/TopikHangat'
import { BuatAkun } from '../components/home/BuatAkun'

export const Home = () => {
  return (
    <div>   
        <Banner />
        <BuatAkun />
        <FaunaHariIni />
        <TopikHangat />
    </div>
  )
}
