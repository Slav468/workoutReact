import { useState } from 'react';
import Layout from '../../layout/Layout';
function Home() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className='Home'>
        <h1>Vite + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
