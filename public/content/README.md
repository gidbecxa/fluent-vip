# FluentVIP Content Management System

This directory contains all educational content separated from the application code, following production-grade EdTech platform standards.

## Directory Structure

```
content/
├── tracks/
│   ├── executive/
│   │   ├── sessions/
│   │   ├── metadata.json
│   │   └── curriculum.json
│   └── regular/
│       ├── sessions/
│       ├── metadata.json
│       └── curriculum.json
├── shared/
│   ├── audio/
│   ├── images/
│   ├── videos/
│   └── documents/
├── schemas/
│   ├── session.schema.json
│   ├── dialogue.schema.json
│   └── activity.schema.json
└── locales/
    ├── fr/
    └── en/
```

## Content Types

### 1. Session Content
- **Key Phrases**: English text, pronunciation, context, audio files
- **Dialogues**: Multi-speaker conversations with translations
- **Activities**: Role-play scenarios, interactive exercises
- **Grammar Rules**: Structured explanations with examples
- **Cultural Notes**: Context and tips for learners

### 2. Track Metadata
- Learning objectives
- Prerequisites
- Duration estimates
- Difficulty progression

### 3. Multimedia Assets
- Audio files for pronunciation
- Images for visual learning
- Video content for flipped classroom
- Interactive media

## Benefits

1. **Maintainability**: Content updates don't require code changes
2. **Scalability**: Easy to add new languages, tracks, or content types
3. **Collaboration**: Content creators can work independently of developers
4. **Version Control**: Track content changes separately from code
5. **Localization**: Support for multiple languages and regions
6. **Performance**: Content can be cached and optimized independently

## Usage

Content is loaded dynamically by the application using a content management API that validates against JSON schemas and provides type-safe access to educational materials.