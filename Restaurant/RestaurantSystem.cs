using System.Collections.Generic;

public class RestaurantSystem : ISubject
{
    private List<IObserver> observers;
    private List<Order> orders;

    public RestaurantSystem()
    {
        observers = new List<IObserver>();
        orders = new List<Order>();
    }

    public void RegisterObserver(IObserver o)
    {
        observers.Add(o);
    }

    public void RemoveObserver(IObserver o)
    {
        observers.Remove(o);
    }

    public void NotifyObservers(Order order)
    {
        foreach (var observer in observers)
        {
            observer.Update(order);
        }
    }

    public void AddOrder(Order order)
    {
        orders.Add(order);
        NotifyObservers(order);
    }
}
