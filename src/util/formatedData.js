import {format} from 'date-fns'

const now = new Date();

export const hour = format(now,'HH');
export const minutes = format(now,'mm')

export const day = format(now,'dd');
export const dayWeek = format(now,'EEEE')
export const month = format(now,'MMMM')
export const year = format(now,'yyyy')
