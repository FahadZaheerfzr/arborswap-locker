import { BrowserRouter as Router } from 'react-router-dom'
import { SidebarProvider } from './context/SidebarContext/GlobalProvider'
import WebRouter from './route'
import 'react-datetime/css/react-datetime.css'
import { DAppProvider } from '@usedapp/core'
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'
import { networkConfig } from './config/networks'

function App() {
  return (
    <div className="">
      <DAppProvider config={networkConfig}>
        <SidebarProvider>
          <Router>
            <WebRouter />
          </Router>
        </SidebarProvider>
      </DAppProvider>
    </div>
  )
}

export default App
