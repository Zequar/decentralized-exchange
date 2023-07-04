import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import config from '../config.json'

import {
  loadProvider,
  loadNetwork,
  loadAccount,
  loadTokens,
  loadExchange
} from '../store/interactions';


function App() {

  const dispatch = useDispatch()

  const loadBlockchainData = async () => {

    // Connect ethers to blockchain
    const provider = loadProvider(dispatch)

    // Fetch current network chainId
    const chainId = await loadNetwork(provider, dispatch)
    
    // Fetch current account & balance from MetaMask
    await loadAccount(provider, dispatch)

    // Token smart contract
    const ZeqToken = config[chainId].ZeqToken
    const mETH = config[chainId].mETH
    await loadTokens(provider, [ZeqToken.address, mETH.address], dispatch)

    // Load Exchange
    const exchangeConfig = config[chainId].exchange
    await loadExchange(provider, exchangeConfig.address, dispatch)
  }

  useEffect(() => {
    loadBlockchainData()
  })


  return (
    <div>

      {/* Navbar */}

      <main className='exchange grid'>
        <section className='exchange__section--left grid'>

          {/* Markets */}

          {/* Balance */}

          {/* Order */}

        </section>
        <section className='exchange__section--right grid'>

          {/* PriceChart */}

          {/* Transactions */}

          {/* Trades */}

          {/* OrderBook */}

        </section>
      </main>

      {/* Alert */}

    </div>
  );
}

export default App;