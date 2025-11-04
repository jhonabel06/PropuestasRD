import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Autenticación</CardTitle>
              <CardDescription>
                Sistema de autenticación pendiente de implementación
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Esta funcionalidad estará disponible próximamente.
              </p>
              <Button asChild className="w-full">
                <Link href="/">Volver al inicio</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
