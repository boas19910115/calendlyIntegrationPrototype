import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { openPopupAction, closePopupAction } from 'reduxStore/actions'

const usePopup = () => {
  const dp = useDispatch()
  const actions = useMemo(
    () => ({
      openPop: (content = 'none') => {
        dp(openPopupAction({ content }))
      },
      closePop: () => {
        dp(closePopupAction())
      },
    }),
    [dp],
  )

  return actions
}

export default usePopup
