import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';

export class Course {
    _id: string;
    title : string;
	subtitle: string;
    bannerImage: string;
    author: string;
    category: string;
    price: number;
    rating: number;
    description: string;
    createdOn: Date;
    content: [{
        mainTitle: string,
        sub1: string,
        sub2: string,
        sub3: string
    }];
}
