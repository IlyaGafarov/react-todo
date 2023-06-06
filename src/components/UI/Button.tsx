import style from './Button.module.css'

type ButtonProps = {
  title: string
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button' | undefined
}

export const Button = (props: ButtonProps) => {
  const { children, disabled = false } = props

  return (
    <button {...props} className={style.button} disabled={disabled}>
      {children}
    </button>
  )
}
