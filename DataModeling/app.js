var products = [
    {
        id: 101,
        title: "Sony LED 40 inch",
        variations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 4.5,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
            {
                id: 3,
                user: "Ali",
                rating: 5.0,
                title: "bad Product",
                comments: "ali It is a very good product ....",
                date: "04-02-2021",
                status: true,
            },
        ],
    },
    {
        id: 102,
        title: "Mobile",
        variations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 65000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 5.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 4.5,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
            {
                id: 3,
                user: "Ali",
                rating: 5.0,
                title: "bad Product",
                comments: "ali It is a very good product ....",
                date: "04-02-2021",
                status: true,
            },
        ],
    },
    {
        id: 103,
        title: "Bike",
        variations: [
            { id: 1, color: "black", price: 59000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 3.0,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
        ],
    },
];


//   ........................................................... QUESTION:01 .....................................................................

// for(let i=0; i<products.length; i++){
// if(products[i].id===102){
//     console.log(products[i]);
// }
// }

//   ........................................................... QUESTION:02 .....................................................................

// for(let i=0; i<products.length; i++){
// console.log(products[i].title);
// }

//   ........................................................... QUESTION:03 .....................................................................

// let idd = 102;
// for (let i = 0; i < products.length; i++) {
//     if (products[i].id === idd) {
//         let variat = products[i].variations;
//         for (let j = 0; j < variat.length; j++) {
//             console.log(variat[j].color);
//         }
//     }
// }


//   ........................................................... QUESTION:04 .....................................................................

// let id = 102;
// let sum=0;
// for (let i = 0; i < products.length; i++) {
//     // console.log(products[i]);
//     if (products[i].id === id) {
//         // console.log(products[i].variations);
//         let variat = products[i].variations
//         for (let j = 0; j < variat.length; j++) {
//             // console.log(variat[j].quantity);

//             sum+=variat[j].quantity;
//         }

//         console.log(sum);

//     }
// }


//   ........................................................... QUESTION:05 .....................................................................

// for(let i=0; i<products.length; i++){
//     let hasLowQuantity="false";
//     for(let j=0; j<products[i].variations.length; j++){
// if(products[i].variations.length.quantity<2){
// hasLowQuantity="True";
// break;
// }
//     }

//     if(hasLowQuantity){
// console.log(products[i].title);
//     }
// }


// ............................................................... QUESTION : 06 ................................................................

// let name = "";
// let avrg = 0;
// for (let i = 0; i < products.length; i++) {
//     let reviews = products[i].reviews
//     let rating = 0;
//     let reviewsLength = 0;

//     for (let j = 0; j < reviews.length; j++) {
//         // console.log(reviews[j].rating);
//         rating += reviews[j].rating;
//         reviewsLength = reviews.length;
//     }


//     // console.log(rating / reviewsLength);
//     let check = rating / reviewsLength
//     if (check > avrg) {
//         avrg = check;
//         name=products[i].title;
//     }
// }

// console.log(name);
// console.log(avrg);


// ............................................................... QUESTION : 07 ................................................................

// for(let i=0; i<products.length; i++){
//     // console.log(products[i]);
//     let review=products[i].reviews;
//     for(let j=0; j<review.length; j++){
//         if(review[j].status===true){
// console.log(review[j]);
//         }
        
//     }

// }

// ............................................................... QUESTION : 08 ................................................................

// for(let i=0; i<products.length; i++){
// // console.log(products[i]);
// let higest = 0;
// let title=products[i].title;
// for(let j=0; j<products[i].variations.length; j++){
// // console.log(products[i].variations[j].price);
//     if(higest<products[i].variations[j].price){
// higest=products[i].variations[j].price
//     }
// }
// console.log(title+ " " +higest);
// }

// ............................................................... QUESTION : 09 ................................................................

// let totalStockValue=0;
// for(let i=0; i<products.length; i++){
// // console.log(products[i]);
// for(let j=0; j<products[i].variations.length; j++){
//     // console.log(products[i].variations[j].price)
//     let variat=products[i].variations[j]
//     totalStockValue+=variat.price* variat.quantity;
// }

// }

// console.log(totalStockValue);