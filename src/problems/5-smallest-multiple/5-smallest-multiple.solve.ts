import { measure } from '../../measure.solve'
import { naturalNumbersUntil } from '../../helps/naturalNumbersUntil'
import { smallestMultiple } from './5-smallest-multiple'

measure(smallestMultiple)(naturalNumbersUntil(20))