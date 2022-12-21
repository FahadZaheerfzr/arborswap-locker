import { ChainId } from '@usedapp/core'
import { isAddress } from 'ethers/lib/utils'
import { MULTICALL_ADDRESS, RPC_ADDRESS } from '../config/constants/address'
import ERC20Abi from '../config/abi/ERC20.json'
import PairAbi from '../config/abi/Pair.json'
import { ethers, BigNumber as BN } from 'ethers'
import { Contract, Provider, setMulticallAddress } from 'ethers-multicall'
import { parseEther, parseUnits } from 'ethers/lib/utils'

const CHAIN_NUMBER = 159

export const getTokenBalance = async (account, address) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()

  const tokenContract = new Contract(address, ERC20Abi)
  let calls = []
  try {
    calls.push(tokenContract.balanceOf(account))

    const [balance] = await ethcallProvider.all(calls)
    return balance.toString()
  } catch (error) {
    return '0'
  }
}
