import Navbar from "../components/Navbar";

export default function DefaultTemplate({children}) {
    return( 
        <>
        <main className="w-full min-h-screen dark:bg-neutral-900 flex flex-col items-center justify-center transition-colors duration-200">
            <Navbar/>
            <section className="flex-1 flex flex-col items-center justify-center">
                {children}
            </section>

            <footer className="w-full bg-zinc-800 dark:bg-neutral-950 text-zinc-300 flex flex-col items-center justify-center py-3">
            © S74RK1113R 2025. All rights reserved
            </footer>
        </main>
        
        </>
    )
}