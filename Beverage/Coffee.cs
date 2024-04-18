// Coffee.cs
public class Coffee : Beverage
{
    public Coffee()
    {
        sizeStrategy = new MediumSize(); // По умолчанию, напиток среднего размера
    }

    public override string GetDescription()
    {
        return sizeStrategy.GetSize() + " Coffee";
    }
}
