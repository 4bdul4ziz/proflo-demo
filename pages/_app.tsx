import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { Navbar } from '../components/Navbar'


//make two separate components
//one for the calendar
//one for the calendar




function MyApp({ Component, pageProps }: AppProps) {
  //make two calendars


  return (
    //top bar
    <div className="date-picker-container">
            <div className="background-procurement">
                <div className="calendars-container">
                  <Component {...pageProps} />  
                </div>     
            </div>
      



            <div className="background-sales">
                <div className="calendars-container">
                  <Component {...pageProps} />
                </div>     
            </div>
    </div>
  
  
  
  
  
  )
  
}

export default MyApp
