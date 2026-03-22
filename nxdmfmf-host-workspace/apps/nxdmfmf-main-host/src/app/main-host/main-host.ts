import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-host',
  standalone: true,
  templateUrl: './main-host.html',
  styleUrl: './main-host.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHost {}
