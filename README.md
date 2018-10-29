# Book-Shop_T7
Tasks from 7 lesson

Задание 7
1. Реализовать роутинг для следующих урлов
    - / - загрузить BookListComponent
    - /cart - загрузить CartComponent
    - /order - загрузить ProcessOrderFormComponent
    - /book/:id - загрузить BookDetailsComponent
2. Переходы реализовать с помощью RouterLink.
3. Переход на форму ProcessOrderFormComponent реализовать с помощью Router.navigate
4. Создать компонент BookDetailsComponent для отображения информации по выбраной книжке.
   Прочитать параметр из ActivatedRoute и получить модель с помощью сервиса BooksService.
5. Реализовать бекенд для корзины на основе json-server
6. Реализовать сервис CartHttpService c двумя методами:
    getCartItems(): Promise<Array<CartItemModel>>. Использовать get метод.
    addToCart(book: BookModel): Promise<CartItemModel>. Использовать post метод.
7. Использовать сервис CartHttpService для корзины. (Кнопки увеличения, умньшения, удаления не будут влиять на содержимое корзины)