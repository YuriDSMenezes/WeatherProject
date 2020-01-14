export const now = new Date();

export const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export const hour = now.getHours();
export const minutes = now.getMinutes()

export const day = now.getDate();
export const dayWeek = dayName[now.getDay()]
export const month = monthName[now.getMonth()]
export const year = now.getFullYear();
