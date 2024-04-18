using System;

public class Waiter : IObserver
{
    private string Name;

    public Waiter(string name)
    {
        Name = name;
    }

    public void Update(Order order)
    {
        Console.WriteLine($"Waiter {Name}: New order received - Order ID: {order.OrderId}");
        // ƒополнительна€ логика дл€ обработки новых заказов...
    }
}
