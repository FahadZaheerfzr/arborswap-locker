import { BSC, BSCTestnet } from '@usedapp/core'

export const networkConfig = {
  readOnlyChainId: BSCTestnet.chainId,
  readOnlyUrls: {
    [BSC.chainId]: BSC.rpcUrl,
    [BSCTestnet.chainId]: BSCTestnet.rpcUrl,
  },
}
