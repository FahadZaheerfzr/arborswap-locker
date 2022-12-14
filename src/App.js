import { BrowserRouter as Router } from 'react-router-dom'
import { SidebarProvider } from './context/SidebarContext/GlobalProvider'
import WebRouter from './route'

function App() {
  return (
    <div className="">
      <SidebarProvider>
        <Router>
          <WebRouter />
        </Router>
      </SidebarProvider>
    </div>
  )
}

export default App
