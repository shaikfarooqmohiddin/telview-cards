const elementRef = document.getElementById("product");
const productData = [
  {
    productUrl: "#corrissants",
    productImage: "http://i.vimeocdn.com/video/600595198_390x220.webp",
    productTitle: "Croissants | Flour and stone",
  },
  {
    productUrl: "#mashedpotatoes",
    productImage: "http://i.vimeocdn.com/video/604150056_390x220.webp",
    productTitle: "Perfect Mashed Potatoes and Gravy",
  },
  {
    productUrl: "#soba",
    productImage: "http://i.vimeocdn.com/video/726986673_390x220.webp" ,
    productTitle: "The Heart Of Soba",
  },
  {
    productUrl: "#grilled",
    productImage: "http://i.vimeocdn.com/video/570486309_390x220.webp" ,
    productTitle: "Grilled Cheese 9 Ways",
  },
  {
    productUrl: "#q",
    productImage: "http://i.vimeocdn.com/video/602705517_390x220.webp",
    productTitle: "Pineapple Cheesecake",
  },
  {
    productUrl: "#w",
    productImage: "http://i.vimeocdn.com/video/537261616_390x220.webp",
    productTitle: "Lemony Chicken Noodle Soup",
  },
  {
    productUrl: "#e",
    productImage: "http://i.vimeocdn.com/video/601730519_390x220.webp",
    productTitle: "Pumpkin Roll",
  },
  {
    productUrl: "#r",
    productImage: "http://i.vimeocdn.com/video/456852083_390x220.webp",
    productTitle: "How To Brine a Turkey",
  },
  {
    productUrl: "#t",
    productImage: "http://i.vimeocdn.com/video/600328152_390x220.webp",
    productTitle: "Butternut Squash Ravioil",
  },
  
];

const productContainer = productData?.map(
  ({ productTitle, productUrl, productImage }) => {
    return `  
  <!-- Product item -->
  <a href="${productUrl}">
  <figure class="card"><div class="card-body">
  <img src="${productImage}" />
  </div><figcaption>${productTitle}</figcaption>
  </figure></a> 
  <!-- END OF Product item -->`;
  }
);

elementRef.innerHTML +=
  productData?.length !== 0 ? productContainer : "Product list is empty!!";
