import * as React from 'react'

const GithubSVG = (props) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={20} height={20} rx={6} fill={props.outer} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.746 4.167c-1.522 0-2.995.54-4.155 1.522a6.349 6.349 0 0 0-1.332 8.158 6.41 6.41 0 0 0 3.459 2.75c.318.06.438-.138.438-.306 0-.168-.006-.655-.008-1.188-1.785.386-2.162-.752-2.162-.752-.29-.74-.712-.934-.712-.934-.582-.395.044-.388.044-.388.645.046.984.658.984.658.571.975 1.5.693 1.866.528.057-.413.224-.694.408-.853-1.426-.16-2.923-.708-2.923-3.152a2.462 2.462 0 0 1 .66-1.712c-.066-.16-.285-.809.063-1.69 0 0 .539-.17 1.764.654a6.122 6.122 0 0 1 3.212 0c1.225-.825 1.763-.654 1.763-.654.35.88.13 1.528.063 1.69.435.466.672 1.08.662 1.715 0 2.449-1.5 2.988-2.928 3.146.229.198.434.586.434 1.182 0 .853-.007 1.54-.007 1.75 0 .17.115.368.44.306a6.408 6.408 0 0 0 3.459-2.75 6.349 6.349 0 0 0-1.333-8.16 6.438 6.438 0 0 0-4.157-1.52h-.002Z"
      fill={props.inner}
    />
    <path
      d="M5.761 13.325c-.014.032-.065.042-.106.02-.042-.023-.072-.064-.057-.097.014-.033.064-.041.106-.019.041.022.073.065.057.096ZM6.02 13.614a.107.107 0 0 1-.131-.03c-.041-.044-.05-.106-.018-.133.032-.027.09-.015.13.03.042.044.052.105.02.133ZM6.274 13.98c-.04.027-.107 0-.144-.055a.105.105 0 0 1 0-.152c.04-.026.106 0 .144.054.037.054.038.126 0 .153ZM6.617 14.335c-.035.039-.106.028-.164-.025-.059-.052-.073-.124-.037-.162.035-.038.106-.028.166.024.06.052.073.125.035.163ZM7.1 14.541c-.017.05-.09.072-.161.051-.073-.021-.12-.08-.107-.13.014-.052.088-.075.16-.052.074.024.12.08.107.131ZM7.623 14.577c0 .052-.06.096-.136.098-.077 0-.14-.042-.14-.093 0-.052.06-.097.137-.098.076 0 .139.04.139.093ZM8.112 14.496c.01.051-.044.105-.12.118-.077.013-.143-.018-.153-.069-.01-.05.046-.105.12-.119.074-.014.143.018.153.07Z"
      fill={props.inner}
    />
  </svg>
)

export default GithubSVG
