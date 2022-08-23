import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from '../Models/CategoryRepository';
import { ICategory } from '../Models/ICategory';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: ICategory[];
  categoryRepository: CategoryRepository;
  selectedCategory: ICategory = null;
  displayAll = true;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  ngOnInit(): void { }

  selectCategory(category?: ICategory) {
    if(category) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }
}