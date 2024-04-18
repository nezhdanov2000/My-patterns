using System;

public class Kitchen : IObserver
{
    public void Update(Order order)
    {
        Console.WriteLine($"Kitchen: Start cooking order - Order ID: {order.OrderId}");
        // Дополнительная логика для приготовления заказа...

        Console.WriteLine($"Kitchen: Order is ready - Order ID: {order.OrderId}");
        // Дополнительная логика для обработки готовности заказа...
    }
}
