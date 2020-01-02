import React, { useCallback } from 'react'

/**
 * @type {React.StatelessComponent<React.AllHTMLAttributes>}
 */
const WrapperWithPropsPassThrough = ({ children, ...rest }) => {
  const Children = useCallback(
    () =>
      React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...rest,
        })
      }),
    [rest, children],
  )
  return <Children />
}

export default WrapperWithPropsPassThrough
