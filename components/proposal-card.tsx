import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface ProposalCardProps {
  id: string
  partido: string
  partidoColor: string
  titulo: string
  resumen: string
  tema: string
  fecha: string
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-DO", { year: "numeric", month: "short", day: "numeric" })
}

export function ProposalCard({ id, partido, partidoColor, titulo, resumen, tema, fecha }: ProposalCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="outline" className="font-semibold" style={{ borderColor: partidoColor, color: partidoColor }}>
            {partido}
          </Badge>
          <Badge variant="secondary">{tema}</Badge>
        </div>
        <CardTitle className="text-xl leading-tight text-balance">{titulo}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-sm leading-relaxed line-clamp-2">{resumen}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{formatDate(fecha)}</span>
        </div>
        <Button asChild size="sm">
          <Link href={`/propuestas/${id}`}>Ver más</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
