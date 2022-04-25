import { Outlet } from 'react-router-dom';
import TopNav from './components/TopNav';

function App() {

  return (
    <div className="App">
      <header>
        <TopNav/>
      </header>
      <main >
        <Outlet/>
      </main>
    </div>
  )
}

export default App
