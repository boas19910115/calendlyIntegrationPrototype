import React, { useCallback } from 'react'
import Axios from 'axios'

const CalendlyContainer = () => {
  // Axios.get('http://localhost:3000/testbackoffice/api/calendly/iframe').then(
  //   e => {
  //     console.log(e)

  //     document.getElementById('fff').innerHTML = e.data
  //   },
  // )
  const handleIframeOnLoad = useCallback(
    /**
     * @param {object} props
     * @param {HTMLIFrameElement} props.target
     */
    ({ target }) => {
      const {
        ownerDocument,
        contentEditable,
        textContent,
        contentWindow,
        contentDocument,
      } = target

      // console.log(ownerDocument.head)
      // console.log(ownerDocument.body)
      // console.log('contentEditable', contentEditable)
      // console.log('textContent', textContent)
      // console.log('contentWindow', contentWindow)
      // console.log('contentDocument', contentDocument)

      const aBrading = ownerDocument.querySelector('a.branding')

      console.log(aBrading)
      ownerDocument.addEventListener('load', () => {})
    },
    [],
  )

  return (
    <div id='fff' className='CalendlyContainer'>
      <iframe
        onLoad={handleIframeOnLoad}
        title='Calendly'
        src='https://calendly.com/yuehnan-wu/body-scan-event'
        // src='http://localhost:3000/testbackoffice/api/calendly/iframe'
      />
    </div>
  )
}

export default CalendlyContainer
