import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '@/application/Home';
import Recommend from '@/application/Recommend';
import Singers from '@/application/Singers';
import Rank from '@/application/Rank';
import Album from '@/application/Album';
import PersonSingers from '@/application/personSinger';

const router = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/recommend'} />
      },
      {
        path: '/recommend',
        component: Recommend,
        key: 'recommend',
        routes: [
          {
            path: '/recommend/:id',
            component: Album
          }
        ]
      },
      {
        path: '/singers',
        component: Singers,
        key: 'singers',
        routes: [
          {
            path: '/singers/:id',
            component: PersonSingers
          }
        ]
      },
      {
        path: '/rank/',
        component: Rank,
        key: 'rank',
        routes: [
          {
            path: '/rank/:id',
            component: Album
          }
        ]
      }
    ]
  }
];

export default router;
