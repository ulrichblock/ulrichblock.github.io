import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { ShareBlockStandard, ShareButtonIconOnly } from 'react-custom-share'
import React from 'react'

interface IProps {
  url: string
  title: string
  siteName: string
}

export const CustomShareBlock = ({ url, title, siteName }: IProps): JSX.Element => {
  const shareBlockProps = {
    button: ShareButtonIconOnly,
    buttons: [
      { icon: FaTwitter, network: 'Twitter' },
      { icon: FaFacebook, network: 'Facebook' },
      { icon: FaLinkedin, network: 'Linkedin' },
      { icon: FaEnvelope, network: 'Email' }
    ],
    longtext: siteName,
    text: title,
    url: url
  }
  return (
    <div className="mt-4">
      <ShareBlockStandard {...shareBlockProps} />
    </div>
  )
}
