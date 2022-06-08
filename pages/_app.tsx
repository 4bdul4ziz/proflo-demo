import '../styles/globals.css'
import type { AppProps } from 'next/app'


//make two separate components
//one for the calendar
//one for the calendar




function MyApp({ Component, pageProps }: AppProps) {
  //make two calendars


  return (
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
