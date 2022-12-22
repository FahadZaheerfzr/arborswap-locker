import { ChainId } from '@usedapp/core'
import { isAddress } from 'ethers/lib/utils'
import { FACTORY_ADDRESS, MULTICALL_ADDRESS, RPC_ADDRESS } from '../config/constants/address'
import ERC20Abi from '../config/abi/ERC20.json'
import PairAbi from '../config/abi/Pair.json'
import LockFactoryAbi from '../config/abi/LockFactory.json'
import { ethers, BigNumber as BN } from 'ethers'
import { Contract, Provider, setMulticallAddress } from 'ethers-multicall'

const CHAIN_NUMBER = 97

export const getLockList = async () => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()

  const tokenContract = new Contract(FACTORY_ADDRESS[CHAIN_NUMBER], LockFactoryAbi)
  let calls = []
  try {
    calls.push(tokenContract.getLastTokenLock())
    calls.push(tokenContract.getLastLiquidityLock())

    const [token, liquidity] = await ethcallProvider.all(calls)
    return {
      success: true,
      data: { token, liquidity },
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      data: {},
    }
  }
}
