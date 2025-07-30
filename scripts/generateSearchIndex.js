import fs from 'fs'
import path from 'path'

const DOCS_PATH = path.join(process.cwd(), 'src/app/documentation')
const OUTPUT_PATH = path.join(process.cwd(), 'public/searchIndex.json')

function extractJSXText(raw) {
  const jsxTextRegex = />([^<>{}]+)</g
  const matches = [...raw.matchAll(jsxTextRegex)].map(m => m[1].trim()).filter(Boolean)
  return matches.join(' ')
}

function getAllDocs(dir, query = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  let results = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      results = results.concat(getAllDocs(fullPath, query))
    } else if (
      entry.isFile() &&
      (entry.name === 'page.tsx' || entry.name === 'index.tsx' || entry.name.startsWith('[')) &&
      !fullPath.includes('/components/')
    ) {
      const raw = fs.readFileSync(fullPath, 'utf-8')
      const content = extractJSXText(raw)

      const relativePath = fullPath
        .replace(DOCS_PATH, '')
        .replace(/\\/g, '/')
        .replace('/page.tsx', '')
        .replace('.tsx', '')

      const titleMatch = raw.match(/<h1.*?>(.*?)<\/h1>/i)
      const title = titleMatch?.[1]?.trim() || relativePath.split('/').pop() || 'Untitled'

      let anchors = []
      const headingRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi
      let match

      while ((match = headingRegex.exec(raw)) !== null) {
        const headingText = match[1].toLowerCase().trim()
        const anchor = headingText.replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
        if (anchor && !anchors.includes(anchor)) anchors.push(anchor)
      }

      results.push({
        title,
        content,
        path: `/documentation${relativePath}`,
        anchors
      })
    }
  }

  return results
}

const docs = getAllDocs(DOCS_PATH)
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(docs, null, 2))
