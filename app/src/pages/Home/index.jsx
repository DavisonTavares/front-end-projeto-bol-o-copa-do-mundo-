export function Home(){
  return (
    <div className="h-screen bg-red-700 text-white flex">
      <div className="container max-w-5xl p-6 flex-1 flex flex-col justify-center items-center md:flex-row space-y-8 md:space-x-6">
          
          <div className="md:flex-1 W-full md:max-w-sm ">
            <img src="/img/logo.webp" width={250}/>
          </div>

          <div className="flex flex-col space-y-6 md:flex-1 md:text-left">
            <h1 className="text-3xl text-center font-bold">Seu palpite vale ouro, aposte já! </h1>
            
            <a href="/login" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-2xl">
              Entrar
            </a>
          </div>
      </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4034082416666217"
     crossorigin="anonymous"></script>
    </div>
  )
}
