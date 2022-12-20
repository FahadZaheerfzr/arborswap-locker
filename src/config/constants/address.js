import { BSC, BSCTestnet } from '@usedapp/core'
import { RbaChain } from './chain'

export const MULTICALL_ADDRESS = {
  [BSC.chainId]: BSC.multicallAddress,
  [BSCTestnet.chainId]: BSCTestnet.multicallAddress,
  [RbaChain.chainId]: RbaChain.multicallAddress,
}

export const RPC_ADDRESS = {
  [BSCTestnet.chainId]: 'https://rpc.ankr.com/bsc_testnet_chapel',
  159: 'https://preseed-testnet-1.roburna.com/',
}

// const MULTICALL_ADDRESS = {
//   [ChainId.BSCTestnet]: "0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576",
//   159: "0x4e1845Ab1d9D464150777a931Ce8FDaaD1cf8229",
// }
