
export function formatTimestamp(timeStampMs: number): string {
    const date    = new Date(timeStampMs)
    const hours   = date.getHours().toString()
    const minutes = date.getMinutes().toString().padStart(2,'0') 
    const day     = date.getDay().toString()
    const month   = (date.getMonth() + 1).toString()
    const year    = date.getFullYear()
    return `${hours}:${minutes} ${day}-${month}-${year}`
} 
