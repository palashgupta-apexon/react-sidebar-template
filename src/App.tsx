import MyRoutes from './routing';
import Favicon from './assets/images/logo.svg';

const App = () => {

	document.title = 'React Sidebar Layout';
	document.querySelector("link[rel~='icon']")!.setAttribute('href', Favicon);
	document.querySelector("meta[name~='theme-color']")!.setAttribute('content', '#dc143c');

	return (
		<MyRoutes></MyRoutes>
	);
}

export default App;
