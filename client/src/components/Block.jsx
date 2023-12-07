
import { Navbar, Footerr, Transactions, Welcome, Features} from '../components';
import Chat from '../components/ChatIcon';

const Block = () => (
  <div>
      <Navbar />  
      <Chat />
      <Welcome />
      <Features />
      <Transactions />
      <Footerr />
  </div>
  
);

export default Block;