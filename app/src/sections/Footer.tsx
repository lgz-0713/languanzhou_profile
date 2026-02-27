export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-slate-900 text-slate-400">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-medium text-slate-200">Guanzhou Lan (兰冠州)</p>
            <p className="text-sm mt-1">Ph.D. Candidate in Computer Science</p>
          </div>
          
          <div className="text-center md:text-right text-sm">
            <p>School of Artificial Intelligence, OPtics and ElectroNics (iOPEN)</p>
            <p className="mt-1">Northwestern Polytechnical University</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-800 text-center text-sm">
          <p>&copy; {currentYear} Guanzhou Lan. All rights reserved.</p>
          <p className="mt-1 text-slate-500">
            Last updated: February 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
