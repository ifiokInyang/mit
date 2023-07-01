import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { override } from "./utils/CSSProps/CssProps";
import ClipLoader from "react-spinners/ClipLoader";
import Announcement from "./component/Announcement/Announcement";
import Navbar from "./component/Navbar/Navbar";
import AppRoutes from "./Approutes";

const Footer = React.lazy(
	async () => await import("./component/Footer/Footer")
);

function App() {
	return (
		<BrowserRouter>
			<Suspense
				fallback={
					<div>
						<Announcement />
						<Navbar />
						<ClipLoader
							color={"blue"}
							loading={true}
							cssOverride={override}
							size={100}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					</div>
				}
			>
				<AppRoutes />
				<React.Suspense fallback={null}>
					<Footer />
				</React.Suspense>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
