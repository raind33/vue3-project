export function useMove (cb, state) {
  let startX, startY, disX, disY
  let flag = false
  const handleMouseDown = (e) => {
    flag = true
    startX = e.clientX
    startY = e.clientY
  }
  const handleMouseMove = (e) => {
    if (!flag) return
    disX = e.clientX - startX
    disY = e.clientY - startY
    // eslint-disable-next-line standard/no-callback-literal
    cb(state.lastX + disX, state.lastY + disY)
  }
  const handleMouseUp = (e) => {
    state.lastX += disX
    state.lastY += disY
    flag = false
  }
  const handleMouseLeave = (e) => {
    if (flag) {
      state.lastX += disX
      state.lastY += disY
    }
    flag = false
  }

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave
  }
}
