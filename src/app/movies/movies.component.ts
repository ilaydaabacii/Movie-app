import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IMovie } from '../Models/IMovie';
import { MovieRepository } from '../Models/MovieRepository';
import { ToasterServiceMethods } from '../services/toastr.service';
import { ToastrNameService } from '../toastr/datas/mock-datas.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = "Film Listesi";
  movies: IMovie[];
  popularMovies: IMovie[];
  today = new Date();
  filterText: string = "";
  value: string = "teach";
  value1: string = "teachcareer";
  value2: string = "teachcareer angular bootcamp";
  filterMovies: IMovie[];

  toastrNames: any;
  success: any;
  info: any;
  error: any;
  warning: any;

  constructor(private toastrName: ToastrNameService,
    private toastr: ToasterServiceMethods,
    private toastrService: ToastrService) {
    this.filterMovies = this.movies;
    this.toastrNames = this.toastrName.getToastrNames();
  }

  showToastr(toasterInfo: string) {
    if (toasterInfo == "Success") {
      this.success = this.toastr.successToaster()
    } else if (toasterInfo == "Info") {
      this.info = this.toastr.infoToaster()
    } else if (toasterInfo == "Warning") {
      this.info = this.toastr.warningToaster()
    } else if (toasterInfo == "Error") {
      this.info = this.toastr.errorToaster()
    }
  }

  onInputChange() {
    console.log(this.filterText);
    this.filterMovies = this.filterText ? this.movies.filter((m: IMovie) =>
      m.title.toLocaleLowerCase().indexOf(this.filterText) !== -1 ||
      m.description.toLocaleLowerCase().indexOf(this.filterText) !== -1) : this.movies
   
  }

  addToList($event: any, movie: IMovie) {
    /*console.log(movie.title + " eklendi");
    console.log($event);
    console.log($event.target);
    console.log($event.target.classList);
    console.log($event.target.textContent);
    console.log($event.target.innerText); 
    console.log($event.target.classList.contains("btn-success"));*/
    if ($event.target.classList.contains("btn-success")) {
      this.toastrService.success(movie.title + " listeye eklendi", "Listeye Eklenen")
      $event.target.classList.remove("btn-success");
      $event.target.classList.add("btn-danger");
      $event.target.textContent = "Listeden Çıkar";
    } else {
      this.toastrService.warning(movie.title + " listeden çıkarıldı.")
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-success");
      $event.target.innerText = "Listeye Ekle";
    }
  }
}
