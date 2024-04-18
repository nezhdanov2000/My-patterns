class Program
{
    static void Main(string[] args)
    {
        var restaurantSystem = new RestaurantSystem();

        var waiter1 = new Waiter("Alice");
        var waiter2 = new Waiter("Bob");
        var kitchen = new Kitchen();

        restaurantSystem.RegisterObserver(waiter1);
        restaurantSystem.RegisterObserver(waiter2);
        restaurantSystem.RegisterObserver(kitchen); // Добавляем кухню в список наблюдателей

        var items = new List<string> { "Pizza", "Salad" };
        var order1 = new Order(1, items, "Received");

        restaurantSystem.AddOrder(order1);
    }
}
