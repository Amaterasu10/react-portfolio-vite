import { Outlet } from 'react-router-dom';
import TopNav from './components/TopNav';

function App() {

  return (
    <div className="App font-poppins">
      <header className='fixed w-full'>
        <TopNav/>
      </header>
      <main className='min-h-screen h-fit'>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
