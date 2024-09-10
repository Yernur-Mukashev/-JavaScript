document.addEventListener("DOMContentLoaded", () => {
	const addReviewPage = document.getElementById("add-review-page");
	const viewReviewsPage = document.getElementById("view-reviews-page");
	const productList = document.getElementById("product-list");
	const productNameInput = document.getElementById("product-name");
	const productReviewInput = document.getElementById("product-review");
	const addReviewButton = document.getElementById("add-review-button");
	const backToAddButton = document.getElementById("back-to-add");
	const viewReviewsButton = document.getElementById("view-reviews-button");

	// Показать страницу добавления отзыва
	function showAddReviewPage() {
		addReviewPage.classList.remove("hidden");
		viewReviewsPage.classList.add("hidden");
	}

	// Показать страницу просмотра отзывов
	function showViewReviewsPage() {
		addReviewPage.classList.add("hidden");
		viewReviewsPage.classList.remove("hidden");
		loadProductList();
	}

	// Сохранить отзыв в LocalStorage
	function addReview() {
		const productName = productNameInput.value.trim();
		const productReview = productReviewInput.value.trim();

		if (productName && productReview) {
			let reviews = JSON.parse(localStorage.getItem("reviews")) || {};
			if (!reviews[productName]) {
				reviews[productName] = [];
			}
			reviews[productName].push(productReview);
			localStorage.setItem("reviews", JSON.stringify(reviews));
			productNameInput.value = "";
			productReviewInput.value = "";
			alert("Отзыв добавлен!");
		} else {
			alert("Пожалуйста, заполните все поля.");
		}
	}

	// Загрузить список продуктов с отзывами
	function loadProductList() {
		const reviews = JSON.parse(localStorage.getItem("reviews")) || {};
		productList.innerHTML = "";

		if (Object.keys(reviews).length === 0) {
			productList.innerHTML = "<p>Нет отзывов для отображения.</p>";
			return;
		}

		for (const product in reviews) {
			const li = document.createElement("li");
			li.textContent = product;
			li.addEventListener("click", () =>
				showProductReviews(product, reviews[product])
			);
			productList.appendChild(li);
		}
	}

	// Показать отзывы для выбранного продукта
	function showProductReviews(product, reviews) {
		productList.innerHTML = `<h3>Отзывы о "${product}":</h3>`;

		if (reviews.length === 0) {
			productList.innerHTML += "<p>Нет отзывов для этого продукта.</p>";
			return;
		}

		reviews.forEach((review, index) => {
			const reviewItem = document.createElement("li");
			reviewItem.textContent = review;
			const deleteButton = document.createElement("span");
			deleteButton.textContent = "Удалить";
			deleteButton.classList.add("delete-button");
			deleteButton.addEventListener("click", () =>
				deleteReview(product, index)
			);
			reviewItem.appendChild(deleteButton);
			productList.appendChild(reviewItem);
		});
	}

	// Удалить отзыв из LocalStorage
	function deleteReview(product, index) {
		let reviews = JSON.parse(localStorage.getItem("reviews"));
		reviews[product].splice(index, 1);
		if (reviews[product].length === 0) {
			delete reviews[product];
		}
		localStorage.setItem("reviews", JSON.stringify(reviews));
		loadProductList();
	}

	// Обработчики событий
	addReviewButton.addEventListener("click", addReview);
	backToAddButton.addEventListener("click", showAddReviewPage);
	viewReviewsButton.addEventListener("click", showViewReviewsPage);

	// Показать начальную страницу
	showAddReviewPage();
});
