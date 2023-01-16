export function throttle(fn: () => void, wait: number) {
  let lastTime = 0
  return function (...args: any) {
    const currentTime = new Date().getTime()
    if (currentTime - lastTime > wait) {
      lastTime = currentTime
      fn.apply(this, args)
    }
  }
}
