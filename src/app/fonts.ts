import { Bebas_Neue, Outfit } from 'next/font/google'

export const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300','400','500','600','700','800'],
  
})

