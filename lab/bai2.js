function createBook(title, author, year, price) {
	const publishedKey = `published_${year}`; // computed property name

	return {
		title,
		author,
		year,
		price,
		getBookInfo() {
			return `${title} - ${author} (${year}) - ${price.toLocaleString('vi-VN')}₫`;
		},
		calculateDiscount(discount) {
			const normalized = Math.max(0, Math.min(100, Number(discount)));
			const finalPrice = Math.round(price * (1 - normalized / 100));
			return `${finalPrice.toLocaleString('vi-VN')}₫`;
		},
		[publishedKey]: true,
	};
}

// Ví dụ sử dụng
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10)); // Giảm 10%

