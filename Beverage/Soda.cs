// Soda.cs
public class Soda : Beverage
{
    public Soda()
    {
        sizeStrategy = new MediumSize(); // По умолчанию, напиток среднего размера
    }

    public override string GetDescription()
    {
        return sizeStrategy.GetSize() + " Soda";
    }
}
