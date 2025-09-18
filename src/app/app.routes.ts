import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Products } from './Components/products/products';
import { About } from './Components/about/about';
import { NotFound } from './Components/not-found/not-found';
import { ProductDetails } from './Components/product-details/product-details';
import { ProductSearch } from './Components/product-search/product-search';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: Home
  },
  {
    path:'productSearch',
    component: ProductSearch
  },
  { path: 'products/:id',
    component: ProductDetails
  },
  {
    path:'about',
    component: About
  },
  {
    path: '**',
    component: NotFound
  }

];
