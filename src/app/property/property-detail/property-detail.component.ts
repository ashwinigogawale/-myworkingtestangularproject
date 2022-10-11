import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number;
  property = new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService) { }

  ngOnInit(): void {

    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
        (data: Property) => {
            this.property = data['prp'];
        }
    );

    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       }, error => this.router.navigate(['/'])
    //     );
    //   }
    // );

    this.galleryOptions = [
        {
            width: '100%',
            height: '465px',
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide,
            preview: true
        }
    ];

    this.galleryImages = [
        {
            small: 'assets/images/1.jfif',
            medium: 'assets/images/1.jfif',
            big: 'assets/images/1.jfif'
        },
        {
            small: 'assets/images/2.jfif',
            medium: 'assets/images/2.jfif',
            big: 'assets/images/2.jfif'
        },
        {
            small: 'assets/images/3.jfif',
            medium: 'assets/images/3.jfif',
            big: 'assets/images/3.jfif'
        },
        {
            small: 'assets/images/4.jfif',
            medium: 'assets/images/4.jfif',
            big: 'assets/images/4.jfif'
        },
        {
            small: 'assets/images/5.jfif',
            medium: 'assets/images/5.jfif',
            big: 'assets/images/5.jfif'
        }
    ];

}

}



