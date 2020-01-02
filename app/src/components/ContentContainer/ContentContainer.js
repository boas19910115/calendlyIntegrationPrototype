import React, { useCallback } from 'react'

/**
 * @type {React.StatelessComponent<React.AllHTMLAttributes>}
 */
const ContentContainer = ({ children, ...rest }) => {
  const Children = useCallback(
    () =>
      React.Children.map(children, child => {
        return React.cloneElement(child)
      }),
    [children],
  )
  return (
    <div className='ContentContainer' {...rest}>
      <Children />
    </div>
  )
}

export default ContentContainer
