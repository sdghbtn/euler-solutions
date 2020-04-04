import { measure } from '../../measure.solve'
import { buildArray } from '../../helps/buildArray'
import { smallestMultiple } from './5-smallest-multiple'

measure(smallestMultiple)(buildArray(20))