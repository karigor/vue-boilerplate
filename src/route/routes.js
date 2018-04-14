import {
  createLayout,
  createRoute
} from '@/helpers/importer'

const views = [
  createRoute('/', 'Home')
]

export const routes = [
  // Base Layout
  createLayout('/', 'base', views),
  // 404 page
  createRoute('*', '404')
]
