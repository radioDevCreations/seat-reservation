export default interface SeatProps {
    id: string,
    cords: {
      x: number,
      y: number
    },
    reserved: boolean
}