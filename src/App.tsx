import { useRoutes } from 'react-router-dom';
import router from './router';
import ThemeProvider from './theme/ThemeProvider';
function App() {
  const content = useRoutes(router);
  return (
    <ThemeProvider>
      {content}
    </ThemeProvider>
  );
}
export default App;
