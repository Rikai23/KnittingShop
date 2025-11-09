from django.shortcuts import render


def catalog(request):
    context = {
        'title': 'Каталог',
        'categories' : [
            {'name': 'Игрушки'},
            {'name': 'Сумки'},
            {'name': 'Одежда'},
            {'name': 'Брелки'},
            {'name': 'Распродажа'}
        ],
        'goods' : [
        { 'name': 'Вязаный зайчик',
         'description': 'Красивый вязаный зайчик из гипоаллергенной пряжи',
         'price': 2500.00},

        {'name': 'Вязаный зайчик',
         'description': 'Красивый вязаный зайчик из гипоаллергенной пряжи',
         'price': 2500.00},
        {'name': 'Вязаный зайчик',
         'description': 'Красивый вязаный зайчик из гипоаллергенной пряжи',
         'price': 2500.00},
        {'name': 'Вязаный зайчик',
         'description': 'Красивый вязаный зайчик из гипоаллергенной пряжи',
         'price': 2500.00}
        ]
    }

    return render(request, 'goods/catalog.html', context)

def product(request):
    return render(request, 'goods/product.html')
