import { TransactionsProvider } from "../context/TransactionContext";
import { Block } from "../components";
const Main = () => {
	return(
		<div>
			<TransactionsProvider>
				<Block/>
			</TransactionsProvider>
		</div>
	);

};

export default Main;