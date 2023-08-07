import dayjs from 'dayjs'

export function formatTime(utcString: string, format: string = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(utcString).format(format)
}
