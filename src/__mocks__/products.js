import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2022',
    description: 'Summary map identifies general areas of drought and labels them by intensity.',
    media: '/static/images/products/product_1.png',
    background: '/static/images/products/drought.jpg',
    title: 'Drought Monitoring',
    totalDownloads: '13',
    update: '2'
  },
  {
    id: uuid(),
    createdAt: '31/03/2022',
    description: 'Liklihood of precipitaion amounts over the coming months.',
    media: '/static/images/products/product_2.png',
    background: '/static/images/products/rainAnom.png',
    title: 'Rainfall Outlook',
    totalDownloads: '34',
    update: '3'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Annual, Seasonal and weekly summary of precipitaion',
    media: '/static/images/products/product_3.png',
    background: '/static/images/products/rainSummary.png',
    title: 'Rainfall Summary',
    totalDownloads: '23',
    update: '2'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Annual, Seasonal and weekly summary of temperatures',
    media: '/static/images/products/product_4.png',
    background: '/static/images/products/temperature.png',
    title: 'Temprature Summary',
    totalDownloads: '406',
    update: '2'
  }
];
