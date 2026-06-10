import BlogSnapshot from '../Home/BlogSnapshot'
import TerminalSnapshot from '../Home/TerminalSnapshot'
import Introduction from '../Home/Introduction'

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