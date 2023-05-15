import Daftar from '../views/pages/daftar';
import Detail from '../views/pages/detail';

const routes = {
  '/': Daftar, // default page
  '/daftar': Daftar,
  '/detail:id': Detail,
};

export default routes;
