export function getElement (id) {
  if (!id) return new Error('getElement: no id')
  return document.getElementById(id)
}

export function setHTML (elem, content) {
  if (!elem) throw new Error('setHTML: no such element')
  elem.innerHTML = content
}

export function clearHTML (elem) {
  if (!elem) throw new Error('clearHTML: no such element')
  setHTML(elem, '')
}

export function addEventListener (elem, event, handler) {
  if (!elem) throw new Error('addEventListener: no such element')
  if (!event) throw new Error('addEventListener: no event provided')
  if (!handler) throw new Error('addEventListener: no handler provided')

  elem.addEventListener(event, handler)
}

export function createElem (tag = 'div', className, text = '') {
  const classes = (className) ? `class="${className}` : ''
  return `<${tag} ${classes}">${text}</${tag}>`
}
