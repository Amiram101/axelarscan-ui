import { combineReducers } from 'redux'

import preferences from './preferences'
import chains from './chains'
import assets from './assets'
import contracts from './contracts'
import ens from './ens'
import lens from './lens'
import spaceid from './spaceid'
import unstoppable from './unstoppable'
import accounts from './accounts'
import chain from './chain'
import status from './status'
import maintainers from './maintainers'
import tvl from './tvl'
import validators from './validators'
import profiles from './profiles'
import wallet from './wallet'
import web3 from './web3'

export default combineReducers({
  preferences,
  chains,
  assets,
  contracts,
  ens,
  lens,
  spaceid,
  unstoppable,
  accounts,
  chain,
  status,
  maintainers,
  tvl,
  validators,
  profiles,
  wallet,
  web3,
})