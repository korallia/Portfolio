import BlogSnapshot from '../BlogSnapshot'
import TerminalSnapshot from '../TerminalSnapshot'
import Introduction from '../Introduction'

function IntroductionPage() {
  return (
    <div className="antialiased font-[Inter] text-slate-300 bg-[#0B0D0F]">


        <Introduction/>

        <TerminalSnapshot/>
        <BlogSnapshot/>
      
    </div>
  )
}

export default IntroductionPage