import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const CheckinList = React.lazy(() => import('./views/checkins/CheckinList'))
const NewCheckin = React.lazy(() => import('./views/checkins/NewCheckin'))

const CheckoutsList = React.lazy(() => import('./views/checkouts/CheckoutsList'))
const NewCheckouts = React.lazy(() => import('./views/checkouts/NewCheckouts'))

const Adjustments = React.lazy(() => import('./views/adjustments/Adjustments'))
const NewAdjustments = React.lazy(() => import('./views/adjustments/NewAdjustments'))

const Transfers = React.lazy(() => import('./views/transfers/Transfers'))
const NewTransfers = React.lazy(() => import('./views/transfers/NewTransfers'))

const ProductsList = React.lazy(() => import('./views/product/ProductsList'))
const NewIProduct = React.lazy(() => import('./views/product/NewIProduct'))
const ImportProduct = React.lazy(() => import('./views/product/ImportProduct'))

const WarehousesList = React.lazy(() => import('./views/warehouses/WarehousesList'))
const NewWarehouses = React.lazy(() => import('./views/warehouses/NewWarehouses'))
const ImportWarehouses = React.lazy(() => import('./views/warehouses/ImportWarehouses'))

const UnitList = React.lazy(() => import('./views/units/UnitList'))
const NewUnit = React.lazy(() => import('./views/units/NewUnit'))
const ImportUnit = React.lazy(() => import('./views/units/ImportUnit'))

const InvoiceList = React.lazy(() => import('./views/invoice/InvoiceList'))
const NewInvoice = React.lazy(() => import('./views/invoice/NewInvoice'))
const ImportInvoice = React.lazy(() => import('./views/invoice/ImportInvoice'))

const InventryList = React.lazy(() => import('./views/inventry/InventryList'))
const NewInventry = React.lazy(() => import('./views/inventry/NewInventry'))

const LocalMarket = React.lazy(() => import('./views/purchase/LocalMarket'))
const ImportPurchase = React.lazy(() => import('./views/purchase/ImportPurchase'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/checkins/checkin-list', name: 'Checkin List', element: CheckinList },
  { path: '/checkins/new-checkin', name: 'New Checkin', element: NewCheckin },

  { path: '/checkouts/checkouts-list', name: 'Checkouts List', element: CheckoutsList },
  { path: '/checkouts/new-checkouts', name: 'New checkouts', element: NewCheckouts },

  { path: '/adjustments/adjustments', name: 'Adjustments', element: Adjustments },
  { path: '/adjustments/new-adjustments', name: 'New Adjustments', element: NewAdjustments },

  { path: '/transfers', name: 'Transfers', element: Transfers },
  { path: '/transfers/transfers', name: 'Transfers', element: Transfers },
  { path: '/transfers/new-transfers', name: 'New Transfers', element: NewTransfers },

  { path: '/product/product-list', name: 'List All Items', element: ProductsList },
  { path: '/product/new-product', name: 'Create New Items', element: NewIProduct },
  { path: '/product/import-product', name: 'Import Items', element: ImportProduct },

  { path: '/warehouses/warehouses-list', name: 'List All Warehouses', element: WarehousesList },
  { path: '/warehouses/new-warehouses', name: 'Create New Warehouses', element: NewWarehouses },
  { path: '/warehouses/import-warehouses', name: 'Import Warehouses', element: ImportWarehouses },

  { path: '/unit/unit-list', name: 'List All Unit', element: UnitList },
  { path: '/unit/new-unit', name: 'Create New Unit', element: NewUnit },
  { path: '/unit/import-unit', name: 'Import Unit', element: ImportUnit },

  { path: '/invoice/invoice-list', name: 'List All Invoice', element: InvoiceList },
  { path: '/invoice/new-invoice', name: 'Create New Invoice', element: NewInvoice },
  { path: '/invoice/import-invoice', name: 'Import Invoice', element: ImportInvoice },

  { path: '/inventry/new-inventry', name: 'Create New Inventry', element: NewInventry },
  { path: '/inventry/inventry-list', name: 'List of Inventry', element: InventryList },
  { path: '/inventry/import-inventry', name: 'Import Inventry', element: NewInventry },

  { path: '/purchase/local-market', name: 'Local Market', element: LocalMarket },
  { path: '/purchase/import-purchase', name: 'Local Market', element: ImportPurchase },

]

export default routes
