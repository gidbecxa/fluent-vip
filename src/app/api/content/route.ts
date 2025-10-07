import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const track = searchParams.get('track')
  const sessionId = searchParams.get('sessionId')
  const type = searchParams.get('type') || 'session'

  if (!track) {
    return NextResponse.json({ error: 'Track parameter is required' }, { status: 400 })
  }

  try {
    let filePath: string

    if (type === 'metadata') {
      filePath = join(process.cwd(), 'public', 'content', 'tracks', track, 'metadata.json')
    } else if (type === 'session' && sessionId) {
      filePath = join(process.cwd(), 'public', 'content', 'tracks', track, 'sessions', `session-${sessionId}.json`)
    } else if (type === 'quiz' && sessionId) {
      filePath = join(process.cwd(), 'public', 'content', 'tracks', track, 'quizzes', `session-${sessionId}-quiz.json`)
    } else {
      return NextResponse.json({ error: 'Invalid request parameters' }, { status: 400 })
    }

    const fileContent = await readFile(filePath, 'utf-8')
    const jsonContent = JSON.parse(fileContent)

    return NextResponse.json(jsonContent)
  } catch (error) {
    console.error('Error reading content file:', error)
    return NextResponse.json({ error: 'Content not found' }, { status: 404 })
  }
}

export async function POST(request: NextRequest) {
  // For future content management features
  return NextResponse.json({ error: 'Not implemented' }, { status: 501 })
}