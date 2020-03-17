import { Component, Input } from '@angular/core';
import {ISocial} from '../model/static.database';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})

export class SocialComponent {
  @Input()
  social: ISocial;

}
