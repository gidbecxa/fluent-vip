import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="container mx-auto max-w-md px-4">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">404</span>
            </div>
            <CardTitle className="text-2xl">Page non trouvée</CardTitle>
            <CardDescription>
              La page que vous recherchez n'existe pas ou a été déplacée.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/">
              <Button size="lg" className="w-full">
                <Home className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
            <Link href="/executive">
              <Button variant="outline" size="lg" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Parcours Executive
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}