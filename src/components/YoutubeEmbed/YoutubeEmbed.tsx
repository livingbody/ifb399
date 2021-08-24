import * as React from 'react'

const YoutubeEmbed = ({ embedId }: { embedId: string }) => {
  return (
    <div className='w-full h-96'>
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  )
}
export default YoutubeEmbed
