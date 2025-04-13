import Footer from "../components/Footer/Footer"
import Header from "../components/Header"


function Login() {
  return (
    <div className='flex flex-column align-items-center w-screen page__area'>
      <Header value={0}/>
      <div>
        <div>formulario</div>
        <div>imagem</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
