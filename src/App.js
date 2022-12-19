import { BrowserRouter as Router } from 'react-router-dom'
import { SidebarProvider } from './context/SidebarContext/GlobalProvider'
import WebRouter from './route'
import 'react-datetime/css/react-datetime.css'
import { ConnectionProvider } from './context/ConnectionContext/GlobalProvider'

function App() {
  return (
    <div className="">
      <ConnectionProvider>
        <SidebarProvider>
          <Router>
            <WebRouter />
          </Router>
        </SidebarProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
