import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
    fetcher
  );

  if (error) return <div>Failed to load price</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Bitcoin Price</h1>
      <p>USD {data.bitcoin.usd}</p>
    </main>
  );
}
