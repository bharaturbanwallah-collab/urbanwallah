import { useEffect } from 'react'
import './PageTurn.css'

const PageTurn = ({ from, to, isActive, onComplete }) => {
  useEffect(() => {
    if (!isActive) return

    const timer = setTimeout(() => {
      onComplete()
    }, 900)

    return () => clearTimeout(timer)
  }, [isActive, onComplete])

  if (!isActive) return null

  return (
    <div className="page-turn-stage">
      {/* BACK PAGE (NEXT) */}
      <div className="page back">
      </div>
      {/* FRONT PAGE (CURRENT TURNING) */}
      <div className="page front turn">
        {from}
      </div>
    </div>
  )
}

export default PageTurn
