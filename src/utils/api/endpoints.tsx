const endpoints = {
  services: 'client/service/index',
  auth: {
    login: '/auth/user/login',
    register: '/auth/register',
    logout: '/auth/logout',
    me: '/auth/user/me?expand=userProfile'
  },
  user: {
    all: '/users',
    one: '/users/:id'
  },
  category: {
    all: '/categories',
    one: '/categories/:id'
  },
  product: {
    all: '/products',
    one: '/products/:id'
  },
  order: {
    all: '/orders',
    one: '/orders/:id'
  },
  review: {
    all: '/reviews',
    one: '/reviews/:id'
  },
  common: {
    roles: {
      list: '/common/auth-item',
      create: '/common/auth-item/create',
      update: '/common/auth-item/update',
      delete: '/common/auth-item/delete'
    }
  }
}

export default endpoints
