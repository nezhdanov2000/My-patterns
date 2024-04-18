// Tea.cs
public class Tea : Beverage
{
    public Tea()
    {
        sizeStrategy = new MediumSize(); // По умолчанию, напиток среднего размера
    }

    public override string GetDescription()
    {
        return sizeStrategy.GetSize() + " Tea";
    }
}
