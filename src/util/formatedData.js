export const now = new Date();

export const monthName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
export const dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

export const hour = now.getHours();
export const minutes = now.getMinutes()

export const day = now.getDate();
export const dayWeek = dayName[now.getDay()]
export const month = monthName[now.getMonth()]
export const year = now.getFullYear();
