"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, Clock, Users, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { PricingTier } from "@/lib/pricing-data"

interface EnhancedPricingCardProps extends PricingTier {
  onSelect: (planId: string) => void
  className?: string
}

export function EnhancedPricingCard({
  id,
  name,
  description,
  price,
  features,
  popular = false,
  premium = false,
  badge,
  buttonText,
  sessions,
  onSelect,
  className
}: EnhancedPricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("relative", className)}
    >
      {premium ? (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 text-sm font-semibold shadow-lg">
            <Crown className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        </div>
      ) : popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 text-sm font-semibold shadow-lg">
            <Star className="h-3 w-3 mr-1" />
            Plus Populaire
          </Badge>
        </div>
      )}

      <Card className={cn(
        "h-full transition-all duration-300 hover:shadow-2xl border-2 relative overflow-hidden",
        popular ? "border-emerald-200 shadow-lg scale-[1.02]" : "border-slate-200",
        premium ? "border-amber-200 shadow-lg" : "",
        "bg-white"
      )}>
        {/* Background gradient for premium cards */}
        {(popular || premium) && (
          <div className={cn(
            "absolute inset-0 opacity-5",
            popular ? "bg-gradient-to-br from-emerald-500 to-emerald-600" : "",
            premium ? "bg-gradient-to-br from-amber-500 to-amber-600" : ""
          )} />
        )}

        <CardHeader className="text-center pt-8 pb-6 relative z-10">
          {badge && (
            <div className="mb-3">
              <Badge variant="secondary" className="text-xs px-3 py-1">
                {badge}
              </Badge>
            </div>
          )}
          
          <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
            {name}
          </CardTitle>
          
          <CardDescription className="text-slate-600 text-base leading-relaxed">
            {description}
          </CardDescription>
          
          {/* Pricing Display */}
          <div className="mt-6 space-y-3">
            <div className="flex items-baseline justify-center">
              <span className="text-5xl font-bold text-slate-900">
                {price.currency}{price.monthly}
              </span>
              <span className="text-slate-500 ml-2 text-lg">/mois</span>
            </div>
            
            {/* Annual/Bundle Pricing */}
            {(price.annual || price.bundle) && (
              <div className="space-y-2">
                {price.annual && (
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm text-slate-400 line-through">
                      {price.currency}{Math.round(price.monthly * 12)}/an
                    </span>
                    <span className="text-lg font-semibold text-emerald-600">
                      {price.currency}{price.annual}/an
                    </span>
                  </div>
                )}
                {price.bundle && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                    <div className="text-sm font-medium text-emerald-800">
                      Programme complet: {price.currency}{price.bundle}
                    </div>
                    <div className="text-xs text-emerald-600">
                      Payé en une fois • Économie de 11%
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Sessions Info */}
            {sessions && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mt-4">
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-slate-600" />
                    <span className="font-medium">{sessions.count} sessions</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-slate-600" />
                    <span>{sessions.duration} chacune</span>
                  </div>
                </div>
                <div className="text-center text-xs text-slate-500 mt-1">
                  {sessions.frequency}
                </div>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-6 relative z-10 px-8 pb-10">
          {/* Features List */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-emerald-600" />
                </div>
                <span className="text-sm text-slate-700 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={() => onSelect(id)}
              size="lg"
              className={cn(
                "w-full h-12 font-semibold transition-all duration-200",
                popular && "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg",
                premium && "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg",
                !popular && !premium && "border-2 border-slate-300 hover:bg-slate-50"
              )}
              variant={popular || premium ? "default" : "outline"}
            >
              {popular && <Zap className="h-4 w-4 mr-2" />}
              {premium && <Crown className="h-4 w-4 mr-2" />}
              {buttonText}
            </Button>
          </div>

          {/* Contact Option */}
          <div className="text-center pt-2">
            <button className="text-sm text-slate-500 hover:text-slate-700 transition-colors flex items-center justify-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>Besoin d&apos;aide ? Contactez-nous</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}