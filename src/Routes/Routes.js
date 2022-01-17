import Home from '../Pages/Home/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Home,
  },
  {
    path: '/test',
    name: 'test',
    exact: false,
    component: Home,
  }
]

export default routes