import React from 'react'
import './Modal.css'

type Props = {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void
}

const NewModal:React.FC<Props> = ({isOpen, children}) => {
    if (!isOpen) return null;

  return (
    <div className="modalBackdrop">
      <div className="modal">
        {children}
      </div>
    </div>
  )
}

export default NewModal