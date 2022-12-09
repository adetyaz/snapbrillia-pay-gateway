import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWallet } from '@martifylabs/mesh-react'
import { CardanoWallet } from '@martifylabs/mesh-react'
import { useState } from 'react'

export default function Home() {
	const { connected, wallet } = useWallet()
	const [assets, setAssets] = useState<null | any>(null)
	const [loading, setLoading] = useState<boolean>(false)

	async function getAssets() {
		if (wallet) {
			setLoading(true)
			const _assets = await wallet.getAssets()
			setLoading(false)
		}
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Snabrillia Pay Gateway</title>
				<meta name='description' content='Snabrillia Cardano Hackathon 2022' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1>Connect Wallet</h1>
			<CardanoWallet />

			{connected && (
				<>
					<h1>Get Wallet Assets</h1>
					{assets ? (
						<pre>
							<code className='language-js'>
								{JSON.stringify(assets, null, 2)}
							</code>
						</pre>
					) : (
						<button
							type='button'
							onClick={() => getAssets()}
							disabled={loading}
							style={{
								margin: '8px',
								backgroundColor: loading ? 'orange' : 'grey',
							}}
						>
							Get Wallet Assets
						</button>
					)}
				</>
			)}
		</div>
	)
}
