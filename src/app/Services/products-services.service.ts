import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {

  productList:Iproduct[];
  categoriesList:Icategory[];

  constructor() { 

    this.productList = [
      {id:1, name: 'Odense 8-Seater Top Dining Table', price: 80, quantity:0,count:1, totalPrdPrice:0, img:'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', catID:1,Material:'Engineered Wood', descrirption:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, velit adipisci debitis molestias quos, reprehenderit neque voluptas eum dolore quae eos quia laudantium hic, odit molestiae iure odio dolores veritatis magni nulla blanditiis? Est iure repellat sapiente omnis nisi quos, quam provident rem eius dolor vel veniam asperiores corporis tempore explicabo minima, accusamus nemo eligendi libero nobis. Vitae illum inventore quae ratione eius similique nobis, quod laborum aliquid distinctio, dolore nam quo error pariatur. Iste error nemo natus consectetur autem voluptas quia ad culpa libero neque alias ratione quod hic iusto tempore unde eos tenetur veniam maxime perspiciatis inventore, nobis sunt architecto accusantium? Praesentium voluptate rerum quam sunt dolores doloribus velit, ab ex iure sequi ullam adipisci at tenetur voluptates similique omnis perspiciatis optio soluta debitis alias? Reprehenderit corrupti ipsa, ea vitae repellendus distinctio quos eligendi blanditiis maxime sunt voluptas hic veniam, dolor nulla architecto, quaerat fugit eius commodi? Assumenda qui placeat, accusantium sequi voluptate porro, exercitationem eligendi aliquam fuga consectetur veritatis repellat temporibus quasi quo sunt atque labore reprehenderit excepturi possimus, impedit dicta ratione aperiam magni? Ratione, rerum repudiandae? Reprehenderit modi repellat ullam error, veritatis totam eum vel itaque dolor nisi unde id consequuntur at deserunt corporis sunt eligendi.'},
      {id:5, name: 'Trixia 4-Seater Glass Top Dining Table', price: 80, quantity:1,count:1, totalPrdPrice:0, img:'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', catID:1,Material:'Metal', descrirption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, velit adipisci debitis molestias quos, reprehenderit neque voluptas eum dolore quae eos quia laudantium hic, odit molestiae iure odio dolores veritatis magni nulla blanditiis? Est iure repellat sapiente omnis nisi quos, quam provident rem eius dolor vel veniam asperiores corporis tempore explicabo minima, accusamus nemo eligendi libero nobis. Vitae illum inventore quae ratione eius similique nobis, quod laborum aliquid distinctio, dolore nam quo error pariatur. Iste error nemo natus consectetur autem voluptas quia ad culpa libero neque alias ratione quod hic iusto tempore unde eos tenetur veniam maxime perspiciatis inventore, nobis sunt architecto accusantium? Praesentium voluptate rerum quam sunt dolores doloribus velit, ab ex iure sequi ullam adipisci at tenetur voluptates similique omnis perspiciatis optio soluta debitis alias? Reprehenderit corrupti ipsa, ea vitae repellendus distinctio quos eligendi blanditiis maxime sunt voluptas hic veniam, dolor nulla architecto, quaerat fugit eius commodi? Assumenda qui placeat, accusantium sequi voluptate porro, exercitationem eligendi aliquam fuga consectetur veritatis repellat temporibus quasi quo sunt atque labore reprehenderit excepturi possimus, impedit dicta ratione aperiam magni? Ratione, rerum repudiandae? Reprehenderit modi repellat ullam error, veritatis totam eum vel itaque dolor nisi unde id consequuntur at deserunt corporis sunt eligendi.'},
      {id:25, name: 'Gasha Marble Top Side Table', price: 14000, quantity:10,count:1, totalPrdPrice:0, img:'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', catID:1,Material:'Metal', descrirption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, velit adipisci debitis molestias quos, reprehenderit neque voluptas eum dolore quae eos quia laudantium hic, odit molestiae iure odio dolores veritatis magni nulla blanditiis? Est iure repellat sapiente omnis nisi quos, quam provident rem eius dolor vel veniam asperiores corporis tempore explicabo minima, accusamus nemo eligendi libero nobis. Vitae illum inventore quae ratione eius similique nobis, quod laborum aliquid distinctio, dolore nam quo error pariatur. Iste error nemo natus consectetur autem voluptas quia ad culpa libero neque alias ratione quod hic iusto tempore unde eos tenetur veniam maxime perspiciatis inventore, nobis sunt architecto accusantium? Praesentium voluptate rerum quam sunt dolores doloribus velit, ab ex iure sequi ullam adipisci at tenetur voluptates similique omnis perspiciatis optio soluta debitis alias? Reprehenderit corrupti ipsa, ea vitae repellendus distinctio quos eligendi blanditiis maxime sunt voluptas hic veniam, dolor nulla architecto, quaerat fugit eius commodi? Assumenda qui placeat, accusantium sequi voluptate porro, exercitationem eligendi aliquam fuga consectetur veritatis repellat temporibus quasi quo sunt atque labore reprehenderit excepturi possimus, impedit dicta ratione aperiam magni? Ratione, rerum repudiandae? Reprehenderit modi repellat ullam error, veritatis totam eum vel itaque dolor nisi unde id consequuntur at deserunt corporis sunt eligendi.'},
      {id:7, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2,count:1, totalPrdPrice:0, img:'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', catID:2,Material:'Upholstered Seating', descrirption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, velit adipisci debitis molestias quos, reprehenderit neque voluptas eum dolore quae eos quia laudantium hic, odit molestiae iure odio dolores veritatis magni nulla blanditiis? Est iure repellat sapiente omnis nisi quos, quam provident rem eius dolor vel veniam asperiores corporis tempore explicabo minima, accusamus nemo eligendi libero nobis. Vitae illum inventore quae ratione eius similique nobis, quod laborum aliquid distinctio, dolore nam quo error pariatur. Iste error nemo natus consectetur autem voluptas quia ad culpa libero neque alias ratione quod hic iusto tempore unde eos tenetur veniam maxime perspiciatis inventore, nobis sunt architecto accusantium? Praesentium voluptate rerum quam sunt dolores doloribus velit, ab ex iure sequi ullam adipisci at tenetur voluptates similique omnis perspiciatis optio soluta debitis alias? Reprehenderit corrupti ipsa, ea vitae repellendus distinctio quos eligendi blanditiis maxime sunt voluptas hic veniam, dolor nulla architecto, quaerat fugit eius commodi? Assumenda qui placeat, accusantium sequi voluptate porro, exercitationem eligendi aliquam fuga consectetur veritatis repellat temporibus quasi quo sunt atque labore reprehenderit excepturi possimus, impedit dicta ratione aperiam magni? Ratione, rerum repudiandae? Reprehenderit modi repellat ullam error, veritatis totam eum vel itaque dolor nisi unde id consequuntur at deserunt corporis sunt eligendi.'},
      {id:17, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2,count:1, totalPrdPrice:0, img:'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', catID:2,Material:'Upholstered Seating', descrirption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, velit adipisci debitis molestias quos, reprehenderit neque voluptas eum dolore quae eos quia laudantium hic, odit molestiae iure odio dolores veritatis magni nulla blanditiis? Est iure repellat sapiente omnis nisi quos, quam provident rem eius dolor vel veniam asperiores corporis tempore explicabo minima, accusamus nemo eligendi libero nobis. Vitae illum inventore quae ratione eius similique nobis, quod laborum aliquid distinctio, dolore nam quo error pariatur. Iste error nemo natus consectetur autem voluptas quia ad culpa libero neque alias ratione quod hic iusto tempore unde eos tenetur veniam maxime perspiciatis inventore, nobis sunt architecto accusantium? Praesentium voluptate rerum quam sunt dolores doloribus velit, ab ex iure sequi ullam adipisci at tenetur voluptates similique omnis perspiciatis optio soluta debitis alias? Reprehenderit corrupti ipsa, ea vitae repellendus distinctio quos eligendi blanditiis maxime sunt voluptas hic veniam, dolor nulla architecto, quaerat fugit eius commodi? Assumenda qui placeat, accusantium sequi voluptate porro, exercitationem eligendi aliquam fuga consectetur veritatis repellat temporibus quasi quo sunt atque labore reprehenderit excepturi possimus, impedit dicta ratione aperiam magni? Ratione, rerum repudiandae? Reprehenderit modi repellat ullam error, veritatis totam eum vel itaque dolor nisi unde id consequuntur at deserunt corporis sunt eligendi.'},
      {id:9, name: 'Boston Study Chair', price: 1000, quantity:10,count:1, totalPrdPrice:0, img:'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', catID:2,Material:'Upholstered Seating', descrirption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, velit adipisci debitis molestias quos, reprehenderit neque voluptas eum dolore quae eos quia laudantium hic, odit molestiae iure odio dolores veritatis magni nulla blanditiis? Est iure repellat sapiente omnis nisi quos, quam provident rem eius dolor vel veniam asperiores corporis tempore explicabo minima, accusamus nemo eligendi libero nobis. Vitae illum inventore quae ratione eius similique nobis, quod laborum aliquid distinctio, dolore nam quo error pariatur. Iste error nemo natus consectetur autem voluptas quia ad culpa libero neque alias ratione quod hic iusto tempore unde eos tenetur veniam maxime perspiciatis inventore, nobis sunt architecto accusantium? Praesentium voluptate rerum quam sunt dolores doloribus velit, ab ex iure sequi ullam adipisci at tenetur voluptates similique omnis perspiciatis optio soluta debitis alias? Reprehenderit corrupti ipsa, ea vitae repellendus distinctio quos eligendi blanditiis maxime sunt voluptas hic veniam, dolor nulla architecto, quaerat fugit eius commodi? Assumenda qui placeat, accusantium sequi voluptate porro, exercitationem eligendi aliquam fuga consectetur veritatis repellat temporibus quasi quo sunt atque labore reprehenderit excepturi possimus, impedit dicta ratione aperiam magni? Ratione, rerum repudiandae? Reprehenderit modi repellat ullam error, veritatis totam eum vel itaque dolor nisi unde id consequuntur at deserunt corporis sunt eligendi.'},
      {id:10, name: 'Coby Extendable TV Unit', price: 13000, quantity:0,count:1, totalPrdPrice:0, img:'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', catID:3,Material:'Wood', descrirption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, velit adipisci debitis molestias quos, reprehenderit neque voluptas eum dolore quae eos quia laudantium hic, odit molestiae iure odio dolores veritatis magni nulla blanditiis? Est iure repellat sapiente omnis nisi quos, quam provident rem eius dolor vel veniam asperiores corporis tempore explicabo minima, accusamus nemo eligendi libero nobis. Vitae illum inventore quae ratione eius similique nobis, quod laborum aliquid distinctio, dolore nam quo error pariatur. Iste error nemo natus consectetur autem voluptas quia ad culpa libero neque alias ratione quod hic iusto tempore unde eos tenetur veniam maxime perspiciatis inventore, nobis sunt architecto accusantium? Praesentium voluptate rerum quam sunt dolores doloribus velit, ab ex iure sequi ullam adipisci at tenetur voluptates similique omnis perspiciatis optio soluta debitis alias? Reprehenderit corrupti ipsa, ea vitae repellendus distinctio quos eligendi blanditiis maxime sunt voluptas hic veniam, dolor nulla architecto, quaerat fugit eius commodi? Assumenda qui placeat, accusantium sequi voluptate porro, exercitationem eligendi aliquam fuga consectetur veritatis repellat temporibus quasi quo sunt atque labore reprehenderit excepturi possimus, impedit dicta ratione aperiam magni? Ratione, rerum repudiandae? Reprehenderit modi repellat ullam error, veritatis totam eum vel itaque dolor nisi unde id consequuntur at deserunt corporis sunt eligendi.'},
      {id:15, name: 'Accent TV Unit', price: 36999, quantity:4,count:1, totalPrdPrice:0, img:'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', catID:3,Material:'MDF', descrirption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, velit adipisci debitis molestias quos, reprehenderit neque voluptas eum dolore quae eos quia laudantium hic, odit molestiae iure odio dolores veritatis magni nulla blanditiis? Est iure repellat sapiente omnis nisi quos, quam provident rem eius dolor vel veniam asperiores corporis tempore explicabo minima, accusamus nemo eligendi libero nobis. Vitae illum inventore quae ratione eius similique nobis, quod laborum aliquid distinctio, dolore nam quo error pariatur. Iste error nemo natus consectetur autem voluptas quia ad culpa libero neque alias ratione quod hic iusto tempore unde eos tenetur veniam maxime perspiciatis inventore, nobis sunt architecto accusantium? Praesentium voluptate rerum quam sunt dolores doloribus velit, ab ex iure sequi ullam adipisci at tenetur voluptates similique omnis perspiciatis optio soluta debitis alias? Reprehenderit corrupti ipsa, ea vitae repellendus distinctio quos eligendi blanditiis maxime sunt voluptas hic veniam, dolor nulla architecto, quaerat fugit eius commodi? Assumenda qui placeat, accusantium sequi voluptate porro, exercitationem eligendi aliquam fuga consectetur veritatis repellat temporibus quasi quo sunt atque labore reprehenderit excepturi possimus, impedit dicta ratione aperiam magni? Ratione, rerum repudiandae? Reprehenderit modi repellat ullam error, veritatis totam eum vel itaque dolor nisi unde id consequuntur at deserunt corporis sunt eligendi.'},
      {id:55, name: 'Plymouth TV Unit', price: 36999, quantity:3,count:1, totalPrdPrice:0, img:'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', catID:3,Material:'wood', descrirption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, velit adipisci debitis molestias quos, reprehenderit neque voluptas eum dolore quae eos quia laudantium hic, odit molestiae iure odio dolores veritatis magni nulla blanditiis? Est iure repellat sapiente omnis nisi quos, quam provident rem eius dolor vel veniam asperiores corporis tempore explicabo minima, accusamus nemo eligendi libero nobis. Vitae illum inventore quae ratione eius similique nobis, quod laborum aliquid distinctio, dolore nam quo error pariatur. Iste error nemo natus consectetur autem voluptas quia ad culpa libero neque alias ratione quod hic iusto tempore unde eos tenetur veniam maxime perspiciatis inventore, nobis sunt architecto accusantium? Praesentium voluptate rerum quam sunt dolores doloribus velit, ab ex iure sequi ullam adipisci at tenetur voluptates similique omnis perspiciatis optio soluta debitis alias? Reprehenderit corrupti ipsa, ea vitae repellendus distinctio quos eligendi blanditiis maxime sunt voluptas hic veniam, dolor nulla architecto, quaerat fugit eius commodi? Assumenda qui placeat, accusantium sequi voluptate porro, exercitationem eligendi aliquam fuga consectetur veritatis repellat temporibus quasi quo sunt atque labore reprehenderit excepturi possimus, impedit dicta ratione aperiam magni? Ratione, rerum repudiandae? Reprehenderit modi repellat ullam error, veritatis totam eum vel itaque dolor nisi unde id consequuntur at deserunt corporis sunt eligendi.'},

    ]
    this.categoriesList = [
      {id: 1, name:'Table'},
      {id: 2, name:'Chair'},
      {id: 3, name:'T.V'},

    ]
  }

  getProducts():Iproduct[]{
    return this.productList;
  }
  getProductByID(id:number):Iproduct|undefined{
    return this.productList.find((prd)=>prd.id==id)
  }
  getProductByCatID(catId:number):Iproduct[]{
    return this.productList.filter((products)=>products.catID==catId);
  }
  getAllProductsIDs():number[]{
    return this.productList.map((prd)=>prd.id);
  }
  getCategories():Icategory[]{
    return this.categoriesList;
  }
}
