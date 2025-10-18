"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const handleContact = (method: string) => {
    console.log(`Contact via ${method}`)
    // Implement contact functionality
  }

  return (
    <section className="pt-24 pb-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Besoin d&apos;aide pour choisir ?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Nos conseillers experts vous guident vers la formule parfaite selon vos objectifs et contraintes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Phone,
              title: "Appel conseil",
              description: "Échange téléphonique de 15 minutes",
              action: "Programmer un appel",
              method: "phone"
            },
            {
              icon: Mail,
              title: "Email détaillé",
              description: "Réponse personnalisée sous 24h",
              action: "Nous écrire",
              method: "email"
            },
            {
              icon: MessageCircle,
              title: "Chat en direct",
              description: "Support immédiat en ligne",
              action: "Démarrer le chat",
              method: "chat"
            }
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="pt-10 px-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <contact.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {contact.description}
                  </p>
                  <Button
                    onClick={() => handleContact(contact.method)}
                    variant="outline"
                    className="w-full"
                  >
                    {contact.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-emerald-900 mb-2">
              Garantie satisfaction
            </h3>
            <p className="text-emerald-700">
              30 jours pour tester sans risque. Remboursement intégral si vous n&apos;êtes pas satisfait.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}