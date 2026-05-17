import BlogSnapshot from '../BlogSnapshot'
import TerminalSnapshot from '../TerminalSnapshot'
import NavBar from '../NavBar'
import Introduction from '../Introduction'

function IntroductionPage() {
  return (
    <div className="antialiased font-[Inter] text-slate-300 bg-[#0B0D0F]">

       <NavBar/>

      <main className="pt-20">

        <Introduction/>

        <TerminalSnapshot/>
        <BlogSnapshot/>
      

      </main>
    </div>
  )
}

export default IntroductionPage