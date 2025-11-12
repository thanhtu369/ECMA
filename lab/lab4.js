
//   const user = {
//     id: 1,
//     personalInfo: {
//       name: "javascript",
//       contact: {
//         email: "javascript@email.com",
//         phone: "123-456-7890",
//       },
//     },
//   };
  


//   function getUserInfo(user) {
//     const {
//       personalInfo: {
//         name,
//         contact: { email },
//       },
//     } = user;
//     return { name, email };
//   }
  
//   console.log(getUserInfo(user));



// function createProduct({ name, price, category = "general", inStock = true }) {
//     return { name, price, category, inStock };
//   }
  
//   const product = createProduct({ name: "Laptop", price: 999 });
//   console.log(product);
  




async function processOrder(orderId) {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const products = await getProducts(order.productIds);
    
    return { order, user, products };
  }
  





