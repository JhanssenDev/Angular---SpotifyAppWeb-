import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private router: Router) { }

  searchArtist(item) {
    let artist: string;
    if (item.type === 'album') {
      artist = item.artists[0].id;
      console.log(artist);
    } else {
      artist = item.id
      console.log(artist);
    }
    this.router.navigate(['/artist', artist]);
  }



  ngOnInit(): void {
  }


}
