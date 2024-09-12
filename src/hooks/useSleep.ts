/**
 * 睡眠
 * @param duration 睡眠时间，毫秒
 * @returns null
 */
function useSleep(duration: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, duration)
  })
}
export default useSleep
