import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function CustomEditor({ height }: { height?: number }) {
  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      init={{
        height: height || 400,
        menubar: false,
        width: '100%'
      }}
      initialValue='Welcome to TinyMCE!'
    />
  )
}
