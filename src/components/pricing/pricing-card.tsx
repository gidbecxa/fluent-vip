"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PricingFeature {
  text: string
  included: boolean
  highlight?: boolean
}

interface PricingCardProps {
  title: string
  description: string
  price: {
    monthly: number
    annual?: number
    currency: string
  }
  features: PricingFeature[]
  popular?: boolean
  premium?: boolean
  buttonText: string
  buttonVariant?: "default" | "outline" | "secondary"
  onSelect: () => void
  badge?: string
  savings?: string
  className?: string
}

export function PricingCard({
  title,
  description,
  price,
  features,
  popular = false,
  premium = false,
  buttonText,
  buttonVariant = "default",
  onSelect,
  badge,
  savings,
  className
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("relative", className)}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 text-sm font-semibold">
            <Star className="h-3 w-3 mr-1" />
            Plus Populaire
          </Badge>
        </div>
      )}
      
      {premium && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 text-sm font-semibold">
            <Crown className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        </div>
      )}

      <Card className={cn(
        "h-full transition-all duration-300 hover:shadow-2xl border-2",
        popular ? "border-emerald-200 shadow-lg scale-105" : "border-slate-200",
        premium ? "border-amber-200 shadow-lg" : "",
        "bg-white/80 backdrop-blur-sm"
      )}>
        <CardHeader className="text-center pb-4">
          {badge && (
            <div className="mb-2">
              <Badge variant="secondary" className="text-xs">
                {badge}
              </Badge>
            </div>
          )}
          
          <CardTitle className="text-2xl font-bold text-slate-900">
            {title}
          </CardTitle>
          
          <CardDescription className="text-slate-600 mt-2">
            {description}
          </CardDescription>
          
          <div className="mt-6">
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold text-slate-900">
                {price.currency}{price.monthly}
              </span>
              <span className="text-slate-500 ml-1">/mois</span>
            </div>
            
            {price.annual && (
              <div className="mt-2">
                <div className="text-sm text-slate-500 line-through">
                  {price.currency}{price.annual}/an
                </div>
                {savings && (
                  <div className="text-sm font-medium text-emerald-600">
                    {savings}
                  </div>
                )}
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start space-x-3",
                  !feature.included && "opacity-50"
                )}
              >
                <div className={cn(
                  "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                  feature.included 
                    ? feature.highlight 
                      ? "bg-emerald-100" 
                      : "bg-emerald-50"
                    : "bg-slate-100"
                )}>
                  <Check className={cn(
                    "h-3 w-3",
                    feature.included 
                      ? feature.highlight 
                        ? "text-emerald-600" 
                        : "text-emerald-500"
                      : "text-slate-400"
                  )} />
                </div>
                <span className={cn(
                  "text-sm leading-relaxed",
                  feature.highlight ? "font-medium text-slate-900" : "text-slate-700",
                  !feature.included && "text-slate-400"
                )}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Button
              onClick={onSelect}
              variant={buttonVariant}
              size="lg"
              className={cn(
                "w-full h-12 font-semibold transition-all duration-200",
                popular && "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white",
                premium && "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
              )}
            >
              {popular && <Zap className="h-4 w-4 mr-2" />}
              {buttonText}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}