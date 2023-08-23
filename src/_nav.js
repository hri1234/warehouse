import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome,
  cilHeart,
  cilArrowThickFromRight,
  cilArrowThickFromLeft,
  cilEqualizer,
  cilLink,
  cilYen,
  cilSwapHorizontal,
  cilBuilding,
  cilNotes,
  cilObjectGroup
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },

  // {
  //   component: CNavGroup,
  //   name: 'Checkins',
  //   to: '/checkins',
  //   icon: <CIcon icon={cilArrowThickFromRight} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'List of Checkins',
  //       to: '/checkins/checkin-list',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Create New Checkins',
  //       to: '/checkins/new-checkin',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Checkouts',
  //   to: '/checkouts',
  //   icon: <CIcon icon={cilArrowThickFromLeft} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'checkouts',
  //       to: '/checkouts/checkouts-list',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'New checkouts',
  //       to: '/checkouts/new-checkouts',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  // {
  //   component: CNavItem,
  //   name: 'Cartoon',
  //   to: '/items',
  //   icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Adjustments',
  //   to: '/adjustments',
  //   icon: <CIcon icon={cilEqualizer} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Adjustments',
  //       to: '/adjustments/adjustments',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'New Adjustments',
  //       to: '/adjustments/new-adjustments',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Transfers',
  //   to: '/transfers',
  //   icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Transfers',
  //       to: '/transfers/transfers',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'New Transfers',
  //       to: '/transfers/new-transfers',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  {
    component: CNavGroup,
    name: 'Product',
    to: '/product',
    icon: <CIcon icon={cilHeart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List All Product',
        to: '/product/product-list',
        icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create New Product',
        to: '/product/new-product',
        icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Import Product',
        to: '/product/import-product',
        icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
      },
    ],
  },

  // {
  //   component: CNavGroup,
  //   name: 'Shipping Mgt ',
  //   to: '/items',
  //   icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Shipping Product List',
  //       to: '/items/items-list',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Import Invoice',
  //       to: '/items/import-items',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'box dimention',
  //   to: '/items',
  //   icon: <CIcon icon={cilHeart} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Box Dimention',
  //       to: '/items/items-list',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Box Width',
  //       to: '/items/import-items',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Purchase',
  //   to: '/product',
  //   icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'List All Product',
  //       to: '/product/product-list',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Local Market',
  //       to: '/purchase/local-market',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Import Purchase',
  //       to: '/purchase/import-purchase',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Return ',
  //   to: '/items',
  //   icon: <CIcon icon={cilHeart} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Customer Return',
  //       to: '/items/items-list',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'container damage',
  //       to: '/items/new-items',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Local Return',
  //       to: '/items/import-items',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  {
    component: CNavGroup,
    name: 'Warehouses Mgt',
    to: '/warehouses',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List All Warehouses',
        to: '/warehouses/warehouses-list',
        icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create New Warehouses',
        to: '/warehouses/new-warehouses',
        icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Import Warehouses',
        to: '/warehouses/import-warehouses',
        icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
      },
    ],
  },

  // {
  //   component: CNavGroup,
  //   name: 'Unit',
  //   to: '/unit',
  //   icon: <CIcon icon={cilYen} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Create New Unit',
  //       to: '/unit/new-unit',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List All Unit',
  //       to: '/unit/unit-list',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Import Unit',
  //       to: '/unit/import-unit',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Invoice',
  //   to: '/invoice',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'List All Invoice',
  //       to: '/invoice/invoice-list',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Create New Invoice',
  //       to: '/invoice/new-invoice',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Import Invoice',
  //       to: '/invoice/import-invoice',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Inventry',
  //   to: '/inventry',
  //   icon: <CIcon icon={cilObjectGroup} customName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'List All Inventry',
  //       to: '/inventry/inventry-list',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Create New Inventry',
  //       to: '/inventry/new-inventry',
  //       icon: <CIcon icon={cilLink} customClassName="nav-icon" />,
  //     },
  //   ],
  // },
]

export default _nav
