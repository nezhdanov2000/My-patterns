// Program.cs
using System;

class Program
{
    static void Main(string[] args)
    {
        Beverage coffee = new Coffee();
        Console.WriteLine(coffee.GetDescription()); // Выведет "Medium Coffee"

        coffee.SetSizeStrategy(new LargeSize());
        Console.WriteLine(coffee.GetDescription()); // Выведет "Large Coffee"

        Beverage tea = new Tea();
        Console.WriteLine(tea.GetDescription()); // Выведет "Medium Tea"

        tea.SetSizeStrategy(new SmallSize());
        Console.WriteLine(tea.GetDescription()); // Выведет "Small Tea"

        Beverage soda = new Soda();
        Console.WriteLine(soda.GetDescription()); // Выведет "Medium Soda"
    }
}
