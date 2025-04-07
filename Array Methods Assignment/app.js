
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
        { id: 1, color: "black", price: 50000, quantity: 7 },
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
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "white", price: 55000, quantity: 5 },
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


// ............................................... Question 01 ..............................................................

let getProductTitle=products.map((val)=>val.title);
console.log(getProductTitle);

// ............................................... Question 02 ..............................................................

let filterBlackColor=products.filter((products)=>products.variations.filter((variations)=>variations.color).length>0)
console.log(filterBlackColor);

// ............................................... Question 03 ..............................................................

let totalStock=products.reduce((total,products)=>{
    let productSroke=products.variations.reduce((sum,variations)=>sum+variations.quantity,0);return total+productSroke
},0);
console.log(totalStock);

// ............................................... Question 04 ..............................................................

let averageRatings = products.map((product) => {
  let validReviews = product.reviews.filter((review) => review.status);
  let totalRating = validReviews.reduce((sum, review) => sum + review.rating, 0);
  let averageRating = validReviews.length > 0 ? totalRating / validReviews.length : 0;
  return { title: product.title, averageRating: averageRating };
});

console.log(averageRatings);


// ............................................... Question 05 ..............................................................

let filterReview=products.filter((products)=>products.reviews.filter((reviews)=>reviews.rating===5.0).length>0)
console.log(filterReview);

// ............................................... Question 06 ..............................................................

let formatVar=products.map((products)=>{return{
  title: products.title,
  variations:products.variations.map((variations)=>{return{
    color:variations.color,
    price:variations.price,
    quantity:variations.quantity
  }})
}
})

console.log(formatVar)

// ............................................... Question 07 ..............................................................

let totalRevenue =products.reduce((total,products)=>{
    let productsRevenue=products.variations.reduce((sum,variations)=>sum+variations.price*variations.quantity,0);
    return total+productsRevenue;
},0)

console.log(totalRevenue);


// ............................................... Question 08 ..............................................................

let filterItems=products.filter((product)=>product.variations.filter((variations)=>variations.quantity>5).length>0);
console.log(filterItems);

// ............................................... Question 09 ..............................................................

let productSummaries = products.map((product) => ({
  title: product.title,
  totalVariations: product.variations.length,
  totalReviews: product.reviews.length,
}));

console.log(productSummaries);


// ............................................... Question 10 ..............................................................

let highestTotalStock = products.reduce((max, item) => {
  let totalStock = item.variations.reduce((sum, variation) => sum + variation.quantity, 0);
  if (!max || max.totalStock < totalStock) {
    return { title: item.title, totalStock: totalStock }
  } else {
    return max
  }
}, 0);
console.log("question 10: ", highestTotalStock);
