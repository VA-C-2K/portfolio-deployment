import React from 'react';
import { BsInstagram, BsYoutube, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href='https://www.linkedin.com/in/viraj-agharkar-1232k/'
        target='_blank'
        aria-label='LinkedIn'
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href='https://www.youtube.com/channel/UCB_ZNGblkA5Nx-3UEjPPkfA'
        target='_blank'
        aria-label='YouTube'
        rel="noopener noreferrer"
      >
        <BsYoutube />
      </a>
    </div>
    <div>
      <a
        className='social-icon-link facebook'
        href='https://www.facebook.com/VirAj2K/'
        target='_blank'
        rel="noopener noreferrer"
        aria-label='Facebook'
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href='https://www.instagram.com/vac_2k'
        target='_blank'
        rel="noopener noreferrer"
        aria-label='Instagram'
      >
        <BsInstagram />
      </a>
    </div>
    <div>
      <a
        href='https://github.com/VA-C-2K'
        target='_blank'
        rel="noopener noreferrer"
        aria-label='GitHub'
      >
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;