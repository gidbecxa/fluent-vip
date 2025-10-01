"use client"

import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, RotateCcw } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface AudioPlayerProps {
  src: string
  className?: string
}

export function AudioPlayer({ src, className = "" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !src) return
    
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedData = () => setIsLoaded(true)
    const handleEnded = () => setIsPlaying(false)
    const handleError = () => {
      setIsLoaded(false)
      setIsPlaying(false)
    }

    audio.addEventListener('loadeddata', handleLoadedData)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [isMounted, src])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  const replay = () => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    audio.currentTime = 0
    audio.play()
    setIsPlaying(true)
  }

  if (!isMounted || !src) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Button
          variant="outline"
          size="sm"
          disabled
          className="min-w-[44px]"
        >
          <Volume2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          disabled
          className="min-w-[44px]"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
      />
      
      <Button
        variant="outline"
        size="sm"
        onClick={togglePlay}
        disabled={!isLoaded}
        className="min-w-[44px]"
      >
        {isLoaded ? (
          isPlaying ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )
        ) : (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
        )}
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={replay}
        disabled={!isLoaded}
        className="min-w-[44px]"
      >
        <RotateCcw className="h-4 w-4" />
      </Button>
    </div>
  )
}