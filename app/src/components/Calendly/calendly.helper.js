export function isCalendlyEvent(e) {
  return e.data.event && e.data.event.indexOf('calendly') === 0
}
