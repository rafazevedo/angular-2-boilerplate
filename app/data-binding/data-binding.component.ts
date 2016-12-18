import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'data-binding',
    templateUrl: './template/data-binding.component.html'
})
export class DataBindingComponent implements OnInit {
    url = 'http://www.google.com';
    urlImg = 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg';
    widthImage = '200px';

    msgType = ["-", "Success", "Info", "Warning", "Error"];
    msgClass = ["", "alert-success", "alert-info", "alert-warning", "alert-danger"];

    constructor() { }

    ngOnInit() { }
}