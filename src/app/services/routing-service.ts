import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoutingService {
  private router: Router = inject(Router);

  navigateToLogin() {
    this.router.navigate(['']);
  }

  //sidebar page redirects
  // navigateToHome() {
  //   this.router.navigate(['/home'], { replaceUrl: true });
  // }
  navigateToHome() {
    // Try navigateByUrl; both are fine, but this is simple
    this.router.navigateByUrl('/home')
      .then(ok => console.log('navigated to /home:', ok))
      .catch(err => console.error('router error:', err));
  }
  navigateToSearchMovies() {
    this.router.navigateByUrl('/search/movies');
  }
  navigateToSearchMoviesWithInput(input: string) {
    this.router.navigateByUrl(`/search/movies/${input}`);
  }
  navigateToSearchSeries() {
    this.router.navigateByUrl('/search/series');
  }
  navigateToSearchSeriesWithInput(input: string) {
    this.router.navigateByUrl(`/search/series/${input}`);
  }
  navigateToSearchUsers() {
    this.router.navigateByUrl('/search/users');
  }
  navigateToSearchUsersWithInput(input: string) {
    this.router.navigateByUrl(`/search/users/${input}`);
  }
  navigateToMovies() {
    this.router.navigateByUrl(`/movies`);
  }
  navigateToShows() {
    this.router.navigateByUrl(`/shows`);
  }
  navigateToSummary() {
    this.router.navigateByUrl(`/summary`);
  }
  navigateToAccountsPosts(username: string) {
    this.router.navigateByUrl(`/account/${username}/posts`);
  }
  navigateToAccountsTagged(username: string) {
    this.router.navigateByUrl(`/account/${username}/tagged`);
  }
  navigateToAccountsArchived(username: string) {
    this.router.navigateByUrl(`/account/${username}/archive`);
  }
  navigateToSettings() {
    this.router.navigateByUrl(`/settings/account-info`);
  }
  navigateToPrivacy() {
    this.router.navigateByUrl(`/settings/privacy`);
  }
  navigateToLogout() {
    this.router.navigateByUrl(`/settings/logout`);
  }

  //route once a movie has been selected after search
  navigateToMovieInformation(imdbId: string) {
    this.router.navigateByUrl(`/film-information/movie/${imdbId}`);
  }
  navigateToRateMovie(imdbId?: string) {
    this.router.navigateByUrl(`/rate-movie/${imdbId}`);
  }
  navigateToPostMovie(postId: string) {
    this.router.navigateByUrl(`/post-movie/${postId}`);
  }

  //route once a series has been selected after search
  navigateToSeriesInformation(imdbId: string) {
    this.router.navigateByUrl(`/film-information/series/${imdbId}`);
  }
  navigateToRateSeries(imdbId?: string) {
    this.router.navigateByUrl(`/rate-series/${imdbId}`);
  }
  navigateToPostSeries(postId: string) {
    this.router.navigateByUrl(`/post-series/${postId}`);
  }

  //edit screen for films that have been rated
  navigateToEditMovie() {
    this.router.navigateByUrl(`/edit-movie`);
  }
  navigateToEditSeries() {
    this.router.navigateByUrl(`/edit-series`);
  }
}