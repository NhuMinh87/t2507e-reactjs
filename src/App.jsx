import './App.css'
import Header from './components/Header.jsx'
import Object from './components/Object.jsx'
import Subject from './components/Subject.jsx'

function App() {
  return (
    <div>
      <Header />

      {/* Banner section */}
      <div className="banner">
        <img src="/images/banner-fpt.png" alt="FPT Aptech Banner" />
      </div>

      <main>
        <Object />
        <Subject />
      </main>

      <footer className="footer">
        <p>Created by Minh - ReactJS Practice</p>
      </footer>
    </div>
  )
}

export default App
