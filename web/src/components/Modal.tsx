import { ReactNode } from "react"

interface ModalProps {
  children: ReactNode
  visible: boolean
  setModalVisible: (visible: boolean) => void
}

function Modal(props: ModalProps) {
  const { children, visible, setModalVisible } = props
  const transform = { transform: "translateY(100%)" }

  return (
    <div
      className={`fixed z-100 bottom-0 left-0 right-0 top-0 ${visible ? "" : "pointer-events-none"
        }`}
    >
      <div
        className={`bg-gray-3 dark:bg-gray-7 left-0 right-0 top-0 bottom-0 absolute transition-opacity duration-500 ease-out ${visible ? "opacity-60" : "opacity-0"
          }`}
        onClick={() => setModalVisible(false)}
      />

      <div
        className={`bg-gray-3 dark:bg-gray-7 absolute bottom-0 left-0 right-0 p5 b-rd-3 transition-all duration-200 ease-out max-w-screen max-h-65vh overflow-auto scrolls`}
        style={visible ? {} : transform}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
