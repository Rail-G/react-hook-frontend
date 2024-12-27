import '../css/App.css'
import { MainPage } from './authentication/MainPage'
import { MainEffect } from './use-effect/MainEffect'
import { MainTestPage } from './useJsonFetch/MainTestPage'



function App() {
  return (
    <>
    <div className='task t1'>
      <MainEffect />
    </div>
    <div className='task t2'>
      <MainTestPage />
    </div>
    <div className='task t3'>
      <MainPage />
    </div>
    </>
  )
}

export default App
