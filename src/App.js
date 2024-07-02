import Header from "./components/header";
import './index.css';
import Video from '../src/assets/video.mp4'
import Cards from "./components/cards";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Header />
      <div className="bg-custom-image bg-cover w-full h-600px"></div>
      <div className="w-full h-400 flex justify-center bg-black">
          <div className="w-3/5 flex items-center justify-between">
              <video controls className="w-3/6">
                  <source src={Video} />
                  Seu navegador não possui suporte para vídeos.
              </video>
              <div className="w-3/6 flex flex-col justify-between ml-30">
                  <p className="text-white text-custom-19 font-Kdam w-70">
                        Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
                        mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece
                        como a personificação da vingança para a população.
                  </p>
                  <button className=
                  "w-200px h-60px bg-customRed text-white py-8px px-10px rounded-5px cursor-pointer transition duration-800 text-18px flex justify-center items-center font-bold border-0 outline-none mt-6 hover:text-black hover:bg-white"
                  >Comprar Ingresso
                  </button>
              </div>
          </div>
      </div>
      <Cards />
      <Footer />
    </>
  )
}
