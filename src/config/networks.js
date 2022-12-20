// import { BSC, BSCTestnet } from '@usedapp/core'
import { RbaChain } from './constants/chain'

export const networkConfig = {
  readOnlyChainId: RbaChain.chainId,
  readOnlyUrls: {
    [RbaChain.chainId]: RbaChain.rpcUrl,
    // [BSC.chainId]: BSC.rpcUrl,
    // [BSCTestnet.chainId]: BSCTestnet.rpcUrl,
  },
}
