import Transition from './components/Transition';
import type { AppProps } from 'next/app'
 
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
		<Transition>
			<Component {...pageProps} />
		</Transition>
	);
}