import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>PROJECT</title>
      </Helmet>
      <Route exact path={['/@:username', '/']} component={PostListPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/write" component={WritePage} />
      <Route exact path="/@:username/:postId" component={PostPage} />
    </>
  );
}

export default App;
