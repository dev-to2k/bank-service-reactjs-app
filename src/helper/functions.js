export function handleAuthError(error) {
  let errMessage = error?.code?.replace(/.*\//, '')?.replace(/-/g, ' ') || ''

  errMessage = errMessage.charAt(0).toUpperCase() + errMessage.slice(1)

  return errMessage
}

export function isEmpty(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false
    }
  }

  return true
}
