import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  //standalone: true,
  //imports: [],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CategoriesService) {}
  ngOnInit(): void {}

  onSubmit(formData: any) {
    let categoryData: Category = {
      category: formData.value.category,
    };

    this.categoryService.saveData(categoryData);

    // let subCategoryData = {
    //   subCategory: 'subCategory1',
    // };

    // this.afs
    //   .collection('categories')
    //   .add(categoryData)
    //   .then((docRef) => {
    //     console.log(docRef);

    //     // this.afs.doc(`categories/${docRef.id}`).collection('subcategories').add(subCategoryData)

    //     this.afs
    //       .collection('categories')
    //       .doc(docRef.id)
    //       .collection('subCategories')
    //       .add(subCategoryData)
    //       .then((docRef1) => {
    //         console.log(docRef1);

    //         // this.afs.doc(`categories/${docRef.id}/subcategories/${docRef1.id}`).collection('subsubcategories').add(subCategoryData)

    //         this.afs
    //           .collection('categories')
    //           .doc(docRef.id)
    //           .collection('subCategories')
    //           .doc(docRef1.id)
    //           .collection('subsubcategories')
    //           .add(subCategoryData)
    //           .then((docRef2) => {
    //             console.log('second level sub category save successfully');
    //           });
    //       });
    //   })

    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}
