import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NoticiasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Noticias</h1>
            <p className="text-lg text-muted-foreground">
              Próximamente: Noticias y actualizaciones sobre propuestas políticas
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
