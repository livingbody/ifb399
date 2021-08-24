import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import BaseActionBar from '../../components/BaseActionBar/BaseActionBar'
import BaseLayout from '../../components/layout/BaseLayout'
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed'
import AttachmentsSection from '../../components/AttachmentsSection/AttachmentsSection'
import BaseUserInfoBar from '../../components/BaseUserInfoBar/BaseUserInfoBar'
import Comment from '../../components/Comment/Comment'
import topImg from '../../static/top.png'

const body =
  'The binary number system plays a central role in how information of all kinds is stored on computers. ' +
  'Understanding binary helps to unravel the mystery of computers, as students begin to understand that ' +
  'binary digits represent on and off. Binary cards can be used to introduce the binary number system. Students' +
  ' can see the connection between binary digits represented as dots and the corresponding decimal number. When ' +
  'cards are placed in sequence students can create a binary number displaying cards as on or off. Students explain ' +
  'how a standard system of encoding is used to represent numbers, text and other special characters. '

const Detail = () => {
  const title = 'UNIT BINARY NUMBERS'

  return (
    <BaseLayout>
      <div className='bg-white p-6 space-y-6'>
        <img className='rounded-md' src={topImg} alt='#' />
        <div className='text-3xl font-bold'>{title}</div>
        <BaseUserInfoBar />
        <BaseActionBar />
        <YoutubeEmbed embedId='LpuPe81bc2w' />
        <ReactMarkdown children={body} />
        <AttachmentsSection />
        <Comment />
      </div>
    </BaseLayout>
  )
}

export default Detail
