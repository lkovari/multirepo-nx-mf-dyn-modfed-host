import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MainLayout } from './main-layout/main-layout';

@Component({
  imports: [MainLayout],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
