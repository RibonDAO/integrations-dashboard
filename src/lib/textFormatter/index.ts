export function formatTrend(value: number){
    if(value) return `${Math.abs(value)}%`

    return  "-";
}