import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { MainHost } from './main-host/main-host';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainHost,
  },
  {
    path: 'app-a',
    loadChildren: () =>
      loadRemote<{ remoteRoutes: Route[] }>('nxdmfmf-remote-a/Routes').then(
        (m) => m?.remoteRoutes ?? []
      ),
  },
  {
    path: 'app-b',
    loadChildren: () =>
      loadRemote<{ remoteRoutes: Route[] }>('nxdmfmf-remote-b/Routes').then(
        (m) => m?.remoteRoutes ?? []
      ),
  },
  {
    path: 'app-c',
    loadChildren: () =>
      loadRemote<{ remoteRoutes: Route[] }>('nxdmfmf-remote-c/Routes').then(
        (m) => m?.remoteRoutes ?? []
      ),
  },
];
