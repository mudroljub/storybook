import flagCn from './flagCn.png'
import flagUk from './flagUk.png'
import flagEs from './flagEs.png'

export const getFlag = (nation: string) => {
  switch (nation) {
    case 'cn':
      return flagCn
    case 'uk':
      return flagUk
    default:
      return flagEs
  }
}
