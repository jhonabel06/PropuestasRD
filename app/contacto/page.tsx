import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Contacto</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ¿Tienes preguntas o sugerencias? Estamos aquí para ayudarte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te responderemos lo antes posible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input id="nombre" placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="asunto">Asunto</Label>
                      <Input id="asunto" placeholder="¿En qué podemos ayudarte?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={6} />
                    </div>
                    <Button type="submit" className="w-full md:w-auto">
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Información de contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@propuestasrd.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Teléfono</p>
                      <p className="text-sm text-muted-foreground">+1 (809) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Ubicación</p>
                      <p className="text-sm text-muted-foreground">Santo Domingo, República Dominicana</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Portal Neutral</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    PropuestasRD es un portal independiente dedicado a promover la transparencia política en la
                    República Dominicana.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
